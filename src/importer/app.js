// Floor plan importer: upload a plan picture, find the rooms, tidy them up, download a house file.
// Everything happens in this browser tab. The picture is never sent anywhere.
import { wallMask, wallThickness, findFloors, inkMask, detectFloor, toFloor, guessNames, cleanFloor } from "./detect.js";

const $ = (id) => document.getElementById(id);
const MAX_SIDE = 2200;
const KIND_COLOUR = { window: "#00c8ff", door: "#ff00c8", opening: "#ff9600", extdoor: "#ff2020", frontdoor: "#7a4fc4", bifold: "#00c800", garage: "#784000" };
const KIND_NAME = { window: "window", door: "inside door", opening: "open gap", extdoor: "outside door", frontdoor: "front door", bifold: "patio doors", garage: "garage door" };
const CYCLE_OUT = ["window", "extdoor", "frontdoor", "bifold", "garage", "none"], CYCLE_IN = ["door", "opening", "none"];
const TOOL_HELP = {
  select: "Click a room to name it or set the scale. Click a door or window to change what it is.",
  colour: "Click on a wall in the picture.",
  wall: "Drag a line where a wall is missing or where one room should be two.",
  merge: "Click two rooms that should be one.",
  remove: "Click a room that is not really a room to remove it.",
  box: "Drag a box round one floor of the plan.",
  measure: "Drag a line along something whose length you know, such as the width of a room. You will be asked for the length.",
};

const S = { source: null, W: 0, H: 0, rgba: null, colour: null, wall: null, ink: null, t: 0, ppm: 0, ppmSet: false, floors: [], tool: "select", sel: null, mergeFirst: null, history: [], house: null };
let canvas, ctx, card, previewTimer;

function status(text, bad) {
  const el = $("status");
  el.textContent = text;
  el.className = bad ? "bad" : "";
}

// ---------- loading the picture ----------
async function loadFile(file) {
  let bmp;
  try {
    bmp = await createImageBitmap(file);
  } catch (e) {
    status("That file could not be opened as a picture. Use a JPG, PNG or WebP (for a PDF, take a screenshot of the plan first).", true);
    return;
  }
  const k = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height)), c = document.createElement("canvas");
  c.width = Math.round(bmp.width * k);
  c.height = Math.round(bmp.height * k);
  c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
  setSource(c);
}
function setSource(c) {
  S.source = c;
  S.W = c.width;
  S.H = c.height;
  S.rgba = c.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, S.W, S.H).data;
  S.ink = inkMask(S.rgba, S.W, S.H);
  S.colour = guessWallColour();
  S.ppmSet = false;
  S.history = [];
  canvas.width = S.W;
  canvas.height = S.H;
  $("empty").style.display = "none";
  $("work").style.display = "";
  analyse();
}
function rotate() {
  if (!S.source) return;
  const c = document.createElement("canvas");
  c.width = S.H;
  c.height = S.W;
  const g = c.getContext("2d");
  g.translate(S.H, 0);
  g.rotate(Math.PI / 2);
  g.drawImage(S.source, 0, 0);
  setSource(c);
}
// walls are usually the most common dark or strongly coloured ink on the plan
function guessWallColour() {
  const count = new Map(), d = S.rgba;
  for (let p = 0; p < d.length; p += 16) {
    const r = d[p], g = d[p + 1], b = d[p + 2], max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (!(max - min > 90 || max < 90)) continue;
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    count.set(key, (count.get(key) || 0) + 1);
  }
  let best = 0x111, n = 0;
  for (const [k, v] of count) if (v > n) { n = v; best = k; }
  return [((best >> 8) & 15) * 16 + 8, ((best >> 4) & 15) * 16 + 8, (best & 15) * 16 + 8];
}

