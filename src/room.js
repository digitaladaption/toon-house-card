/* The room panel: tap a room in a floor view and everything in it is listed, with its controls.
   Lights switch and dim, blinds open and close, radiators go up and down. */
import { ICON } from "./art.js";
import { stateText } from "./match.js";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const TOGGLE = ["light", "switch", "input_boolean", "fan"];
const KIND = { light: "Light", switch: "Switch", cover: "Blind", climate: "Heating", lock: "Lock", motion: "Motion", contact: "Door or window", camera: "Camera", speaker: "Speaker", tv: "TV", sensor: "Sensor" };

export const ROOM_STYLE = `
  .room{position:absolute;right:10px;top:58px;bottom:34px;width:min(330px,calc(100% - 20px));display:none;flex-direction:column;background:#FFFDF4;border:3px solid #1b1b1b;border-radius:18px;box-shadow:3px 4px 0 #1b1b1b;overflow:hidden;pointer-events:auto;z-index:2}
  .room.open{display:flex}
  .room header{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#FFD83A;border-bottom:3px solid #1b1b1b;font-weight:900;font-size:17px}
  .room header span{flex:1;min-width:0;overflow-wrap:anywhere}
  .room header button{width:38px;height:38px;padding:0;display:grid;place-items:center;flex:none}
  .room header svg,.room .rb svg{width:20px;height:20px}
  .room .list{flex:1;overflow:auto;overscroll-behavior:contain;padding:4px 10px 10px}
  .room .it{padding:8px 0;border-top:2px dashed #1b1b1b33}
  .room .it:first-child{border-top:0}
  .room .hd{display:grid;grid-template-columns:34px 1fr auto;gap:0 8px;align-items:center;cursor:pointer}
  .room .hd .ic{width:34px;height:34px;border:3px solid #1b1b1b;border-radius:10px;display:grid;place-items:center;background:#eee}
  .room .it.on .ic{background:#FFD83A}
  .room .it.grey{opacity:.6}
  .room .hd svg{width:22px;height:22px}
  .room .nm{font-weight:800;font-size:14px;line-height:1.15;overflow-wrap:anywhere}
  .room .nm small{display:block;font-weight:500;font-size:12px}
  .room .val{font-weight:800;font-size:13px;border:2px solid #1b1b1b;border-radius:999px;padding:1px 9px;background:#fff;white-space:nowrap}
  .room .ctl{display:flex;gap:6px;align-items:center;margin-top:6px}
  .room .rb{flex:1;min-height:40px;padding:4px 8px;font-size:13px;display:inline-flex;align-items:center;justify-content:center;gap:4px;box-shadow:2px 2px 0 #1b1b1b}
  .room .rb.act{background:#FFD83A}
  .room input[type=range]{flex:1;min-width:0;height:36px;accent-color:#7A4FC4}
  .room .empty{padding:14px 4px;font-size:14px}
  @media (max-width:600px){.room{left:8px;right:8px;top:auto;bottom:30px;width:auto;max-height:58%}}
`;

