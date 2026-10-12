/* The card's editor inside Home Assistant: pick the house, the look, put things on the plan and
   connect each light, blind and radiator to a real device (in the setup window, setup.js).
   Links are saved in the card's own settings ("entities"), so they work whether the house is in
   a file or written into the card. */
import { roofus, ICON } from "./art.js";
import { applyOverlay, slug } from "./layout.js";
import { floorWalls, roomPoints, bbox } from "./geometry.js";
import { ensureFont, FONT } from "./font.js";
import { THEMES, resolveTheme, roomStyle } from "./theme.js";
import { stateText } from "./match.js";
import { Setup, SETUP_STYLE } from "./setup.js";

const IMPORTER = "https://digitaladaption.github.io/toon-house-card/importer/";
const KIND_NAME = { light: "Light", switch: "Switch", cover: "Blind or shutter", climate: "Heating", lock: "Lock", motion: "Motion sensor", contact: "Door or window sensor", camera: "Camera", speaker: "Speaker", tv: "TV", sensor: "Sensor" };
// what can be added from the editor, and the words Roofus uses for each
const ADD = [["light", "Light", "Tap where the light goes."], ["cover", "Blind", "Tap the window it covers."], ["climate", "Radiator", "Tap by the wall it is on. Away from a wall makes a thermostat."], ["lock", "Lock", "Tap the door it is on."], ["motion", "Motion sensor", "Tap where the sensor is."], ["contact", "Door sensor", "Tap the door or window it is on."], ["camera", "Camera", "Tap where the camera is. It can be outside."], ["speaker", "Speaker", "Tap where the speaker is."], ["tv", "TV", "Tap where the TV is."], ["sensor", "Sensor", "Tap where the sensor is."], ["switch", "Switch", "Tap where the switch is."]];
const POSITION = ["x", "y", "room", "wall", "at"];
const clone = (o) => JSON.parse(JSON.stringify(o));
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
  input[type=text],input[type=number],input[type=search],input:not([type]){font:inherit;font-size:16px;min-height:44px;padding:6px 10px;border:3px solid var(--ink);border-radius:12px;background:#fff;color:var(--ink);min-width:0;width:100%}
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
  .dev{font:inherit;color:var(--ink);width:100%;text-align:left;background:none;border:0;border-top:2px dashed #1b1b1b33;cursor:pointer;display:grid;grid-template-columns:40px 1fr auto;gap:2px 10px;align-items:center;padding:10px 12px;min-height:60px}
  .dev .ic{width:40px;height:40px;border:3px solid var(--ink);border-radius:12px;display:grid;place-items:center;background:#eee;grid-row:span 2}
  .dev.live .ic{background:#9BE37A}
  .dev .ic svg{width:26px;height:26px}
  .dev .nm{font-weight:700;font-size:15px;line-height:1.2}
  .dev .nm small{display:block;font-weight:500;font-size:12px;opacity:.75}
  .dev .lk{grid-column:2;font-size:13px;overflow-wrap:anywhere}
  .dev.live .lk{font-weight:700}
  .dev .go{grid-column:3;grid-row:1 / span 2;background:var(--sun);box-shadow:2px 2px 0 var(--ink)}
  .dev.live .go{background:#fff}
  .dev:focus-visible{outline:4px solid #7A4FC4;outline-offset:-4px}
  @media (hover:hover){.dev:hover{background:#FFF3B8}}
  .slider{display:flex;gap:8px;align-items:center}
  .kinds{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:6px;margin:8px 0}
  .kind{flex-direction:column;gap:1px;font-size:12px;min-height:62px;padding:4px 2px;line-height:1.1;text-align:center}
  .kind svg{width:28px;height:28px}
  #planBox{border:3px solid var(--ink);border-radius:14px;background:#62CE3C;overflow:hidden}
  #planBox.arm{outline:4px dashed #7A4FC4;outline-offset:2px;cursor:crosshair}
  #plan{display:block;width:100%;height:auto}
  #plan .pin{touch-action:none;cursor:grab}
  #plan text{font-family:inherit;font-weight:700;pointer-events:none}
  .tabs .btn{min-height:40px;padding:4px 12px;font-size:14px}
  .dev.sel{background:#FFF3B8}
  .slider input{flex:1}
${SETUP_STYLE}`;

class ToonHouseCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = { ...config };
    if (!this.shadowRoot) {
      ensureFont();
      this.attachShadow({ mode: "open" });
      this._skeleton();
      this._setup = new Setup(this);
    }
    this._loadHouse();
    this._overlayChanged();
    this._sync();
    this._states();
  }
  // Home Assistant may hand this over before or after the settings, and again on every state change
  set hass(hass) {
    this._hass = hass;
    if (!this.shadowRoot) return;
    this._states();
    this._setup.refresh();
  }
  // While the editor is open, a tap on a thing in the 3D card opens its setup window here
  connectedCallback() {
    this._onCardTap = this._onCardTap || ((e) => {
      const id = e.detail && e.detail.id;
      if (!id || !this._setup || !this.getClientRects().length || !this._find(id)) return;
      e.preventDefault();
      this._open(id);
    });
    window.addEventListener("toon-house-setup", this._onCardTap);
  }
  disconnectedCallback() {
    window.removeEventListener("toon-house-setup", this._onCardTap);
  }

  _fire(config) {
    // tidy: no empty leftovers in the saved settings
    if (config.entities && !Object.keys(config.entities).length) delete config.entities;
    if (config.devices && !Object.keys(config.devices).length) delete config.devices;
    for (const k of ["title", "theme", "height"]) if (config[k] === "" || config[k] == null) delete config[k];
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
    this._overlayChanged();
    this._sync();
  }
  // devices were added, moved or removed: redo the list and the plan
  _overlayChanged() {
    if (!this._file || JSON.stringify(this._config.devices || null) === this._overKey) return;
    this._rebuildHouse();
    this._devices();
    this._plan();
  }
  _rebuildHouse() {
    this._overKey = JSON.stringify(this._config.devices || null);
    this._house = applyOverlay(clone(this._file), this._config.devices);
    this._house.floors.forEach((f) => (f.rooms || []).forEach((r, k) => { r.id = r.id || `${f.id}_room${k}`; }));
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
        <h3>${ICON.pin}Add or move things</h3>
        <p class="hint">Pick a sticker, then tap the plan where it goes. Tap anything on the plan to set it up, or drag it to move it.</p>
        <div class="kinds" id="kinds"></div>
        <div class="row tabs" id="ptabs"></div>
        <div id="planBox"><svg id="plan" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of this floor"></svg></div>
        <div class="row" id="hiddenBox" style="display:none"><span class="pill" id="hiddenN"></span><button class="btn" id="restore">Put them back</button></div>
      </section>

      <section>
        <h3>${ICON.plug}Connect your things</h3>
        <p class="hint">Tap one and I'll help you set it up. Grey ones are not connected yet and stay grey on the card.</p>
        <div id="devs"></div>
      </section>
      <p class="hint" style="color:#1b1b1b;margin:10px 4px 0">Prefer typing? "Show code editor" below still works.</p>
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
          this._tell("That file didn't work", `I couldn't read it as a house file: ${err.message}.`, "oops", true);
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
    for (const [kind, label] of ADD) {
      const b = document.createElement("button");
      b.className = "btn kind";
      b.dataset.kind = kind;
      b.innerHTML = `${ICON[kind] || ICON.sensor}<span>${label}</span>`;
      b.addEventListener("click", () => this._armKind(this._arm === kind ? null : kind));
      q("#kinds").appendChild(b);
    }
    q("#restore").addEventListener("click", () => {
      const over = { ...(this._config.devices || {}) };
      for (const k of Object.keys(over)) if (over[k] === null) delete over[k];
      this._fire({ ...this._config, devices: over });
    });
    const svg = q("#plan");
    svg.addEventListener("pointerdown", (e) => {
      const pin = e.target.closest ? e.target.closest(".pin") : null;
      if (!pin || this._arm) return;
      this._dragging = { id: pin.dataset.dev, el: pin, from: this._point(e), moved: false };
      pin.setPointerCapture(e.pointerId);
    });
    svg.addEventListener("pointermove", (e) => {
      const d = this._dragging;
      if (!d) return;
      const p = this._point(e);
      if (!d.moved && Math.hypot(p.x - d.from.x, p.y - d.from.y) < 0.2) return;
      d.moved = true;
      d.el.setAttribute("transform", `translate(${p.x} ${p.y})`);
    });
    const drop = (e) => {
      const d = this._dragging;
      this._dragging = null;
      if (!d) return;
      // the click that may follow is already dealt with here
      this._swallow = true;
      setTimeout(() => { this._swallow = false; }, 350);
      if (!d.moved) { this._open(d.id); return; }
      const p = this._point(e);
      this._move(d.id, p.x, p.y);
    };
    // A finger on a pin drags the pin, not the page. Anywhere else on the plan still scrolls the page.
    svg.addEventListener("touchstart", (e) => { if (!this._arm && e.target.closest && e.target.closest(".pin")) e.preventDefault(); }, { passive: false });
    svg.addEventListener("pointerup", drop);
    svg.addEventListener("pointercancel", () => { this._dragging = null; this._plan(); });
    svg.addEventListener("click", (e) => {
      if (this._swallow) return;
      const pin = e.target.closest ? e.target.closest(".pin") : null, p = this._point(e);
      if (this._arm) this._place(this._arm, p.x, p.y);
      else if (pin) this._open(pin.dataset.dev);
      else this._select(null);
    });
  }

  // read the house (from the card settings or its file) so the rooms and devices can be listed
  async _loadHouse() {
    const src = this._config.layout, key = typeof src === "string" ? src : JSON.stringify(src || null);
    if (key === this._houseKey) return;
    this._houseKey = key;
    this._house = null;
    this._file = null;
    this._houseError = "";
    try {
      if (typeof src === "string") {
        const r = await fetch(`${src}${src.includes("?") ? "&" : "?"}v=${Date.now()}`);
        if (!r.ok) throw new Error(`the server answered ${r.status}`);
        this._house = await r.json();
      } else if (src) this._house = JSON.parse(JSON.stringify(src));
      if (!this._house || !Array.isArray(this._house.floors)) throw new Error("it has no floors in it");
      this._file = this._house;
      const named = applyOverlay(clone(this._file), null);
      named.floors.forEach((f) => (f.rooms || []).forEach((r, k) => { r.id = r.id || `${f.id}_room${k}`; }));
      this._fileIds = new Set(named.floors.flatMap((f) => (f.devices || []).map((d) => d.id)));
      this._fw = [];
      this._problems = [];
      for (const f of named.floors) {
        try {
          const w = floorWalls(clone(f));
          this._fw.push(w);
          this._problems.push(...w.warnings);
        } catch (e) {
          this._fw.push(null);
          this._problems.push(e.message);
        }
      }
      this._rebuildHouse();
    } catch (e) {
      this._house = null;
      this._file = null;
      this._houseError = e.message;
    }
    if (key !== this._houseKey) return;
    this._sel = null;
    this._sync();
    this._devices();
    this._plan();
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
  // say something about what the user just did, and keep it up for a few seconds
  _tell(title, text, mood, bad) {
    this._hold = Date.now() + 6000;
    this._say(title, text, mood, bad);
  }
  _talk() {
    if (Date.now() < (this._hold || 0)) return;
    if (this._houseError) { this._say("I can't find your house", `Something is wrong with the house file: ${this._houseError}.`, "oops", true); return; }
    if (!this._house) { this._say("One moment", "I'm fetching your house.", "think"); return; }
    const all = this._house.floors.flatMap((f) => f.devices || []), linked = all.filter((d) => this._entityOf(d)).length;
    if (this._problems && this._problems.length) this._say("Something to check", `${this._problems[0]}${this._problems.length > 1 ? ` (and ${this._problems.length - 1} more)` : ""}`, "oops", true);
    else if (!all.length) this._say("Your house is ready", "Now add your lights and blinds: pick a sticker below and tap the plan where it goes.", "happy");
    else if (linked >= all.length) this._say("Everything is connected!", "Tap things on the card to try them.", "party");
    else this._say("Let's connect your home", `${linked} of ${all.length} things are connected. Tap a grey one and I'll help you set it up.`, linked ? "happy" : "wow");
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
        const row = document.createElement("button"), room = this._roomName(f, d);
        row.className = "dev";
        row.dataset.id = d.id;
        row.innerHTML = `<span class="ic">${ICON[d.kind] || ICON.sensor}</span>
          <span class="nm">${esc(d.name || this.kindName(d.kind))}<small>${esc([this.kindName(d.kind), room].filter(Boolean).join(" in "))}</small></span>
          <span class="pill go"></span><span class="lk"></span>`;
        row.addEventListener("click", () => this._open(d.id));
        row.classList.toggle("sel", d.id === this._sel);
        det.appendChild(row);
      }
      box.appendChild(det);
    });
    this._states();
  }
  // connect a thing on the plan to a real device ("" disconnects it); false if that device is not known
  _link(d, value) {
    if (value && this._hass && !this._hass.states[value]) {
      this._tell("I don't know that one", `"${value}" isn't a device in Home Assistant.`, "oops", true);
      return false;
    }
    const map = { ...(this._config.entities || {}) }, file = d.entity || null;
    if ((value || null) === file) delete map[d.id];
    else map[d.id] = value || null;
    this._fire({ ...this._config, entities: map });
    this._states();
    return true;
  }
  kindName(kind) {
    return KIND_NAME[kind] || kind || "Device";
  }
  // which real devices are already taken, and by what: { entity: name of the thing using it }
  usedBy(exceptId) {
    const out = {};
    for (const f of this._house ? this._house.floors : []) for (const d of f.devices || []) {
      const ent = d.id === exceptId ? null : this._entityOf(d);
      if (ent) out[ent] = d.name || this.kindName(d.kind);
    }
    return out;
  }
  // ---------- the setup window ----------
  _open(id, fresh) {
    const hit = this._find(id);
    if (!hit) return;
    this._pf = hit.fi;
    this._arm = null;
    this._sel = id;
    this._plan();
    this._selBox();
    this._setup.open(id, null, !!fresh);
  }
  _setupClosed() {
    this._talk();
  }
  // "Move it" in the setup window: show the plan with the thing picked out, ready to drag
  _moveMode(id) {
    const hit = this._find(id);
    if (!hit) return;
    this._pf = hit.fi;
    this._select(id, true);
    this._tell("Drag it", `Drag ${hit.d.name || "it"} on the plan to its new place.`, "think");
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
        row.querySelector(".lk").textContent = !ent ? "Not connected yet" : `${(st && st.attributes && st.attributes.friendly_name) || ent}: ${stateText(st)}`;
        row.querySelector(".go").textContent = ent ? "Change" : "Set up";
      }
      det.querySelector("summary .pill").textContent = `${linked} of ${(f.devices || []).length} connected`;
    });
  }

  // ---------- the little plan: add, move and remove things ----------
  _floorNow() {
    const h = this._house;
    if (!h || !h.floors.length) return null;
    if (this._pf == null || !h.floors[this._pf]) this._pf = 0;
    return { f: h.floors[this._pf], w: this._fw[this._pf], i: this._pf };
  }
  _point(e) {
    const svg = this.shadowRoot.querySelector("#plan"), pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }
  // where a device is drawn on the plan
  _spot(f, d) {
    if (d.x != null) return [d.x, d.y];
    const r = (f.rooms || []).find((x) => x.id === d.room);
    if (!r) return null;
    const b = bbox(roomPoints(r)), inset = d.kind === "cover" || d.kind === "contact" ? 0 : 0.32;
    return d.wall === "n" ? [d.at, b.y0 + inset] : d.wall === "s" ? [d.at, b.y1 - inset] : d.wall === "w" ? [b.x0 + inset, d.at] : [b.x1 - inset, d.at];
  }
  _plan() {
    if (!this.shadowRoot) return;
    const q = (x) => this.shadowRoot.querySelector(x), now = this._floorNow(), svg = q("#plan"), tabs = q("#ptabs");
    if (!now) { svg.innerHTML = ""; tabs.innerHTML = ""; return; }
    const { f, w } = now, h = this._house;
    tabs.innerHTML = "";
    if (h.floors.length > 1) {
      h.floors.forEach((fl, i) => {
        const b = document.createElement("button");
        b.className = `btn${i === this._pf ? " on" : ""}`;
        b.textContent = fl.name || (i === 0 ? "Ground" : `Floor ${i}`);
        b.addEventListener("click", () => { this._pf = i; this._sel = null; this._plan(); this._selBox(); });
        tabs.appendChild(b);
      });
    }
    const theme = resolveTheme(this._config.theme || h.theme, { ...(h.colours || {}), ...(this._config.colours || {}) });
    const rooms = (f.rooms || []).map((r) => ({ r, pts: roomPoints(r) })), bb = bbox(rooms.flatMap((x) => x.pts)), m = 0.8;
    let bed = 0, out = "";
    for (const { r, pts } of rooms) {
      const st = roomStyle(theme, r, bed);
      if (st.type === "bedroom") bed++;
      out += `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="${st.floor}" stroke="#1b1b1b" stroke-width="0.14" stroke-linejoin="round"/>`;
    }
    for (const o of (w && w.openings) || []) {
      if (o.kind === "opening") continue;
      const [x0, y0, x1, y1] = o.b, fill = o.kind === "window" || o.kind === "bifold" ? "#7FD9FF" : o.kind === "frontdoor" ? "#7A4FC4" : "#FFFDF4";
      out += `<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" fill="${fill}" stroke="#1b1b1b" stroke-width="0.05"/>`;
    }
    for (const { r, pts } of rooms) {
      if (!r.name) continue;
      const b = bbox(pts), size = Math.min(0.34, Math.max(0.2, (b.x1 - b.x0 - 0.3) / (0.6 * r.name.length)));
      out += `<text x="${(b.x0 + b.x1) / 2}" y="${b.y0 + 0.5}" font-size="${size.toFixed(2)}" text-anchor="middle" fill="#1b1b1b" stroke="#fff" stroke-width="0.08" paint-order="stroke">${esc(r.name)}</text>`;
    }
    for (const d of f.devices || []) {
      const p = this._spot(f, d);
      if (!p) continue;
      const sel = d.id === this._sel, fill = sel ? "#FFD83A" : this._entityOf(d) ? "#9BE37A" : "#E9E9E9";
      const icon = (ICON[d.kind] || ICON.sensor).replace("<svg ", '<svg x="-0.3" y="-0.3" width="0.6" height="0.6" ');
      out += `<g class="pin" data-dev="${esc(d.id)}" transform="translate(${p[0]} ${p[1]})"><title>${esc(d.name || d.kind)}</title><circle r="${sel ? 0.5 : 0.42}" fill="${fill}" stroke="#1b1b1b" stroke-width="${sel ? 0.11 : 0.07}"/>${icon}</g>`;
    }
    svg.setAttribute("viewBox", `${bb.x0 - m} ${bb.y0 - m} ${bb.x1 - bb.x0 + 2 * m} ${bb.y1 - bb.y0 + 2 * m}`);
    svg.innerHTML = out;
    q("#planBox").classList.toggle("arm", !!this._arm);
    this.shadowRoot.querySelectorAll(".kind").forEach((b) => b.classList.toggle("on", b.dataset.kind === this._arm));
    const hidden = Object.values(this._config.devices || {}).filter((v) => v === null).length;
    q("#hiddenBox").style.display = hidden ? "" : "none";
    q("#hiddenN").textContent = `${hidden} thing${hidden === 1 ? "" : "s"} from your house file hidden`;
  }
  _find(id) {
    for (const [fi, f] of (this._house ? this._house.floors : []).entries()) {
      const d = (f.devices || []).find((x) => x.id === id);
      if (d) return { d, f, fi };
    }
    return null;
  }
  // show which thing is picked, in the list as well as on the plan
  _selBox() {
    this.shadowRoot.querySelectorAll(".dev").forEach((r) => r.classList.toggle("sel", r.dataset.id === this._sel));
  }
  _select(id, show) {
    this._sel = id || null;
    this._plan();
    this._selBox();
    if (show) this.shadowRoot.querySelector("#planBox").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  _armKind(kind) {
    this._arm = kind;
    this._sel = null;
    this._plan();
    this._selBox();
    const a = ADD.find((x) => x[0] === kind);
    if (a) this._tell(`Adding a ${a[1].toLowerCase()}`, a[2], "think");
    else { this._hold = 0; this._talk(); }
  }
  // where a thing of this kind belongs when the plan is tapped at x, y
  _where(kind, x, y) {
    const now = this._floorNow(), w = now && now.w;
    if (!w) return { error: "I can't read this floor's walls, so I can't place things on it." };
    const round = (v) => Math.round(v * 20) / 20, room = w.roomAt(x, y);
    const nearest = (kinds) => {
      let best = null;
      for (const o of w.openings) {
        if (!kinds.includes(o.kind)) continue;
        const [x0, y0, x1, y1] = o.b, d = Math.hypot(Math.max(x0 - x, 0, x - x1), Math.max(y0 - y, 0, y - y1));
        if (!best || d < best.d) best = { o, d };
      }
      return best && best.d <= 1 ? best.o : null;
    };
    const onOpening = (o) => ({ room: o.room, wall: o.wall, at: round(o.at + o.width / 2) });
    if (kind === "cover") {
      const o = nearest(["window", "bifold", "garage"]);
      return o ? onOpening(o) : { error: "Blinds go on a window. Tap on a window, patio door or garage door (the blue and cream strips on the walls)." };
    }
    if (kind === "contact" || kind === "lock") {
      const o = nearest(kind === "lock" ? ["frontdoor", "extdoor", "door", "garage"] : ["window", "bifold", "frontdoor", "extdoor", "door", "garage"]);
      if (o && kind === "contact") return onOpening(o);
      if (o) { const [x0, y0, x1, y1] = o.b; return { x: round((x0 + x1) / 2 - o.n[0] * 0.3), y: round((y0 + y1) / 2 - o.n[1] * 0.3) }; }
    }
    if (kind === "camera" && !room) return { x: round(x), y: round(y) };
    if (!room) return { error: "Tap inside one of the rooms." };
    if (kind === "climate") {
      const b = bbox(roomPoints(room)), gaps = [["n", y - b.y0, x, b.x0, b.x1], ["s", b.y1 - y, x, b.x0, b.x1], ["w", x - b.x0, y, b.y0, b.y1], ["e", b.x1 - x, y, b.y0, b.y1]].sort((p, r) => p[1] - r[1]);
      const [wall, gap, along, lo, hi] = gaps[0];
      if (gap <= 0.8) return { room: room.id, wall, at: round(Math.min(hi - 0.55, Math.max(lo + 0.55, along))) };
    }
    return { x: round(x), y: round(y) };
  }
  _place(kind, x, y) {
    const now = this._floorNow(), pos = this._where(kind, x, y);
    if (pos.error) { this._tell("Not there", pos.error, "oops", true); return; }
    const w = now.w, room = pos.room ? (now.f.rooms || []).find((r) => r.id === pos.room) : w.roomAt(pos.x, pos.y);
    const label = ADD.find((a) => a[0] === kind)[1].toLowerCase(), where = room && room.name ? room.name : "Outside";
    const names = new Set(this._house.floors.flatMap((f) => (f.devices || []).map((d) => d.name)));
    let name = `${where} ${label}`, n = 2;
    while (names.has(name)) name = `${where} ${label} ${n++}`;
    const ids = new Set([...this._fileIds, ...Object.keys(this._config.devices || {})]);
    let id = `added_${slug(name)}`, k = 2;
    while (ids.has(id)) id = `added_${slug(name)}_${k++}`;
    this._arm = null;
    this._sel = id;
    this._fire({ ...this._config, devices: { ...(this._config.devices || {}), [id]: { floor: now.f.id, kind, name, ...pos } } });
    this._selBox();
    this._tell(`${name} added!`, `To see it in 3D, switch the card to ${now.f.name || "that floor"}.`, "party");
    this._setup.open(id, "pick", true);
  }
  _move(id, x, y) {
    const hit = this._find(id);
    if (!hit) return;
    const pos = this._where(hit.d.kind, x, y);
    if (pos.error) { this._tell("Not there", pos.error, "oops", true); this._plan(); return; }
    const over = { ...(this._config.devices || {}) }, entry = { ...(over[id] || {}) };
    for (const key of POSITION) delete entry[key];
    over[id] = { ...entry, ...pos };
    this._sel = id;
    this._fire({ ...this._config, devices: over });
    this._selBox();
    this._tell("Moved", `${hit.d.name || "It"} is in its new place.`, "happy");
  }
  _remove(id) {
    const hit = id ? this._find(id) : null;
    if (!hit) return;
    const over = { ...(this._config.devices || {}) }, links = { ...(this._config.entities || {}) };
    if (this._fileIds.has(id)) over[id] = null;
    else delete over[id];
    delete links[id];
    this._sel = null;
    this._fire({ ...this._config, devices: over, entities: links });
    this._selBox();
    this._tell("Removed", this._fileIds.has(id) ? `${hit.d.name || "It"} is hidden. "Put them back" under the plan brings it back.` : `${hit.d.name || "It"} is gone.`, "happy");
  }
  _rename(id, name) {
    const hit = id ? this._find(id) : null;
    name = (name || "").trim();
    if (!hit || !name || name === hit.d.name) return;
    const over = { ...(this._config.devices || {}) };
    over[id] = { ...(over[id] || {}), name };
    this._fire({ ...this._config, devices: over });
    this._selBox();
    this._states();
  }
}

if (!customElements.get("toon-house-card-editor")) customElements.define("toon-house-card-editor", ToonHouseCardEditor);
