// Finds walls, rooms, doors and windows in a floor plan picture.
// Pure functions on pixel arrays, so the same code runs in the browser and in tests.
import ClipperLib from "clipper-lib";

const idx = (W, x, y) => y * W + x;

// pixels close to the picked wall colour
export function wallMask(rgba, W, H, colour, tolerance = 110) {
  const m = new Uint8Array(W * H), [r, g, b] = colour;
  for (let i = 0, p = 0; i < W * H; i++, p += 4) {
    if (Math.abs(rgba[p] - r) + Math.abs(rgba[p + 1] - g) + Math.abs(rgba[p + 2] - b) < tolerance) m[i] = 1;
  }
  return despeckle(m, W, H);
}
// remove thin lines and specks (text edges, furniture outlines) but keep walls at their full width:
// shrink by one pixel, then grow back
function despeckle(m, W, H) {
  const small = new Uint8Array(W * H), out = new Uint8Array(W * H);
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const i = idx(W, x, y);
      if (m[i] && m[i - 1] && m[i + 1] && m[i - W] && m[i + W] && m[i - W - 1] && m[i - W + 1] && m[i + W - 1] && m[i + W + 1]) small[i] = 1;
    }
  }
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const i = idx(W, x, y);
      if (!small[i]) continue;
      out[i] = out[i - 1] = out[i + 1] = out[i - W] = out[i + W] = out[i - W - 1] = out[i - W + 1] = out[i + W - 1] = out[i + W + 1] = 1;
    }
  }
  return out;
}

// connected regions of a mask (4-neighbour). Returns labels (0 = none) and a list of regions.
export function label(mask, W, H) {
  const lab = new Int32Array(W * H), regions = [], stack = [];
  let n = 0;
  for (let s = 0; s < W * H; s++) {
    if (!mask[s] || lab[s]) continue;
    n++;
    let area = 0, x0 = W, y0 = H, x1 = 0, y1 = 0, sx = 0, sy = 0;
    stack.push(s);
    lab[s] = n;
    while (stack.length) {
      const i = stack.pop(), x = i % W, y = (i - x) / W;
      area++; sx += x; sy += y;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
      if (x > 0 && mask[i - 1] && !lab[i - 1]) { lab[i - 1] = n; stack.push(i - 1); }
      if (x < W - 1 && mask[i + 1] && !lab[i + 1]) { lab[i + 1] = n; stack.push(i + 1); }
      if (y > 0 && mask[i - W] && !lab[i - W]) { lab[i - W] = n; stack.push(i - W); }
      if (y < H - 1 && mask[i + W] && !lab[i + W]) { lab[i + W] = n; stack.push(i + W); }
    }
    regions.push({ id: n, area, x0, y0, x1, y1, cx: sx / area, cy: sy / area });
  }
  return { lab, regions };
}

// typical thickness of the thick (outside) walls, in pixels: the common length of short runs across walls
export function wallThickness(mask, W, H) {
  const hist = new Uint32Array(200);
  const scan = (len, at) => {
    let run = 0;
    for (let i = 0; i <= len; i++) {
      if (i < len && at(i)) run++;
      else { if (run >= 3 && run < 200) hist[run]++; run = 0; }
    }
  };
  for (let y = 0; y < H; y += 2) scan(W, (x) => mask[idx(W, x, y)]);
  for (let x = 0; x < W; x += 2) scan(H, (y) => mask[idx(W, x, y)]);
  // runs across a wall are short and very common; take the thickest common value
  let peak = 0;
  for (let i = 3; i < 200; i++) if (hist[i] > peak) peak = hist[i];
  let t = 3;
  for (let i = 3; i < 200; i++) if (hist[i] >= peak * 0.25) t = i;
  return t;
}

/* Join wall ends that face each other along the line of a wall (doors, windows, openings).
   Two parallel walls either side of a corridor are never joined: at least one side must be a wall
   running in this direction (a long run). A wide gap needs more proof: wall on both sides, or
   something drawn across it (window lines, a dashed garage door).
   opts: maxGap, doorGap, minLong (pixels). Returns the closed mask and the gaps that were bridged. */
