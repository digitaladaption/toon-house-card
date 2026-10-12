// Which Home Assistant entities suit a device on the plan, best guesses first. No drawing in here, so it can be tested alone.

// which kinds of Home Assistant entity suit each kind of device
export const DOMAINS = {
  light: ["light", "switch", "input_boolean"], switch: ["switch", "input_boolean", "light", "fan"], cover: ["cover", "input_number"],
  climate: ["climate", "sensor", "input_number"], lock: ["lock"], motion: ["binary_sensor"], contact: ["binary_sensor"],
  camera: ["camera"], speaker: ["media_player"], tv: ["media_player"], sensor: ["sensor", "binary_sensor"],
};
// the sensor classes that fit a kind best
const CLASSES = {
  climate: ["temperature"], motion: ["motion", "occupancy", "presence", "moving"],
  contact: ["door", "window", "opening", "garage_door", "lock"], tv: ["tv", "receiver"], speaker: ["speaker"],
};
// different words people use for the same room
const SAME = [
  ["living room", "living", "lounge", "sitting room", "front room", "family room"], ["kitchen", "diner"], ["dining room", "dining", "diner"],
  ["hall", "hallway", "entrance", "porch"], ["landing", "upstairs hall"], ["bathroom", "bath", "shower room"], ["ensuite", "en suite"],
  ["wc", "toilet", "cloakroom", "loo"], ["office", "study"], ["utility", "utility room", "laundry"],
  ["main bedroom", "master bedroom", "master", "bedroom 1"], ["nursery", "baby"], ["garage"], ["conservatory", "sun room", "garden room"],
];
const SKIP = new Set(["unavailable", "unknown"]);

const norm = (s) => ` ${String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()} `;
const has = (text, phrase) => text.includes(` ${phrase} `);

// every way of saying this room's name
export function roomWords(name) {
  const n = norm(name), plain = n.trim();
  if (!plain) return [];
  const out = new Set([plain]);
  for (const group of SAME) if (group.some((w) => has(n, w))) group.forEach((w) => out.add(w));
  // only whole names are kept, so "Bedroom 2" never matches things in "Bedroom 3"
  return [...out];
}

export function areaOf(hass, id) {
  const reg = (hass.entities || {})[id];
  if (!reg) return "";
  const area = reg.area_id || ((hass.devices || {})[reg.device_id] || {}).area_id;
  return area ? ((hass.areas || {})[area] || {}).name || "" : "";
}

// a short, friendly reading of an entity's state
export function stateText(st) {
  if (!st) return "not found";
  const a = st.attributes || {}, dom = st.entity_id ? st.entity_id.split(".")[0] : "";
  if (SKIP.has(st.state)) return "not answering";
  if (dom === "climate") return a.current_temperature != null ? `${a.current_temperature}°` : st.state;
  if (dom === "cover") return a.current_position != null ? `${a.current_position}% open` : st.state;
  return `${st.state}${a.unit_of_measurement ? ` ${a.unit_of_measurement}` : ""}`;
}

/* The entities that could be this device, best first.
   wide: offer every kind of entity, not only the usual ones for this kind of device.
   used: { entity id: name of the thing on the plan that already uses it } */
export function rank(hass, kind, room, { wide = false, query = "", used = {} } = {}) {
  if (!hass || !hass.states) return [];
  const doms = DOMAINS[kind] || DOMAINS.sensor, classes = CLASSES[kind] || [], words = roomWords(room), q = norm(query).trim();
  const out = [];
  for (const id of Object.keys(hass.states)) {
    const st = hass.states[id], dom = id.split(".")[0], a = st.attributes || {}, reg = (hass.entities || {})[id] || {};
    if (reg.hidden) continue;
    if (!wide) {
      if (!doms.includes(dom) || reg.entity_category) continue;
      // a radiator can show a temperature sensor, but not a battery level
      if (kind === "climate" && dom === "sensor" && a.device_class !== "temperature") continue;
    }
    const name = a.friendly_name || id, area = areaOf(hass, id), text = norm(`${name} ${id.split(".")[1]}`), areaText = norm(area);
    if (q && !`${text}${areaText}`.includes(q)) continue;
    let near = 0;
    for (const w of words) {
      if (has(areaText, w)) near = Math.max(near, 3);
      else if (has(text, w)) near = Math.max(near, 2);
    }
    let fit = dom === doms[0] ? 2 : 0;
    if (classes.includes(a.device_class)) fit += 1;
    out.push({ id, name, area, near, fit, guess: near > 0, usedBy: used[id] || "" });
  }
  out.sort((x, y) => y.near - x.near || (x.usedBy ? 1 : 0) - (y.usedBy ? 1 : 0) || y.fit - x.fit || x.name.localeCompare(y.name));
  return out;
}
