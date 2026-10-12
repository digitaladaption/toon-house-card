/* toon-house-card: a cartoon 3D dollhouse of your home for Home Assistant.
   You describe rooms, doors, windows and devices in metres; the card builds the house. */
import * as T from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { floorWalls, faceWithCutouts, bbox, roomPoints, uncovered, EXT_WALL } from "./geometry.js";
import { resolveTheme, roomStyle, drawPattern, PATTERN_SIZE } from "./theme.js";
import { furnitureParts } from "./furniture.js";
import { applyOverlay } from "./layout.js";
import { ensureFont, FONT } from "./font.js";
import "./editor.js";

const VERSION = "0.5.0";
const SILL = 0.9, HEAD = 2.1, DOOR_HEAD = 2.05, GAP = 0.2;
const tex = (pattern, a, b) => `tex|${pattern}|${a}|${b || ""}`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const rad = (deg) => (deg * Math.PI) / 180;

// what an entity's state means for a device of this kind
function devState(d, hass) {
  const s = d.entity && hass && hass.states[d.entity];
  if (!s) return { planned: true, active: false, level: 1, text: "" };
  const a = s.attributes || {}, dom = d.entity.split(".")[0], num = Number(s.state);
  switch (d.kind) {
    case "light":
    case "switch": return { active: s.state === "on", text: "" };
    case "cover": {
      const pos = a.current_position != null ? Number(a.current_position) : dom === "input_number" ? num : s.state === "open" ? 100 : 0;
      return { active: pos < 99, level: Math.max(0, Math.min(100, pos)) / 100, text: `${Math.round(pos)}%` };
    }
    case "climate": {
      const t = a.current_temperature != null ? a.current_temperature : a.temperature != null ? a.temperature : num;
      return { active: a.hvac_action === "heating" || (dom === "input_number" && num >= 21), text: Number.isFinite(Number(t)) ? `${Number(t).toFixed(1)}°` : s.state };
    }
    case "lock": return { active: s.state === "locked", text: s.state === "locked" ? "locked" : "unlocked" };
    case "motion": return { active: s.state === "on", text: "" };
    case "contact": return { active: s.state === "on", text: s.state === "on" ? "open" : "" };
    case "camera": return { active: ["streaming", "recording"].includes(s.state), text: "" };
    case "speaker":
    case "tv": return { active: ["playing", "on"].includes(s.state), text: s.state === "playing" ? "playing" : "" };
    default: return { active: false, text: `${s.state}${a.unit_of_measurement || ""}` };
  }
}

class ToonHouseCard extends HTMLElement {
  static getStubConfig() {
    // a tiny starter house, so the card shows something the moment it is added
    return {
      view: "ground",
      layout: {
        title: "My house",
        floors: [{
          id: "ground", name: "Ground",
          rooms: [{ id: "living", name: "Living room", rect: [0, 0, 5, 4] }, { id: "kitchen", name: "Kitchen", rect: [5, 0, 8.5, 4] }, { id: "hall", name: "Hall", rect: [0, 4, 8.5, 5.6] }],
          openings: [
            { room: "hall", wall: "s", at: 3.8, width: 1, kind: "frontdoor" }, { room: "living", wall: "n", at: 1.5, width: 2, kind: "window" },
            { room: "kitchen", wall: "n", at: 6, width: 1.5, kind: "window" }, { room: "living", wall: "s", at: 2, width: 0.85, kind: "door" }, { room: "kitchen", wall: "s", at: 6.2, width: 0.85, kind: "door" },
          ],
          furniture: [{ type: "sofa", x: 2.5, y: 3.3, rot: 180 }, { type: "table", x: 6.8, y: 2.2 }],
          devices: [{ name: "Living room light", kind: "light", x: 2.5, y: 2, entity: null }],
        }],
      },
    };
  }
  static getConfigElement() {
    return document.createElement("toon-house-card-editor");
  }
  setConfig(config) {
    if (!config || !config.layout) throw new Error('Set "layout" to the address of your house file (for example /local/toon-house/house.json) or put the house in the card config.');
    // asking for a different opening view moves to it, even after the card has been used
    const newView = this._config && config.view !== undefined && this._config.view !== config.view;
    if (newView) this._mode = null;
    this._config = { view: "outside", cut_height: 1.2, ...config };
    if (!this.shadowRoot) {
      ensureFont();
      this.attachShadow({ mode: "open" });
      this._dom();
    }
    if (this._config.height) this.style.setProperty("--toon-house-h", typeof this._config.height === "number" ? `${this._config.height}px` : this._config.height);
    else this.style.removeProperty("--toon-house-h");
    // Three sizes of change, so the editor stays quick and the camera stays put:
    //  - the house itself (file, theme, colours): read it again and start afresh
    //  - devices added or moved in the editor: rebuild from the copy already held, keeping the view
    //  - a link, the title or the height: just refresh what is drawn
    const srcKey = JSON.stringify([this._config.layout, this._config.theme || null, this._config.colours || null, this._config.cut_height]);
    const overKey = JSON.stringify(this._config.devices || null);
    if (srcKey === this._srcKey && this._raw && this._floors) {
      if (overKey !== this._overKey) {
        this._overKey = overKey;
        this._rebuild(newView);
        return;
      }
      this._applyEntities();
      this._header();
      if (newView) {
        this._pickMode();
        if (this._renderer) this._build(true);
      } else if (this._devs) {
        this._sig = this._signature();
        this._syncDevices();
        this._req();
      }
      return;
    }
    this._srcKey = srcKey;
    this._overKey = overKey;
    this._loadLayout();
  }
  getCardSize() {
    return 12;
  }
  set hass(hass) {
    this._hass = hass;
    if (!this._devs) return;
    const sig = this._signature();
    if (sig !== this._sig) {
      this._sig = sig;
      this._syncDevices();
      this._req();
    }
  }
  connectedCallback() {
    this._connected = true;
    this._ensure();
  }
  disconnectedCallback() {
    this._connected = false;
    this._teardown();
  }