export function bridgeGaps(mask, ink, W, H, opts) {
  const { maxGap, doorGap, minLong } = opts, out = Uint8Array.from(mask), gaps = [];
  for (const horizontal of [true, false]) {
    const N = horizontal ? H : W, L = horizontal ? W : H;
    const at = horizontal ? (a, line) => mask[idx(W, a, line)] : (a, line) => mask[idx(W, line, a)];
    const inkAt = horizontal ? (a, line) => ink[idx(W, a, line)] : (a, line) => ink[idx(W, line, a)];
    const raw = [];
    for (let line = 0; line < N; line++) {
      let prevEnd = -1, prevLen = 0, a = 0;
      while (a < L) {
        if (!at(a, line)) { a++; continue; }
        const start = a;
        while (a < L && at(a, line)) a++;
        const len = a - start;
        if (len < 3) continue;
        if (prevEnd >= 0) {
          const gap = start - prevEnd;
          if (gap >= 4 && gap <= maxGap && Math.max(len, prevLen) >= minLong) raw.push({ line, a0: prevEnd, a1: start, both: Math.min(len, prevLen) >= minLong ? 1 : 0 });
        }
        prevEnd = a;
        prevLen = len;
      }
    }
    // neighbouring lines of the same gap make one band
    raw.sort((p, q) => p.a0 - q.a0 || p.a1 - q.a1 || p.line - q.line);
    const used = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) {
      if (used[i]) continue;
      const g = { horizontal, a0: raw[i].a0, a1: raw[i].a1, l0: raw[i].line, l1: raw[i].line, n: 1, both: raw[i].both };
      used[i] = 1;
      let grew = true;
      while (grew) {
        grew = false;
        for (let j = i + 1; j < raw.length; j++) {
          const c = raw[j];
          if (c.a0 > g.a0 + 4) break;
          if (used[j]) continue;
          if (Math.abs(c.a1 - g.a1) <= 4 && c.line >= g.l0 - 2 && c.line <= g.l1 + 2) {
            g.l0 = Math.min(g.l0, c.line);
            g.l1 = Math.max(g.l1, c.line);
            g.n++;
            g.both += c.both;
            used[j] = 1;
            grew = true;
          }
        }
      }
      if (g.l1 - g.l0 < 2) continue;
      // how much is drawn across the gap: the best single line, as a share of the gap
      let drawn = 0, dashes = 0;
      for (let l = Math.max(0, g.l0 - 3); l <= Math.min(N - 1, g.l1 + 3); l++) {
        let n = 0, flips = 0, prev = 0;
        for (let k = g.a0; k < g.a1; k++) { const v = inkAt(k, l) && !at(k, l) ? 1 : 0; n += v; if (v !== prev) flips++; prev = v; }
        if (n / (g.a1 - g.a0) > drawn) { drawn = n / (g.a1 - g.a0); dashes = flips; }
      }
      g.drawn = drawn;
      g.dashes = dashes;
      const wide = g.a1 - g.a0 > doorGap;
      if (wide && g.both < g.n * 0.5 && drawn < 0.4) continue;
      for (let l = g.l0; l <= g.l1; l++) for (let k = g.a0; k < g.a1; k++) out[horizontal ? idx(W, k, l) : idx(W, l, k)] = 1;
      gaps.push(g);
    }
  }
  return { mask: out, gaps };
}

// fill everything that cannot be reached from the edge of the picture
export function fillInside(mask, W, H) {
  const outside = new Uint8Array(W * H), stack = [];
  const push = (i) => { if (!mask[i] && !outside[i]) { outside[i] = 1; stack.push(i); } };
  for (let x = 0; x < W; x++) { push(idx(W, x, 0)); push(idx(W, x, H - 1)); }
  for (let y = 0; y < H; y++) { push(idx(W, 0, y)); push(idx(W, W - 1, y)); }
  while (stack.length) {
    const i = stack.pop(), x = i % W;
    if (x > 0) push(i - 1);
    if (x < W - 1) push(i + 1);
    if (i >= W) push(i - W);
    if (i < W * (H - 1)) push(i + W);
  }
  const inside = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) inside[i] = outside[i] ? 0 : 1;
  return inside;
}