export class RoomPanel {
  constructor(card) {
    this.card = card;
    const el = this.el = document.createElement("div");
    el.className = "room";
    el.innerHTML = `<header><span></span><button data-act="close" aria-label="Close">${ICON.close}</button></header><div class="list"></div>`;
    card._wrap.appendChild(el);
    el.addEventListener("click", (e) => {
      const b = e.target.closest("[data-act]");
      if (!b) return;
      const act = b.dataset.act, row = b.closest(".it");
      if (act === "close") this.close();
      else if (row) this._act(act, row.dataset.id);
    });
    // a slider acts when it is let go, not on every step of the drag
    el.addEventListener("change", (e) => {
      const row = e.target.closest(".it");
      if (row && e.target.dataset.set) this._act(e.target.dataset.set, row.dataset.id, Number(e.target.value));
    });
  }
  get isOpen() { return this.el.classList.contains("open"); }
  close() {
    this.el.classList.remove("open");
    this.key = null;
  }
  // F: one of the card's floors. room: a room on it.
  open(F, room) {
    this.F = F;
    this.roomId = room.id;
    this.key = `${F.floor.id}|${room.id}`;
    this.el.querySelector("header span").textContent = room.name || "Room";
    this.el.classList.add("open");
    this.render();
    this.el.querySelector(".list").scrollTop = 0;
  }
  _devices() {
    const F = this.F;
    return (F.floor.devices || []).filter((d) => (d.room ? d.room === this.roomId : d.x != null && (F.walls.roomAt(d.x, d.y) || {}).id === this.roomId));
  }
  _state(d) {
    const hass = this.card._hass;
    return d.entity && hass ? hass.states[d.entity] || null : null;
  }
  render() {
    const list = this.el.querySelector(".list"), devs = this._devices();
    if (!devs.length) { list.innerHTML = `<div class="empty">Nothing in here yet. Edit the card to add lights, blinds and radiators to this room.</div>`; return; }
    list.innerHTML = devs.map((d) => {
      const st = this._state(d), dom = d.entity ? d.entity.split(".")[0] : "", a = (st && st.attributes) || {};
      let ctl = "";
      if (st && TOGGLE.includes(dom)) {
        ctl = `<button class="rb" data-act="toggle"></button>`;
        if (dom === "light" && (a.brightness != null || (a.supported_color_modes || []).some((m) => m !== "onoff"))) ctl += `<input type="range" min="1" max="100" data-set="dim" aria-label="Brightness of ${esc(d.name || "light")}">`;
      } else if (st && dom === "cover") {
        ctl = `<button class="rb" data-act="open" aria-label="Open">${ICON.up}</button><button class="rb" data-act="stop">Stop</button><button class="rb" data-act="shut" aria-label="Close">${ICON.down}</button>`;
        if (a.current_position != null) ctl += `<input type="range" min="0" max="100" data-set="pos" aria-label="Position of ${esc(d.name || "blind")}">`;
      } else if (st && dom === "input_number" && (d.kind === "cover" || d.kind === "climate")) {
        // a helper standing in for a blind or a radiator: its own slider
        ctl = `<input type="range" min="${Number(a.min) || 0}" max="${a.max != null ? Number(a.max) : 100}" step="${Number(a.step) || 1}" data-set="num" aria-label="${esc(d.name || "value")}">`;
      } else if (st && dom === "climate" && typeof a.temperature === "number") ctl = `<button class="rb" data-act="cooler" aria-label="Cooler">${ICON.down}</button><span class="val tgt"></span><button class="rb" data-act="warmer" aria-label="Warmer">${ICON.up}</button>`;
      return `<div class="it${d.entity ? "" : " grey"}" data-id="${esc(d.id)}"><div class="hd" data-act="more"><span class="ic">${ICON[d.kind] || ICON.sensor}</span><span class="nm">${esc(d.name || KIND[d.kind] || "Device")}<small>${esc(KIND[d.kind] || d.kind)}</small></span><span class="val st"></span></div>${ctl ? `<div class="ctl">${ctl}</div>` : ""}</div>`;
    }).join("");
    this._sig = devs.map((d) => `${d.id}|${d.entity || ""}|${this._state(d) ? 1 : 0}`).join(";");
    this.refresh();
  }
  // new states from Home Assistant: freshen the readings; never touch a slider that is being dragged
  refresh() {
    if (!this.isOpen) return;
    const devs = this._devices();
    if (devs.map((d) => `${d.id}|${d.entity || ""}|${this._state(d) ? 1 : 0}`).join(";") !== this._sig) { this.render(); return; }
    for (const d of devs) {
      const row = [...this.el.querySelectorAll(".it")].find((r) => r.dataset.id === d.id);
      if (!row) continue;
      const st = this._state(d), a = (st && st.attributes) || {}, dom = d.entity ? d.entity.split(".")[0] : "";
      const on = !!st && (st.state === "on" || st.state === "open" || a.hvac_action === "heating" || st.state === "playing");
      row.classList.toggle("on", on);
      row.querySelector(".st").textContent = !d.entity ? "planned" : TOGGLE.includes(dom) && st ? (on ? "On" : "Off") : stateText(st);
      const t = row.querySelector("[data-act='toggle']");
      if (t) { t.textContent = on ? "Turn off" : "Turn on"; t.classList.toggle("act", on); }
      const tgt = row.querySelector(".tgt");
      if (tgt) tgt.textContent = `${a.temperature}°`;
      const s = row.querySelector("input[type=range]");
      if (s && !s.matches(":active")) s.value = s.dataset.set === "num" ? st.state : s.dataset.set === "dim" ? (a.brightness != null ? Math.max(1, Math.round((a.brightness / 255) * 100)) : on ? 100 : 1) : a.current_position;
    }
  }
  // only ever runs when something in the panel is pressed
  _act(act, id, value) {
    const d = this._devices().find((x) => x.id === id), hass = this.card._hass;
    if (!d || !d.entity) return;
    if (act === "more") { this.card.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: d.entity } })); return; }
    const st = this._state(d);
    if (!st || !hass || !hass.callService) return;
    const dom = d.entity.split(".")[0], a = st.attributes || {}, target = { entity_id: d.entity };
    if (act === "toggle" && TOGGLE.includes(dom)) hass.callService(dom, "toggle", target);
    else if (act === "dim" && dom === "light") hass.callService("light", "turn_on", { ...target, brightness_pct: Math.max(1, Math.min(100, value)) });
    else if (act === "num" && dom === "input_number") hass.callService("input_number", "set_value", { ...target, value });
    else if (dom === "cover" && act === "pos") hass.callService("cover", "set_cover_position", { ...target, position: Math.max(0, Math.min(100, value)) });
    else if (dom === "cover" && ["open", "stop", "shut"].includes(act)) hass.callService("cover", { open: "open_cover", stop: "stop_cover", shut: "close_cover" }[act], target);
    else if (dom === "climate" && (act === "warmer" || act === "cooler") && typeof a.temperature === "number") {
      const step = a.target_temp_step || 0.5, lo = a.min_temp != null ? a.min_temp : 5, hi = a.max_temp != null ? a.max_temp : 30;
      hass.callService("climate", "set_temperature", { ...target, temperature: Math.round(Math.min(hi, Math.max(lo, a.temperature + (act === "warmer" ? step : -step))) * 10) / 10 });
    }
  }
}
