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

// ---------- filling a room from its Home Assistant area ----------
const norm2 = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
// the Home Assistant area that is this room, if one has a matching name: { id, name } or null
export function areaForRoom(hass, room) {
  const areas = Object.entries((hass && hass.areas) || {}), want = norm2(room.area);
  if (want) {
    const hit = areas.find(([id, a]) => norm2(id) === want || norm2(a.name) === want);
    if (hit) return { id: hit[0], name: hit[1].name || hit[0] };
  }
  const words = roomWords(room.name);
  let best = null;
  for (const [id, a] of areas) {
    const n = norm2(a.name);
    const score = n === words[0] ? 2 : words.includes(n) ? 1 : 0;
    if (score && (!best || score > best.score)) best = { id, name: a.name || id, score };
  }
  return best ? { id: best.id, name: best.name } : null;
}
// what kind of thing on the plan an entity would be, and whether it is worth adding without being asked
export function kindFor(hass, id) {
  const st = hass.states[id], dom = id.split(".")[0], cls = (st && st.attributes && st.attributes.device_class) || "";
  if (dom === "light") return { kind: "light", sure: true };
  if (dom === "cover") return { kind: "cover", sure: true };
  if (dom === "climate") return { kind: "climate", sure: true };
  if (dom === "lock") return { kind: "lock", sure: true };
  if (dom === "camera") return { kind: "camera", sure: true };
  if (dom === "media_player") return { kind: cls === "tv" || cls === "receiver" ? "tv" : "speaker", sure: true };
  if (dom === "binary_sensor") {
    if (CLASSES.motion.includes(cls)) return { kind: "motion", sure: true };
    if (["door", "window", "opening", "garage_door"].includes(cls)) return { kind: "contact", sure: true };
    return null;
  }
  if (dom === "sensor") return cls === "temperature" || cls === "humidity" ? { kind: "sensor", sure: false } : null;
  if (dom === "switch" || dom === "fan") return { kind: "switch", sure: false };
  return null;
}
/* The things in an area that are not on the plan yet.
   used: { entity id: anything } for the ones already connected. Returns [{ id, name, kind, sure }]. */
export function areaThings(hass, areaId, used = {}) {
  const out = [];
  if (!hass || !hass.states || !areaId) return out;
  for (const id of Object.keys(hass.states)) {
    const reg = (hass.entities || {})[id] || {};
    if (reg.hidden || reg.entity_category || used[id]) continue;
    const area = reg.area_id || ((hass.devices || {})[reg.device_id] || {}).area_id;
    if (area !== areaId) continue;
    const k = kindFor(hass, id);
    if (k) out.push({ id, name: (hass.states[id].attributes || {}).friendly_name || id, ...k });
  }
  const order = ["light", "cover", "climate", "lock", "contact", "motion", "camera", "tv", "speaker", "switch", "sensor"];
  return out.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind) || a.name.localeCompare(b.name));
}