// boxes round each separate building outline in the picture (one per floor on a typical agent plan).
// Windows break a floor's walls into pieces, so pieces are grouped when a window joins them or they nearly touch.
export function findFloors(mask, ink, W, H, thickness, ppm) {
  const { lab, regions } = label(mask, W, H), reach = thickness, parent = new Map(), box = new Map();
  const find = (i) => { while (parent.get(i) !== i) { parent.set(i, parent.get(parent.get(i))); i = parent.get(i); } return i; };
  const join = (i, j) => {
    i = find(i); j = find(j);
    if (i === j) return;
    const p = box.get(i), q = box.get(j);
    parent.set(j, i);
    box.set(i, { x0: Math.min(p.x0, q.x0), y0: Math.min(p.y0, q.y0), x1: Math.max(p.x1, q.x1), y1: Math.max(p.y1, q.y1) });
  };
  for (const g of regions) {
    if (g.area < thickness * thickness * 0.5) continue;
    parent.set(g.id, g.id);
    box.set(g.id, { x0: g.x0, y0: g.y0, x1: g.x1, y1: g.y1 });
  }
  // a window (lines drawn right across the gap) joins the wall pieces either side of it
  const { gaps } = bridgeGaps(mask, ink, W, H, { maxGap: Math.round(3.3 * ppm), doorGap: Math.round(1.3 * ppm), minLong: Math.max(thickness * 1.5, 0.4 * ppm) });
  for (const g of gaps) {
    if (g.drawn < 0.85) continue;
    const l = Math.round((g.l0 + g.l1) / 2), a = g.horizontal ? lab[idx(W, g.a0 - 1, l)] : lab[idx(W, l, g.a0 - 1)], b = g.horizontal ? lab[idx(W, g.a1, l)] : lab[idx(W, l, g.a1)];
    if (parent.has(a) && parent.has(b)) join(a, b);
  }
  let merged = true;
  while (merged) {
    merged = false;
    const roots = [...new Set([...parent.keys()].map(find))];
    for (let i = 0; i < roots.length && !merged; i++) {
      for (let j = i + 1; j < roots.length; j++) {
        const p = box.get(roots[i]), q = box.get(roots[j]);
        if (p.x0 - reach <= q.x1 + reach && q.x0 - reach <= p.x1 + reach && p.y0 - reach <= q.y1 + reach && q.y0 - reach <= p.y1 + reach) { join(roots[i], roots[j]); merged = true; break; }
      }
    }
  }
  const pad = Math.round(thickness * 0.5);
  return [...new Set([...parent.keys()].map(find))].map((r) => box.get(r)).filter((g) => g.x1 - g.x0 > 3 * ppm && g.y1 - g.y0 > 3 * ppm)
    .map((g) => ({ x0: Math.max(0, g.x0 - pad), y0: Math.max(0, g.y0 - pad), x1: Math.min(W - 1, g.x1 + pad), y1: Math.min(H - 1, g.y1 + pad) }))
    .sort((p, q) => p.x0 - q.x0 || p.y0 - q.y0);
}

// 1 where the picture has "ink" (anything clearly not paper), used to tell windows from doors
export function inkMask(rgba, W, H) {
  const m = new Uint8Array(W * H);
  for (let i = 0, p = 0; i < W * H; i++, p += 4) if (rgba[p] + rgba[p + 1] + rgba[p + 2] < 640) m[i] = 1;
  return m;
}

/* Detect one floor inside a box of the picture.
   opts: box {x0,y0,x1,y1}, ppm (pixels per metre), thickness (px), virtualWalls [{x0,y0,x1,y1}] in picture pixels.
   Returns pixel-space results; toFloor() turns them into the card's rooms and openings. */