// ---------- detection ----------
function newFloor(box, i) {
  return { box, name: i === 0 ? "Ground" : i === 1 ? "Upstairs" : `Floor ${i}`, virtualWalls: [], openGaps: [], names: [], deleted: [], kinds: [], dx: 0, dy: 0 };
}
function analyse() {
  S.wall = wallMask(S.rgba, S.W, S.H, S.colour, Number($("tolerance").value));
  S.t = wallThickness(S.wall, S.W, S.H);
  let boxes;
  if (S.ppmSet) boxes = findFloors(S.wall, S.ink, S.W, S.H, S.t, S.ppm);
  else {
    // First guess at the scale: most houses are about 10 m across. Wall thickness is a poor guide,
    // because plans draw walls anything from hairline to very thick.
    S.ppm = S.t / 0.27;
    for (let pass = 0; pass < 2; pass++) {
      boxes = findFloors(S.wall, S.ink, S.W, S.H, S.t, S.ppm);
      if (!boxes.length) break;
      S.ppm = Math.max(...boxes.map((b) => Math.max(b.x1 - b.x0, b.y1 - b.y0))) / 11;
    }
    boxes = findFloors(S.wall, S.ink, S.W, S.H, S.t, S.ppm);
  }
  S.floors = boxes.slice(0, 4).map(newFloor);
  S.sel = null;
  $("swatch").style.background = `rgb(${S.colour.join(",")})`;
  redetect();
  if (!S.floors.length) status("No walls found yet. Choose \"Pick wall colour\" and click on a wall in the picture.", true);
  else status(`Found ${S.floors.length} floor${S.floors.length > 1 ? "s" : ""} and ${S.floors.reduce((a, f) => a + f.out.rooms.length, 0)} rooms. Next: click a room and type its size to set the scale, then name the rooms.`);
}
function regionAt(f, x, y) {
  const lx = Math.round(x - f.box.x0), ly = Math.round(y - f.box.y0), d = f.det;
  if (lx < 0 || ly < 0 || lx >= d.bw || ly >= d.bh) return 0;
  return d.lab[ly * d.bw + lx];
}
// a point that is certainly inside a region (its centre can fall outside an L-shaped room)
function seedOf(f, region) {
  const d = f.det, r = d.rooms.find((q) => q.id === region);
  if (!r) return null;
  for (const y of [Math.round(r.cy), r.y0 + 2, r.y1 - 2]) {
    let s = -1;
    for (let x = r.x0; x <= r.x1 + 1; x++) {
      const on = x <= r.x1 && d.lab[y * d.bw + x] === region;
      if (on && s < 0) s = x;
      if (!on && s >= 0) return { x: Math.round((s + x) / 2) + f.box.x0, y: y + f.box.y0 };
    }
  }
  return { x: Math.round(r.cx) + f.box.x0, y: Math.round(r.cy) + f.box.y0 };
}
const gapCentre = (f, g) => (g.horizontal ? { x: (g.a0 + g.a1) / 2 + f.box.x0, y: (g.l0 + g.l1) / 2 + f.box.y0 } : { x: (g.l0 + g.l1) / 2 + f.box.x0, y: (g.a0 + g.a1) / 2 + f.box.y0 });
const near = (p, q, d = 8) => Math.abs(p.x - q.x) <= d && Math.abs(p.y - q.y) <= d;

function redetect() {
  S.floors.forEach((f, i) => {
    f.det = detectFloor(S.wall, S.ink, S.W, S.H, { box: f.box, ppm: S.ppm, thickness: S.t, virtualWalls: f.virtualWalls, openGaps: f.openGaps });
    const names = new Map();
    for (const n of f.names) { const r = regionAt(f, n.x, n.y); if (r) names.set(r, { name: n.name }); }
    const out = guessNames(toFloor(f.det, names), i);
    const gone = new Set(f.deleted.map((p) => regionAt(f, p.x, p.y)).filter(Boolean));
    const dropped = new Set(out.rooms.filter((r) => gone.has(r._region)).map((r) => r.id));
    out.rooms = out.rooms.filter((r) => !dropped.has(r.id));
    out.openings = out.openings.filter((o) => !dropped.has(o.room));
    for (const o of out.openings) {
      const c = gapCentre(f, o._gap), k = f.kinds.find((q) => near(q, c));
      if (k) o.kind = k.kind;
    }
    out.openings = out.openings.filter((o) => o.kind !== "none");
    f.out = out;
    // a tint for each room, drawn over the plan
    const d = f.det, img = new ImageData(d.bw, d.bh), idxOf = new Map(out.rooms.map((r, k) => [r._region, k]));
    for (let p = 0; p < d.bw * d.bh; p++) {
      const k = idxOf.get(d.lab[p]);
      if (k == null) continue;
      img.data[p * 4] = (k * 97 + 60) % 200 + 40;
      img.data[p * 4 + 1] = (k * 57 + 120) % 200 + 40;
      img.data[p * 4 + 2] = (k * 151 + 30) % 200 + 40;
      img.data[p * 4 + 3] = 120;
    }
    const c = document.createElement("canvas");
    c.width = d.bw;
    c.height = d.bh;
    c.getContext("2d").putImageData(img, 0, 0);
    f.tint = c;
  });
  draw();
  panel();
  buildHouse();
}

