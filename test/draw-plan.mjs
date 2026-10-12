// Draws one floor of a house file as an agent-style plan picture (RGBA pixels). Used by the tests
// and to make examples/example-plan.png.
import { floorWalls } from "../src/geometry.js";

export const PPM = 60, MARGIN = 50;

// a plan picture: solid walls in one colour, windows as lines across the gap, doors as a gap with a leaf
export function drawPlan(floor, wallColour) {
  const w = floorWalls(JSON.parse(JSON.stringify(floor))), all = w.slab[0].o;
  const minX = Math.min(...all.map((p) => p[0])), minY = Math.min(...all.map((p) => p[1])), maxX = Math.max(...all.map((p) => p[0])), maxY = Math.max(...all.map((p) => p[1]));
  const W = Math.round((maxX - minX) * PPM) + 2 * MARGIN, H = Math.round((maxY - minY) * PPM) + 2 * MARGIN, px = new Uint8Array(W * H * 4).fill(255);
  const X = (x) => (x - minX) * PPM + MARGIN, Y = (y) => (y - minY) * PPM + MARGIN;
  const set = (x, y, c) => { if (x < 0 || y < 0 || x >= W || y >= H) return; const p = (y * W + x) * 4; px[p] = c[0]; px[p + 1] = c[1]; px[p + 2] = c[2]; };
  const inRing = (ring, x, y) => { let c = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const [xi, yi] = ring[i], [xj, yj] = ring[j]; if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; };
  for (const poly of w.solid) {
    const rings = [poly.o, ...poly.h].map((r) => r.map(([x, y]) => [X(x), Y(y)]));
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let n = 0; for (const r of rings) if (inRing(r, x + 0.5, y + 0.5)) n++; if (n % 2) set(x, y, wallColour); }
  }
  const grey = [90, 90, 90];
  for (const o of w.openings) {
    const [bx0, by0, bx1, by1] = o.b, x0 = Math.round(X(bx0)), y0 = Math.round(Y(by0)), x1 = Math.round(X(bx1)), y1 = Math.round(Y(by1)), horiz = o.n[0] === 0;
    if (o.kind !== "opening") for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) set(x, y, [255, 255, 255]);
    if (o.kind === "window") {
      for (const f of [0.35, 0.65]) {
        if (horiz) { const y = Math.round(y0 + (y1 - y0) * f); for (let x = x0; x < x1; x++) { set(x, y, grey); set(x, y + 1, grey); } } else { const x = Math.round(x0 + (x1 - x0) * f); for (let y = y0; y < y1; y++) { set(x, y, grey); set(x + 1, y, grey); } }
      }
    } else if (o.kind === "bifold") {
      // a pair of door leaves standing open outwards, one at each end
      const len = Math.round((horiz ? x1 - x0 : y1 - y0) / 2);
      for (let k = 0; k < len; k++) for (let t = 0; t < 3; t++) { if (horiz) { set(x0 + t, o.n[1] < 0 ? y0 - k : y1 + k, grey); set(x1 - 1 - t, o.n[1] < 0 ? y0 - k : y1 + k, grey); } else { set(o.n[0] < 0 ? x0 - k : x1 + k, y0 + t, grey); set(o.n[0] < 0 ? x0 - k : x1 + k, y1 - 1 - t, grey); } }
    } else if (o.kind === "garage") {
      for (let x = x0; x < x1; x++) if (Math.floor((x - x0) / 8) % 2 === 0) { set(x, y1 - 2, grey); set(x, y1 - 3, grey); }
    } else if (o.kind !== "opening") {
      // the door leaf, standing open into the room
      const len = horiz ? x1 - x0 : y1 - y0;
      for (let k = 0; k < len; k++) for (let t = 0; t < 3; t++) { if (horiz) set(x0 + t, (o.n[1] > 0 ? y0 - k : y1 + k), grey); else set((o.n[0] > 0 ? x0 - k : x1 + k), y0 + t, grey); }
    }
  }
  return { px, W, H, minX, minY, truth: w };
}

