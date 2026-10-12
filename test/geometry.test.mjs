// Checks the wall maths on the example house. Run with: npm test
import assert from "node:assert/strict";
import fs from "node:fs";
import { floorWalls, area } from "../src/geometry.js";

const house = JSON.parse(fs.readFileSync(new URL("../examples/example-house.json", import.meta.url)));
const outside = new Set(["window", "bifold", "garage", "frontdoor", "extdoor"]);
for (const floor of house.floors) {
  const w = floorWalls(floor);
  assert.deepEqual(w.warnings, [], `${floor.name}: no warnings`);
  assert.equal(w.openings.length, floor.openings.length, `${floor.name}: every opening found a wall`);
  for (const o of w.openings) {
    assert.equal(o.ext, outside.has(o.kind), `${floor.name}: ${o.room} ${o.wall} ${o.kind} is on the ${outside.has(o.kind) ? "outside" : "inside"}`);
    const thick = o.n[0] === 0 ? o.b[3] - o.b[1] : o.b[2] - o.b[0];
    assert.ok(thick > 0.1 && thick < 0.32, `${floor.name}: ${o.room} ${o.wall} wall thickness ${thick.toFixed(2)} m`);
  }
  assert.equal(w.slab.length, 1, `${floor.name}: one footprint`);
  assert.ok(Math.abs(area(w.slab[0].o)) > 80, `${floor.name}: footprint area`);
  for (const d of floor.devices || []) {
    if (d.kind !== "cover" || !d.wall) continue;
    assert.ok(w.openings.some((o) => o.room === d.room && o.wall === d.wall && o.at <= d.at && d.at <= o.at + o.width), `${d.name} sits on a window or door`);
  }
}
// a window on an inside wall must be reported
const bad = JSON.parse(JSON.stringify(house.floors[0]));
bad.openings.push({ room: "hall", wall: "n", at: 4.4, width: 0.6, kind: "window", name: "Wrong window" });
assert.ok(floorWalls(bad).warnings.some((x) => x.includes("Wrong window")), "inside window is reported");
console.log("geometry ok");