// ---------- the house file ----------
function buildHouse() {
  const floors = S.floors.filter((f) => f.out && f.out.rooms.length);
  if (!floors.length) { S.house = null; preview(); return; }
  const depth0 = floors[0].out.size[1], lights = $("lights").checked;
  const house = { title: $("title").value || "My house", floors: [] };
  floors.forEach((f, i) => {
    const clean = cleanFloor(f.out), fl = { id: i === 0 ? "ground" : `floor${i}`, name: f.name || `Floor ${i}` };
    if (i > 0) fl.offset = [Math.round(f.dx * 100) / 100, Math.round((depth0 - f.out.size[1] + f.dy) * 100) / 100];
    fl.rooms = clean.rooms;
    fl.openings = clean.openings;
    if (lights) {
      fl.devices = f.out.rooms.filter((r) => r._area > 3).map((r) => {
        const s = seedOf(f, r._region);
        return { name: `${r.name} light`, kind: "light", x: Math.round(((s.x - f.box.x0) / S.ppm - f.out.origin[0]) * 100) / 100, y: Math.round(((s.y - f.box.y0) / S.ppm - f.out.origin[1]) * 100) / 100, entity: null };
      });
    }
    house.floors.push(fl);
  });
  S.house = house;
  preview();
}
function preview() {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    $("export").style.display = S.house ? "" : "none";
    if (!S.house) return;
    if (!card) {
      card = document.createElement("toon-house-card");
      $("preview").appendChild(card);
    }
    card.setConfig({ layout: S.house, height: 420, view: "ground" });
    card.hass = { states: {}, callService() {} };
    window.card = card;
  }, 250);
}
function download() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(S.house, null, 2)], { type: "application/json" }));
  a.download = "house.json";
  a.click();
  status("Saved house.json. Put it in config/www/toon-house/ on Home Assistant and point the card at /local/toon-house/house.json.");
}

