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
