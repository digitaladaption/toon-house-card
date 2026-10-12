// Checks how Home Assistant's weather words are read.
import assert from "node:assert/strict";
import { readWeather, weatherKey, tintTheme, tintKey } from "../src/weather.js";

const hass = (state, sun, temperature = 11.6) => ({ states: { "weather.home": { state, attributes: { temperature } }, ...(sun ? { "sun.sun": { state: sun } } : {}) } });
const cfg = { weather: "weather.home" };

assert.equal(readWeather(hass("rainy", "above_horizon"), {}), null, "no weather option: nothing changes");
assert.equal(readWeather(hass("rainy"), { weather: "weather.other" }), null, "an entity that is not there: nothing changes");
assert.deepEqual(readWeather(hass("rainy", "above_horizon"), cfg), { kind: "rain", night: false, text: "Rain", temp: "12°" });
assert.equal(readWeather(hass("lightning-rainy", "below_horizon"), cfg).kind, "storm");
assert.equal(readWeather(hass("lightning-rainy", "below_horizon"), cfg).night, true, "night comes from the sun");
assert.equal(readWeather(hass("clear-night"), cfg).night, true, "with no sun entity, clear-night still means night");
assert.equal(readWeather(hass("clear-night", "below_horizon"), cfg).text, "Clear night");
assert.equal(readWeather(hass("snowy", "above_horizon", -0.4), cfg).temp, "0°", "temperature is rounded, with no minus nought");
assert.equal(readWeather(hass("unavailable"), cfg), null, "an unknown state leaves the sky alone");
assert.deepEqual(readWeather(null, { weather: "snow-night" }), { kind: "snow", night: true, text: "", temp: null }, "a fixed kind needs no Home Assistant");
assert.equal(weatherKey(null), "");
assert.notEqual(weatherKey(readWeather(hass("rainy", "above_horizon"), cfg)), weatherKey(readWeather(hass("rainy", "below_horizon"), cfg)));

const theme = { lawn: "#0f0", roof: "#f00", glass: "#00f" };
assert.equal(tintTheme(theme, null, false), theme, "no weather: the theme is untouched");
assert.equal(tintTheme(theme, { kind: "rain", night: false }, false).roof, "#f00", "rain does not recolour the house");
assert.notEqual(tintTheme(theme, { kind: "snow", night: false }, false).roof, "#f00", "snow settles on the roof");
assert.notEqual(tintTheme(theme, { kind: "clear", night: true }, true).glass, tintTheme(theme, { kind: "clear", night: true }, false).glass, "windows glow only when a light is on");
assert.equal(tintKey({ kind: "rain", night: false }, true), "", "rain needs no rebuild");
assert.equal(theme.roof, "#f00", "the theme passed in is never changed");
console.log("weather tests passed");