  _dom() {
    this.shadowRoot.innerHTML = `<style>
      :host{display:block}
      ha-card{position:relative;overflow:hidden;font-family:${FONT};font-weight:500;color:#1b1b1b}
      .wrap{position:relative;height:var(--toon-house-h,calc(100vh - 60px));min-height:var(--toon-house-min-h,380px)}
      canvas{display:block;width:100%;height:100%;touch-action:none;outline:none}
      .bar{position:absolute;left:12px;top:10px;right:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;pointer-events:none}
      h1{margin:0 8px 0 0;font-size:22px;font-weight:900;text-shadow:0 0 4px #fff,0 0 4px #fff}
      button{pointer-events:auto;font:inherit;font-weight:800;font-size:14px;padding:7px 12px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;color:#1b1b1b;cursor:pointer;box-shadow:2px 3px 0 #1b1b1b}
      button.on{background:#FFD83A}
      button.warn{background:#FF8A3D;margin-left:auto}
      .labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
      .rl{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:13px;white-space:nowrap;text-shadow:-2px 0 #fff,2px 0 #fff,0 -2px #fff,0 2px #fff,-1px -1px #fff,1px 1px #fff,-1px 1px #fff,1px -1px #fff}
      .chip{position:absolute;transform:translate(-50%,-140%);pointer-events:auto;cursor:pointer;font-weight:900;font-size:12px;padding:2px 7px;border:2px solid #1b1b1b;border-radius:10px;background:#fff;white-space:nowrap;box-shadow:1px 2px 0 #1b1b1b}
      .chip.active{background:#FFD83A}
      .toast{position:absolute;left:50%;bottom:44px;transform:translateX(-50%);padding:8px 14px;border:3px solid #1b1b1b;border-radius:12px;background:#fff;font-weight:800;font-size:14px;box-shadow:2px 3px 0 #1b1b1b;display:none;pointer-events:auto;cursor:pointer;max-width:86%;text-align:left;white-space:pre-line}
      .foot{position:absolute;left:12px;bottom:8px;right:12px;font-size:12px;font-weight:700;text-shadow:0 0 3px #fff,0 0 3px #fff;pointer-events:none;display:flex;gap:14px;flex-wrap:wrap}
      .err{padding:18px;background:#fff;white-space:pre-line}
      @media (max-width:600px){.rl{font-size:11px}.chip{font-size:11px;padding:1px 5px}h1{font-size:19px}.foot span+span{display:none}button{font-size:13px;padding:6px 9px}}
    </style>
    <ha-card><div class="wrap">
      <div class="labels"></div>
      <div class="bar"><h1></h1><span class="modes" style="display:contents"></span><button class="warn" style="display:none">!</button></div>
      <div class="toast"></div>
      <div class="foot"><span class="counts"></span><span>Drag to turn, pinch or scroll to zoom. Tap a device.</span></div>
    </div></ha-card>`;
    this._wrap = this.shadowRoot.querySelector(".wrap");
    this._labels = this.shadowRoot.querySelector(".labels");
    this._toast = this.shadowRoot.querySelector(".toast");
    this._toast.addEventListener("click", () => {
      const nav = this._toast.dataset.nav;
      this._toast.style.display = "none";
      if (nav) this._navigate(nav);
    });
    this.shadowRoot.querySelector(".warn").addEventListener("click", () => this._say(`Check your house file:\n- ${this._warnings.join("\n- ")}`, "", 20000));
  }
  async _loadLayout() {
    const src = this._config.layout, asked = this._srcKey;
    if (this._failed) { this._failed = false; this._dom(); }
    try {
      let house = src;
      if (typeof src === "string") {
        const r = await fetch(`${src}${src.includes("?") ? "&" : "?"}v=${Date.now()}`);
        if (!r.ok) throw new Error(`the server answered ${r.status}`);
        house = await r.json();
      }
      if (asked !== this._srcKey) return; // a newer setting arrived while this one was loading
      // _prepare changes the house it is given, so an untouched copy is kept to rebuild from
      this._raw = JSON.stringify(house);
      this._layout = JSON.parse(this._raw);
      this._prepare();
    } catch (e) {
      this._fail(`Could not read the house file${typeof src === "string" ? ` at ${src}` : ""}: ${e.message}`);
      return;
    }
    if (this._renderer) this._build(true);
    else this._ensure();
  }
  // devices were added, moved or removed in the editor: same house, same view
  _rebuild(resetView) {
    try {
      this._layout = JSON.parse(this._raw);
      this._prepare();
    } catch (e) {
      this._fail(`Something is wrong with the devices in the card settings: ${e.message}`);
      return;
    }
    if (this._renderer) this._build(!!resetView);
    else this._ensure();
  }
  // fill in defaults and work out the walls once
  _prepare() {
    const L = this._layout;
    if (!L || !Array.isArray(L.floors) || !L.floors.length) throw new Error('it needs a "floors" list with at least one floor');
    this.theme = resolveTheme(this._config.theme || L.theme, { ...(L.colours || {}), ...(this._config.colours || {}) });
    this._H = L.storey_height || 2.4;
    this._warnings = [];
    let bed = 0;
    applyOverlay(L, this._config.devices);
    this._floors = L.floors.map((f, i) => {
      f.id = f.id || `floor${i}`;
      f.name = f.name || (i === 0 ? "Ground" : i === 1 ? "Upstairs" : `Floor ${i}`);
      f.rooms = f.rooms || [];
      if (!f.rooms.length) throw new Error(`floor "${f.name}" has no rooms`);
      f.rooms.forEach((r, k) => {
        r.id = r.id || `${f.id}_room${k}`;
        r.name = r.name || "";
        r.points = roomPoints(r);
      });
      for (const d of f.devices || []) d._file = d.entity === undefined ? null : d.entity;
      const walls = floorWalls(f);
      this._warnings.push(...walls.warnings);
      const styles = {};
      for (const r of f.rooms) {
        styles[r.id] = roomStyle(this.theme, r, bed);
        if (styles[r.id].type === "bedroom") bed++;
      }
      for (const d of f.devices || []) {
        if (d.x == null && !(d.room && d.wall && d.at != null)) this._warnings.push(`Device "${d.name || d.id}" needs either x and y, or room, wall and at.`);
        else if (d.room && !f.rooms.some((r) => r.id === d.room)) this._warnings.push(`Device "${d.name || d.id}" points at room "${d.room}", which is not on ${f.name}.`);
      }
      return { floor: f, walls, styles, off: f.offset || [0, 0], baseY: i * (this._H + GAP) };
    });
    this._applyEntities();
    this._pickMode();
    this._header();
    const modes = this.shadowRoot.querySelector(".modes");
    modes.innerHTML = "";
    const add = (label, mode) => {
      const b = document.createElement("button");
      b.textContent = label;
      b.dataset.mode = String(mode);
      b.addEventListener("click", () => this._setMode(mode));
      modes.appendChild(b);
    };
    this._floors.forEach((F, i) => add(F.floor.name, i));
    add("Outside", "whole");
    const w = this.shadowRoot.querySelector(".warn");
    w.style.display = this._warnings.length ? "" : "none";
    w.textContent = `! ${this._warnings.length}`;
    const house = bbox(this._floors.flatMap((F) => F.floor.rooms.flatMap((r) => r.points.map(([x, y]) => [x + F.off[0], y + F.off[1]]))));
    this._house = house;
    const o = L.outside || {};
    this._plot = { x0: house.x0 - 2, x1: house.x1 + 2, back: house.y0 - 9, front: house.y1 + 7, ...(o.plot || L.plot || {}) };
  }
  // which view to open on, unless the user has already moved to another
  _pickMode() {
    // a new house may have fewer floors than the one being looked at
    if (typeof this._mode === "number" && this._mode >= this._floors.length) this._mode = null;
    if (this._mode != null) return;
    const first = String(this._config.view), idx = this._floors.findIndex((F) => F.floor.id === first);
    this._mode = idx >= 0 ? idx : /^\d+$/.test(first) && Number(first) < this._floors.length ? Number(first) : first === "ground" ? 0 : "whole";
  }
  _header() {
    this.shadowRoot.querySelector("h1").textContent = this._config.title != null ? this._config.title : (this._layout && this._layout.title) || "";
  }
  // links made in the editor ("entities" in the card settings) win over what the house file says
  _applyEntities() {
    const map = this._config.entities || {}, has = (k) => Object.prototype.hasOwnProperty.call(map, k);
    for (const F of this._floors || []) for (const d of F.floor.devices || []) d.entity = has(d.id) ? map[d.id] : d.name && has(d.name) ? map[d.name] : d._file;
  }
  _fail(msg) {
    // remember, so the next good setting (a corrected file address, say) starts from a clean card
    this._failed = true;
    this._floors = null;
    this._srcKey = null;
    this._raw = null;
    this._teardown();
    this._wrap.innerHTML = `<div class="err">${esc(msg)}</div>`;
  }

