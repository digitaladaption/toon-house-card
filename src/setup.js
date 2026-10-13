/* The setup window: tap a thing in the editor and Roofus walks you through it.
   Pick the real device, try it, give it a name. Every change goes through the editor,
   so Home Assistant's own Save and Cancel still decide what is kept. */
import { roofus, ICON } from "./art.js";
import { rank, stateText, areaOf } from "./match.js";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const MAX = 40;
const STEPS = [["pick", "Pick it"], ["try", "Try it"], ["done", "Finish"]];
const TOGGLE = ["light", "switch", "input_boolean", "fan"];
// plain words for what each kind of thing can be
const WHAT = {
  light: "light or lamp", switch: "switch or plug", cover: "blind, shutter or garage door", climate: "radiator valve (TRV), thermostat or temperature sensor",
  lock: "lock", motion: "motion sensor", contact: "door or window sensor", camera: "camera", speaker: "speaker", tv: "TV", sensor: "sensor",
};

export const SETUP_STYLE = `
  dialog.setup{font:inherit;color:var(--ink);border:4px solid var(--ink);border-radius:22px;padding:0;background:linear-gradient(#6CCBFA,#9ADCFC);box-shadow:5px 7px 0 var(--ink);width:min(540px,calc(100vw - 16px));max-width:none;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);overflow:hidden}
  dialog.setup[open]{display:flex;flex-direction:column;animation:pop .22s cubic-bezier(.3,1.5,.6,1)}
  dialog.setup:focus{outline:none}
  dialog.setup::backdrop{background:rgba(27,27,27,.55)}
  @keyframes pop{from{transform:scale(.85) rotate(-2deg);opacity:0}}
  @media (prefers-reduced-motion:reduce){dialog.setup[open]{animation:none}}
  .s-top{display:flex;align-items:center;gap:10px;padding:10px 12px 0}
  .s-ic{flex:none;width:52px;height:52px;border:3px solid var(--ink);border-radius:15px;background:#eee;display:grid;place-items:center;box-shadow:2px 3px 0 var(--ink)}
  .s-ic.live{background:#9BE37A}
  .s-ic svg{width:34px;height:34px}
  .s-ttl{flex:1;min-width:0;font-weight:700;font-size:20px;line-height:1.15;color:var(--ink)}
  .s-ttl small{display:block;font-weight:500;font-size:13px}
  .s-top .x{min-height:44px;width:44px;padding:0;flex:none}
  .s-talk{display:flex;gap:10px;align-items:flex-start;padding:10px 12px 0}
  .s-talk .roofus{width:64px}
  .s-talk .bubble{min-height:52px;font-size:14px}
  .s-talk .bubble b{font-size:16px}
  .s-steps{display:flex;gap:6px;padding:10px 12px 0}
  .s-steps .btn{flex:1;min-height:40px;font-size:13px;padding:4px 6px;border-radius:999px}
  .s-steps .btn i{font-style:normal;width:22px;height:22px;border-radius:50%;border:2px solid var(--ink);display:grid;place-items:center;background:#fff;font-size:12px;flex:none}
  .s-steps .btn.on i{background:var(--ink);color:#fff}
  .s-body{flex:1;min-height:0;overflow:auto;margin:10px 12px 12px;background:var(--paper);border:3px solid var(--ink);border-radius:16px;padding:10px;overscroll-behavior:contain}
  .s-body h4{margin:10px 2px 6px;font-size:14px;font-weight:700}
  .s-body h4:first-of-type{margin-top:8px}
  .opt{font:inherit;color:var(--ink);width:100%;display:grid;grid-template-columns:1fr auto;gap:0 8px;align-items:center;text-align:left;min-height:52px;padding:6px 10px;margin:0 0 6px;border:3px solid var(--ink);border-radius:13px;background:#fff;cursor:pointer;box-shadow:2px 3px 0 var(--ink)}
  .opt:active{transform:translate(2px,3px);box-shadow:none}
  .opt.on{background:#9BE37A}
  .opt b{font-weight:700;font-size:15px;line-height:1.2;overflow-wrap:anywhere}
  .opt small{grid-column:1;font-size:12px;opacity:.8;overflow-wrap:anywhere}
  .opt .val{grid-column:2;grid-row:1 / span 2;font-weight:700;font-size:13px;border:2px solid var(--ink);border-radius:999px;padding:1px 9px;background:var(--paper);white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis}
  .opt.none{background:#eee;border-style:dashed;box-shadow:none}
  .opt.new{background:#FFF3B8}
  .opt.new.lead,.opt.found{background:#9BE37A}
  .wait{display:flex;justify-content:center;gap:10px;padding:14px 0 4px}
  .wait span{width:16px;height:16px;border-radius:50%;background:#7A4FC4;border:3px solid var(--ink);animation:hop 1s infinite ease-in-out}
  .wait span:nth-child(2){animation-delay:.15s;background:var(--sun)}
  .wait span:nth-child(3){animation-delay:.3s;background:#FF8A73}
  @keyframes hop{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-12px)}}
  @media (prefers-reduced-motion:reduce){.wait span{animation:none}}
  .how{margin:8px 0;padding-left:22px;font-size:14px;line-height:1.4}
  .how li{margin:4px 0}
  .opt:focus-visible{outline:4px solid #7A4FC4;outline-offset:2px}
  .now{border:3px solid var(--ink);border-radius:16px;background:#fff;padding:12px;text-align:center;box-shadow:2px 3px 0 var(--ink)}
  .now.hot{background:#FFD83A}
  .now .big{font-weight:700;font-size:40px;line-height:1.1;overflow-wrap:anywhere}
  .now .sub{font-size:14px;margin-top:2px}
  .now .who{font-size:12px;opacity:.8;margin-top:6px;overflow-wrap:anywhere}
  .s-body .row{justify-content:center}
  .s-body .row .btn{flex:1 1 120px}
  .btn.go{background:#9BE37A}
  .s-ask{font-weight:700;font-size:15px;text-align:center;margin:14px 0 0}
`;

