// Checks the guessing of which real device belongs to a thing on the plan.
import assert from "node:assert/strict";
import { rank, roomWords, stateText } from "../src/match.js";

const st = (id, name, attributes = {}, state = "on") => ({ entity_id: id, state, attributes: { friendly_name: name, ...attributes } });
const hass = {
  states: Object.fromEntries([
    st("climate.trv_a", "TRV A", { current_temperature: 20 }, "heat"),
    st("climate.kitchen_radiator", "Kitchen radiator", { current_temperature: 19 }, "heat"),
    st("climate.sitting_room", "Sitting room radiator", {}, "heat"),
    st("sensor.lounge_temperature", "Lounge temperature", { device_class: "temperature", unit_of_measurement: "°C" }, "20.1"),
    st("sensor.lounge_trv_battery", "Lounge TRV battery", { device_class: "battery" }, "80"),
    st("sensor.trv_a_signal", "TRV A signal", { device_class: "temperature" }, "1"),
    st("light.bedroom_2", "Bedroom 2 light"), st("light.bedroom_3", "Bedroom 3 light"), st("switch.bedroom_2_lamp", "Bedroom 2 lamp"),
    st("light.secret", "Secret light"),
  ].map((s) => [s.entity_id, s])),
  areas: { a1: { name: "Lounge" } },
  devices: { d1: { area_id: "a1" } },
  entities: { "climate.trv_a": { device_id: "d1" }, "sensor.trv_a_signal": { device_id: "d1", entity_category: "diagnostic" }, "light.secret": { hidden: true } },
};

assert.ok(roomWords("Living room").includes("lounge"), "a living room is also a lounge");
assert.deepEqual(roomWords("Bedroom 2"), ["bedroom 2"], "a numbered bedroom keeps its number");

let r = rank(hass, "climate", "Living room");
assert.equal(r[0].id, "climate.trv_a", "the valve whose device is in the Lounge area comes first");
assert.deepEqual(r.filter((o) => o.guess).map((o) => o.id).sort(), ["climate.sitting_room", "climate.trv_a", "sensor.lounge_temperature"], "guesses are the lounge ones, by area or by name");
assert.ok(!r.some((o) => o.id === "sensor.lounge_trv_battery"), "a battery level is not offered for a radiator");
assert.ok(!r.some((o) => o.id === "sensor.trv_a_signal"), "diagnostic entities are left out");
assert.ok(r.some((o) => o.id === "climate.kitchen_radiator" && !o.guess), "other rooms are still offered, lower down");

r = rank(hass, "light", "Bedroom 2");
assert.deepEqual(r.filter((o) => o.guess).map((o) => o.id), ["light.bedroom_2", "switch.bedroom_2_lamp"], "Bedroom 2 does not guess Bedroom 3, and lights come before switches");
assert.ok(!r.some((o) => o.id === "light.secret"), "hidden entities are left out");

r = rank(hass, "light", "Bedroom 2", { used: { "light.bedroom_2": "Bedside lamp" } });
assert.equal(r[0].id, "switch.bedroom_2_lamp", "one that is already used drops below a free one");
assert.equal(r[1].usedBy, "Bedside lamp");

assert.ok(rank(hass, "climate", "Living room", { wide: true }).some((o) => o.id === "sensor.lounge_trv_battery"), "showing everything brings the rest back");
assert.deepEqual(rank(hass, "climate", "", { query: "kitch" }).map((o) => o.id), ["climate.kitchen_radiator"], "search narrows the list");
assert.equal(stateText(hass.states["climate.trv_a"]), "20°");
assert.equal(stateText(null), "not found");
console.log("match tests passed");

// filling a room from its area
import { areaForRoom, areaThings, kindFor } from "../src/match.js";
const h2 = {
  areas: { lounge: { name: "Lounge" }, bed2: { name: "Bedroom 2" }, bed3: { name: "Bedroom 3" }, kit: { name: "Kitchen diner" } },
  devices: { d9: { area_id: "lounge" } },
  entities: { "light.a": { area_id: "lounge" }, "cover.b": { device_id: "d9" }, "sensor.batt": { area_id: "lounge", entity_category: "diagnostic" }, "sensor.temp": { area_id: "lounge" }, "sensor.power": { area_id: "lounge" }, "binary_sensor.m": { area_id: "lounge" }, "binary_sensor.prob": { area_id: "lounge" }, "switch.plug": { area_id: "lounge" }, "light.used": { area_id: "lounge" }, "light.other": { area_id: "bed2" }, "media_player.tv": { area_id: "lounge" } },
  states: Object.fromEntries([st("light.a", "Lamp"), st("cover.b", "Blind"), st("sensor.batt", "Battery", { device_class: "battery" }), st("sensor.temp", "Temp", { device_class: "temperature" }), st("sensor.power", "Power", { device_class: "power" }), st("binary_sensor.m", "Motion", { device_class: "motion" }), st("binary_sensor.prob", "Problem", { device_class: "problem" }), st("switch.plug", "Plug"), st("light.used", "Used"), st("light.other", "Other"), st("media_player.tv", "Telly", { device_class: "tv" })].map((s) => [s.entity_id, s])),
};
assert.equal(areaForRoom(h2, { name: "Living room" }).id, "lounge", "a living room finds the Lounge area");
assert.equal(areaForRoom(h2, { name: "Bedroom 2" }).id, "bed2", "numbered bedrooms keep their number");
assert.equal(areaForRoom(h2, { name: "Garage" }), null, "no matching area: nothing");
assert.equal(areaForRoom(h2, { name: "Snug", area: "Bedroom 3" }).id, "bed3", "a room can name its area in the house file");
const things = areaThings(h2, "lounge", { "light.used": "x" });
assert.deepEqual(things.map((t) => `${t.id}:${t.kind}:${t.sure ? 1 : 0}`), ["light.a:light:1", "cover.b:cover:1", "binary_sensor.m:motion:1", "media_player.tv:tv:1", "switch.plug:switch:0", "sensor.temp:sensor:0"], "the area's things by kind; used, diagnostic and odd ones left out; plugs and readings offered but not ticked");
assert.equal(kindFor(h2, "sensor.power"), null);
console.log("area tests passed");

// the family faces must be well-formed, or a browser will not draw them as a picture
import { avatar, LOOKS, lookOf } from "../src/people.js";
for (const look of [...LOOKS, { type: "dad", beard: true, glasses: true }, { type: "girl", glasses: true, skin: "brown" }, "nobody"]) {
  const svg = avatar(look, "#fff");
  for (const tag of svg.match(/<[a-zA-Z][^>]*>/g)) {
    const names = [...tag.matchAll(/\s([a-zA-Z-]+)=/g)].map((m) => m[1]);
    assert.equal(new Set(names).size, names.length, `repeated attribute in ${tag.slice(0, 70)}`);
  }
}
assert.equal(lookOf("nobody").type, "dad", "an unknown look falls back to a plain one");
console.log("people tests passed");