  _ensure() {
    if (!this._connected || !this._layout || !this._floors || this._renderer) return;
    let renderer;
    try {
      renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "low-power" });
    } catch (e) {
      this._fail("This browser could not start 3D graphics (WebGL2), so the house cannot be drawn here.");
      return;
    }
    this._renderer = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this._wrap.insertBefore(renderer.domElement, this._wrap.firstChild);
    this._scene = new T.Scene();
    this._camera = new T.PerspectiveCamera(32, 1, 0.5, 600);
    this._scene.add(new T.HemisphereLight(0xffffff, 0xd8cbb8, 1.55));
    const sun = new T.DirectionalLight(0xffffff, 2.1);
    sun.position.set(-9, 14, 12);
    this._scene.add(sun);
    this._controls = new OrbitControls(this._camera, renderer.domElement);
    this._controls.enableDamping = false;
    this._controls.minDistance = 4;
    this._controls.maxDistance = 160;
    this._controls.maxPolarAngle = 1.48;
    this._controls.addEventListener("change", () => this._req());
    const el = renderer.domElement;
    this._onDown = (e) => { this._down = [e.clientX, e.clientY]; };
    this._onUp = (e) => {
      if (this._down && Math.hypot(e.clientX - this._down[0], e.clientY - this._down[1]) < 6) this._pick(e.clientX, e.clientY);
      this._down = null;
    };
    el.addEventListener("pointerdown", this._onDown);
    el.addEventListener("pointerup", this._onUp);
    this._ro = new ResizeObserver(() => this._resize());
    this._ro.observe(this._wrap);
    this._resize();
    this._build(true);
  }
  _teardown() {
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
    if (this._ro) this._ro.disconnect();
    this._ro = null;
    if (this._controls) this._controls.dispose();
    this._controls = null;
    this._clear();
    if (this._renderer) {
      const el = this._renderer.domElement;
      el.removeEventListener("pointerdown", this._onDown);
      el.removeEventListener("pointerup", this._onUp);
      this._renderer.dispose();
      this._renderer.forceContextLoss();
      el.remove();
    }
    this._renderer = null;
    this._scene = null;
    this._devs = null;
  }
  _clear() {
    if (!this._root) return;
    this._root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (o.material.map) o.material.map.dispose();
        o.material.dispose();
      }
    });
    this._scene.remove(this._root);
    this._root = null;
    if (this._gradient) this._gradient.dispose();
    this._labels.innerHTML = "";
  }
  _resize() {
    if (!this._renderer) return;
    const w = this._wrap.clientWidth, h = this._wrap.clientHeight;
    if (!w || !h) return;
    this._renderer.setSize(w, h, false);
    this._camera.aspect = w / h;
    this._camera.updateProjectionMatrix();
    if (this._needView) this._view();
    this._req();
  }
  _setMode(mode) {
    if (mode === this._mode) return;
    this._mode = mode;
    if (this._renderer) this._build(true);
  }

  // ---------- drawing helpers ----------
  _material(key, extra) {
    const base = { gradientMap: this._gradient, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, side: T.DoubleSide, ...extra };
    if (!key.startsWith("tex|")) return new T.MeshToonMaterial({ color: key, ...base });
    const [, pattern, a, b] = key.split("|");
    const map = new T.CanvasTexture(drawPattern(pattern, a, b || null));
    map.wrapS = map.wrapT = T.RepeatWrapping;
    map.colorSpace = T.SRGBColorSpace;
    map.anisotropy = 4;
    const size = PATTERN_SIZE[pattern] || 1;
    map.repeat.set(1 / size, 1 / size);
    return new T.MeshToonMaterial({ color: 0xffffff, map, ...base });
  }
  _batch() {
    const card = this;
    return {
      by: new Map(), glass: [], edges: [],
      add(geom, key, edges = true) {
        const g = geom.index ? geom.toNonIndexed() : geom;
        if (g !== geom) geom.dispose();
        if (edges) {
          const e = new T.EdgesGeometry(g, 28);
          this.edges.push(e.attributes.position.array);
          e.dispose();
        }
        if (key === "glass") {
          g.deleteAttribute("uv");
          this.glass.push(g);
          return;
        }
        if (!key.startsWith("tex|")) g.deleteAttribute("uv");
        (this.by.get(key) || this.by.set(key, []).get(key)).push(g);
      },
      box(cx, cz, w, d, y0, y1, key, rotDeg = 0, edges = true) {
        if (y1 - y0 < 0.004 || w < 0.004 || d < 0.004) return;
        const g = new T.BoxGeometry(w, y1 - y0, d);
        if (rotDeg) g.rotateY(-rad(rotDeg));
        g.translate(cx, (y0 + y1) / 2, cz);
        this.add(g, key, edges);
      },
      // a flat polygon (with holes), lying on the ground at height y
      flat(poly, y, key, edges = true) {
        const g = new T.ShapeGeometry(card._shape(poly));
        g.rotateX(Math.PI / 2);
        g.translate(0, y, 0);
        this.add(g, key, edges);
      },
      rect(x0, z0, x1, z1, y, key, edges = true) {
        this.flat({ o: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], h: [] }, y, key, edges);
      },
      // a polygon drawn in its own plane and placed with a matrix
      shape(poly, matrix, key, edges = true) {
        const g = new T.ShapeGeometry(card._shape(poly));
        g.applyMatrix4(matrix);
        this.add(g, key, edges);
      },
      prism(poly, y0, y1, key, edges = true) {
        const g = new T.ExtrudeGeometry(card._shape(poly), { depth: y1 - y0, bevelEnabled: false });
        g.rotateX(Math.PI / 2);
        g.translate(0, y1, 0);
        this.add(g, key, edges);
      },
      quad(a, b, c, d, key, edges = true) {
        const g = new T.BufferGeometry();
        const p = [a, b, c, a, c, d].flat();
        g.setAttribute("position", new T.Float32BufferAttribute(p, 3));
        g.setAttribute("uv", new T.Float32BufferAttribute(new Array(12).fill(0), 2));
        g.computeVertexNormals();
        this.add(g, key, edges);
      },
      build(group) {
        for (const [key, list] of this.by) {
          const m = new T.Mesh(mergeGeometries(list), card._material(key));
          list.forEach((g) => g.dispose());
          group.add(m);
        }
        if (this.glass.length) {
          const m = new T.Mesh(mergeGeometries(this.glass), new T.MeshBasicMaterial({ color: card.theme.glass, transparent: true, opacity: 0.45, depthWrite: false, side: T.DoubleSide }));
          this.glass.forEach((g) => g.dispose());
          m.renderOrder = 2;
          group.add(m);
        }
        if (this.edges.length) {
          const n = this.edges.reduce((a, e) => a + e.length, 0), pos = new Float32Array(n);
          let o = 0;
          for (const e of this.edges) { pos.set(e, o); o += e.length; }
          const lg = new LineSegmentsGeometry();
          lg.setPositions(pos);
          group.add(new LineSegments2(lg, new LineMaterial({ color: card.theme.ink, linewidth: card._ink() })));
        }
      },
    };
  }
  _shape(poly) {
    const sh = new T.Shape(poly.o.map((p) => new T.Vector2(p[0], p[1])));
    for (const h of poly.h || []) sh.holes.push(new T.Path(h.map((p) => new T.Vector2(p[0], p[1]))));
    return sh;
  }
  _ink() {
    return this._wrap.clientWidth < 600 ? 1.6 : 2.4;
  }
  // a mesh with a black cartoon outline (inverted hull), for small or round things
  _outlined(geom, material, grow = 0.035) {
    const g = new T.Group(), mesh = new T.Mesh(geom, material);
    geom.computeBoundingSphere();
    const r = geom.boundingSphere.radius || 0.2, k = 1 + grow / r;
    const hull = new T.Mesh(geom, new T.MeshBasicMaterial({ color: this.theme.ink, side: T.BackSide }));
    hull.scale.set(k, k, k);
    g.add(hull, mesh);
    g.userData.mesh = mesh;
    return g;
  }
  _toon(colour) {
    return new T.MeshToonMaterial({ color: colour, gradientMap: this._gradient });
  }

  // ---------- building the scene ----------
  _build(resetView) {
    const C = this.theme, H = this._H, cut = this._config.cut_height, mode = this._mode;
    this._clear();
    const g = new T.DataTexture(new Uint8Array(C.shade), C.shade.length, 1, T.RedFormat);
    g.minFilter = g.magFilter = T.NearestFilter;
    g.needsUpdate = true;
    this._gradient = g;
    this._scene.background = new T.Color(C.sky);
    this.shadowRoot.querySelector("ha-card").style.background = C.sky;
    const root = (this._root = new T.Group());
    this._scene.add(root);
    this._devs = [];
    this._pickables = [];
    this._roomLabels = [];
    this._tweens = [];
    this._outside(root);
    this._floors.forEach((F, i) => {
      if (mode !== "whole" && i > mode) return;
      const focus = mode === i;
      this._floor(root, F, i, focus ? cut : H, focus);
    });
    if (mode === "whole") this._roofs(root);
    this.shadowRoot.querySelectorAll("button[data-mode]").forEach((b) => b.classList.toggle("on", b.dataset.mode === String(mode)));
    this._sig = this._signature();
    this._syncDevices();
    if (resetView) this._view();
    this._req();
  }
  _view() {
    const mode = this._mode, w = this._wrap.clientWidth, h = this._wrap.clientHeight;
    if (!w || !h) { this._needView = true; return; }
    this._needView = false;
    const hb = this._house, cx = (hb.x0 + hb.x1) / 2, cz = (hb.y0 + hb.y1) / 2, size = Math.max(hb.x1 - hb.x0, hb.y1 - hb.y0, 6);
    const aspect = w / h, fit = Math.max(1, 0.95 / aspect);
    const whole = mode === "whole", top = this._floors.length * (this._H + GAP);
    const t = whole ? [cx, top * 0.4, cz + size * 0.1] : [cx, this._floors[mode].baseY + 0.4, cz + size * 0.04];
    const d = new T.Vector3(...(whole ? [0.46, 0.36, 0.81] : [0.22, 0.8, 0.56])).normalize().multiplyScalar((whole ? size * 3.3 + top * 0.8 : size * 2.45) * fit);
    this._controls.target.set(...t);
    this._camera.position.set(t[0] + d.x, t[1] + d.y, t[2] + d.z);
    this._controls.update();
  }

  _outside(root) {
    const C = this.theme, P = this._plot, O = this._layout.outside || {}, b = this._batch(), g = new T.Group();
    const cx = (P.x0 + P.x1) / 2, w = P.x1 - P.x0, hb = this._house, ground = this._floors[0];
    b.box(cx, (P.back + P.front) / 2, w + 0.4, P.front - P.back + 0.4, -1.4, -0.3, C.earth);
    b.box(cx, (P.back + P.front) / 2, w, P.front - P.back, -0.3, -0.08, C.lawn);
    b.rect(P.x0 + 0.05, P.back + 0.05, P.x1 - 0.05, P.front - 0.05, -0.075, tex("stripes", C.lawn, C.lawn2), false);
    if (O.road !== false) {
      b.box(cx, P.front + 0.9, w + 0.4, 1.4, -1.4, -0.14, C.kerb);
      b.box(cx, P.front + 3.9, w + 0.4, 4.6, -1.4, -0.22, C.road);
      for (let x = P.x0 + 1; x < P.x1 - 1; x += 3) b.rect(x, P.front + 3.8, x + 1.5, P.front + 3.98, -0.215, C.white, false);
    }
    const frontDoor = ground.walls.openings.find((o) => o.kind === "frontdoor");
    const garage = ground.walls.openings.find((o) => o.kind === "garage" && o.n[1] === 1);
    let drives = O.drive || O.drives, paths = O.path || O.paths;
    const rects = (v) => (!v || !v.length ? [] : Array.isArray(v[0]) ? v : [v]);
    if (drives == null && garage) drives = [[garage.b[0] - 0.4, garage.b[3], garage.b[2] + 0.4, P.front]];
    if (paths == null && frontDoor && frontDoor.n[1] === 1) paths = [[frontDoor.b[0] - 0.1, frontDoor.b[3], frontDoor.b[2] + 0.1, P.front]];
    drives = rects(drives);
    paths = rects(paths);
    for (const r of paths) { b.box((r[0] + r[2]) / 2, (r[1] + r[3]) / 2, r[2] - r[0], r[3] - r[1], -0.08, -0.05, C.path); }
    for (const r of drives) {
      b.box((r[0] + r[2]) / 2, (r[1] + r[3]) / 2, r[2] - r[0], r[3] - r[1], -0.08, -0.045, C.drive);
      b.rect(r[0] + 0.03, r[1] + 0.03, r[2] - 0.03, r[3] - 0.03, -0.04, tex("paving", C.drive, C.drive2), false);
    }
    for (const r of rects(O.patio || O.patios)) {
      b.box((r[0] + r[2]) / 2, (r[1] + r[3]) / 2, r[2] - r[0], r[3] - r[1], -0.08, -0.04, C.patio);
      b.rect(r[0] + 0.03, r[1] + 0.03, r[2] - 0.03, r[3] - 0.03, -0.035, tex("tile", C.patio, C.patio2), false);
    }
    const paved = (x, z) => [...drives, ...paths].some((r) => x > r[0] - 0.3 && x < r[2] + 0.3 && z > r[1] - 0.3 && z < r[3] + 0.3);
    // fences and hedges run round the back garden: from the back of the plot to level with the back of the house
    const sideEnd = Math.min(hb.y1, Math.max(hb.y0 + 2, (hb.y0 + hb.y1) / 2));
    const fence = O.fence || ["w", "n", "e"], hedge = O.hedge || [];
    const run = (side) => (side === "n" ? [P.x0, P.back + 0.06, P.x1, P.back + 0.06] : side === "w" ? [P.x0 + 0.06, P.back, P.x0 + 0.06, sideEnd] : side === "e" ? [P.x1 - 0.06, P.back, P.x1 - 0.06, sideEnd] : [P.x0, P.front - 0.06, P.x1, P.front - 0.06]);
    for (const side of fence) {
      if (hedge.includes(side)) continue;
      const [x0, z0, x1, z1] = run(side), len = Math.hypot(x1 - x0, z1 - z0), alongX = z0 === z1;
      const low = side === "s", top = low ? 0.9 : 1.6;
      const panel = new T.ShapeGeometry(this._shape({ o: [[0, -0.08], [len, -0.08], [len, top], [0, top]], h: [] }));
      const m = new T.Matrix4().makeBasis(alongX ? new T.Vector3(1, 0, 0) : new T.Vector3(0, 0, 1), new T.Vector3(0, 1, 0), alongX ? new T.Vector3(0, 0, 1) : new T.Vector3(-1, 0, 0)).setPosition(x0, 0, z0);
      panel.applyMatrix4(m);
      b.add(panel, tex("planks", C.fence, C.fencePost), true);
      for (let s = 0; s <= len + 0.01; s += len / Math.max(1, Math.round(len / 1.9))) b.box(alongX ? x0 + s : x0, alongX ? z0 : z0 + s, 0.16, 0.16, -0.08, top + 0.14, C.fencePost);
    }
    b.build(g);
    const ball = (x, y, z, r, colour, squash = 1, grow = 0.07) => {
      const m = this._outlined(new T.SphereGeometry(r, 18, 12), this._toon(colour), grow);
      m.position.set(x, y, z);
      m.scale.y = squash;
      g.add(m);
    };
    for (const side of hedge) {
      const [x0, z0, x1, z1] = run(side), len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(2, Math.round(len / 1.15));
      const inX = side === "w" ? 0.7 : side === "e" ? -0.7 : 0, inZ = side === "n" ? 0.7 : side === "s" ? -0.7 : 0;
      for (let i = 0; i <= n; i++) {
        const hx = x0 + ((x1 - x0) * i) / n + inX, hz = z0 + ((z1 - z0) * i) / n + inZ;
        // leave the hedge out where it would grow into the house
        if (hx > hb.x0 - 1.3 && hx < hb.x1 + 1.3 && hz > hb.y0 - 1.3 && hz < hb.y1 + 1.3) continue;
        ball(hx, 0.75 + (i % 2) * 0.1, hz, 0.95, C.leaf[i % 2 ? 0 : 2], 0.95);
      }
    }
    const tree = (t) => {
      const s = t.size || 1, leaf = t.colour || (t.blossom ? C.blossom : C.leaf[0]);
      const trunk = this._outlined(new T.CylinderGeometry(0.16 * s, 0.24 * s, 1.7 * s, 10), this._toon(C.trunk));
      trunk.position.set(t.x, 0.85 * s - 0.08, t.y);
      g.add(trunk);
      for (const [dx, dy, dz, r] of [[0, 2.35, 0, 1.2], [-0.85, 1.85, 0.2, 0.85], [0.9, 1.9, -0.1, 0.8], [0.1, 1.8, 0.85, 0.75], [-0.2, 1.9, -0.8, 0.7]]) ball(t.x + dx * s, dy * s, t.y + dz * s, r * s, leaf);
    };
    const trees = O.trees || [
      { x: P.x0 + 2.2, y: P.back + 2.6, size: 1.2 },
      { x: P.x1 - 2.6, y: P.back + 4.2, size: 0.95, colour: C.leaf[1] },
      { x: P.x1 - 1.7, y: P.front - 2.2, size: 0.8, blossom: true },
    ];
    trees.forEach(tree);
    // bushes under ground-floor windows, unless that spot is paved
    for (const o of ground.walls.openings) {
      if (o.kind !== "window" || !o.ext || O.bushes === false) continue;
      const mx = (o.b[0] + o.b[2]) / 2 + o.n[0] * 0.75, mz = (o.b[1] + o.b[3]) / 2 + o.n[1] * 0.75;
      if (paved(mx, mz)) continue;
      const ax = o.n[0] === 0 ? 1 : 0, az = o.n[0] === 0 ? 0 : 1;
      ball(mx - ax * 0.4, 0.3, mz - az * 0.4, 0.5, C.leaf[1], 0.85, 0.05);
      ball(mx + ax * 0.4, 0.26, mz + az * 0.4, 0.44, C.leaf[0], 0.85, 0.05);
    }
    // a flower border along the back fence
    if (O.flowers !== false) {
      const fb = this._batch();
      for (let x = P.x0 + 1, i = 0; x < P.x1 - 1; x += 0.55, i++) {
        const s = new T.SphereGeometry(0.13, 8, 6);
        s.translate(x, 0.12 + (i % 3) * 0.05, P.back + 0.6 + (i % 2) * 0.3);
        fb.add(s, C.flowers[i % C.flowers.length], false);
      }
      fb.build(g);
    }
    if (O.mailbox !== false && frontDoor && paths.length) {
      const r = paths[0], x = r[2] + 0.5, z = P.front - 0.6, mb = this._batch();
      mb.box(x, z, 0.1, 0.1, -0.08, 0.95, C.fencePost);
      mb.box(x, z, 0.32, 0.5, 0.95, 1.25, C.bad);
      mb.build(g);
    }
    const white = () => new T.MeshBasicMaterial({ color: C.cloud });
    const far = Math.max(w, P.front - P.back);
    for (const [fx, y, fz, s] of [[-0.9, 10, -0.5, 1.5], [1.3, 12, -0.2, 1.9], [0.4, 14, -1.3, 2.3], [-1.1, 9, 0.6, 1.2], [1.6, 15, -1.2, 2.0]]) {
      for (const [dx, dy, dz, r] of [[0, 0, 0, 1], [1.1, -0.15, 0.1, 0.75], [-1.1, -0.2, 0, 0.7], [0.3, 0.45, -0.1, 0.7]]) {
        const puff = this._outlined(new T.SphereGeometry(r * s, 16, 10), white(), 0.09);
        puff.position.set(cx + fx * far * 0.55 + dx * s, y + dy * s, (P.back + P.front) / 2 + fz * far * 0.5 + dz * s);
        puff.scale.y = 0.7;
        g.add(puff);
      }
    }
    const sunBall = this._outlined(new T.SphereGeometry(2.4, 24, 16), new T.MeshBasicMaterial({ color: C.sun }), 0.12);
    sunBall.position.set(cx + far * 0.9, 19, P.back - far * 0.4);
    g.add(sunBall);
    root.add(g);
  }

  _floor(root, F, index, wallH, focus) {
    const C = this.theme, { floor, walls: W, styles, off, baseY } = F, b = this._batch(), g = new T.Group();
    g.position.set(off[0], baseY, off[1]);
    for (const s of W.slab) b.prism(s, index === 0 ? -0.22 : -GAP, 0, index === 0 ? C.slab : this._exteriorKey());
    for (const r of floor.rooms) {
      const st = styles[r.id];
      b.flat({ o: r.points, h: [] }, 0.02, st.pattern === "plain" || !PATTERN_SIZE[st.pattern] ? st.floor : tex(st.pattern, st.floor, st.floor2), false);
    }
    this._walls(b, F, wallH);
    const covers = new Set((floor.devices || []).filter((d) => d.kind === "cover").map((d) => this._openingFor(F, d)).filter(Boolean));
    for (const o of W.openings) this._opening(b, F, o, wallH, covers.has(o));
    for (const r of floor.rooms) {
      if (styles[r.id].type !== "stairs" || index !== 0 || this._floors.length < 2) continue;
      const bb = bbox(r.points), alongZ = bb.y1 - bb.y0 >= bb.x1 - bb.x0, n = 12, up = r.up || (alongZ ? "n" : "e");
      const len = (alongZ ? bb.y1 - bb.y0 : bb.x1 - bb.x0) - 0.5, run = len / n, wide = (alongZ ? bb.x1 - bb.x0 : bb.y1 - bb.y0) - 0.2;
      for (let i = 0; i < n; i++) {
        const s = 0.1 + run * (i + 0.5), top = Math.min(wallH + 0.6, ((this._H + GAP) / n) * (i + 1));
        if (alongZ) b.box((bb.x0 + bb.x1) / 2, up === "n" ? bb.y1 - s : bb.y0 + s, wide, run, 0, top, C.woodLight);
        else b.box(up === "e" ? bb.x0 + s : bb.x1 - s, (bb.y0 + bb.y1) / 2, run, wide, 0, top, C.woodLight);
      }
    }
    const trim = wallH < 2 ? wallH + 0.2 : 9;
    let beds = 0;
    for (const f of floor.furniture || []) {
      const place = (geo) => {
        geo.rotateY(-rad(f.rot || 0));
        geo.translate(f.x, 0, f.y);
        return geo;
      };
      const isBed = f.type === "bed" || f.type === "single_bed";
      for (const [x, z, w, d, y0, y1raw, colour, shape] of furnitureParts(f, C, beds)) {
        const y1 = Math.min(y1raw, trim);
        if (y1 - y0 < 0.01) continue;
        let geo, edges = f.type !== "rug";
        if (shape === "cyl") { geo = new T.CylinderGeometry(w / 2, w / 2, y1 - y0, 14); edges = false; } else if (shape === "ball") { geo = new T.SphereGeometry(w / 2, 12, 8); edges = false; } else if (shape === "wheel") { geo = new T.CylinderGeometry(w / 2, w / 2, d, 14); geo.rotateZ(Math.PI / 2); edges = false; } else geo = new T.BoxGeometry(w, y1 - y0, d);
        geo.translate(x, (y0 + y1) / 2, z);
        b.add(place(geo), colour, edges);
      }
      if (isBed) beds++;
    }
    b.build(g);
    root.add(g);
    const whole = this._mode === "whole";
    for (const d of floor.devices || []) {
      if (d.x == null && !(d.room && d.wall && d.at != null)) continue;
      if (d.room && !floor.rooms.some((r) => r.id === d.room)) continue;
      const onOpening = d.kind === "cover" && this._openingFor(F, d);
      if (!focus && !(whole && d.kind === "camera") && !onOpening) continue;
      this._device(g, F, d, wallH, focus || whole);
    }
    if (focus) {
      for (const r of floor.rooms) {
        if (!r.name) continue;
        const bb = bbox(r.points), el = document.createElement("div");
        el.className = "rl";
        el.textContent = r.name;
        this._labels.appendChild(el);
        const lp = r.label || [(bb.x0 + bb.x1) / 2, (bb.y0 + bb.y1) / 2];
        this._roomLabels.push({ el, pos: new T.Vector3(off[0] + lp[0], baseY + 0.1, off[1] + lp[1]), small: bb.x1 - bb.x0 < 1.7 || bb.y1 - bb.y0 < 1.7 });
      }
    }
  }
  _exteriorKey() {
    const C = this.theme;
    return C.exteriorPattern ? tex(C.exteriorPattern, C.exterior, C.exterior2) : C.exterior;
  }
  // how high an opening is cut into a wall of this height: [bottom, top], or null if the wall is lower than its sill
  _cutRange(o, wallH) {
    const v0 = o.kind === "window" ? SILL : 0, head = o.kind === "window" || o.kind === "bifold" || o.kind === "garage" ? HEAD : DOOR_HEAD;
    if (v0 >= wallH - 0.02) return null;
    return [v0, head >= wallH - 0.05 ? wallH : head];
  }
  // every wall face is one flat shape with its door and window holes cut out, so there are no seams
  _walls(b, F, wallH) {
    const C = this.theme, W = F.walls, ext = this._exteriorKey();
    const cuts = W.openings.filter((o) => o.kind !== "opening").map((o) => ({ o, r: this._cutRange(o, wallH) })).filter((c) => c.r);
    const X = new T.Vector3(), Y = new T.Vector3(0, 1, 0), Z = new T.Vector3(), M = new T.Matrix4();
    for (const poly of W.solid) {
      for (const ring of [poly.o, ...poly.h]) {
        for (let i = 0; i < ring.length; i++) {
          const p = ring[i], q = ring[(i + 1) % ring.length], dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy);
          if (len < 0.004) continue;
          const nx = dy / len, ny = -dx / len, mx = (p[0] + q[0]) / 2 + nx * 0.07, my = (p[1] + q[1]) / 2 + ny * 0.07;
          const room = W.roomAt(mx, my);
          const key = room ? F.styles[room.id].wall : W.isInside(mx, my) ? C.inner : ext;
          const horiz = Math.abs(dy) < 1e-6, vert = Math.abs(dx) < 1e-6, list = [];
          for (const { o, r } of cuts) {
            const oh = o.n[0] === 0;
            if ((oh && !horiz) || (!oh && !vert)) continue;
            const [bx0, by0, bx1, by1] = o.b;
            if (oh) {
              if (p[1] < by0 - 0.012 || p[1] > by1 + 0.012) continue;
              const lo = Math.max(bx0, Math.min(p[0], q[0])), hi = Math.min(bx1, Math.max(p[0], q[0]));
              if (hi - lo < 0.02) continue;
              const a = Math.abs(lo - q[0]), c = Math.abs(hi - q[0]);
              list.push({ u0: Math.min(a, c), u1: Math.max(a, c), v0: r[0], v1: r[1] });
            } else {
              if (p[0] < bx0 - 0.012 || p[0] > bx1 + 0.012) continue;
              const lo = Math.max(by0, Math.min(p[1], q[1])), hi = Math.min(by1, Math.max(p[1], q[1]));
              if (hi - lo < 0.02) continue;
              const a = Math.abs(lo - q[1]), c = Math.abs(hi - q[1]);
              list.push({ u0: Math.min(a, c), u1: Math.max(a, c), v0: r[0], v1: r[1] });
            }
          }
          X.set(-dx / len, 0, -dy / len);
          Z.crossVectors(X, Y);
          M.makeBasis(X, Y, Z).setPosition(q[0], 0, q[1]);
          const faces = list.length ? faceWithCutouts(len, wallH, list) : [{ o: [[0, 0], [len, 0], [len, wallH], [0, wallH]], h: [] }];
          for (const f of faces) b.shape(f, M, key, true);
        }
      }
    }
    // the sides, sill and head inside each opening
    for (const { o, r } of cuts) {
      const [x0, z0, x1, z1] = o.b, [v0, v1] = r, k = C.wallCut;
      if (o.n[0] === 0) {
        b.quad([x0, v0, z0], [x0, v0, z1], [x0, v1, z1], [x0, v1, z0], k);
        b.quad([x1, v0, z0], [x1, v0, z1], [x1, v1, z1], [x1, v1, z0], k);
      } else {
        b.quad([x0, v0, z0], [x1, v0, z0], [x1, v1, z0], [x0, v1, z0], k);
        b.quad([x0, v0, z1], [x1, v0, z1], [x1, v1, z1], [x0, v1, z1], k);
      }
      if (v0 > 0) b.quad([x0, v0, z0], [x1, v0, z0], [x1, v0, z1], [x0, v0, z1], k);
      if (v1 < wallH - 0.001) b.quad([x0, v1, z0], [x1, v1, z0], [x1, v1, z1], [x0, v1, z1], k);
    }
    for (const c of W.cap(cuts.filter((x) => x.r[1] >= wallH - 0.001).map((x) => x.o))) b.flat(c, wallH, C.wallCut, true);
  }
  // a box filling the wall thickness across an opening, between two heights
  _obox(b, o, y0, y1, key, thick = 1, along0 = 0, along1 = 1, edges = true, shift = 0) {
    if (y1 - y0 < 0.01) return;
    const [x0, z0, x1, z1] = o.b, horiz = o.n[0] === 0;
    if (horiz) {
      const w = x1 - x0, t = (z1 - z0) * thick;
      b.box(x0 + (w * (along0 + along1)) / 2, (z0 + z1) / 2 + o.n[1] * shift, w * (along1 - along0), t, y0, y1, key, 0, edges);
    } else {
      const w = z1 - z0, t = (x1 - x0) * thick;
      b.box((x0 + x1) / 2 + o.n[0] * shift, z0 + (w * (along0 + along1)) / 2, t, w * (along1 - along0), y0, y1, key, 0, edges);
    }
  }
  _opening(b, F, o, wallH, hasCover) {
    const C = this.theme, horiz = o.n[0] === 0, len = horiz ? o.b[2] - o.b[0] : o.b[3] - o.b[1], thick = horiz ? o.b[3] - o.b[1] : o.b[2] - o.b[0], f = 0.07 / len;
    const frame = (y0, y1, bars) => {
      this._obox(b, o, y0, y1, C.trim, 0.45, 0, f);
      this._obox(b, o, y0, y1, C.trim, 0.45, 1 - f, 1);
      this._obox(b, o, y1 - 0.07, y1, C.trim, 0.45, f, 1 - f);
      for (let i = 1; i < bars; i++) this._obox(b, o, y0, y1 - 0.07, C.trim, 0.45, i / bars - f / 2, i / bars + f / 2);
      this._obox(b, o, y0, y1 - 0.07, "glass", 0.12, f, 1 - f, false);
    };
    const full = wallH >= HEAD;
    switch (o.kind) {
      case "window": {
        this._obox(b, o, SILL - 0.07, SILL + 0.03, C.trim, 1.0 + 0.2 / thick, -0.04 / len, 1 + 0.04 / len, true, 0.06);
        frame(SILL + 0.03, HEAD, len > 1.25 ? 3 : len > 0.8 ? 2 : 1);
        if (full && o.ext) {
          // curtains just inside the glass
          const cw = Math.min(0.32, len * 0.2) / len, inset = -(thick / 2 + 0.05);
          this._obox(b, o, SILL - 0.15, HEAD + 0.08, C.curtain, 0.06 / thick, 0, cw, true, inset);
          this._obox(b, o, SILL - 0.15, HEAD + 0.08, C.curtain, 0.06 / thick, 1 - cw, 1, true, inset);
        }
        break;
      }
      case "bifold": frame(0, HEAD, Math.max(2, Math.round(len / 0.75))); break;
      case "frontdoor":
      case "extdoor": {
        const col = o.colour || (o.kind === "frontdoor" ? C.door : C.doorInner);
        this._obox(b, o, 0, DOOR_HEAD - 0.06, col, 0.3, f, 1 - f);
        this._obox(b, o, 0, DOOR_HEAD, C.trim, 0.5, 0, f);
        this._obox(b, o, 0, DOOR_HEAD, C.trim, 0.5, 1 - f, 1);
        this._obox(b, o, DOOR_HEAD - 0.06, DOOR_HEAD, C.trim, 0.5, f, 1 - f);
        this._obox(b, o, 0.95, 1.07, C.knob, 0.1 / thick, 1 - f - 0.14 / len, 1 - f - 0.04 / len, true, thick * 0.15 + 0.06);
        if (o.kind === "frontdoor") {
          this._obox(b, o, 1.35, 1.75, "glass", 0.34, 0.3, 0.7, false);
          this._obox(b, o, -0.08, 0.02, C.path, 0.6 / thick, -0.15 / len, 1 + 0.15 / len, true, thick / 2 + 0.3);
        }
        break;
      }
      case "garage":
        if (!hasCover) {
          this._obox(b, o, 0, Math.min(HEAD, wallH), C.garage, 0.2);
          for (let y = 0.5; y < Math.min(HEAD, wallH) - 0.1; y += 0.5) this._obox(b, o, y, y + 0.03, C.garage2, 0.24, 0.03, 0.97, false);
        }
        break;
      case "door": {
        // an inside door, standing ajar into the room it belongs to
        const hgt = Math.min(2.0, wallH), [x0, z0, x1, z1] = o.b, L2 = len - 0.06, a = rad(72);
        const hx = horiz ? x0 + 0.03 : (x0 + x1) / 2, hz = horiz ? (z0 + z1) / 2 : z0 + 0.03;
        const ax = horiz ? 1 : 0, az = horiz ? 0 : 1, dxn = Math.cos(a) * ax - Math.sin(a) * o.n[0], dzn = Math.cos(a) * az - Math.sin(a) * o.n[1];
        const leaf = new T.BoxGeometry(L2, hgt, 0.05);
        leaf.rotateY(Math.atan2(-dzn, dxn));
        leaf.translate(hx + (dxn * L2) / 2, hgt / 2, hz + (dzn * L2) / 2);
        b.add(leaf, C.doorInner, true);
        break;
      }
      default:
    }
  }

  // ---------- roofs ----------
  _roofs(root) {
    const L = this._layout, C = this.theme, H = this._H, b = this._batch(), g = new T.Group();
    const levelY = (n) => n * (H + GAP) - GAP;
    let roofs = L.roofs;
    if (!Array.isArray(roofs)) {
      // nothing given: a gable over the top floor, flat roofs over any lower part that sticks out
      roofs = [];
      const top = this._floors[this._floors.length - 1], tb = bbox(top.floor.rooms.flatMap((r) => r.points.map(([x, y]) => [x + top.off[0], y + top.off[1]])));
      roofs.push({ type: "gable", rect: [tb.x0, tb.y0, tb.x1, tb.y1], level: this._floors.length, ridge: tb.x1 - tb.x0 >= tb.y1 - tb.y0 ? "x" : "y" });
      for (let i = 0; i < this._floors.length - 1; i++) {
        const lo = this._floors[i], up = this._floors[i + 1];
        for (const p of uncovered(lo.walls.slab, up.walls.slab, [up.off[0] - lo.off[0], up.off[1] - lo.off[1]])) roofs.push({ type: "flat", points: p.o.map(([x, y]) => [x + lo.off[0], y + lo.off[1]]), level: i + 1 });
      }
    }
    const roofKey = C.roofPattern ? tex(C.roofPattern, C.roof, C.roof2) : C.roof, wallKey = this._exteriorKey();
    // one sloping surface: tiles on top, a white board under it that shows as fascia at the edges.
    // origin is the low corner, xAxis runs along the eave, up runs up the slope; xf turns the whole roof if needed
    const slope = (xf, origin, xAxis, up, wide, run) => {
      const m = new T.Matrix4().makeBasis(xAxis, up, new T.Vector3().crossVectors(xAxis, up)).setPosition(origin).premultiply(xf);
      const top = new T.ShapeGeometry(this._shape({ o: [[0, 0], [wide, 0], [wide, run], [0, run]], h: [] }));
      top.translate(0, 0, 0.012);
      top.applyMatrix4(m);
      b.add(top, roofKey, true);
      const board = new T.BoxGeometry(wide, run, 0.13);
      board.translate(wide / 2, run / 2, -0.065);
      board.applyMatrix4(m);
      b.add(board, C.trim, true);
    };
    const turn = (a) => new T.Matrix4().makeRotationY(a);
    for (const r of roofs) {
      const base = r.base != null ? r.base : levelY(r.level || this._floors.length);
      if (r.type === "flat") {
        const pts = r.points || [[r.rect[0], r.rect[1]], [r.rect[2], r.rect[1]], [r.rect[2], r.rect[3]], [r.rect[0], r.rect[3]]], big = bbox(pts);
        const grow = (k) => ({ o: pts.map(([x, y]) => [x + Math.sign(x - (big.x0 + big.x1) / 2) * k, y + Math.sign(y - (big.y0 + big.y1) / 2) * k]), h: [] });
        b.prism(grow(EXT_WALL + 0.14), base, base + 0.16, C.trim);
        b.prism(grow(EXT_WALL + 0.02), base + 0.16, base + 0.22, C.roof);
        continue;
      }
      const [rx0, ry0, rx1, ry1] = r.rect, wx0 = rx0 - EXT_WALL, wx1 = rx1 + EXT_WALL, wz0 = ry0 - EXT_WALL, wz1 = ry1 + EXT_WALL;
      const ov = r.overhang != null ? r.overhang : 0.45;
      if (r.type === "gable") {
        // drawn with the ridge running along z, then turned a quarter if the ridge runs along x
        const alongZ = (r.ridge || "y") === "y", xf = alongZ ? new T.Matrix4() : turn(Math.PI / 2);
        const [a0, a1, r0, r1] = alongZ ? [wx0, wx1, wz0, wz1] : [-wz1, -wz0, wx0, wx1];
        const pitch = rad(r.pitch || 30), half = (a1 - a0) / 2, rise = half * Math.tan(pitch), mid = (a0 + a1) / 2, ovg = ov * 0.8;
        const body = new T.ExtrudeGeometry(new T.Shape([new T.Vector2(a0, 0), new T.Vector2(a1, 0), new T.Vector2(mid, rise)]), { depth: r1 - r0, bevelEnabled: false });
        body.translate(0, base, r0);
        body.applyMatrix4(xf);
        b.add(body, wallKey);
        const run = (half + ov) / Math.cos(pitch) + 0.05, wide = r1 - r0 + 2 * ovg, eaveY = base - ov * Math.tan(pitch);
        slope(xf, new T.Vector3(mid - half - ov, eaveY, r0 - ovg), new T.Vector3(0, 0, 1), new T.Vector3(Math.cos(pitch), Math.sin(pitch), 0), wide, run);
        slope(xf, new T.Vector3(mid + half + ov, eaveY, r1 + ovg), new T.Vector3(0, 0, -1), new T.Vector3(-Math.cos(pitch), Math.sin(pitch), 0), wide, run);
      } else if (r.type === "lean") {
        // drawn with the high side at the back (-z), then turned to face the right way
        const high = r.high || "n", rise = r.rise != null ? r.rise : 0.6;
        const xf = turn({ n: 0, s: Math.PI, w: Math.PI / 2, e: -Math.PI / 2 }[high] || 0);
        const [x0, x1, z0, z1] = { n: [wx0, wx1, wz0, wz1], s: [-wx1, -wx0, -wz1, -wz0], w: [-wz1, -wz0, wx0, wx1], e: [wz0, wz1, -wx1, -wx0] }[high] || [wx0, wx1, wz0, wz1];
        const depth = z1 - z0, ang = Math.atan2(rise, depth), side = r.side_overhang != null ? r.side_overhang : 0.2;
        // fill the wedge of wall between the wall tops and the sloping roof
        const wedge = new T.ExtrudeGeometry(new T.Shape([new T.Vector2(0, 0), new T.Vector2(depth, 0), new T.Vector2(depth, rise + 0.06)]), { depth: x1 - x0, bevelEnabled: false });
        wedge.applyMatrix4(new T.Matrix4().makeBasis(new T.Vector3(0, 0, -1), new T.Vector3(0, 1, 0), new T.Vector3(1, 0, 0)).setPosition(x0, base, z1).premultiply(xf));
        b.add(wedge, wallKey);
        slope(xf, new T.Vector3(x0 - side, base + 0.08 - ov * Math.tan(ang), z1 + ov), new T.Vector3(1, 0, 0), new T.Vector3(0, Math.sin(ang), -Math.cos(ang)), x1 - x0 + 2 * side, (depth + ov) / Math.cos(ang));
      }
    }
    for (const c of L.chimneys || []) {
      const w = c.w || 0.6, d = c.d || 0.6, top = c.top || levelY(this._floors.length) + 3.2, from = c.from != null ? c.from : levelY(this._floors.length);
      b.box(c.x, c.y, w, d, from, top, C.chimney);
      b.box(c.x, c.y, w + 0.16, d + 0.16, top, top + 0.12, C.trim);
      b.box(c.x, c.y, w * 0.45, d * 0.45, top + 0.12, top + 0.42, C.chimney);
      if (c.smoke !== false) {
        [[0.15, 0.95, 0.28], [0.5, 1.6, 0.4], [0.2, 2.5, 0.55]].forEach(([dx, dy, r]) => {
          const puff = this._outlined(new T.SphereGeometry(r, 14, 10), new T.MeshBasicMaterial({ color: C.cloud }), 0.05);
          puff.position.set(c.x + dx, top + dy, c.y);
          g.add(puff);
        });
      }
    }
    b.build(g);
    root.add(g);
  }

  // ---------- devices ----------
  _openingFor(F, d) {
    if (!d.wall || d.at == null) return null;
    return F.walls.openings.find((o) => o.room === d.room && o.wall === d.wall && o.at <= d.at && d.at <= o.at + o.width) || null;
  }
  _device(group, F, d, wallH, withChip) {
    const C = this.theme, floor = F.floor, off = F.off;
    const room = floor.rooms.find((r) => r.id === d.room), rb = room ? bbox(room.points) : null;
    const basic = (c) => new T.MeshBasicMaterial({ color: c, transparent: true });
    const wallPos = (inset) => (d.wall === "n" ? [d.at, rb.y0 + inset] : d.wall === "s" ? [d.at, rb.y1 - inset] : d.wall === "w" ? [rb.x0 + inset, d.at] : [rb.x1 - inset, d.at]);
    const [x, z] = d.x != null ? [d.x, d.y] : wallPos(0.14);
    const alongX = d.wall === "n" || d.wall === "s";
    const dev = { d, anchor: new T.Vector3(), pick: null };
    const put = (obj, px, py, pz) => { obj.position.set(px, py, pz); group.add(obj); return obj; };
    let anchorY = 1.0;
    switch (d.kind) {
      case "light": {
        const y = Math.max(1.75, wallH + 0.5);
        put(new T.Mesh(new T.CylinderGeometry(0.015, 0.015, 0.45, 6), basic(C.ink)), x, y + 0.35, z);
        const shadeCone = put(this._outlined(new T.CylinderGeometry(0.1, 0.27, 0.2, 16, 1, true), new T.MeshBasicMaterial({ color: C.white, side: T.DoubleSide }), 0.03), x, y + 0.14, z);
        shadeCone.userData.mesh.material.transparent = true;
        const bulb = put(this._outlined(new T.SphereGeometry(0.15, 16, 12), basic("#ffffff")), x, y, z);
        const glow = new T.Mesh(new T.CircleGeometry(1.3, 28), new T.MeshBasicMaterial({ color: C.bulbOn, transparent: true, opacity: 0.42, depthWrite: false }));
        glow.rotation.x = -Math.PI / 2;
        glow.renderOrder = 1;
        put(glow, x, 0.07, z);
        dev.set = (st) => {
          bulb.userData.mesh.material.color.set(st.planned ? C.planned : st.active ? C.bulbOn : "#ffffff");
          shadeCone.userData.mesh.material.color.set(st.planned ? C.planned : C.white);
          glow.visible = !!st.active;
        };
        anchorY = y;
        break;
      }
      case "cover": {
        const o = this._openingFor(F, d);
        if (!o) { anchorY = this._marker(dev, put, x, 1.6, z, 0.3, 0.3, 0.12); break; }
        const [x0, z0, x1, z1] = o.b, horiz = o.n[0] === 0, garage = o.kind === "garage";
        const len = horiz ? x1 - x0 : z1 - z0, thick = horiz ? z1 - z0 : x1 - x0;
        const out = garage ? 0 : thick / 2 + 0.09, px = (x0 + x1) / 2 + o.n[0] * out, pz = (z0 + z1) / 2 + o.n[1] * out;
        const bottom = garage || o.kind === "bifold" ? 0 : SILL, drop = HEAD - bottom;
        const size = (l, h, t) => (horiz ? new T.BoxGeometry(l, h, t) : new T.BoxGeometry(t, h, l));
        const cv = document.createElement("canvas");
        cv.width = 8; cv.height = 32;
        const g2 = cv.getContext("2d");
        g2.fillStyle = garage ? C.garage : C.shutter; g2.fillRect(0, 0, 8, 32);
        g2.fillStyle = garage ? C.garage2 : C.shutter2; g2.fillRect(0, 0, 8, 4);
        const slats = new T.CanvasTexture(cv);
        slats.wrapT = T.RepeatWrapping;
        slats.colorSpace = T.SRGBColorSpace;
        const curtain = new T.Mesh(size(len - 0.04, 1, 0.05), new T.MeshBasicMaterial({ map: slats, transparent: true }));
        group.add(curtain);
        if (!garage) put(this._outlined(size(len + 0.14, 0.24, 0.22), this._toon(C.shutterBox)), px, HEAD + 0.12, pz);
        dev.level = null;
        dev.apply = (level) => {
          const closed = Math.max(0, Math.min(1, 1 - level)), h = Math.max(0.02, drop * closed);
          curtain.scale.y = h;
          curtain.position.set(px, HEAD - h / 2, pz);
          slats.repeat.set(1, Math.max(1, Math.round(h / (garage ? 0.4 : 0.11))));
          curtain.visible = closed > 0.015;
        };
        dev.set = (st) => {
          const target = st.planned ? (garage ? 0 : 0.55) : st.level;
          curtain.material.opacity = st.planned && !garage ? 0.45 : 1;
          if (dev.level == null) { dev.level = target; dev.apply(target); } else if (Math.abs(target - dev.level) > 0.001) this._tween(dev, target);
        };
        const pk = new T.Mesh(size(len, garage ? HEAD : drop + 0.3, 0.5), new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
        put(pk, px, garage ? HEAD / 2 : bottom + (drop + 0.3) / 2, pz);
        dev.pick = pk;
        dev.anchor.set(px + o.n[0] * 0.2, HEAD + 0.3, pz + o.n[1] * 0.2);
        dev.facing = new T.Vector3(o.n[0], 0, o.n[1]);
        anchorY = null;
        break;
      }
      case "climate": {
        if (d.wall) {
          const radi = put(this._outlined(alongX ? new T.BoxGeometry(0.95, 0.5, 0.1) : new T.BoxGeometry(0.1, 0.5, 0.95), this._toon("#ffffff")), x, 0.42, z);
          dev.set = (st) => radi.userData.mesh.material.color.set(st.planned ? C.planned : st.active ? C.heat : "#ffffff");
          anchorY = 0.75;
        } else anchorY = this._marker(dev, put, x, 1.35, z, 0.2, 0.26, 0.08, C.heat);
        break;
      }
      case "tv": {
        const tv = put(this._outlined(new T.BoxGeometry(1.3, 0.75, 0.07), basic(C.dark)), x, 0.95, z);
        tv.rotation.y = -rad(d.rot || 0);
        dev.set = (st) => tv.userData.mesh.material.color.set(st.active ? C.screen : st.planned ? "#5a5f6a" : C.dark);
        anchorY = 1.4;
        break;
      }
      case "speaker": anchorY = this._marker(dev, put, x, 0.72, z, 0.24, 0.44, 0.24, C.play); break;
      case "lock": anchorY = this._marker(dev, put, x, 1.05, z, 0.2, 0.26, 0.2, C.ok, C.bad); break;
      case "motion": anchorY = this._marker(dev, put, x, Math.max(1.5, wallH + 0.25), z, 0.26, 0.14, 0.26, C.heat); break;
      case "contact": anchorY = this._marker(dev, put, x, 1.6, z, 0.16, 0.3, 0.16, C.bad, C.ok); break;
      case "camera": anchorY = this._marker(dev, put, x, 2.15, z, 0.3, 0.2, 0.42, C.screen); break;
      default: anchorY = this._marker(dev, put, x, 1.2, z, 0.22, 0.22, 0.22, C.ok);
    }
    if (anchorY != null) dev.anchor.set(x, anchorY + 0.25, z);
    dev.anchor.x += off[0];
    dev.anchor.z += off[1];
    dev.anchor.y += group.position.y;
    if (!dev.pick) {
      const pk = new T.Mesh(new T.SphereGeometry(0.42, 8, 6), new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      pk.position.set(dev.anchor.x - off[0], dev.anchor.y - group.position.y - 0.25, dev.anchor.z - off[1]);
      group.add(pk);
      dev.pick = pk;
    }
    dev.pick.userData.dev = dev;
    this._pickables.push(dev.pick);
    if (withChip) {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.style.display = "none";
      chip.addEventListener("click", (e) => { e.stopPropagation(); this._tap(dev); });
      this._labels.appendChild(chip);
      dev.chip = chip;
    }
    this._devs.push(dev);
  }
  // a small block for sensors, locks, speakers: grey when planned, white when idle, coloured when active
  _marker(dev, put, x, y, z, w, h, d, onColour, offColour = "#ffffff") {
    const C = this.theme;
    const m = put(this._outlined(new T.BoxGeometry(w, h, d), new T.MeshBasicMaterial({ color: "#ffffff", transparent: true })), x, y, z);
    dev.set = (st) => {
      m.userData.mesh.material.color.set(st.planned ? C.planned : st.active ? onColour || C.ok : offColour);
      m.userData.mesh.material.opacity = st.planned ? 0.8 : 1;
    };
    return y + h / 2;
  }
  _tween(dev, target) {
    dev.from = dev.level;
    dev.to = target;
    dev.t0 = performance.now();
    if (!this._tweens.includes(dev)) this._tweens.push(dev);
  }
  _signature() {
    if (!this._hass || !this._devs) return "";
    return this._devs.map((v) => {
      const s = v.d.entity && this._hass.states[v.d.entity];
      return s ? `${s.state}|${s.attributes.current_position ?? ""}|${s.attributes.current_temperature ?? ""}|${s.attributes.hvac_action ?? ""}` : "-";
    }).join(";");
  }
  _syncDevices() {
    if (!this._devs) return;
    let live = 0, planned = 0;
    for (const dev of this._devs) {
      const st = devState(dev.d, this._hass);
      dev.st = st;
      if (dev.set) dev.set(st);
      st.planned ? planned++ : live++;
      if (dev.chip) {
        dev.chip.textContent = st.text;
        dev.chip.classList.toggle("active", !!st.active);
        dev.chip.dataset.show = st.text ? "1" : "";
      }
    }
    this.shadowRoot.querySelector(".counts").textContent = this._devs.length ? `${live} live, ${planned} planned (grey)` : "";
  }

  // ---------- interaction ----------
  _pick(clientX, clientY) {
    const r = this._renderer.domElement.getBoundingClientRect();
    const p = new T.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    const rc = new T.Raycaster();
    rc.setFromCamera(p, this._camera);
    const hit = rc.intersectObjects(this._pickables, false)[0];
    if (hit) this._tap(hit.object.userData.dev);
    else this._toast.style.display = "none";
  }
  _tap(dev) {
    const d = dev.d, st = dev.st || devState(d, this._hass);
    if (st.planned) {
      const nav = d.nav || this._config.planned_path || "";
      this._say(`${d.name || d.kind}: planned, not fitted yet.${nav ? " Tap here for more." : ""}`, nav);
      return;
    }
    const dom = d.entity.split(".")[0];
    if ((d.kind === "light" || d.kind === "switch") && ["light", "switch", "input_boolean", "fan"].includes(dom)) {
      this._hass.callService(dom, "toggle", { entity_id: d.entity });
      return;
    }
    this._toast.style.display = "none";
    this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: d.entity } }));
  }
  _say(text, nav, ms = 6000) {
    this._toast.textContent = text;
    this._toast.dataset.nav = nav || "";
    this._toast.style.display = "block";
    clearTimeout(this._toastT);
    this._toastT = setTimeout(() => { this._toast.style.display = "none"; }, ms);
  }
  _navigate(path) {
    history.pushState(null, "", path);
    window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
  }

  // ---------- rendering on demand ----------
  _req() {
    if (this._raf || !this._renderer) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      this._frame();
    });
  }
  _frame() {
    if (!this._renderer || !this._root) return;
    const now = performance.now();
    if (this._tweens.length) {
      this._tweens = this._tweens.filter((dev) => {
        const k = Math.min(1, (now - dev.t0) / 900), e = k * k * (3 - 2 * k);
        dev.level = dev.from + (dev.to - dev.from) * e;
        dev.apply(dev.level);
        return k < 1;
      });
      this._req();
    }
    this._renderer.render(this._scene, this._camera);
    const w = this._wrap.clientWidth, h = this._wrap.clientHeight, v = new T.Vector3();
    const place = (el, pos, show) => {
      v.copy(pos).project(this._camera);
      const ok = show && v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
      el.style.display = ok ? "block" : "none";
      if (ok) { el.style.left = `${((v.x + 1) / 2) * w}px`; el.style.top = `${((1 - v.y) / 2) * h}px`; }
    };
    const far = this._camera.position.distanceTo(this._controls.target) > 42;
    for (const l of this._roomLabels) place(l.el, l.pos, !(far && l.small));
    const whole = this._mode === "whole";
    for (const dev of this._devs) {
      if (!dev.chip) continue;
      // from outside, a blind's label only shows when you are looking at that side of the house
      const hidden = whole && dev.facing && v.copy(this._camera.position).sub(dev.anchor).dot(dev.facing) <= 0;
      place(dev.chip, dev.anchor, !!dev.chip.dataset.show && !hidden);
    }
  }
  // for tests: where each device is on screen, and how heavy the scene is
  debug() {
    const r = this._renderer.domElement.getBoundingClientRect(), v = new T.Vector3(), out = {};
    for (const dev of this._devs) {
      dev.pick.getWorldPosition(v).project(this._camera);
      out[dev.d.id] = { x: Math.round(r.left + ((v.x + 1) / 2) * r.width), y: Math.round(r.top + ((1 - v.y) / 2) * r.height), planned: !!(dev.st && dev.st.planned), text: dev.st && dev.st.text, level: dev.level };
    }
    const i = this._renderer.info;
    return { mode: this._mode, calls: i.render.calls, triangles: i.render.triangles, geometries: i.memory.geometries, warnings: this._warnings, devices: out };
  }
}

if (!customElements.get("toon-house-card")) customElements.define("toon-house-card", ToonHouseCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "toon-house-card")) window.customCards.push({ type: "toon-house-card", name: "Toon House Card", description: "A cartoon 3D dollhouse of your home with live devices", preview: false, documentationURL: "https://github.com/digitaladaption/toon-house-card" });
console.info(`%c TOON-HOUSE-CARD %c ${VERSION} `, "background:#FFD83A;color:#1b1b1b;font-weight:900", "background:#1b1b1b;color:#fff");