export function detectFloor(wall, ink, W, H, opts) {
  const { box, ppm, thickness } = opts, bw = box.x1 - box.x0 + 1, bh = box.y1 - box.y0 + 1;
  const m = new Uint8Array(bw * bh), k = new Uint8Array(bw * bh);
  for (let y = 0; y < bh; y++) for (let x = 0; x < bw; x++) { m[idx(bw, x, y)] = wall[idx(W, x + box.x0, y + box.y0)]; k[idx(bw, x, y)] = ink[idx(W, x + box.x0, y + box.y0)]; }
  // walls the user drew to split a room count as walls, but not as wall ends to bridge from
  const virt = new Uint8Array(bw * bh), half = Math.max(1, Math.round(thickness * 0.2));
  for (const v of opts.virtualWalls || []) {
    const ax0 = Math.round(Math.min(v.x0, v.x1) - box.x0), ax1 = Math.round(Math.max(v.x0, v.x1) - box.x0), ay0 = Math.round(Math.min(v.y0, v.y1) - box.y0), ay1 = Math.round(Math.max(v.y0, v.y1) - box.y0);
    for (let y = Math.max(0, ay0 - half); y <= Math.min(bh - 1, ay1 + half); y++) for (let x = Math.max(0, ax0 - half); x <= Math.min(bw - 1, ax1 + half); x++) virt[idx(bw, x, y)] = 1;
  }
  const closed = bridgeGaps(m, k, bw, bh, { maxGap: Math.round(3.3 * ppm), doorGap: Math.round(1.3 * ppm), minLong: Math.max(thickness * 1.4, 0.35 * ppm) });
  for (const g of closed.gaps) {
    for (const p of opts.openGaps || []) {
      const x = p.x - box.x0, y = p.y - box.y0, a = g.horizontal ? x : y, l = g.horizontal ? y : x;
      if (a >= g.a0 - 3 && a <= g.a1 + 3 && l >= g.l0 - 6 && l <= g.l1 + 6) g.reopened = true;
    }
    if (g.reopened) for (let l = g.l0; l <= g.l1; l++) for (let a = g.a0; a < g.a1; a++) { const i = g.horizontal ? idx(bw, a, l) : idx(bw, l, a); if (!m[i]) closed.mask[i] = 0; }
  }
  const inside = fillInside(closed.mask, bw, bh);
  const free = new Uint8Array(bw * bh);
  for (let i = 0; i < bw * bh; i++) free[i] = inside[i] && !closed.mask[i] && !virt[i] ? 1 : 0;
  const minArea = 0.7 * ppm * ppm;
  let { lab, regions } = label(free, bw, bh);
  // how much is drawn in the squares either side of a gap: a door leaf and its swing leave ink there
  const swing = (g) => {
    const w = g.a1 - g.a0;
    let n = 0;
    for (const sign of [-1, 1]) {
      for (let d = 2; d <= w; d++) {
        const line = sign < 0 ? g.l0 - d : g.l1 + d;
        for (let a = g.a0; a < g.a1; a++) {
          const x = g.horizontal ? a : line, y = g.horizontal ? line : a;
          if (x >= 0 && y >= 0 && x < bw && y < bh && k[idx(bw, x, y)] && !m[idx(bw, x, y)]) n++;
        }
      }
    }
    return n / w;
  };
  for (const g of closed.gaps) g.swing = swing(g);
  // Tiny regions (door recesses, bits of corridor) are joined to a neighbour instead of leaving a hole.
  // Two tiny regions side by side join each other first; a lone one joins through the gap with the least
  // drawn in it (an open way rather than a door).
  for (let round = 0; round < 4; round++) {
    const tiny = new Set(regions.filter((r) => r.area < minArea && r.area > 0.1 * ppm * ppm).map((r) => r.id));
    if (!tiny.size) break;
    const side = (g, sign) => {
      const mid = Math.round((g.a0 + g.a1) / 2);
      for (let d = 1; d <= thickness * 2.5 + 4; d++) {
        const line = sign < 0 ? g.l0 - d : g.l1 + d, x = g.horizontal ? mid : line, y = g.horizontal ? line : mid;
        if (x < 0 || y < 0 || x >= bw || y >= bh || !inside[idx(bw, x, y)]) return -1;
        if (lab[idx(bw, x, y)]) return lab[idx(bw, x, y)];
      }
      return 0;
    };
    const pairs = [], best = new Map();
    for (const g of closed.gaps) {
      if (g.reopened) continue;
      const A = side(g, -1), B = side(g, 1);
      if (A <= 0 || B <= 0 || A === B) continue;
      if (tiny.has(A) && tiny.has(B)) pairs.push(g);
      for (const t of [A, B]) if (tiny.has(t) && (!best.has(t) || g.swing < best.get(t).swing)) best.set(t, g);
    }
    const open = pairs.length ? pairs : [...new Set(best.values())];
    if (!open.length) break;
    for (const g of open) {
      for (let l = g.l0; l <= g.l1; l++) for (let a = g.a0; a < g.a1; a++) { const i = g.horizontal ? idx(bw, a, l) : idx(bw, l, a); if (!m[i]) free[i] = 1; }
      g.reopened = true;
    }
    ({ lab, regions } = label(free, bw, bh));
  }
  const rooms = regions.filter((r) => r.area >= minArea && r.x1 - r.x0 > 0.6 * ppm && r.y1 - r.y0 > 0.6 * ppm);
  const keep = new Set(rooms.map((r) => r.id));
  // describe each gap: which rooms it joins, outside or not, window or door
  const roomAt = (x, y) => (x < 0 || y < 0 || x >= bw || y >= bh ? 0 : keep.has(lab[idx(bw, x, y)]) ? lab[idx(bw, x, y)] : 0);
  const insideAt = (x, y) => (x < 0 || y < 0 || x >= bw || y >= bh ? 0 : inside[idx(bw, x, y)]);
  const probe = (g, sign) => {
    // look outward from the gap band until a room or the outside is met
    const mid = Math.round((g.a0 + g.a1) / 2);
    for (let d = 1; d <= thickness * 2.5 + 4; d++) {
      const line = sign < 0 ? g.l0 - d : g.l1 + d, x = g.horizontal ? mid : line, y = g.horizontal ? line : mid;
      if (!insideAt(x, y)) return { outside: true };
      const r = roomAt(x, y);
      if (r) return { room: r };
    }
    return {};
  };
  const gaps = [];
  for (const g of closed.gaps) {
    if (g.reopened || g.l1 - g.l0 < 3) continue;
    const A = probe(g, -1), B = probe(g, 1);
    if (!A.room && !B.room) continue;
    if (A.room && B.room && A.room === B.room) continue;
    const ext = !!(A.outside || B.outside) || !(A.room && B.room);
    // a window has lines drawn right across the gap; a door is empty or has only its swing
    const lines = g.drawn >= 0.85 ? 1 : 0;
    const width = (g.a1 - g.a0) / ppm;
    let kind;
    if (ext) kind = lines >= 1 && width >= 0.35 ? "window" : width > 2.0 && g.dashes >= 6 ? "garage" : width > 1.25 ? "bifold" : "extdoor";
    else kind = width > 1.75 || g.swing < 1.2 ? "opening" : "door";
    gaps.push({ ...g, a: A.room || 0, b: B.room || 0, ext, kind, width });
  }
  for (const v of opts.virtualWalls || []) {
    const horizontal = Math.abs(v.x1 - v.x0) >= Math.abs(v.y1 - v.y0);
    const a0 = Math.round((horizontal ? Math.min(v.x0, v.x1) - box.x0 : Math.min(v.y0, v.y1) - box.y0)), a1 = Math.round((horizontal ? Math.max(v.x0, v.x1) - box.x0 : Math.max(v.y0, v.y1) - box.y0));
    const lc = Math.round(horizontal ? v.y0 - box.y0 : v.x0 - box.x0), g = { horizontal, a0, a1, l0: lc - half, l1: lc + half, virtual: true };
    const A = probe(g, -1), B = probe(g, 1);
    if (A.room && B.room && A.room !== B.room) gaps.push({ ...g, a: A.room, b: B.room, ext: false, kind: "opening", width: (a1 - a0) / ppm });
  }
  return { box, bw, bh, lab, rooms, gaps, inside, ppm, thickness };
}

