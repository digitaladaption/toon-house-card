/* Weather for the house: the sky, the light, rain, snow, fog, lightning and night.
   It reads a Home Assistant weather entity (and the sun), and draws what is happening outside. */
import * as T from "three";

// Home Assistant's weather words, sorted into what we can draw
const KINDS = {
  sunny: "clear", "clear-night": "clear", partlycloudy: "partly", cloudy: "cloudy", windy: "partly", "windy-variant": "cloudy",
  fog: "fog", rainy: "rain", pouring: "pour", hail: "pour", lightning: "storm", "lightning-rainy": "storm",
  snowy: "snow", "snowy-rainy": "sleet", exceptional: "cloudy",
};
const WORDS = { clear: "Sunny", partly: "Some cloud", cloudy: "Cloudy", fog: "Foggy", rain: "Rain", pour: "Heavy rain", storm: "Thunder", snow: "Snow", sleet: "Sleet" };
// sky colour, cloud colour, sky light, sun light, how many extra clouds
const LOOK = {
  clear: [null, "#FFFFFF", 1.55, 2.1, 0], partly: [null, "#FFFFFF", 1.55, 1.9, 3], cloudy: ["#A9C4D6", "#E6EBF0", 1.5, 1.4, 7],
  fog: ["#C9D2D8", "#E3E8EC", 1.55, 1.0, 5], rain: ["#8FA6B8", "#B3BEC9", 1.4, 1.1, 7], pour: ["#74899B", "#8E9AA7", 1.3, 0.9, 8],
  storm: ["#5F7385", "#77828F", 1.2, 0.8, 8], snow: ["#C4D4E3", "#EEF2F6", 1.6, 1.3, 7], sleet: ["#A3B6C6", "#C6CFD8", 1.45, 1.1, 7],
};
const NIGHT_SKY = { clear: "#1B2A57", partly: "#1D2A52" }, NIGHT_SKY_DULL = "#252D42", NIGHT_CLOUD = "#56628A";

/* What the weather is, from Home Assistant.
   config.weather: a weather entity, or one of the kinds above to fix it (handy for trying it out).
   Night comes from the sun entity, or from the weather saying "clear-night". */
export function readWeather(hass, config) {
  const src = config && config.weather;
  if (!src) return null;
  const fixed = typeof src === "string" && !src.includes(".") ? src.split("-") : null;
  if (fixed) return LOOK[fixed[0]] ? { kind: fixed[0], night: fixed[1] === "night", text: "", temp: null } : null;
  const st = hass && hass.states && hass.states[src];
  if (!st || !KINDS[st.state]) return null;
  const sun = hass.states[(config && config.sun) || "sun.sun"], a = st.attributes || {};
  const night = sun ? sun.state === "below_horizon" : st.state === "clear-night";
  const kind = KINDS[st.state], temp = typeof a.temperature === "number" ? `${Math.round(a.temperature)}°` : null;
  return { kind, night, text: night && kind === "clear" ? "Clear night" : WORDS[kind], temp };
}
export const weatherKey = (w) => (w ? `${w.kind}|${w.night ? 1 : 0}` : "");

// how the weather changes the house's own colours (snow lies on the roof and the lawn; windows glow at night)
export function tintTheme(theme, w, lightsOn) {
  if (!w) return theme;
  const out = { ...theme };
  if (w.kind === "snow") Object.assign(out, { lawn: "#F6F9FF", lawn2: "#E6EDF6", roof: "#F8FAFF", roof2: "#DCE5EF", hedge: "#DDEBDD", drive: "#E9EBF2", drive2: "#DADDE8", path: "#F1F2F5", patio: "#EEF0F4", patio2: "#DFE3EA" });
  if (w.night) out.glass = lightsOn ? "#FFD75E" : "#3C4C7A";
  return out;
}
export const tintKey = (w, lightsOn) => (w ? `${w.kind === "snow" ? "s" : ""}${w.night ? (lightsOn ? "n1" : "n0") : ""}` : "");