// ---------- drawing the plan with what was found ----------
function draw() {
  if (!S.source) return;
  ctx.clearRect(0, 0, S.W, S.H);
  ctx.drawImage(S.source, 0, 0);
  const lw = Math.max(2, S.W / 600);
  S.floors.forEach((f, fi) => {
    if (f.tint) ctx.drawImage(f.tint, f.box.x0, f.box.y0);
    ctx.setLineDash([lw * 4, lw * 3]);
    ctx.lineWidth = lw;
    ctx.strokeStyle = "#1b1b1b";
    ctx.strokeRect(f.box.x0, f.box.y0, f.box.x1 - f.box.x0, f.box.y1 - f.box.y0);
    ctx.setLineDash([]);
    ctx.font = `800 ${Math.round(lw * 9)}px system-ui, sans-serif`;
    ctx.fillStyle = "#1b1b1b";
    ctx.fillText(f.name, f.box.x0 + 4, f.box.y0 - 6);
    if (!f.out) return;
    for (const o of f.out.openings) {
      const g = o._gap, pad = g.virtual ? 0 : 1;
      ctx.fillStyle = KIND_COLOUR[o.kind] || "#888";
      if (g.horizontal) ctx.fillRect(g.a0 + f.box.x0, g.l0 + f.box.y0 - pad, g.a1 - g.a0, g.l1 - g.l0 + 1 + 2 * pad);
      else ctx.fillRect(g.l0 + f.box.x0 - pad, g.a0 + f.box.y0, g.l1 - g.l0 + 1 + 2 * pad, g.a1 - g.a0);
    }
    ctx.strokeStyle = "#ff9600";
    ctx.lineWidth = lw * 1.5;
    for (const v of f.virtualWalls) { ctx.beginPath(); ctx.moveTo(v.x0, v.y0); ctx.lineTo(v.x1, v.y1); ctx.stroke(); }
    ctx.textAlign = "center";
    ctx.font = `800 ${Math.round(lw * 7)}px system-ui, sans-serif`;
    for (const r of f.out.rooms) {
      const s = seedOf(f, r._region), picked = S.sel && S.sel.fi === fi && regionAt(f, S.sel.x, S.sel.y) === r._region;
      if (!s) continue;
      ctx.lineWidth = lw * 2;
      ctx.strokeStyle = "#fff";
      ctx.strokeText(r.name, s.x, s.y);
      ctx.fillStyle = picked ? "#c2185b" : "#1b1b1b";
      ctx.fillText(r.name, s.x, s.y);
      if (picked) {
        const q = f.det.rooms.find((x) => x.id === r._region);
        ctx.strokeStyle = "#c2185b";
        ctx.lineWidth = lw * 1.5;
        ctx.strokeRect(q.x0 + f.box.x0, q.y0 + f.box.y0, q.x1 - q.x0, q.y1 - q.y0);
      }
    }
    ctx.textAlign = "left";
  });
  if (S.drag) {
    ctx.strokeStyle = "#c2185b";
    ctx.lineWidth = lw * 1.5;
    if (S.tool === "box") ctx.strokeRect(S.drag.x0, S.drag.y0, S.drag.x1 - S.drag.x0, S.drag.y1 - S.drag.y0);
    else { ctx.beginPath(); ctx.moveTo(S.drag.x0, S.drag.y0); ctx.lineTo(S.drag.x1, S.drag.y1); ctx.stroke(); }
  }
}

// ---------- the side panel ----------
function selectedRoom() {
  if (!S.sel) return null;
  const f = S.floors[S.sel.fi];
  if (!f || !f.out) return null;
  const region = regionAt(f, S.sel.x, S.sel.y), room = f.out.rooms.find((r) => r._region === region);
  return room ? { f, room, region, box: f.det.rooms.find((q) => q.id === region) } : null;
}
function panel() {
  const fl = $("floors");
  fl.innerHTML = "";
  S.floors.forEach((f, i) => {
    const row = document.createElement("div");
    row.className = "floor";
    const n = f.out ? f.out.rooms.length : 0, size = f.out && n ? `${f.out.size[0].toFixed(1)} x ${f.out.size[1].toFixed(1)} m` : "";
    row.innerHTML = `<input class="fname" value="${f.name.replace(/"/g, "&quot;")}" aria-label="Floor name"><span>${n} rooms ${size}</span>
      ${i > 0 ? `<label>shift right <input class="dx" type="number" step="0.1" value="${f.dx}"></label><label>shift forward <input class="dy" type="number" step="0.1" value="${f.dy}"></label><button class="up" title="Move this floor down a storey">Make lower</button>` : ""}
      <button class="del" title="Remove this floor">Remove</button>`;
    row.querySelector(".fname").onchange = (e) => { f.name = e.target.value; draw(); buildHouse(); };
    if (i > 0) {
      row.querySelector(".dx").onchange = (e) => { f.dx = Number(e.target.value) || 0; buildHouse(); };
      row.querySelector(".dy").onchange = (e) => { f.dy = Number(e.target.value) || 0; buildHouse(); };
      row.querySelector(".up").onclick = () => { remember(); [S.floors[i - 1], S.floors[i]] = [S.floors[i], S.floors[i - 1]]; S.sel = null; redetect(); };
    }
    row.querySelector(".del").onclick = () => { remember(); S.floors.splice(i, 1); S.sel = null; redetect(); };
    fl.appendChild(row);
  });
  const sel = selectedRoom(), box = $("room");
  box.style.display = sel ? "" : "none";
  if (sel) {
    $("rname").value = sel.room.name;
    $("rsize").textContent = `Found as ${((sel.box.x1 - sel.box.x0 + 1) / S.ppm).toFixed(2)} m across by ${((sel.box.y1 - sel.box.y0 + 1) / S.ppm).toFixed(2)} m down${S.ppmSet ? "" : " (scale is a guess until you set it)"}.`;
  }
  $("scale").textContent = S.ppmSet ? `Scale set: ${S.ppm.toFixed(1)} pixels per metre.` : "Scale is a guess (assuming the house is about 10 m across) until you set it.";
}