// a region as right-angled outline(s): rows with the same extent are grouped into rectangles and joined up
function regionPolygon(lab, bw, bh, r, snap) {
  const rects = [];
  let cur = null;
  const same = (a, b) => a.length === b.length && a.every((v, i) => Math.abs(v[0] - b[i][0]) <= snap && Math.abs(v[1] - b[i][1]) <= snap);
  for (let y = r.y0; y <= r.y1 + 1; y++) {
    const runs = [];
    if (y <= r.y1) {
      let x = r.x0;
      while (x <= r.x1) {
        if (lab[idx(bw, x, y)] !== r.id) { x++; continue; }
        const s = x;
        while (x <= r.x1 && lab[idx(bw, x, y)] === r.id) x++;
        if (x - s > snap) runs.push([s, x]);
      }
    }
    if (cur && same(cur.runs, runs)) { cur.y1 = y + 1; cur.n++; cur.sum = cur.sum.map((v, i) => [v[0] + runs[i][0], v[1] + runs[i][1]]); continue; }
    if (cur) rects.push(cur);
    cur = runs.length ? { y0: y, y1: y + 1, runs, n: 1, sum: runs.map((v) => [v[0], v[1]]) } : null;
  }
  // thin slabs are noise from door swings and text; fold them into the taller slab next to them
  const slabs = rects.filter((s) => s.y1 - s.y0 > snap);
  for (let i = 0; i < slabs.length - 1; i++) slabs[i].y1 = slabs[i + 1].y0;
  if (slabs.length) { slabs[0].y0 = r.y0; slabs[slabs.length - 1].y1 = r.y1 + 1; }
  const out = [];
  for (const s of slabs) s.runs.forEach((_, i) => out.push([s.sum[i][0] / s.n, s.y0, s.sum[i][1] / s.n, s.y1]));
  return out;
}

