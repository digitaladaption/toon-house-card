/* The card's editor inside Home Assistant: pick the house, the look, and connect each light,
   blind and radiator to a real device. Links are saved in the card's own settings ("entities"),
   so they work whether the house is in a file or written into the card. */
import { roofus, ICON } from "./art.js";
import { nameDevices } from "./layout.js";
import { floorWalls, roomPoints, bbox } from "./geometry.js";
import { ensureFont, FONT } from "./font.js";
import { THEMES } from "./theme.js";

const IMPORTER = "https://digitaladaption.github.io/toon-house-card/importer/";
// which kinds of Home Assistant entity suit each kind of device
const DOMAINS = {
  light: ["light", "switch", "input_boolean"], switch: ["switch", "input_boolean", "light", "fan"], cover: ["cover", "input_number"],
  climate: ["climate", "sensor", "input_number"], lock: ["lock"], motion: ["binary_sensor"], contact: ["binary_sensor"],
  camera: ["camera"], speaker: ["media_player"], tv: ["media_player"], sensor: ["sensor", "binary_sensor"],
};
const KIND_NAME = { light: "Light", switch: "Switch", cover: "Blind or shutter", climate: "Heating", lock: "Lock", motion: "Motion sensor", contact: "Door or window sensor", camera: "Camera", speaker: "Speaker", tv: "TV", sensor: "Sensor" };
const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

const STYLE = `
  :host{display:block;font-family:${FONT};font-weight:500;color:#1b1b1b;--ink:#1b1b1b;--sun:#FFD83A;--paper:#FFFDF4}
  *{box-sizing:border-box}
  .wrap{background:linear-gradient(#6CCBFA,#9ADCFC);border:3px solid var(--ink);border-radius:18px;padding:12px}
  .talk{display:flex;gap:10px;align-items:flex-start;margin-bottom:12px}
  .roofus{flex:none;width:76px}
  .roofus svg{display:block;width:100%}
  .bubble{position:relative;flex:1;background:#fff;border:3px solid var(--ink);border-radius:16px;padding:8px 12px;box-shadow:2px 3px 0 var(--ink);font-size:15px;line-height:1.35;min-height:60px}
  .bubble::before{content:"";position:absolute;left:-12px;top:22px;width:18px;height:18px;background:#fff;border-left:3px solid var(--ink);border-bottom:3px solid var(--ink);transform:rotate(45deg)}
  .bubble.bad{background:#FFE1D8}.bubble.bad::before{background:#FFE1D8}
  .bubble b{font-weight:700;font-size:17px;display:block}
  section{background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:2px 3px 0 var(--ink);padding:10px 12px;margin-top:12px}
  h3{margin:0 0 8px;font-size:18px;font-weight:700;display:flex;align-items:center;gap:8px}
  h3 svg{width:28px;height:28px}
  .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:8px 0}
  .btn{font:inherit;font-weight:700;font-size:15px;min-height:44px;padding:6px 12px;border:3px solid var(--ink);border-radius:13px;background:#fff;color:var(--ink);cursor:pointer;box-shadow:2px 3px 0 var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:6px;text-decoration:none}
  .btn:active{transform:translate(2px,3px);box-shadow:none}
  .btn.on{background:var(--sun)}
  .btn svg{width:24px;height:24px;flex:none}
  @media (hover:hover){.btn:hover{transform:translate(-1px,-1px) rotate(-1deg)}}
  input[type=text],input[type=number],input:not([type]){font:inherit;font-size:16px;min-height:44px;padding:6px 10px;border:3px solid var(--ink);border-radius:12px;background:#fff;color:var(--ink);min-width:0;width:100%}
  input:focus,.btn:focus-visible,summary:focus-visible{outline:4px solid #7A4FC4;outline-offset:2px}
  label.f{display:block;font-weight:700;font-size:14px;margin:8px 0 2px}
  .hint{font-size:13px;opacity:.85;margin:4px 0}
  .pill{display:inline-flex;align-items:center;gap:6px;border:2px solid var(--ink);border-radius:999px;padding:2px 10px;background:#fff;font-size:13px;font-weight:700}
  .theme{flex-direction:column;gap:4px;min-width:112px;padding:8px}
  .sw{display:flex;border:2px solid var(--ink);border-radius:8px;overflow:hidden}
  .sw i{width:20px;height:20px;display:block}
  details{border:3px solid var(--ink);border-radius:14px;background:#fff;margin:8px 0;overflow:hidden}
  summary{cursor:pointer;font-weight:700;font-size:16px;padding:10px 12px;display:flex;align-items:center;gap:8px;list-style:none}
  summary::-webkit-details-marker{display:none}
  summary::before{content:"";width:0;height:0;border:7px solid transparent;border-left-color:var(--ink);margin-right:-2px;transition:transform .15s}
  details[open] summary::before{transform:rotate(90deg) translate(3px,-3px)}
  summary .pill{margin-left:auto}
  .dev{display:grid;grid-template-columns:40px 1fr;gap:4px 10px;align-items:center;padding:10px 12px;border-top:2px dashed #1b1b1b33}
  .dev .ic{width:40px;height:40px;border:3px solid var(--ink);border-radius:12px;display:grid;place-items:center;background:#eee;grid-row:span 2}
  .dev.live .ic{background:#9BE37A}
  .dev .ic svg{width:26px;height:26px}
  .dev .nm{font-weight:700;font-size:15px;line-height:1.2;display:flex;gap:6px;align-items:center;flex-wrap:wrap}
  .dev .nm small{font-weight:500;font-size:12px;opacity:.75}
  .dev .pick{display:flex;gap:6px;align-items:center}
  .dev .pick input{min-height:40px;font-size:14px}
  .dev .x{min-height:40px;width:40px;padding:0;flex:none}
  .dev .st{font-size:12px;font-weight:700}
  .slider{display:flex;gap:8px;align-items:center}
  .slider input{flex:1}
`;

class ToonHouseCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = { ...config };
    if (!this.shadowRoot) {
      ensureFont();
      this.attachShadow({ mode: "open" });
      this._skeleton();
    }
    this._lists();
    this._loadHouse();
    this._sync();
    this._states();
  }
  // Home Assistant may hand this over before or after the settings, and again on every state change
  set hass(hass) {
    this._hass = hass;
    if (!this.shadowRoot) return;
    this._lists();
    this._states();
  }

  _fire(config) {
    // tidy: no empty leftovers in the saved settings
    if (config.entities && !Object.keys(config.entities).length) delete config.entities;
    for (const k of ["title", "theme", "height"]) if (config[k] === "" || config[k] == null) delete config[k];
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
    this._sync();
  }
  _set(key, value) {
    this._fire({ ...this._config, [key]: value });
  }
  _say(title, text, mood = "happy", bad = false) {
    const q = (s) => this.shadowRoot.querySelector(s);
    q(".roofus").innerHTML = roofus(bad ? "oops" : mood);
    q(".bubble").classList.toggle("bad", bad);
    q(".bubble").innerHTML = `<b>${esc(title)}</b>${esc(text)}`;
  }

  _skeleton() {
    const sw = (t) => `<span class="sw">${[t.exterior, t.roof, t.door, t.lawn].map((c) => `<i style="background:${c}"></i>`).join("")}</span>`;
    this.shadowRoot.innerHTML = `<style>${STYLE}</style>
    <div class="wrap">
      <div class="talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>

      <section>
        <h3>${ICON.house}Your house</h3>
        <div class="pill" id="src"></div>
        <div id="urlBox">
          <label class="f" for="url">House file address</label>
          <input id="url" type="text" placeholder="/local/toon-house/house.json" autocomplete="off" spellcheck="false">
        </div>
        <div class="row">
          <label class="btn">${ICON.upload}Load a house file<input id="file" type="file" accept=".json,application/json" hidden></label>
          <button class="btn" id="useUrl">Use a file address</button>
          <a class="btn" href="${IMPORTER}" target="_blank" rel="noopener">${ICON.example}Build one from a floor plan</a>
        </div>
      </section>

      <section>
        <h3>${ICON.paint}The look</h3>
        <div class="row">
          <button class="btn theme" data-theme="toon">${sw(THEMES.toon)}Cartoon</button>
          <button class="btn theme" data-theme="brick">${sw(THEMES.brick)}Brick</button>
        </div>
        <label class="f">Opens on</label>
        <div class="row" id="views"></div>
        <label class="f" for="title">Name shown on the card</label>
        <input id="title" type="text" autocomplete="off">
        <label class="f">Height</label>
        <div class="row"><button class="btn" id="fill">Fill the screen</button><button class="btn" id="fixed">Set a height</button></div>
        <div class="slider" id="hBox"><input id="height" type="range" min="300" max="1000" step="20" aria-label="Card height"><span class="pill" id="hVal"></span></div>
      </section>

      <section>
        <h3>${ICON.plug}Connect your things</h3>
        <p class="hint">Pick the real device for each one. Grey ones are not connected yet and stay grey on the card.</p>
        <div id="devs"></div>
      </section>
      <p class="hint" style="color:#1b1b1b;margin:10px 4px 0">Prefer typing? "Show code editor" below still works.</p>
      <div id="lists"></div>
    </div>`;
    const q = (s) => this.shadowRoot.querySelector(s);
    q("#url").addEventListener("change", (e) => { const v = e.target.value.trim(); if (v) this._set("layout", v); });
    q("#useUrl").addEventListener("click", () => { this._showUrl = true; this._sync(); q("#url").focus(); });
    q("#file").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const house = JSON.parse(String(fr.result));
          if (!house || !Array.isArray(house.floors) || !house.floors.length) throw new Error("it has no floors in it");
          this._showUrl = false;
          this._set("layout", house);
        } catch (err) {
          this._say("That file didn't work", `I couldn't read it as a house file: ${err.message}.`, "oops", true);
        }
      };
      fr.readAsText(file);
      e.target.value = "";
    });
    this.shadowRoot.querySelectorAll("[data-theme]").forEach((b) => b.addEventListener("click", () => this._set("theme", b.dataset.theme)));
    q("#title").addEventListener("change", (e) => this._set("title", e.target.value));
    q("#fill").addEventListener("click", () => this._set("height", null));
    q("#fixed").addEventListener("click", () => this._set("height", 520));
    q("#height").addEventListener("change", (e) => this._set("height", Number(e.target.value)));
    q("#height").addEventListener("input", (e) => { q("#hVal").textContent = `${e.target.value} px`; });
  }

  // read the house (from the card settings or its file) so the rooms and devices can be listed
  async _loadHouse() {
    const src = this._config.layout, key = typeof src === "string" ? src : JSON.stringify(src || null);
    if (key === this._houseKey) return;
    this._houseKey = key;
    this._house = null;
    this._houseError = "";
    try {
      if (typeof src === "string") {
        const r = await fetch(`${src}${src.includes("?") ? "&" : "?"}v=${Date.now()}`);
        if (!r.ok) throw new Error(`the server answered ${r.status}`);
        this._house = await r.json();
      } else if (src) this._house = JSON.parse(JSON.stringify(src));
      if (!this._house || !Array.isArray(this._house.floors)) throw new Error("it has no floors in it");
      nameDevices(this._house);
      this._problems = [];
      for (const f of this._house.floors) {
        try { this._problems.push(...floorWalls(JSON.parse(JSON.stringify(f))).warnings); } catch (e) { this._problems.push(e.message); }
      }
    } catch (e) {
      this._house = null;
      this._houseError = e.message;
    }
    if (key !== this._houseKey) return;
    this._sync();
    this._devices();
  }
  _roomName(floor, d) {
    const rooms = floor.rooms || [];
    let r = rooms.find((x) => x.id === d.room);
    if (!r && d.x != null) r = rooms.find((x) => { const b = bbox(roomPoints(x)); return d.x >= b.x0 && d.x <= b.x1 && d.y >= b.y0 && d.y <= b.y1; });
    return r ? r.name || "" : "";
  }
  _entityOf(d) {
    const map = this._config.entities || {}, has = (k) => Object.prototype.hasOwnProperty.call(map, k);
    return has(d.id) ? map[d.id] : d.name && has(d.name) ? map[d.name] : d.entity || null;
  }

  // values in the simple fields; never touches a field the user is typing in
  _sync() {
    if (!this.shadowRoot) return;
    const q = (s) => this.shadowRoot.querySelector(s), c = this._config, active = this.shadowRoot.activeElement;
    const isFile = typeof c.layout === "string", h = this._house;
    q("#src").textContent = isFile ? "From a file on Home Assistant" : h ? `Built into this card: ${h.floors.length} floor${h.floors.length > 1 ? "s" : ""}, ${h.floors.reduce((a, f) => a + (f.rooms || []).length, 0)} rooms` : "Built into this card";
    q("#urlBox").style.display = isFile || this._showUrl ? "" : "none";
    q("#useUrl").style.display = isFile || this._showUrl ? "none" : "";
    if (active !== q("#url")) q("#url").value = isFile ? c.layout : "";
    const theme = c.theme || (h && h.theme) || "toon";
    this.shadowRoot.querySelectorAll("[data-theme]").forEach((b) => b.classList.toggle("on", b.dataset.theme === theme));
    if (active !== q("#title")) { q("#title").value = c.title != null ? c.title : ""; q("#title").placeholder = (h && h.title) || "My house"; }
    const fixed = typeof c.height === "number";
    q("#fill").classList.toggle("on", !c.height);
    q("#fixed").classList.toggle("on", !!c.height);
    q("#hBox").style.display = fixed ? "" : "none";
    if (fixed) { q("#height").value = c.height; q("#hVal").textContent = `${c.height} px`; }
    const views = q("#views"), now = String(c.view != null ? c.view : "outside"), list = [["outside", "Outside"], ...((h && h.floors) || []).map((f, i) => [f.id || `floor${i}`, f.name || (i === 0 ? "Ground" : `Floor ${i}`)])];
    const sig = JSON.stringify([list, now]);
    if (sig !== this._viewSig) {
      this._viewSig = sig;
      views.innerHTML = "";
      for (const [id, name] of list) {
        const b = document.createElement("button");
        b.className = `btn${now === id || (id === "outside" && now === "whole") ? " on" : ""}`;
        b.textContent = name;
        b.addEventListener("click", () => this._set("view", id));
        views.appendChild(b);
      }
    }
    this._talk();
  }
  _talk() {
    if (this._houseError) { this._say("I can't find your house", `Something is wrong with the house file: ${this._houseError}.`, "oops", true); return; }
    if (!this._house) { this._say("One moment", "I'm fetching your house.", "think"); return; }
    const all = this._house.floors.flatMap((f) => f.devices || []), linked = all.filter((d) => this._entityOf(d)).length;
    if (this._problems && this._problems.length) this._say("Something to check", `${this._problems[0]}${this._problems.length > 1 ? ` (and ${this._problems.length - 1} more)` : ""}`, "oops", true);
    else if (!all.length) this._say("Your house is ready", "There are no lights or blinds in the house file yet. Add them to the file, then connect them here.", "think");
    else if (linked >= all.length) this._say("Everything is connected!", "Tap things on the card to try them.", "party");
    else this._say("Let's connect your home", `${linked} of ${all.length} things are connected. Pick the real device for each one below.`, linked ? "happy" : "wow");
  }

  // one list of choices per kind of device
  _lists() {
    if (!this._hass) return;
    // rebuilt only when devices are added to or removed from Home Assistant
    const n = Object.keys(this._hass.states).length;
    if (n === this._listCount) return;
    this._listCount = n;
    const box = this.shadowRoot.querySelector("#lists"), ids = Object.keys(this._hass.states).sort();
    box.innerHTML = Object.entries(DOMAINS).map(([kind, doms]) => `<datalist id="thc-${kind}">${ids.filter((id) => doms.includes(id.split(".")[0])).map((id) => `<option value="${esc(id)}" label="${esc((this._hass.states[id].attributes || {}).friendly_name || "")}"></option>`).join("")}</datalist>`).join("");
  }
  _devices() {
    if (!this.shadowRoot) return;
    const box = this.shadowRoot.querySelector("#devs"), h = this._house;
    if (!h) { box.innerHTML = ""; return; }
    const open = new Set([...box.querySelectorAll("details[open]")].map((d) => d.dataset.floor)), firstTime = !box.children.length;
    box.innerHTML = "";
    h.floors.forEach((f, fi) => {
      const devs = f.devices || [];
      if (!devs.length) return;
      const det = document.createElement("details"), fid = f.id || `floor${fi}`;
      det.dataset.floor = fid;
      det.open = firstTime ? fi === 0 : open.has(fid);
      det.innerHTML = `<summary>${esc(f.name || (fi === 0 ? "Ground" : `Floor ${fi}`))}<span class="pill"></span></summary>`;
      for (const d of devs) {
        const row = document.createElement("div"), room = this._roomName(f, d), kind = DOMAINS[d.kind] ? d.kind : "sensor";
        row.className = "dev";
        row.dataset.id = d.id;
        row.innerHTML = `<div class="ic">${ICON[d.kind] || ICON.sensor}</div>
          <div class="nm">${esc(d.name || KIND_NAME[d.kind] || "Device")}<small>${esc([KIND_NAME[d.kind] || d.kind, room].filter(Boolean).join(" in "))}</small><span class="st"></span></div>
          <div class="pick"><input list="thc-${kind}" placeholder="Not connected yet" autocomplete="off" spellcheck="false" aria-label="Device for ${esc(d.name || d.kind)}"><button class="btn x" title="Disconnect" aria-label="Disconnect ${esc(d.name || d.kind)}">${ICON.close}</button></div>`;
        const input = row.querySelector("input");
        input.value = this._entityOf(d) || "";
        input.addEventListener("change", () => this._link(d, input.value.trim(), input));
        row.querySelector(".x").addEventListener("click", () => this._link(d, "", input));
        det.appendChild(row);
      }
      box.appendChild(det);
    });
    this._states();
  }
  _link(d, value, input) {
    if (value && this._hass && !this._hass.states[value]) {
      this._say("I don't know that one", `"${value}" isn't a device in Home Assistant. Pick one from the list.`, "oops", true);
      input.value = this._entityOf(d) || "";
      return;
    }
    const map = { ...(this._config.entities || {}) }, file = d.entity || null;
    if ((value || null) === file) delete map[d.id];
    else map[d.id] = value || null;
    input.value = value;
    this._fire({ ...this._config, entities: map });
    this._states();
  }
  // live values beside each device, and the count on each floor
  _states() {
    if (!this.shadowRoot || !this._house) return;
    const box = this.shadowRoot.querySelector("#devs");
    this._house.floors.forEach((f, fi) => {
      const det = box.querySelector(`details[data-floor="${f.id || `floor${fi}`}"]`);
      if (!det) return;
      let linked = 0;
      for (const d of f.devices || []) {
        const row = [...det.querySelectorAll(".dev")].find((r) => r.dataset.id === d.id), ent = this._entityOf(d), st = ent && this._hass ? this._hass.states[ent] : null;
        if (!row) continue;
        if (ent) linked++;
        row.classList.toggle("live", !!ent);
        row.querySelector(".st").textContent = !ent ? "" : !st ? "not found" : `${st.state}${(st.attributes && st.attributes.unit_of_measurement) || ""}`;
        const input = row.querySelector("input");
        if (this.shadowRoot.activeElement !== input && input.value !== (ent || "")) input.value = ent || "";
      }
      det.querySelector("summary .pill").textContent = `${linked} of ${(f.devices || []).length} connected`;
    });
  }
}

if (!customElements.get("toon-house-card-editor")) customElements.define("toon-house-card-editor", ToonHouseCardEditor);