// ---------- editing ----------
function remember() {
  S.history.push(JSON.stringify({ ppm: S.ppm, ppmSet: S.ppmSet, floors: S.floors.map(({ det, out, tint, ...f }) => f) }));
  if (S.history.length > 40) S.history.shift();
}
function undo() {
  const h = S.history.pop();
  if (!h) { status("Nothing to undo."); return; }
  const v = JSON.parse(h);
  S.ppm = v.ppm;
  S.ppmSet = v.ppmSet;
  S.floors = v.floors;
  S.sel = null;
  redetect();
  status("Undone.");
}
function floorAt(p) {
  return S.floors.findIndex((f) => p.x >= f.box.x0 && p.x <= f.box.x1 && p.y >= f.box.y0 && p.y <= f.box.y1);
}
function toPicture(e) {
  const r = canvas.getBoundingClientRect();
  return { x: ((e.clientX - r.left) / r.width) * S.W, y: ((e.clientY - r.top) / r.height) * S.H };
}
function click(p) {
  if (S.tool === "colour") {
    const x = Math.round(p.x), y = Math.round(p.y), i = (y * S.W + x) * 4;
    S.colour = [S.rgba[i], S.rgba[i + 1], S.rgba[i + 2]];
    setTool("select");
    analyse();
    return;
  }
  const fi = floorAt(p);
  if (fi < 0) { status("Click inside one of the dashed boxes."); return; }
  const f = S.floors[fi], region = regionAt(f, p.x, p.y), room = f.out.rooms.find((r) => r._region === region);
  if (S.tool === "select") {
    const hit = f.out.openings.concat(hiddenOpenings(f)).find((o) => {
      const g = o._gap, x = p.x - f.box.x0, y = p.y - f.box.y0, a = g.horizontal ? x : y, l = g.horizontal ? y : x;
      return a >= g.a0 - 2 && a <= g.a1 + 2 && l >= g.l0 - 6 && l <= g.l1 + 6;
    });
    if (hit && !hit._gap.virtual) {
      remember();
      const c = gapCentre(f, hit._gap), list = hit._gap.ext ? CYCLE_OUT : CYCLE_IN, next = list[(list.indexOf(hit.kind) + 1) % list.length];
      f.kinds = f.kinds.filter((q) => !near(q, c));
      f.kinds.push({ x: c.x, y: c.y, kind: next });
      redetect();
      status(next === "none" ? "Removed. Click the same spot again to bring it back." : `Changed to: ${KIND_NAME[next]}.`);
      return;
    }
    S.sel = room ? { fi, ...seedOf(f, region) } : null;
    draw();
    panel();
    if (room) $("rname").focus();
    return;
  }
  if (!room) { status("That is not a room. Click on a coloured area."); return; }
  if (S.tool === "remove") {
    remember();
    f.deleted.push(seedOf(f, region));
    S.sel = null;
    redetect();
    status(`Removed ${room.name}.`);
  } else if (S.tool === "merge") {
    if (!S.mergeFirst || S.mergeFirst.fi !== fi) { S.mergeFirst = { fi, region, name: room.name }; status(`${room.name} picked. Now click the room to join it to.`); return; }
    const a = S.mergeFirst.region, between = f.det.gaps.filter((g) => (g.a === a && g.b === region) || (g.b === a && g.a === region));
    S.mergeFirst = null;
    if (a === region) { status("Pick two different rooms."); return; }
    if (!between.length) { status("Those two rooms do not share a door or gap, so they cannot be joined.", true); return; }
    remember();
    for (const g of between) {
      if (g.virtual) f.virtualWalls = f.virtualWalls.filter((v) => !near({ x: (v.x0 + v.x1) / 2, y: (v.y0 + v.y1) / 2 }, gapCentre(f, g), 6));
      else f.openGaps.push(gapCentre(f, g));
    }
    redetect();
    status("Joined.");
  }
}
// openings the user has switched off, so they can be clicked back on
function hiddenOpenings(f) {
  return f.det.gaps.filter((g) => f.kinds.some((k) => k.kind === "none" && near(k, gapCentre(f, g)))).map((g) => ({ kind: "none", _gap: g }));
}
function dragEnd(d) {
  const p0 = { x: d.x0, y: d.y0 }, long = Math.hypot(d.x1 - d.x0, d.y1 - d.y0);
  if (S.tool === "box") {
    if (Math.abs(d.x1 - d.x0) < 3 * S.ppm || Math.abs(d.y1 - d.y0) < 3 * S.ppm) { status("Drag a bigger box, right round the floor."); return; }
    remember();
    const box = { x0: Math.round(Math.max(0, Math.min(d.x0, d.x1))), y0: Math.round(Math.max(0, Math.min(d.y0, d.y1))), x1: Math.round(Math.min(S.W - 1, Math.max(d.x0, d.x1))), y1: Math.round(Math.min(S.H - 1, Math.max(d.y0, d.y1))) };
    // a new box replaces any floor it mostly covers
    S.floors = S.floors.filter((f) => !(f.box.x0 >= box.x0 - 10 && f.box.x1 <= box.x1 + 10 && f.box.y0 >= box.y0 - 10 && f.box.y1 <= box.y1 + 10));
    S.floors.push(newFloor(box, S.floors.length));
    S.floors.sort((a, b) => a.box.x0 - b.box.x0 || a.box.y0 - b.box.y0);
    S.floors.forEach((f, i) => { if (/^(Ground|Upstairs|Floor \d+)$/.test(f.name)) f.name = newFloor(f.box, i).name; });
    setTool("select");
    redetect();
    status("Floor added.");
  } else if (S.tool === "measure") {
    if (long < 20) { status("Drag a longer line."); return; }
    const m = parseFloat(window.prompt("How long is that line in metres?", ""));
    if (!(m > 0.2)) { status("No length given, so the scale is unchanged."); return; }
    remember();
    S.ppm = long / m;
    S.ppmSet = true;
    setTool("select");
    redetect();
    status(`Scale set: that line is ${m} m.`);
  } else if (S.tool === "wall") {
    const fi = floorAt(p0);
    if (fi < 0 || long < 0.3 * S.ppm) { status("Drag a line across the room, inside a dashed box."); return; }
    remember();
    const horizontal = Math.abs(d.x1 - d.x0) >= Math.abs(d.y1 - d.y0);
    // stretch each end to the nearest real wall, so a line drawn a little short still closes the room off
    const reach = (x, y, dx, dy) => {
      for (let k = 0; k <= S.ppm; k++) {
        const px = Math.round(x + dx * k), py = Math.round(y + dy * k);
        if (px < 0 || py < 0 || px >= S.W || py >= S.H) break;
        if (S.wall[py * S.W + px]) return k + 2;
      }
      return 0;
    };
    let v;
    if (horizontal) {
      const xa = Math.min(d.x0, d.x1), xb = Math.max(d.x0, d.x1), y = Math.round(d.y0);
      v = { x0: xa - reach(xa, y, -1, 0), y0: y, x1: xb + reach(xb, y, 1, 0), y1: y };
    } else {
      const ya = Math.min(d.y0, d.y1), yb = Math.max(d.y0, d.y1), x = Math.round(d.x0);
      v = { x0: x, y0: ya - reach(x, ya, 0, -1), x1: x, y1: yb + reach(x, yb, 0, 1) };
    }
    S.floors[fi].virtualWalls.push(v);
    redetect();
    status("Wall added. The two sides stay open to each other, like an open-plan room.");
  }
}
function setTool(t) {
  S.tool = t;
  S.mergeFirst = null;
  document.querySelectorAll("button[data-tool]").forEach((b) => b.classList.toggle("on", b.dataset.tool === t));
  canvas.style.cursor = t === "select" ? "pointer" : "crosshair";
  if (S.source) status(TOOL_HELP[t]);
}