// group nearly equal numbers and return a function that maps each to its group's middle
function snapper(values, link) {
  const sorted = [...new Set(values)].sort((a, b) => a - b), map = new Map();
  let group = [];
  const flush = () => {
    if (!group.length) return;
    const mid = Math.round(((group[0] + group[group.length - 1]) / 2) * 20) / 20;
    for (const v of group) map.set(v, mid);
    group = [];
  };
  for (const v of sorted) {
    if (group.length && (v - group[group.length - 1] > link || v - group[0] > link * 1.6)) flush();
    group.push(v);
  }
  flush();
  return (v) => map.get(v);
}

/* Turn a detected floor into the card's rooms and openings, in metres.
   names: Map of region id -> {name, type}. Returns { rooms, openings, size: [w, d], origin } */
export function toFloor(det, names = new Map()) {
  const { ppm, lab, bw, bh } = det, snapPx = Math.max(2, Math.round(0.07 * ppm));
  const raw = det.rooms.map((r) => ({ r, rects: regionPolygon(lab, bw, bh, r, snapPx).map((q) => q.map((v) => v / ppm)) })).filter((x) => x.rects.length);
  // neighbouring rooms must share the same number for a shared wall, so snap edges that are a wall's width apart
  const link = Math.max(0.2, (det.thickness / ppm) * 1.25);
  const sx = snapper(raw.flatMap((x) => x.rects.flatMap((q) => [q[0], q[2]])), link), sy = snapper(raw.flatMap((x) => x.rects.flatMap((q) => [q[1], q[3]])), link);
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const x of raw) {
    x.rects = x.rects.map((q) => [sx(q[0]), sy(q[1]), sx(q[2]), sy(q[3])]).filter((q) => q[2] - q[0] > 0.05 && q[3] - q[1] > 0.05);
    for (const q of x.rects) { minX = Math.min(minX, q[0]); minY = Math.min(minY, q[1]); maxX = Math.max(maxX, q[2]); maxY = Math.max(maxY, q[3]); }
  }
  const fix = (v) => Math.round(v * 100) / 100;
  const rooms = [], byRegion = new Map();
  let n = 0;
  for (const x of raw) {
    if (!x.rects.length) continue;
    const rects = x.rects.map((q) => [fix(q[0] - minX), fix(q[1] - minY), fix(q[2] - minX), fix(q[3] - minY)]);
    const meta = names.get(x.r.id) || {}, id = `r${++n}`;
    const room = { id, name: meta.name || `Room ${n}` };
    if (meta.type) room.type = meta.type;
    if (rects.length === 1) room.rect = rects[0];
    else {
      const c = new ClipperLib.Clipper(), S = 1000;
      c.AddPaths(rects.map((q) => [{ X: q[0] * S, Y: q[1] * S }, { X: q[2] * S, Y: q[1] * S }, { X: q[2] * S, Y: q[3] * S }, { X: q[0] * S, Y: q[3] * S }].map((p) => ({ X: Math.round(p.X), Y: Math.round(p.Y) }))), ClipperLib.PolyType.ptSubject, true);
      const sol = new ClipperLib.Paths();
      c.Execute(ClipperLib.ClipType.ctUnion, sol, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
      const best = ClipperLib.Clipper.CleanPolygons(sol, 2).sort((p, q) => Math.abs(ClipperLib.Clipper.Area(q)) - Math.abs(ClipperLib.Clipper.Area(p)))[0];
      if (!best) continue;
      const pts = best.map((p) => [p.X / S, p.Y / S]);
      if (pts.length === 4) room.rect = [Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))];
      else room.points = pts;
    }
    const pts = room.rect ? [[room.rect[0], room.rect[1]], [room.rect[2], room.rect[3]]] : room.points;
    room._b = { x0: Math.min(...pts.map((p) => p[0])), y0: Math.min(...pts.map((p) => p[1])), x1: Math.max(...pts.map((p) => p[0])), y1: Math.max(...pts.map((p) => p[1])) };
    room._region = x.r.id;
    room._area = x.r.area / (ppm * ppm);
    rooms.push(room);
    byRegion.set(x.r.id, room);
  }
  // openings: say which room's wall each gap is in
  const openings = [];
  for (const g of det.gaps) {
    const a0 = fix(g.a0 / ppm - (g.horizontal ? minX : minY)), width = fix(g.width), linePos = (g.l0 + g.l1) / 2 / ppm - (g.horizontal ? minY : minX);
    const tryRoom = (room, wall) => {
      if (!room) return null;
      const b = room._b, edge = { n: b.y0, s: b.y1, w: b.x0, e: b.x1 }[wall], lo = g.horizontal ? b.x0 : b.y0, hi = g.horizontal ? b.x1 : b.y1;
      if (Math.abs(edge - linePos) > 0.45) return null;
      const at = Math.max(lo + 0.02, a0), w = Math.min(hi - 0.02, a0 + width) - at;
      if (w < Math.min(0.4, width * 0.6)) return null;
      return { room: room.id, wall, at: fix(at), width: fix(w), kind: g.kind };
    };
    // side a is before the gap band (above or left), side b after it (below or right)
    const o = tryRoom(byRegion.get(g.b), g.horizontal ? "n" : "w") || tryRoom(byRegion.get(g.a), g.horizontal ? "s" : "e");
    if (o) openings.push({ ...o, _gap: g });
  }
  return { rooms, openings, size: [fix(maxX - minX), fix(maxY - minY)], origin: [minX, minY] };
}

