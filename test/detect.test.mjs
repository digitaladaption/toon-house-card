// Draws the example house as an agent-style plan picture, runs the importer's detection on it,
// and checks the rooms, doors and windows come back. Run with: npm test
import assert from "node:assert/strict";
import fs from "node:fs";
import { floorWalls } from "../src/geometry.js";
import { drawPlan, PPM } from "./draw-plan.mjs";
import { wallMask, wallThickness, findFloors, inkMask, detectFloor, toFloor } from "../src/importer/detect.js";

const house = JSON.parse(fs.readFileSync(new URL("../examples/example-house.json", import.meta.url)));

for (const [label, colour] of [["blue walls", [30, 90, 175]], ["black walls", [15, 15, 15]]]) {
  const floor = house.floors[0], plan = drawPlan(floor, colour);
  const wall = wallMask(plan.px, plan.W, plan.H, colour), ink = inkMask(plan.px, plan.W, plan.H), t = wallThickness(wall, plan.W, plan.H);
  const boxes = findFloors(wall, ink, plan.W, plan.H, t, PPM);
  assert.equal(boxes.length, 1, `${label}: one floor outline found`);
  const det = detectFloor(wall, ink, plan.W, plan.H, { box: boxes[0], ppm: PPM, thickness: t });
  const out = toFloor(det);
  assert.equal(out.rooms.length, floor.rooms.length, `${label}: ${floor.rooms.length} rooms found (got ${out.rooms.length})`);
  // every real room matches one found room of about the same size
  const ox = Math.min(...floor.rooms.map((r) => r.rect[0])), oy = Math.min(...floor.rooms.map((r) => r.rect[1]));
  for (const r of floor.rooms) {
    const cx = (r.rect[0] + r.rect[2]) / 2 - ox, cy = (r.rect[1] + r.rect[3]) / 2 - oy;
    const hit = out.rooms.find((q) => cx > q._b.x0 && cx < q._b.x1 && cy > q._b.y0 && cy < q._b.y1);
    assert.ok(hit, `${label}: ${r.name} found`);
    const w = r.rect[2] - r.rect[0], d = r.rect[3] - r.rect[1], gw = hit._b.x1 - hit._b.x0, gd = hit._b.y1 - hit._b.y0;
    assert.ok(Math.abs(gw - w) < 0.2 && Math.abs(gd - d) < 0.2, `${label}: ${r.name} is ${w.toFixed(2)} x ${d.toFixed(2)} m, found ${gw.toFixed(2)} x ${gd.toFixed(2)}`);
  }
  const count = (list, kind) => list.filter((o) => o.kind === kind).length;
  assert.equal(count(out.openings, "window"), count(floor.openings, "window"), `${label}: windows`);
  assert.equal(count(out.openings, "garage"), 1, `${label}: garage door`);
  assert.equal(count(out.openings, "bifold"), 1, `${label}: patio doors`);
  assert.equal(count(out.openings, "extdoor"), 1, `${label}: front door found as an outside door`);
  assert.equal(count(out.openings, "door"), count(floor.openings, "door"), `${label}: inside doors`);
  assert.equal(count(out.openings, "opening"), count(floor.openings, "opening"), `${label}: open gaps`);
  // and the result is a house the card accepts
  const check = floorWalls({ id: "g", name: "Ground", rooms: out.rooms.map(({ _b, _region, _area, ...q }) => q), openings: out.openings.map(({ _gap, ...o }) => o) });
  assert.deepEqual(check.warnings, [], `${label}: the card accepts the result`);
}
console.log("detection ok");
