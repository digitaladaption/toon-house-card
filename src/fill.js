/* "Find my things": match each room to its Home Assistant area and offer to put that area's
   lights, blinds, radiators and sensors on the plan, already connected. Nothing is added until
   the button is pressed, and it all goes through the editor so Save and Cancel still decide. */
import { roofus, ICON } from "./art.js";
import { areaForRoom, areaThings, stateText } from "./match.js";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

export const FILL_STYLE = `
  dialog.fill .row .btn{flex:1 1 120px}
  .f-room{border:3px solid var(--ink);border-radius:14px;background:#fff;margin:0 0 10px;overflow:hidden}
  .f-room h4{margin:0;padding:8px 10px;font-size:15px;background:var(--sun);border-bottom:3px solid var(--ink);display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  .f-room h4 small{font-weight:500;font-size:12px}
  .f-thing{display:grid;grid-template-columns:28px 30px 1fr auto;gap:0 8px;align-items:center;padding:6px 10px;min-height:48px;border-top:2px dashed #1b1b1b33;cursor:pointer}
  .f-thing:first-of-type{border-top:0}
  .f-thing input{width:24px;height:24px;accent-color:#7A4FC4;margin:0}
  .f-thing svg{width:28px;height:28px}
  .f-thing b{font-size:14px;line-height:1.2;overflow-wrap:anywhere}
  .f-thing small{display:block;font-weight:500;font-size:12px;opacity:.8}
  .f-thing .val{font-weight:700;font-size:12px;border:2px solid var(--ink);border-radius:999px;padding:1px 8px;white-space:nowrap}
`;

export class Fill {
  constructor(ed) {
    this.ed = ed;
    const dlg = this.dlg = document.createElement("dialog");
    dlg.className = "setup fill";
    dlg.tabIndex = -1;
    dlg.setAttribute("aria-label", "Find my things by room");
    dlg.innerHTML = `<div class="s-top"><div class="s-ic live">${ICON.house}</div><div class="s-ttl">Find my things<small>Room by room, from Home Assistant</small></div><button class="btn x" data-act="close" aria-label="Close">${ICON.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-body"></div>
      <div class="row" style="margin:0 12px 12px"><button class="btn" data-act="close">Not now</button><button class="btn go" data-act="add"></button></div>`;
    ed.shadowRoot.appendChild(dlg);
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) { dlg.close(); return; }
      const b = e.target.closest("[data-act]");
      if (!b) return;
      if (b.dataset.act === "close") dlg.close();
      else if (b.dataset.act === "add") this._add();
    });
    dlg.addEventListener("change", () => this._count());
    this._esc = (e) => {
      if (e.key !== "Escape" || !dlg.open) return;
      e.stopPropagation();
      e.preventDefault();
      dlg.close();
    };
    dlg.addEventListener("close", () => window.removeEventListener("keydown", this._esc, true));
  }
  _q(s) { return this.dlg.querySelector(s); }
  _say(title, text, mood) {
    this._q(".roofus").innerHTML = roofus(mood);
    this._q(".bubble").innerHTML = `<b>${esc(title)}</b>${esc(text)}`;
  }
  open() {
    const ed = this.ed, hass = ed._hass, house = ed._house, body = this._q(".s-body");
    if (!house) return;
    const used = ed.usedBy(null), lost = [], pairs = [];
    let out = "", n = 0;
    this.found = [];
    house.floors.forEach((f, fi) => {
      for (const room of f.rooms || []) {
        const area = hass ? areaForRoom(hass, room) : null;
        if (!area) { if (room.name) lost.push(room.name); continue; }
        const things = areaThings(hass, area.id, used), all = areaThings(hass, area.id, {});
        pairs.push({ room: room.name || "Room", area: area.name, total: all.length });
        if (!things.length) continue;
        out += `<div class="f-room"><h4>${esc(room.name || "Room")}<small>${esc(area.name === room.name ? f.name || "" : `"${area.name}" in Home Assistant`)}</small></h4>`;
        for (const t of things) {
          this.found.push({ ...t, fi, room: room.id });
          out += `<label class="f-thing"><input type="checkbox" data-i="${n++}"${t.sure ? " checked" : ""}>${ICON[t.kind] || ICON.sensor}<span><b>${esc(t.name)}</b><small>${esc(ed.kindName(t.kind))}</small></span><span class="val">${esc(stateText(hass.states[t.id]))}</span></label>`;
        }
        out += "</div>";
      }
    });
    if (!hass || !Object.keys(hass.areas || {}).length) {
      out = `<p class="hint">Home Assistant has no areas set up yet. Give your devices an area (Settings, Areas) and I can sort them into rooms for you.</p>`;
      this._say("No areas yet", "I use Home Assistant's areas to know which room a device is in.", "think");
    } else if (!pairs.length) {
      out = `<p class="hint">Your areas in Home Assistant are: ${esc(Object.values(hass.areas).map((a) => a.name).join(", "))}. None of them sounds like a room on the plan. Rename an area to match a room, or add <b>area: Area name</b> to the room in the house file.</p>`;
      this._say("I can't match the rooms", "None of your rooms has the same name as an area in Home Assistant.", "think");
    } else if (!n) {
      const empty = pairs.every((p) => !p.total), list = pairs.map((p) => (p.room === p.area ? p.room : `${p.room} = "${p.area}"`)).join(", ");
      out = `<p class="hint">Rooms I matched to areas: ${esc(list)}.</p><p class="hint">${empty ? "Those areas have no lights, blinds, radiators or sensors in them yet. In Home Assistant, open a device and set its area, then come back." : "Everything in those areas is already on the plan."}</p>`;
      if (empty) this._say("The areas are empty", "I found the rooms, but Home Assistant has no devices in those areas yet.", "think");
      else this._say("Nothing new", "Everything in your matching areas is already on the plan.", "happy");
    } else this._say(`I found ${n} thing${n === 1 ? "" : "s"}!`, "I matched your rooms to Home Assistant's areas. Untick anything you don't want, then I'll put the rest on the plan, already connected.", "wow");
    if (lost.length && n) out += `<p class="hint">No matching area for: ${esc(lost.join(", "))}.</p>`;
    body.innerHTML = out;
    this._count();
    if (!this.dlg.open) {
      this.dlg.showModal();
      this.dlg.focus();
      window.addEventListener("keydown", this._esc, true);
    }
    body.scrollTop = 0;
  }
  _picked() {
    return [...this.dlg.querySelectorAll("input[data-i]:checked")].map((c) => this.found[Number(c.dataset.i)]);
  }
  _count() {
    const n = this._picked().length, b = this._q("[data-act='add']");
    b.innerHTML = `${ICON.yes}Add ${n} thing${n === 1 ? "" : "s"}`;
    b.style.display = this.found.length ? "" : "none";
    b.disabled = !n;
    b.style.opacity = n ? "" : ".5";
  }
  _add() {
    const picked = this._picked();
    this.dlg.close();
    if (picked.length) this.ed._fillRooms(picked);
  }
}
