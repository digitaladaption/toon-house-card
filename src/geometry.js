// Plan geometry: turns rooms and openings (metres) into wall shapes. No three.js in here.
import ClipperLib from "clipper-lib";

const SC = 1000; // work in millimetres
const { ClipType, PolyType, PolyFillType, JoinType, EndType } = ClipperLib;
export const EXT_WALL = 0.24;
export const INT_HALF = 0.06;
export const NORMAL = { n: [0, -1], s: [0, 1], w: [-1, 0], e: [1, 0] };

export function bbox(pts) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of pts) {
    if (x < x0) x0 = x;
    if (y < y0) y0 = y;
    if (x > x1) x1 = x;
    if (y > y1) y1 = y;
  }
  return { x0, y0, x1, y1 };
}
export function roomPoints(r) {
  if (r.points) return r.points;
  if (r.rect) {
    const [x0, y0, x1, y1] = r.rect;
    return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  }
  throw new Error(`Room "${r.name || r.id}" needs "rect" or "points"`);
}
function toPath(pts) {
  const p = pts.map(([x, y]) => ({ X: Math.round(x * SC), Y: Math.round(y * SC) }));
  if (!ClipperLib.Clipper.Orientation(p)) p.reverse();
  return p;
}
const fromPath = (p) => p.map((q) => [q.X / SC, q.Y / SC]);
function rectPath(x0, y0, x1, y1) {
  return toPath([[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
}
function offset(paths, d) {
  const co = new ClipperLib.ClipperOffset(4, 0.25);
  co.AddPaths(paths, JoinType.jtMiter, EndType.etClosedPolygon);
  const out = new ClipperLib.Paths();
  co.Execute(out, d * SC);
  return out;
}
function boolTree(type, subj, clip) {
  const c = new ClipperLib.Clipper();
  c.AddPaths(subj, PolyType.ptSubject, true);
  if (clip && clip.length) c.AddPaths(clip, PolyType.ptClip, true);
  const tree = new ClipperLib.PolyTree();
  c.Execute(type, tree, PolyFillType.pftNonZero, PolyFillType.pftNonZero);
  return tree;
}
function bool(type, subj, clip) {
  return ClipperLib.Clipper.PolyTreeToPaths(boolTree(type, subj, clip));
}
function clean(paths) {
  return ClipperLib.Clipper.CleanPolygons(paths, 2).filter((p) => p.length >= 3 && Math.abs(ClipperLib.Clipper.Area(p)) > 400);
}
function exPolys(tree) {
  return ClipperLib.JS.PolyTreeToExPolygons(tree)
    .map((e) => ({ o: fromPath(e.outer), h: e.holes.map(fromPath) }))
    .filter((e) => e.o.length >= 3);
}
function inPaths(paths, x, y) {
  // even-odd over all rings, so holes count as outside
  let n = 0;
  const pt = { X: Math.round(x * SC), Y: Math.round(y * SC) };
  for (const p of paths) if (ClipperLib.Clipper.PointInPolygon(pt, p) !== 0) n++;
  return n % 2 === 1;
}
export function area(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[(i + 1) % pts.length];
    a += x0 * y1 - x1 * y0;
  }
  return a / 2;
}

// polygons (with holes) for a difference / union, in metres
export function difference(aPolys, bPolys) {
  return exPolys(boolTree(ClipType.ctDifference, aPolys.map((p) => toPath(p)), bPolys.map((p) => toPath(p))));
}
export function unionAll(polys) {
  return exPolys(boolTree(ClipType.ctUnion, polys.map((p) => toPath(p)), []));
}
// a rectangle [0,len] x [0,h] with rectangular cut-outs removed (for one wall face)
export function faceWithCutouts(len, h, cuts) {
  const subj = [rectPath(0, 0, len, h)];
  const clip = cuts.map((c) => rectPath(c.u0, c.v0, c.u1, c.v1));
  return exPolys(boolTree(ClipType.ctDifference, subj, clip));
}

/* Work out the walls of one floor.
   Returns:
     inside   footprint of the floor (paths, for inside/outside tests)
     slab     the floor slab outline (outside face of the outer walls)
     solid    wall material in plan, with only full-height gaps removed
     openings each opening with b (bounds through the wall), n (normal), ext (on an outside wall)
     warnings plain-language problems to show the user */
export function floorWalls(floor) {
  const rooms = floor.rooms.map((r) => ({ room: r, pts: roomPoints(r) }));
  const roomPaths = rooms.map((r) => toPath(r.pts));
  const inside = clean(offset(offset(roomPaths, 0.08), -0.08));
  const outer = clean(offset(inside, EXT_WALL));
  const voids = [];
  for (const p of roomPaths) voids.push(...offset([p], -INT_HALF));
  const solidTree = boolTree(ClipType.ctDifference, outer, voids);
  const solidPaths = ClipperLib.Clipper.PolyTreeToPaths(solidTree);
  const warnings = [], openings = [], gapRects = [];
  for (const o of floor.openings || []) {
    const r = rooms.find((x) => x.room.id === o.room);
    if (!r) {
      warnings.push(`Opening "${o.name || o.kind}" points at room "${o.room}", which does not exist on ${floor.name || floor.id}.`);
      continue;
    }
    const nrm = NORMAL[o.wall];
    if (!nrm) {
      warnings.push(`Opening "${o.name || o.kind}" in ${r.room.name}: "wall" must be n, s, e or w.`);
      continue;
    }
    const b = bbox(r.pts), a = o.at, w = o.width;
    const rect = { n: [a, b.y0 - 0.5, a + w, b.y0 + 0.25], s: [a, b.y1 - 0.25, a + w, b.y1 + 0.5], w: [b.x0 - 0.5, a, b.x0 + 0.25, a + w], e: [b.x1 - 0.25, a, b.x1 + 0.5, a + w] }[o.wall];
    const rp = rectPath(...rect);
    const piece = bool(ClipType.ctIntersection, [rp], solidPaths);
    if (!piece.length) {
      warnings.push(`${o.name || o.kind} in ${r.room.name}: no wall found at ${o.at} m on the ${o.wall} side.`);
      continue;
    }
    // measure the wall thickness on the middle of the opening only, so a wall meeting it at the side does not count
    const horiz = nrm[0] === 0, q = w * 0.3;
    const mid = horiz ? rectPath(rect[0] + q, rect[1], rect[2] - q, rect[3]) : rectPath(rect[0], rect[1] + q, rect[2], rect[3] - q);
    const midPiece = bool(ClipType.ctIntersection, [mid], solidPaths);
    const tb = bbox((midPiece.length ? midPiece : piece).flatMap(fromPath));
    const pb = horiz ? { x0: a, x1: a + w, y0: tb.y0, y1: tb.y1 } : { x0: tb.x0, x1: tb.x1, y0: a, y1: a + w };
    const cx = (pb.x0 + pb.x1) / 2, cy = (pb.y0 + pb.y1) / 2;
    const ext = !inPaths(inside, cx + nrm[0] * 0.45, cy + nrm[1] * 0.45);
    const kind = o.kind || "door";
    if (["window", "bifold", "garage", "frontdoor", "extdoor"].includes(kind) && !ext) warnings.push(`${o.name || kind} in ${r.room.name} is on an inside wall (${o.wall} side). Windows and outside doors need an outside wall.`);
    if (["door", "opening"].includes(kind) && ext) warnings.push(`A plain door in ${r.room.name} (${o.wall} side) opens to the outside. Use kind "extdoor" or "frontdoor" if that is right.`);
    openings.push({ ...o, kind, b: [pb.x0, pb.y0, pb.x1, pb.y1], n: nrm, ext, rect });
    if (kind === "opening") gapRects.push(rp);
  }
  const solid = gapRects.length ? boolTree(ClipType.ctDifference, solidPaths, gapRects) : solidTree;
  return {
    inside, rooms,
    slab: exPolys(boolTree(ClipType.ctUnion, outer, [])),
    solid: exPolys(solid),
    openings, warnings,
    isInside: (x, y) => inPaths(inside, x, y),
    roomAt: (x, y) => {
      for (let i = 0; i < roomPaths.length; i++) if (ClipperLib.Clipper.PointInPolygon({ X: Math.round(x * SC), Y: Math.round(y * SC) }, roomPaths[i]) !== 0) return rooms[i].room;
      return null;
    },
    // the top of the wall material once some openings are cut right through it
    cap: (notched) => (notched.length ? exPolys(boolTree(ClipType.ctDifference, ClipperLib.Clipper.PolyTreeToPaths(solid), notched.map((o) => rectPath(...o.rect)))) : exPolys(solid)),
  };
}

// the part of a lower floor that has no floor above it (for flat roofs), in the lower floor's coordinates
export function uncovered(lowerSlab, upperSlab, upperOffset) {
  const up = upperSlab.map((p) => toPath(p.o.map(([x, y]) => [x + upperOffset[0], y + upperOffset[1]])));
  return exPolys(boolTree(ClipType.ctDifference, lowerSlab.map((p) => toPath(p.o)), offset(up, 0.02)));
}