function sprite(draw) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  draw(c.getContext("2d"));
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  return t;
}
const DROP = (g) => { g.lineCap = "round"; g.strokeStyle = "#2B4A6B"; g.lineWidth = 9; g.beginPath(); g.moveTo(38, 8); g.lineTo(26, 56); g.stroke(); g.strokeStyle = "#CDEBFF"; g.lineWidth = 5; g.stroke(); };
const FLAKE = (g) => { g.fillStyle = "#fff"; g.strokeStyle = "#5C6F86"; g.lineWidth = 5; g.beginPath(); g.arc(32, 32, 22, 0, 7); g.fill(); g.stroke(); };
const STAR = (g) => { g.fillStyle = "#FFF6C2"; g.beginPath(); for (let i = 0; i < 8; i++) { const r = i % 2 ? 9 : 28, a = (i * Math.PI) / 4; g.lineTo(32 + r * Math.sin(a), 32 - r * Math.cos(a)); } g.fill(); };

export class Weather {
  /* box: { cx, cz, far } the middle of the plot and how far it reaches. outlined(geometry, material, grow) makes an inked shape. */
  constructor(scene, hemi, sun, outlined) {
    this.scene = scene;
    this.hemi = hemi;
    this.sun = sun;
    this.outlined = outlined;
    this.group = new T.Group();
    scene.add(this.group);
    this.still = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  // true while something is falling or flashing, so the card keeps drawing
  get moving() {
    return !this.still && !!(this.fall || this.flashAt);
  }
  _empty() {
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); }
    });
    this.group.clear();
    this.fall = null;
    this.flashAt = 0;
    this.lit = this.flashed = false;
  }
  dispose() {
    this._empty();
    this.scene.remove(this.group);
    this.scene.fog = null;
  }
  _points(n, size, draw, spread, top, colour) {
    const pos = new Float32Array(n * 3), { cx, cz } = this.box;
    for (let i = 0; i < n; i++) { pos[i * 3] = cx + (Math.random() - 0.5) * spread; pos[i * 3 + 1] = Math.random() * top; pos[i * 3 + 2] = cz + (Math.random() - 0.5) * spread; }
    const g = new T.BufferGeometry();
    g.setAttribute("position", new T.BufferAttribute(pos, 3));
    const m = new T.PointsMaterial({ size, map: sprite(draw), transparent: true, alphaTest: 0.25, depthWrite: false, fog: false, color: colour || 0xffffff });
    const p = new T.Points(g, m);
    p.frustumCulled = false;
    this.group.add(p);
    return p;
  }
  /* Set the scene for this weather. w: from readWeather (null = a plain sunny day).
     ctx: { theme, box, whole (the outside view, where rain and snow fall), low (light detail: fewer of everything), clouds (materials), sunBall, dist (camera distance) } */
  apply(w, ctx) {
    this._empty();
    this.box = ctx.box;
    const C = ctx.theme, kind = w ? w.kind : "clear", night = !!(w && w.night), L = LOOK[kind], dull = L[4] >= 5;
    const sky = night ? (dull ? NIGHT_SKY_DULL : NIGHT_SKY[kind]) : L[0] || C.sky, cloud = night ? NIGHT_CLOUD : L[1] === "#FFFFFF" ? C.cloud : L[1];
    this.sky = new T.Color(sky);
    this.scene.background = this.sky.clone();
    this.hemi.intensity = this.hemiBase = L[2] * (night ? 0.62 : 1);
    this.sun.intensity = L[3] * (night ? 0.42 : 1);
    this.hemi.color.set(night ? "#A9B8FF" : "#FFFFFF");
    this.sun.color.set(night ? "#B9C6FF" : "#FFFFFF");
    for (const m of ctx.clouds || []) m.color.set(cloud);
    if (ctx.sunBall) ctx.sunBall.visible = !dull && kind !== "fog";
    if (ctx.sunMat) ctx.sunMat.color.set(night ? "#F6F2CF" : C.sun);
    const { cx, cz, far } = ctx.box;
    // more cloud, lower and nearer, when the sky is grey
    const spots = [[-0.2, 11, 0.1, 2.4], [0.7, 12.5, -0.7, 2.1], [-1.2, 11.5, -0.9, 2.2], [0.1, 13.5, -1.5, 2.6], [1.4, 11, 0.4, 1.8], [-0.7, 13, 0.9, 2.0], [0.9, 14, 1.0, 2.3], [-1.6, 12, 0.3, 1.9]];
    const few = ctx.low ? 0.5 : 1;
    if (ctx.whole) for (const [fx, y, fz, s] of spots.slice(0, Math.ceil(L[4] * few))) {
      for (const [dx, dy, dz, r] of [[0, 0, 0, 1], [1.1, -0.15, 0.1, 0.75], [-1.1, -0.2, 0, 0.7], [0.3, 0.45, -0.1, 0.7]]) {
        const puff = this.outlined(new T.SphereGeometry(r * s, 16, 10), new T.MeshBasicMaterial({ color: cloud }), 0.09);
        puff.position.set(cx + fx * far * 0.55 + dx * s, y + dy * s, cz + fz * far * 0.5 + dz * s);
        puff.scale.y = 0.65;
        this.group.add(puff);
      }
    }
    if (night && !dull && ctx.whole) {
      // stars all round, above and below: the plot floats in the night sky
      const n = ctx.low ? 140 : 320, pos = new Float32Array(n * 3), R = far * 4;
      for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, e = -0.75 + Math.random() * 1.7; pos[i * 3] = cx + R * Math.cos(e) * Math.cos(a); pos[i * 3 + 1] = R * Math.sin(e); pos[i * 3 + 2] = cz + R * Math.cos(e) * Math.sin(a); }
      const g = new T.BufferGeometry();
      g.setAttribute("position", new T.BufferAttribute(pos, 3));
      const p = new T.Points(g, new T.PointsMaterial({ size: 13, sizeAttenuation: false, map: sprite(STAR), transparent: true, alphaTest: 0.2, depthWrite: false, fog: false }));
      p.frustumCulled = false;
      this.group.add(p);
    }
    this.mist = kind === "fog" ? [0.55, 1.9] : ["rain", "pour", "storm", "snow", "sleet"].includes(kind) ? [0.9, 4] : null;
    this.scene.fog = this.mist ? new T.Fog(sky, 1, 2) : null;
    this.range(ctx.dist || far * 3);
    if (ctx.whole) {
      const spread = far * 1.5, top = 17;
      if (["rain", "pour", "storm", "sleet"].includes(kind)) this.fall = [{ p: this._points((kind === "rain" || kind === "sleet" ? 520 : 1000) * few, 1.5, DROP, spread, top), speed: kind === "rain" || kind === "sleet" ? 17 : 23, drift: -3.2, sway: 0, top }];
      if (kind === "snow" || kind === "sleet") (this.fall = this.fall || []).push({ p: this._points((kind === "snow" ? 520 : 200) * few, 0.42, FLAKE, spread, top), speed: 2.3, drift: 0.5, sway: 0.7, top });
    }
    if (kind === "storm" && !this.still) this.flashAt = performance.now() + 1500 + Math.random() * 3000;
    this.spread = far * 1.5;
  }
  // d: how far the camera is from what it looks at
  range(d) {
    if (!this.scene.fog || !this.mist) return;
    this.scene.fog.near = d * this.mist[0];
    this.scene.fog.far = d * this.mist[1];
  }
  // move what is falling; dt in seconds
  step(dt, now) {
    if (this.still) return;
    for (const f of this.fall || []) {
      const a = f.p.geometry.attributes.position, v = a.array, { cx } = this.box, half = this.spread / 2;
      for (let i = 0; i < v.length; i += 3) {
        v[i + 1] -= f.speed * dt * (0.8 + ((i * 7) % 5) * 0.1);
        v[i] += (f.drift + (f.sway ? Math.sin(now / 900 + i) * f.sway : 0)) * dt;
        if (v[i + 1] < -0.2) v[i + 1] += f.top;
        if (v[i] < cx - half) v[i] += this.spread; else if (v[i] > cx + half) v[i] -= this.spread;
      }
      a.needsUpdate = true;
    }
    if (this.flashAt) {
      // two quick blinks; on a slow device at least one picture is always drawn lit
      const since = now - this.flashAt, on = since >= 0 && (!this.flashed || since < 90 || (since > 170 && since < 260));
      if (on !== !!this.lit) {
        this.lit = on;
        this.hemi.intensity = this.hemiBase * (on ? 2.6 : 1);
        this.scene.background.copy(on ? new T.Color("#F3F6FF") : this.sky);
      }
      if (since >= 0) this.flashed = true;
      if (since > 320) { this.flashed = false; this.flashAt = now + 3500 + Math.random() * 6000; }
    }
  }
}
