// Small helpers shared by the card, its editor and the importer.

export function slug(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
// Give every device a lasting id. Links made in the editor are stored against these ids,
// so they must not shift when a device is added or the file is re-saved.
export function nameDevices(layout) {
  const used = new Set(), all = (layout.floors || []).flatMap((f) => f.devices || []);
  for (const d of all) if (d.id) used.add(String(d.id));
  let n = 0;
  for (const d of all) {
    if (d.id) continue;
    const base = slug(d.name) || `${d.kind || "device"}_${++n}`;
    let id = base, k = 2;
    while (used.has(id)) id = `${base}_${k++}`;
    used.add(id);
    d.id = id;
  }
  return layout;
}

const POSITION = ["x", "y", "room", "wall", "at"];
/* Lay the card's own "devices" setting over the house file.
   overlay: { id: {...} | null }. A new id adds a device (it says which floor). An id from the file
   changes that device (a move replaces its whole position). null hides a device from the file.
   File devices are named first, so their ids never shift whatever is added. */
export function applyOverlay(layout, overlay) {
  const floors = layout.floors || [];
  floors.forEach((f, i) => { f.id = f.id || `floor${i}`; });
  nameDevices(layout);
  if (!overlay || typeof overlay !== "object" || Array.isArray(overlay)) return layout;
  for (const [id, entry] of Object.entries(overlay)) {
    let at = null;
    for (const f of floors) {
      const i = (f.devices || []).findIndex((d) => d.id === id);
      if (i >= 0) { at = { f, i }; break; }
    }
    if (entry === null) {
      if (at) at.f.devices.splice(at.i, 1);
      continue;
    }
    if (!entry || typeof entry !== "object") continue;
    const { floor, ...rest } = entry;
    if (at) {
      const cur = at.f.devices[at.i];
      if (POSITION.some((k) => rest[k] != null)) for (const k of POSITION) delete cur[k];
      Object.assign(cur, rest);
      const to = floor && floor !== at.f.id ? floors.find((f) => f.id === floor) : null;
      if (to) { at.f.devices.splice(at.i, 1); (to.devices = to.devices || []).push(cur); }
    } else if (rest.kind) {
      const to = floors.find((f) => f.id === floor) || floors[0];
      if (to) (to.devices = to.devices || []).push({ id, entity: null, ...rest });
    }
  }
  return layout;
}