// a first guess at what each room is, from its size and position, until the user names it
export function guessNames(floor, floorIndex) {
  const big = [...floor.rooms].sort((a, b) => b._area - a._area);
  let bed = 0, other = 0;
  for (const r of floor.rooms) {
    if (r.name && !/^Room \d+$/.test(r.name)) continue;
    const garage = floor.openings.some((o) => o.room === r.id && o.kind === "garage");
    const doors = floor.openings.filter((o) => !["window"].includes(o.kind) && (o.room === r.id)).length;
    if (garage) r.name = "Garage";
    else if (r._area < 2.6) r.name = floorIndex === 0 ? "WC" : "Store";
    else if (r._area < 6.5) r.name = floorIndex === 0 ? "Utility" : "Bathroom";
    else if (floorIndex === 0) r.name = r === big[0] ? "Living room" : r === big[1] ? "Kitchen" : doors >= 3 ? "Hall" : `Room ${++other}`;
    else r.name = doors >= 3 && r._area < 14 ? "Landing" : `Bedroom ${++bed}`;
  }
  return floor;
}

// strip the working fields before the floor goes into a house file
export function cleanFloor(floor) {
  return {
    rooms: floor.rooms.map(({ _b, _region, _area, ...r }) => r),
    openings: floor.openings.map(({ _gap, ...o }) => o),
  };
}