// ---------- wiring ----------
window.addEventListener("DOMContentLoaded", () => {
  canvas = $("plan");
  ctx = canvas.getContext("2d");
  $("file").onchange = (e) => e.target.files[0] && loadFile(e.target.files[0]);
  const drop = document.body;
  drop.addEventListener("dragover", (e) => e.preventDefault());
  drop.addEventListener("drop", (e) => { e.preventDefault(); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });
  document.querySelectorAll("button[data-tool]").forEach((b) => (b.onclick = () => setTool(b.dataset.tool)));
  $("rotate").onclick = rotate;
  $("undo").onclick = undo;
  $("tolerance").onchange = () => S.source && analyse();
  $("title").onchange = buildHouse;
  $("lights").onchange = buildHouse;
  $("download").onclick = download;
  $("copy").onclick = async () => {
    const yaml = "type: custom:toon-house-card\nlayout: /local/toon-house/house.json\n";
    try { await navigator.clipboard.writeText(yaml); status("Card settings copied. Paste them into a new card on your dashboard."); } catch (e) { status(yaml); }
  };
  $("rname").onchange = (e) => {
    const s = selectedRoom();
    if (!s) return;
    remember();
    s.f.names = s.f.names.filter((n) => regionAt(s.f, n.x, n.y) !== s.region);
    s.f.names.push({ x: S.sel.x, y: S.sel.y, name: e.target.value.trim() || s.room.name });
    redetect();
  };
  $("setscale").onclick = () => {
    const s = selectedRoom(), w = parseFloat($("sw").value), d = parseFloat($("sd").value);
    if (!s) return;
    const got = [];
    if (w > 0.3) got.push((s.box.x1 - s.box.x0 + 1) / w);
    if (d > 0.3) got.push((s.box.y1 - s.box.y0 + 1) / d);
    if (!got.length) { status("Type the room's size in metres, as printed on the plan. One of the two numbers is enough.", true); return; }
    if (got.length === 2 && Math.abs(got[0] - got[1]) / got[0] > 0.2) { status("Those two numbers do not fit this room's shape. Check them, or swap across and down.", true); return; }
    remember();
    S.ppm = got.reduce((a, b) => a + b, 0) / got.length;
    S.ppmSet = true;
    redetect();
    status(`Scale set from ${s.room.name}. Sizes of all rooms now follow it.`);
  };
  canvas.addEventListener("pointerdown", (e) => {
    if (!S.source) return;
    const p = toPicture(e);
    S.down = p;
    if (S.tool === "wall" || S.tool === "box" || S.tool === "measure") { S.drag = { x0: p.x, y0: p.y, x1: p.x, y1: p.y }; canvas.setPointerCapture(e.pointerId); }
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!S.drag) return;
    const p = toPicture(e);
    S.drag.x1 = p.x;
    S.drag.y1 = p.y;
    if (S.tool === "wall" || S.tool === "measure") { if (Math.abs(p.x - S.drag.x0) >= Math.abs(p.y - S.drag.y0)) S.drag.y1 = S.drag.y0; else S.drag.x1 = S.drag.x0; }
    draw();
  });
  canvas.addEventListener("pointerup", (e) => {
    if (!S.source || !S.down) return;
    const d = S.drag;
    S.drag = null;
    S.down = null;
    if (d) { dragEnd(d); draw(); } else click(toPicture(e));
  });
  setTool("select");
  // lets the test (or a curious user) load a picture from an address: ?plan=...
  const q = new URLSearchParams(location.search).get("plan");
  if (q) fetch(q).then((r) => r.blob()).then(loadFile);
  window.importer = S;
});