export class Setup {
  constructor(ed) {
    this.ed = ed;
    const dlg = this.dlg = document.createElement("dialog");
    dlg.className = "setup";
    dlg.setAttribute("aria-label", "Set up this thing");
    dlg.tabIndex = -1;
    dlg.innerHTML = `<div class="s-top"><div class="s-ic"></div><div class="s-ttl"></div><button class="btn x" data-act="close" aria-label="Close">${ICON.close}</button></div>
      <div class="s-talk talk"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
      <div class="s-steps"></div>
      <div class="s-body"></div>`;
    ed.shadowRoot.appendChild(dlg);
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) { dlg.close(); return; }   // a tap on the dark part outside
      const b = e.target.closest("[data-act],[data-step],[data-ent]");
      if (!b) return;
      if (b.dataset.step) this.go(b.dataset.step);
      else if (b.dataset.ent != null) this._choose(b.dataset.ent);
      else this._act(b.dataset.act);
    });
    dlg.addEventListener("input", (e) => { if (e.target.id === "sq") { this.query = e.target.value; this._options(); } });
    dlg.addEventListener("change", (e) => { if (e.target.id === "sName") { this.ed._rename(this.id, e.target.value); this._head(); } });
    // Escape closes this window only. Home Assistant's own dialog listens for the key too, so it is caught first, at the window.
    this._esc = (e) => {
      if (e.key !== "Escape" || !dlg.open) return;
      e.stopPropagation();
      e.preventDefault();
      dlg.close();
    };
    dlg.addEventListener("close", () => { window.removeEventListener("keydown", this._esc, true); this.id = null; this.ed._setupClosed(); });
  }
  get isOpen() { return this.dlg.open; }
  _q(s) { return this.dlg.querySelector(s); }
  _now() {
    const hit = this.id ? this.ed._find(this.id) : null;
    if (!hit) return null;
    const hass = this.ed._hass, ent = this.ed._entityOf(hit.d);
    return { ...hit, room: this.ed._roomName(hit.f, hit.d), ent, st: ent && hass ? hass.states[ent] || null : null, hass };
  }
  open(id, step, fresh = false) {
    this.id = id;
    this.query = "";
    this.wide = false;
    this.watch = null;
    this.fresh = fresh;
    const now = this._now();
    if (!now) return;
    if (!this.dlg.open) {
      this.dlg.showModal();
      this.dlg.focus();
      window.addEventListener("keydown", this._esc, true);
    }
    this.go(step || (now.ent ? "try" : "pick"));
  }
  close() { if (this.dlg.open) this.dlg.close(); }
  go(step) {
    if (step !== "pick") this.watch = null;
    this.step = step;
    this.render();
    this._q(".s-body").scrollTop = 0;
  }
  _say(title, text, mood = "happy") {
    this._q(".roofus").innerHTML = roofus(mood);
    this._q(".bubble").innerHTML = `<b>${esc(title)}</b>${esc(text)}`;
  }
  _head() {
    const now = this._now();
    if (!now) return;
    const { d, room, ent } = now, kind = this.ed.kindName(d.kind);
    this._q(".s-ic").innerHTML = ICON[d.kind] || ICON.sensor;
    this._q(".s-ic").classList.toggle("live", !!ent);
    this._q(".s-ttl").innerHTML = `${esc(d.name || kind)}<small>${esc([kind, room].filter(Boolean).join(" in "))}</small>`;
    this._q(".s-steps").innerHTML = STEPS.map(([id, label], i) => `<button class="btn${id === this.step ? " on" : ""}" data-step="${id}"${id === this.step ? ' aria-current="step"' : ""}><i>${i + 1}</i>${label}</button>`).join("");
  }
  render() {
    const now = this._now();
    if (!now) { this.close(); return; }
    this._head();
    const { d, room, ent, st } = now, body = this._q(".s-body"), what = WHAT[d.kind] || "device", name = d.name || "this";
    if (this.step === "pick" && this.watch) {
      this._waiting(true);
    } else if (this.step === "pick") {
      body.innerHTML = `<input id="sq" type="search" placeholder="Search your devices" autocomplete="off" spellcheck="false" aria-label="Search your devices" value="${esc(this.query)}"><div id="opts"></div>`;
      this._say(this.fresh ? `${name} is on the plan!` : `Which one is ${name}?`, `Tap the real ${what} from Home Assistant.${room ? ` My best guesses for the ${room} are at the top.` : ""}`, this.fresh ? "party" : "think");
      this._options();
    } else if (this.step === "try") {
      if (!ent) {
        body.innerHTML = `<p class="s-ask">Nothing is picked for this yet.</p><div class="row"><button class="btn go" data-step="pick">Pick one</button><button class="btn" data-step="done">Leave it grey</button></div>`;
        this._say("Not connected yet", "It stays grey on the card until you pick its real device.", "think");
        return;
      }
      body.innerHTML = `<div class="now"></div><div class="row" id="acts">${this._buttons(d, ent, st)}</div><p class="hint" id="tip" style="text-align:center"></p>
        <p class="s-ask">Is that the right one?</p><div class="row"><button class="btn" data-step="pick">No, pick another</button><button class="btn go" data-step="done">${ICON.yes}Yes!</button></div>`;
      this._q("#tip").textContent = this._tip(d, ent);
      this._say("Let's check it", `This is what ${name} says right now. Is that the right ${what.split(",")[0].replace(/ \(.*/, "")}?`, "wow");
      this._live();
    } else {
      body.innerHTML = `<label class="f" for="sName">Its name</label><input id="sName" type="text" autocomplete="off" value="${esc(d.name || "")}">
        <p class="hint">${ent ? `Connected to <b>${esc(this._friendly(ent))}</b>.` : "Not connected yet, so it stays grey on the card."}</p>
        <div class="row"><button class="btn" data-act="move">${ICON.pin}Move it</button><button class="btn" data-act="remove">${ICON.remove}Remove it</button></div>
        <div class="row"><button class="btn go" data-act="close">${ICON.yes}Done</button></div>`;
      if (ent) this._say("All set!", `${name} is connected. Tap it on the card to use it.`, "party");
      else this._say("Saved for later", `${name} is on the plan as "planned". Come back when you have fitted it.`, "happy");
    }
  }
  _friendly(ent) {
    const st = this.ed._hass && this.ed._hass.states[ent];
    return (st && st.attributes && st.attributes.friendly_name) || ent;
  }

  // ---------- step 1: the list of real devices ----------
  _options() {
    const now = this._now(), box = this._q("#opts");
    if (!now || !box) return;
    const { d, room, ent, hass } = now;
    if (!hass) { box.innerHTML = `<p class="hint">Home Assistant has not told me about your devices yet.</p>`; return; }
    this._count = Object.keys(hass.states).length;
    const list = rank(hass, d.kind, room, { wide: this.wide, query: this.query, used: this.ed.usedBy(d.id) });
    const row = (o) => `<button class="opt${o.id === ent ? " on" : ""}" data-ent="${esc(o.id)}"><b>${esc(o.name)}</b><small>${esc([o.area, o.id, o.usedBy ? `already used by ${o.usedBy}` : ""].filter(Boolean).join(" · "))}</small><span class="val">${esc(stateText(hass.states[o.id]))}</span></button>`;
    const shown = list.slice(0, MAX), guesses = shown.filter((o) => o.guess), rest = shown.filter((o) => !o.guess);
    let out = "";
    if (guesses.length) out += `<h4>My best guesses${room ? ` for the ${esc(room)}` : ""}</h4>${guesses.map(row).join("")}`;
    if (rest.length) out += `<h4>${guesses.length ? "Everything else" : "Your devices"}</h4>${rest.map(row).join("")}`;
    if (!list.length) out += `<p class="hint">${this.query ? "Nothing matches that. Try fewer letters." : `I can't find a ${esc(WHAT[d.kind] || "device")} in Home Assistant yet.`}</p>`;
    if (list.length > MAX) out += `<p class="hint">${list.length - MAX} more. Type in the search box to find them.</p>`;
    out += `<h4>Or</h4><button class="opt new${list.length ? "" : " lead"}" data-act="new"><b>I've got a new one to add</b><small>Pair it with Home Assistant now and I'll spot it</small></button>`;
    if (!this.wide) out += `<button class="opt none" data-act="wide"><b>Show every kind of device</b><small>If yours is not in the list</small></button>`;
    out += `<button class="opt none${ent ? "" : " on"}" data-ent=""><b>I haven't got it yet</b><small>Keep it grey on the card as "planned"</small></button>`;
    box.innerHTML = out;
  }
  // ---------- a brand new device: wait for it to appear in Home Assistant ----------
  // everything that has appeared since the wait began, the ones that fit this kind of thing first
  _arrivals() {
    const now = this._now();
    if (!now || !now.hass || !this.watch) return { fit: [], other: 0 };
    const fresh = Object.keys(now.hass.states).filter((id) => !this.watch.base.has(id));
    if (!fresh.length) return { fit: [], other: 0 };
    const only = { ...now.hass, states: Object.fromEntries(fresh.map((id) => [id, now.hass.states[id]])) };
    const fit = rank(only, now.d.kind, now.room, { used: this.ed.usedBy(now.d.id) });
    return { fit, other: this.watch.all ? 0 : rank(only, now.d.kind, now.room, { wide: true }).length - fit.length, all: this.watch.all ? rank(only, now.d.kind, now.room, { wide: true }) : null };
  }
  _waiting(force) {
    const now = this._now(), body = this._q(".s-body");
    if (!now) return;
    const { d, room, hass } = now, what = WHAT[d.kind] || "device", got = this._arrivals(), list = got.all || got.fit;
    const sig = `${list.map((o) => o.id).join(",")}|${got.other}`;
    if (!force && sig === this.watch.sig) return;
    this.watch.sig = sig;
    const url = hass && typeof hass.hassUrl === "function" ? hass.hassUrl("/config/devices/dashboard") : "";
    const row = (o) => `<button class="opt found" data-ent="${esc(o.id)}"><b>${esc(o.name)}</b><small>${esc([o.area, o.id].filter(Boolean).join(" · "))}</small><span class="val">${esc(stateText(hass.states[o.id]))}</span></button>`;
    if (list.length) {
      body.innerHTML = `<h4>Just appeared in Home Assistant</h4>${list.map(row).join("")}<div class="row"><button class="btn" data-act="list">Back to the list</button></div>`;
      this._say(list.length === 1 ? "I spotted a new one!" : `I spotted ${list.length} new ones!`, `Is ${list.length === 1 ? `"${list[0].name}"` : "one of these"} your ${d.name || what}? Tap it and we'll try it.`, "party");
      return;
    }
    body.innerHTML = `<div class="wait"><span></span><span></span><span></span></div>
      <ol class="how"><li>Open Home Assistant's devices page${url ? "" : " (Settings, Devices and services)"} and press <b>Add device</b>.</li><li>Put your new ${esc(what.split(",")[0].replace(/ \(.*/, ""))} into pairing mode. Its leaflet says how: usually you hold its button.</li><li>When Home Assistant asks, give it the area${room ? ` <b>${esc(room)}</b>` : ""} and finish.</li></ol>
      ${url ? `<div class="row"><a class="btn go" href="${esc(url)}" target="_blank" rel="noopener">${ICON.plug}Open the devices page</a></div>` : ""}
      ${got.other ? `<p class="hint" style="text-align:center">${got.other} new thing${got.other === 1 ? " has" : "s have"} appeared, but ${got.other === 1 ? "it does" : "they do"} not look like a ${esc(what.split(",")[0].replace(/ \(.*/, ""))}.</p><div class="row"><button class="btn" data-act="showall">Show ${got.other === 1 ? "it" : "them"} anyway</button></div>` : ""}
      <div class="row"><button class="btn" data-act="list">Back to the list</button></div>`;
    this._say("I'm watching for it...", `Leave this window open and pair your new ${what.split(",")[0].replace(/ \(.*/, "")} with Home Assistant. The moment it appears, I'll show it here.`, "think");
  }
  _choose(ent) {
    const now = this._now();
    if (!now) return;
    if (!this.ed._link(now.d, ent)) return;
    this.fresh = false;
    this.watch = null;
    this.go(ent ? "try" : "done");
  }

  // ---------- step 2: is it the right one? ----------
  _buttons(d, ent, st) {
    const dom = ent.split(".")[0], a = (st && st.attributes) || {};
    if (!st) return "";
    if (TOGGLE.includes(dom)) return `<button class="btn" data-act="toggle">${ICON[d.kind] || ICON.switch}Switch it</button>`;
    if (dom === "cover") return `<button class="btn" data-act="open">${ICON.up}Open</button><button class="btn" data-act="stop">Stop</button><button class="btn" data-act="shut">${ICON.down}Close</button>`;
    if (dom === "climate" && typeof a.temperature === "number") return `<button class="btn" data-act="cooler">${ICON.down}Cooler</button><button class="btn" data-act="warmer">${ICON.up}Warmer</button>`;
    return "";
  }
  _tip(d, ent) {
    const dom = ent.split(".")[0];
    if (TOGGLE.includes(dom)) return "Press it and watch the real one.";
    if (dom === "cover") return "Press a button and watch the real one move.";
    if (dom === "climate") return "Nudge it and listen for the radiator valve, or look at the thermostat.";
    if (dom === "lock") return "I never lock or unlock doors from here. Try the lock yourself and watch this change.";
    if (d.kind === "motion") return "Wave at it and watch this change.";
    if (d.kind === "contact") return "Open and close it and watch this change.";
    return "";
  }
  _live() {
    const now = this._now(), box = this._q(".now");
    if (!now || !box || !now.ent) return;
    const { d, ent, st } = now, dom = ent.split(".")[0], a = (st && st.attributes) || {};
    let big = stateText(st), sub = "", hot = false;
    if (!st) sub = "Home Assistant can't find this one right now.";
    else if (st.state === "unavailable" || st.state === "unknown") sub = "It may be switched off or out of range.";
    else if (dom === "climate") {
      hot = a.hvac_action === "heating";
      sub = [a.hvac_action ? a.hvac_action[0].toUpperCase() + a.hvac_action.slice(1) : st.state, typeof a.temperature === "number" ? `set to ${a.temperature}°` : ""].filter(Boolean).join(", ");
    } else if (dom === "cover") { hot = st.state === "open"; sub = "0% is closed, 100% is open"; }
    else if (TOGGLE.includes(dom)) { hot = st.state === "on"; big = hot ? "On" : "Off"; }
    else if (dom === "lock") big = st.state === "locked" ? "Locked" : st.state === "unlocked" ? "Unlocked" : st.state;
    else if (dom === "binary_sensor") {
      hot = st.state === "on";
      big = d.kind === "motion" ? (hot ? "Movement!" : "All quiet") : d.kind === "contact" ? (hot ? "Open" : "Closed") : hot ? "On" : "Off";
    }
    box.classList.toggle("hot", hot);
    box.innerHTML = `<div class="big">${esc(big)}</div><div class="sub">${esc(sub)}</div><div class="who">${esc([this._friendly(ent), areaOf(now.hass, ent)].filter(Boolean).join(" · "))}</div>`;
  }
  // only ever runs when its button is pressed
  _act(act) {
    const now = this._now();
    if (act === "close") { this.close(); return; }
    if (!now) return;
    if (act === "wide") { this.wide = true; this._options(); return; }
    if (act === "new") { this.watch = { base: new Set(Object.keys((now.hass && now.hass.states) || {})), sig: "" }; this.render(); this._q(".s-body").scrollTop = 0; return; }
    if (act === "showall") { this.watch.all = true; this._waiting(true); return; }
    if (act === "list") { this.watch = null; this.render(); return; }
    if (act === "move") { const id = this.id; this.close(); this.ed._moveMode(id); return; }
    if (act === "remove") { const id = this.id; this.close(); this.ed._remove(id); return; }
    const { ent, st, hass } = now;
    if (!ent || !st || !hass || !hass.callService) return;
    const dom = ent.split(".")[0], a = st.attributes || {}, target = { entity_id: ent };
    if (act === "toggle" && TOGGLE.includes(dom)) hass.callService(dom, "toggle", target);
    else if (dom === "cover" && ["open", "stop", "shut"].includes(act)) hass.callService("cover", { open: "open_cover", stop: "stop_cover", shut: "close_cover" }[act], target);
    else if (dom === "climate" && (act === "warmer" || act === "cooler") && typeof a.temperature === "number") {
      const step = a.target_temp_step || 0.5, lo = a.min_temp != null ? a.min_temp : 5, hi = a.max_temp != null ? a.max_temp : 30;
      const t = Math.min(hi, Math.max(lo, a.temperature + (act === "warmer" ? step : -step)));
      hass.callService("climate", "set_temperature", { ...target, temperature: Math.round(t * 10) / 10 });
    }
  }

  // Home Assistant has new states: freshen what is on show without rebuilding what is being pressed
  refresh() {
    if (!this.dlg.open) return;
    const now = this._now();
    if (!now) { this.close(); return; }
    if (this.step === "try") this._live();
    else if (this.step === "pick" && this.watch) this._waiting(false);
    else if (this.step === "pick" && now.hass) {
      if (Object.keys(now.hass.states).length !== this._count) { this._options(); return; }
      this.dlg.querySelectorAll(".opt[data-ent]").forEach((b) => { const v = b.querySelector(".val"); if (v && b.dataset.ent) v.textContent = stateText(now.hass.states[b.dataset.ent]); });
    }
  }
}
