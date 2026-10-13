/* Two cards for the family wall: a chore chart with stars, and a week calendar with a face for each person.
   Both run on what Home Assistant already has: to-do lists for chores and homework, calendars for events. */
import { roofus, ICON } from "./art.js";
import { ensureFont, FONT } from "./font.js";
import { faceHtml, COLOURS } from "./people.js";
import { linksHtml, followLink, LINKS_STYLE } from "./links.js";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const STAR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.500l3.800 8 8.700 1.100-6.400 6 1.700 8.700L16 23l-7.800 4.300 1.700-8.700-6.400-6 8.700-1.100z" fill="var(--star,#fff)" stroke="#1b1b1b" stroke-width="2.400" stroke-linejoin="round"/></svg>`.replace(/\.(\d)00/g, ".$1");
const IDEAS = ["Make my bed", "Brush my teeth", "Tidy my toys", "Get dressed", "Set the table", "Feed the pet", "Put clothes away", "Read a book"];
const BASE = `${LINKS_STYLE}
  .links{margin:0 0 10px}
  :host{display:block;font-family:${FONT};font-weight:500;color:#1b1b1b;--ink:#1b1b1b;--sun:#FFD83A;--paper:#FFFDF4}
  *{box-sizing:border-box}
  ha-card{display:block;background:linear-gradient(#6CCBFA,#9ADCFC);border:3px solid var(--ink);border-radius:18px;padding:12px;overflow:hidden;position:relative;min-height:var(--toon-family-min-h,0);display:flex;flex-direction:column}
  .week{flex:1}
  .top{display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap}
  .roofus{flex:none;width:70px}
  .roofus svg{display:block;width:100%}
  .bubble{position:relative;flex:1;min-width:180px;background:#fff;border:3px solid var(--ink);border-radius:16px;padding:8px 12px;box-shadow:2px 3px 0 var(--ink);font-size:15px;line-height:1.3;min-height:56px}
  .bubble::before{content:"";position:absolute;left:-12px;top:20px;width:18px;height:18px;background:#fff;border-left:3px solid var(--ink);border-bottom:3px solid var(--ink);transform:rotate(45deg)}
  .bubble b{display:block;font-weight:700;font-size:18px}
  .btn{font:inherit;font-weight:700;font-size:15px;min-height:44px;padding:6px 12px;border:3px solid var(--ink);border-radius:13px;background:#fff;color:var(--ink);cursor:pointer;box-shadow:2px 3px 0 var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:6px}
  .btn:active{transform:translate(2px,3px);box-shadow:none}
  .btn.on{background:var(--sun)}
  .btn.go{background:#9BE37A}
  .btn svg{width:22px;height:22px;flex:none}
  .btn:focus-visible,.chore:focus-visible,input:focus{outline:4px solid #7A4FC4;outline-offset:2px}
  .face{flex:none;display:block;border-radius:50%}
  .face svg{display:block;width:100%;height:100%}
  dialog{font:inherit;color:var(--ink);border:4px solid var(--ink);border-radius:22px;padding:14px;background:var(--paper);box-shadow:5px 7px 0 var(--ink);width:min(460px,calc(100vw - 16px));max-height:calc(100dvh - 16px);overflow:auto}
  dialog::backdrop{background:rgba(27,27,27,.55)}
  dialog h3{margin:0 0 8px;font-size:20px}
  dialog label{display:block;font-weight:700;font-size:14px;margin:10px 0 4px}
  dialog input[type=text],dialog input[type=time]{font:inherit;font-size:17px;min-height:46px;padding:6px 10px;border:3px solid var(--ink);border-radius:12px;background:#fff;color:var(--ink);width:100%}
  .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:8px 0 0}
  .pick{min-height:40px;font-size:13px;padding:4px 9px}
  .who{flex-direction:column;gap:2px;font-size:12px;min-width:66px;padding:6px 4px}
  .who .face{width:40px;height:40px}
  .err{background:#FFE1D8;border:3px solid var(--ink);border-radius:12px;padding:8px 10px;margin-top:10px;font-size:14px}
`;

function people(config) {
  return (config.people || []).map((p, i) => ({ ...p, colour: p.colour || COLOURS[i % COLOURS.length], name: p.name || `Person ${i + 1}` }));
}
const todoItems = async (hass, entity) => ((await hass.callWS({ type: "todo/item/list", entity_id: entity })) || {}).items || [];
function escOnly(dlg) {
  // Escape closes this window only, whatever is behind it
  const h = (e) => { if (e.key === "Escape" && dlg.open) { e.stopPropagation(); e.preventDefault(); dlg.close(); } };
  dlg.addEventListener("close", () => window.removeEventListener("keydown", h, true));
  return () => { dlg.showModal(); window.addEventListener("keydown", h, true); };
}

// ============================== chores ==============================
const CHORE_STYLE = `
  .kids{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-top:12px}
  .kid{background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:2px 3px 0 var(--ink);padding:10px;position:relative;overflow:hidden}
  .kid header{display:flex;align-items:center;gap:10px;margin-bottom:8px}
  .kid .face{width:64px;height:64px}
  .kid h2{margin:0;font-size:22px;font-weight:700;line-height:1.1;flex:1;min-width:0;overflow-wrap:anywhere}
  .kid h2 small{display:block;font-size:13px;font-weight:500}
  .stars{display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:20px;border:3px solid var(--ink);border-radius:999px;padding:2px 10px 2px 6px;background:var(--sun);--star:#fff}
  .stars svg{width:26px;height:26px}
  .stars.bump{animation:bump .5s}
  @keyframes bump{40%{transform:scale(1.35) rotate(-6deg)}}
  .chore{font:inherit;color:var(--ink);width:100%;display:grid;grid-template-columns:38px 1fr auto;gap:8px;align-items:center;text-align:left;min-height:56px;padding:6px 10px;margin:0 0 7px;border:3px solid var(--ink);border-radius:14px;background:#fff;cursor:pointer;box-shadow:2px 3px 0 var(--ink);font-weight:700;font-size:17px;line-height:1.15}
  .chore:active{transform:translate(2px,3px);box-shadow:none}
  .chore svg{width:36px;height:36px;--star:#fff}
  .chore.done{background:#9BE37A}
  .chore.done svg{--star:#FFD83A;animation:spin .6s}
  .chore.done span{text-decoration:line-through;text-decoration-thickness:2px}
  .chore .x{display:none;width:34px;height:34px;border:3px solid var(--ink);border-radius:10px;background:#FF9F8A;place-items:center}
  .chore .x svg{width:18px;height:18px;animation:none}
  .edit .chore .x{display:grid}
  @keyframes spin{from{transform:scale(.3) rotate(-180deg)}}
  .none{font-size:14px;padding:6px 2px 10px}
  .kid .btn{width:100%;min-height:42px;font-size:14px;box-shadow:2px 2px 0 var(--ink)}
  .kid .newday{display:none;margin-top:7px}
  .edit .kid .newday{display:inline-flex}
  .bar{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}
  .bar .btn{min-height:38px;font-size:13px;box-shadow:2px 2px 0 var(--ink)}
  .confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden}
  .confetti i{position:absolute;top:-12px;width:9px;height:14px;border:2px solid var(--ink);border-radius:3px;animation:drop 1.5s ease-in forwards}
  @keyframes drop{to{transform:translateY(520px) rotate(540deg);opacity:.2}}
  @media (prefers-reduced-motion:reduce){.chore.done svg,.stars.bump,.confetti i{animation:none}.confetti{display:none}}
`;

class ToonChoresCard extends HTMLElement {
  static getStubConfig(hass) {
    const lists = Object.keys((hass && hass.states) || {}).filter((id) => id.startsWith("todo."));
    return { people: [{ name: "Mia", look: "girl", chores: lists[0] || "todo.mia_chores" }, { name: "Sam", look: "boy", chores: lists[1] || "todo.sam_chores" }] };
  }
  setConfig(config) {
    if (!config || !Array.isArray(config.people) || !config.people.length) throw new Error('Add a "people" list, each with a name and a "chores" to-do list.');
    this._config = config;
    // fill: true makes the card as tall as the screen, for a page with nothing else on it
    if (config.fill) this.style.setProperty("--toon-family-min-h", "100vh"); else this.style.removeProperty("--toon-family-min-h");
    this._people = people(config);
    this._items = this._items || {};
    this._seen = {};
    if (!this.shadowRoot) {
      ensureFont();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${BASE}${CHORE_STYLE}</style><ha-card><div class="links"></div><div class="top"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div><div class="kids"></div>
        <div class="bar"><button class="btn" data-act="edit">Grown-ups</button></div>
        <dialog><h3></h3><label for="what">What is the chore?</label><input id="what" type="text" autocomplete="off" maxlength="60"><div class="row" id="ideas"></div><div class="row" style="justify-content:flex-end"><button class="btn" data-act="cancel">Not now</button><button class="btn go" data-act="add">${ICON.yes}Add it</button></div></dialog></ha-card>`;
      const root = this.shadowRoot, dlg = root.querySelector("dialog");
      this._show = escOnly(dlg);
      root.querySelector("#ideas").innerHTML = IDEAS.map((t) => `<button class="btn pick" data-idea="${esc(t)}">${esc(t)}</button>`).join("");
      root.addEventListener("click", (e) => this._click(e));
      root.querySelector("#what").addEventListener("keydown", (e) => { if (e.key === "Enter") this._add(); });
    }
    this._render();
    this._load();
  }
  set hass(hass) {
    this._hass = hass;
    this._load();
  }
  getCardSize() { return 8; }
  _say(title, text, mood = "happy") {
    this.shadowRoot.querySelector(".roofus").innerHTML = roofus(mood);
    this.shadowRoot.querySelector(".bubble").innerHTML = `<b>${esc(title)}</b>${esc(text)}`;
  }
  // fetch a list again whenever Home Assistant says it changed
  async _load(force) {
    const hass = this._hass;
    if (!hass || !hass.callWS || !this._people) return;
    let changed = false;
    await Promise.all(this._people.map(async (p) => {
      if (!p.chores) return;
      const st = hass.states[p.chores], key = st ? `${st.state}|${st.last_updated || ""}` : "missing";
      if (!force && this._seen[p.chores] === key) return;
      this._seen[p.chores] = key;
      try { this._items[p.chores] = st ? await todoItems(hass, p.chores) : null; } catch (e) { this._items[p.chores] = null; }
      changed = true;
    }));
    const stars = this._people.map((p) => (p.stars && hass.states[p.stars] ? hass.states[p.stars].state : "")).join("|");
    if (changed || stars !== this._starSig) { this._starSig = stars; this._render(); }
  }
  _stars(p) {
    const st = p.stars && this._hass ? this._hass.states[p.stars] : null, items = this._items[p.chores] || [];
    return st && Number.isFinite(Number(st.state)) ? Math.round(Number(st.state)) : items.filter((i) => i.status === "completed").length;
  }
  _render() {
    const root = this.shadowRoot, box = root.querySelector(".kids"), edit = this._edit;
    root.querySelector("ha-card").classList.toggle("edit", !!edit);
    root.querySelector(".links").innerHTML = linksHtml(this._config.links);
    root.querySelector("[data-act='edit']").classList.toggle("on", !!edit);
    root.querySelector("[data-act='edit']").textContent = edit ? "Done" : "Grown-ups";
    let left = 0, total = 0;
    box.innerHTML = this._people.map((p, i) => {
      const items = this._items[p.chores], done = (items || []).filter((x) => x.status === "completed").length;
      if (items) { total += items.length; left += items.length - done; }
      const list = !p.chores ? `<p class="none">Give ${esc(p.name)} a "chores" to-do list in the card settings.</p>` : items === null ? `<p class="none">I can't find the list ${esc(p.chores)} in Home Assistant.</p>` : !items ? `<p class="none">Fetching...</p>` : !items.length ? `<p class="none">No chores yet. Add one below.</p>`
        : items.map((it) => `<button class="chore${it.status === "completed" ? " done" : ""}" data-p="${i}" data-uid="${esc(it.uid)}" aria-pressed="${it.status === "completed"}">${STAR}<span>${esc(it.summary)}</span><i class="x" data-act="remove" title="Take this chore away">${ICON.close}</i></button>`).join("");
      return `<section class="kid" data-p="${i}"><header><span class="face">${faceHtml(p, this._hass, p.colour)}</span><h2>${esc(p.name)}<small>${items && items.length ? `${done} of ${items.length} done` : ""}</small></h2><span class="stars" title="Stars">${STAR}<b>${this._stars(p)}</b></span></header>${list}
        ${p.chores && items ? `<button class="btn" data-act="new" data-p="${i}">+ Add a chore</button><button class="btn newday" data-act="newday" data-p="${i}">Start a new day</button>` : ""}</section>`;
    }).join("");
    if (this._hold > Date.now()) return;
    if (!total) this._say(this._config.title || "Chore chart", "Add a chore for each person to get started.", "think");
    else if (!left) this._say("Everything is done!", "What a team. Stars all round.", "party");
    else this._say(this._config.title || "Chore chart", `${left} chore${left === 1 ? "" : "s"} left to do. Tap a chore when it's done to win a star.`, "happy");
  }
  _cheer(title, text, mood) {
    this._hold = Date.now() + 5000;
    this._say(title, text, mood);
  }
  async _click(e) {
    if (followLink(e)) return;
    const root = this.shadowRoot, act = e.target.closest("[data-act]"), idea = e.target.closest("[data-idea]"), chore = e.target.closest(".chore");
    if (idea) { root.querySelector("#what").value = idea.dataset.idea; return; }
    if (act) {
      const a = act.dataset.act;
      if (a === "edit") { this._edit = !this._edit; this._render(); return; }
      if (a === "cancel") { root.querySelector("dialog").close(); return; }
      if (a === "add") { this._add(); return; }
      if (a === "new") { this._for = Number(act.dataset.p); root.querySelector("dialog h3").textContent = `A new chore for ${this._people[this._for].name}`; root.querySelector("#what").value = ""; this._show(); root.querySelector("#what").focus(); return; }
      if (a === "newday") { this._newDay(Number(act.dataset.p)); return; }
      if (a === "remove" && chore) { e.stopPropagation(); this._remove(Number(chore.dataset.p), chore.dataset.uid); return; }
    }
    if (chore) this._tick(Number(chore.dataset.p), chore.dataset.uid);
  }
  async _call(domain, service, data, entity) {
    try { await this._hass.callService(domain, service, data, entity ? { entity_id: entity } : undefined); return true; }
    catch (err) { this._cheer("That didn't work", `Home Assistant said: ${err && err.message ? err.message : "no"}.`, "oops"); return false; }
  }
  async _tick(pi, uid) {
    const p = this._people[pi], items = this._items[p.chores] || [], it = items.find((x) => x.uid === uid);
    if (!it || this._edit) return;
    const done = it.status !== "completed";
    it.status = done ? "completed" : "needs_action";   // show it at once; Home Assistant confirms a moment later
    const all = done && items.every((x) => x.status === "completed");
    this._cheer(done ? (all ? `${p.name} has finished everything!` : `Well done, ${p.name}!`) : "Oops, not done yet", done ? `"${it.summary}" is done. That's a star!` : `"${it.summary}" is back on the list.`, done ? "party" : "think");
    this._render();
    const kid = this.shadowRoot.querySelector(`.kid[data-p="${pi}"]`);
    if (done && kid) kid.querySelector(".stars").classList.add("bump");
    // on the card, not the child's panel: the panel is redrawn when Home Assistant confirms
    if (all) this._confetti(this.shadowRoot.querySelector("ha-card"));
    if (!(await this._call("todo", "update_item", { item: uid, status: it.status }, p.chores))) { this._load(true); return; }
    if (p.stars && this._hass.states[p.stars]) await this._call(p.stars.split(".")[0], done ? "increment" : "decrement", {}, p.stars);
    this._load(true);
  }
  _confetti(el) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerHTML = Array.from({ length: 26 }, (_, i) => `<i style="left:${(i * 37) % 100}%;background:${["#FFD83A", "#FF8FA3", "#7FD8BE", "#B197FC", "#5BA8F5"][i % 5]};animation-delay:${(i % 7) * 0.07}s"></i>`).join("");
    el.appendChild(c);
    setTimeout(() => c.remove(), 2300);
  }
  async _add() {
    const root = this.shadowRoot, text = root.querySelector("#what").value.trim(), p = this._people[this._for];
    if (!text || !p) return;
    root.querySelector("dialog").close();
    if (await this._call("todo", "add_item", { item: text }, p.chores)) this._cheer("Added!", `"${text}" is on ${p.name}'s list.`, "happy");
    this._load(true);
  }
  async _remove(pi, uid) {
    const p = this._people[pi];
    await this._call("todo", "remove_item", { item: uid }, p.chores);
    this._load(true);
  }
  // untick everything for tomorrow; the stars already won are kept
  async _newDay(pi) {
    const p = this._people[pi];
    for (const it of (this._items[p.chores] || []).filter((x) => x.status === "completed")) await this._call("todo", "update_item", { item: it.uid, status: "needs_action" }, p.chores);
    this._cheer("A fresh day!", `${p.name}'s chores are ready to do again. The stars are kept.`, "happy");
    this._load(true);
  }
}

// ============================== calendar ==============================
const CAL_STYLE = `
  .nav{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:12px 0 8px}
  .nav h2{margin:0;font-size:20px;font-weight:700;flex:1;min-width:140px;text-shadow:0 0 4px #fff,0 0 4px #fff}
  .nav .btn{min-height:42px}
  .week{display:grid;grid-template-columns:repeat(var(--days,7),minmax(0,1fr));gap:8px}
  .day{background:var(--paper);border:3px solid var(--ink);border-radius:14px;box-shadow:2px 3px 0 var(--ink);min-height:150px;overflow:hidden;display:flex;flex-direction:column}
  .day h3{margin:0;padding:5px 8px;font-size:15px;font-weight:700;background:#fff;border-bottom:3px solid var(--ink);display:flex;justify-content:space-between;gap:6px}
  .day.today h3{background:var(--sun)}
  .day.past{opacity:.72}
  .evs{padding:6px;display:flex;flex-direction:column;gap:6px;flex:1}
  .ev{display:grid;grid-template-columns:30px 1fr;gap:6px;align-items:center;border:3px solid var(--ink);border-radius:12px;padding:4px 6px;background:var(--c,#fff);font-size:13px;line-height:1.15;font-weight:700;overflow-wrap:anywhere}
  .ev .face{width:30px;height:30px}
  .ev .face svg.ic{width:26px;height:26px;margin:2px}
  .ev small{display:block;font-weight:500;font-size:12px}
  .free{font-size:13px;opacity:.7;padding:4px 2px}
  .hw{background:var(--paper);border:3px solid var(--ink);border-radius:14px;box-shadow:2px 3px 0 var(--ink);margin-top:10px;padding:8px 10px}
  .hw h3{margin:0 0 6px;font-size:16px;display:flex;align-items:center;gap:8px}
  .hw h3 svg{width:26px;height:26px}
  .hw .list{display:flex;gap:8px;flex-wrap:wrap}
  .hwi{font:inherit;color:var(--ink);font-weight:700;font-size:14px;min-height:44px;padding:4px 12px 4px 6px;border:3px solid var(--ink);border-radius:999px;background:#fff;cursor:pointer;display:inline-flex;align-items:center;gap:6px;box-shadow:2px 2px 0 var(--ink)}
  .hwi svg{width:28px;height:28px;--star:#fff}
  .hwi.done{background:#9BE37A;text-decoration:line-through}
  .hwi.done svg{--star:#FFD83A}
  .hwi small{font-weight:500}
  @media (max-width:700px){.week{grid-template-columns:1fr}.day{min-height:0;flex-direction:row}.day h3{flex:none;width:74px;flex-direction:column;border-bottom:0;border-right:3px solid var(--ink);justify-content:center;align-items:center;gap:0}.evs{flex-direction:column}}
`;
const day0 = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const hm = (d) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// Home Assistant's date-only values are local days, not midnight UTC
const parse = (v) => (v.dateTime ? new Date(v.dateTime) : new Date(`${v.date}T00:00:00`));
// which days of the window an event falls on: [{ index, label }]
export function eventDays(ev, from, days) {
  const out = [];
  for (let i = 0; i < days; i++) {
    const a = addDays(from, i), b = addDays(from, i + 1);
    if (ev.start < b && ev.end > a && !(ev.allDay && +ev.end === +a)) out.push(i);
  }
  return out;
}

class ToonCalendarCard extends HTMLElement {
  static getStubConfig(hass) {
    const cals = Object.keys((hass && hass.states) || {}).filter((id) => id.startsWith("calendar."));
    return { people: [{ name: "Mum", look: "mum", calendar: cals[0] || "calendar.mum" }, { name: "Dad", look: "dad", calendar: cals[1] || "calendar.dad" }] };
  }
  setConfig(config) {
    if (!config || (!Array.isArray(config.people) && !Array.isArray(config.calendars))) throw new Error('Add a "people" list (each with a name and a calendar) or a "calendars" list.');
    this._config = config;
    // fill: true makes the card as tall as the screen, for a page with nothing else on it
    if (config.fill) this.style.setProperty("--toon-family-min-h", "100vh"); else this.style.removeProperty("--toon-family-min-h");
    this._people = people(config);
    this._days = Math.max(1, Math.min(14, Number(config.days) || 7));
    // every calendar that is drawn, and whose face goes on its events
    this._sources = [];
    // a person's first calendar is where "+ Add" puts their new events; the rest are only shown
    this._people.forEach((p, i) => [].concat(p.calendar || []).forEach((entity, k) => this._sources.push({ entity, person: i, colour: p.colour, name: p.name, add: k === 0 })));
    (config.calendars || []).forEach((c, i) => { const o = typeof c === "string" ? { entity: c } : c; if (o && o.entity) this._sources.push({ entity: o.entity, person: -1, colour: o.colour || "#FFFDF4", name: o.name || "", icon: o.icon, add: o.add !== false }); });
    if (!this._from) this._from = this._start(new Date());
    if (!this.shadowRoot) {
      ensureFont();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${BASE}${CAL_STYLE}</style><ha-card><div class="links"></div><div class="top"><div class="roofus"></div><div class="bubble" aria-live="polite"></div></div>
        <div class="nav"><h2></h2><button class="btn" data-act="prev" aria-label="Earlier">${ICON.back}</button><button class="btn" data-act="today">Today</button><button class="btn" data-act="next" aria-label="Later">${ICON.next}</button><button class="btn go" data-act="new">+ Add</button></div>
        <div class="week"></div><div class="hw" style="display:none"><h3>${ICON.study}<span></span></h3><div class="list"></div></div>
        <dialog><h3>Something new on the calendar</h3><label for="what">What is it?</label><input id="what" type="text" autocomplete="off" maxlength="80">
          <label>Who is it for?</label><div class="row" id="whos"></div><label>Which day?</label><div class="row" id="whens"></div>
          <label for="time">What time? Leave empty for all day</label><input id="time" type="time">
          <div class="row" style="justify-content:flex-end"><button class="btn" data-act="cancel">Not now</button><button class="btn go" data-act="add">${ICON.yes}Add it</button></div></dialog></ha-card>`;
      this._show = escOnly(this.shadowRoot.querySelector("dialog"));
      this.shadowRoot.addEventListener("click", (e) => this._click(e));
    }
    this._events = null;
    this._render();
    this._load(true);
  }
  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) this._load(true);
    else { this._load(false); this._homework(false); }
  }
  connectedCallback() {
    // calendars do not announce new events, so look again every few minutes
    this._timer = setInterval(() => this._load(true), 5 * 60 * 1000);
  }
  disconnectedCallback() { clearInterval(this._timer); }
  getCardSize() { return 9; }
  _start(d) {
    const t = day0(d);
    return this._config.start === "today" || this._days !== 7 ? t : addDays(t, -((t.getDay() + 6) % 7));
  }
  _say(title, text, mood = "happy") {
    this.shadowRoot.querySelector(".roofus").innerHTML = roofus(mood);
    this.shadowRoot.querySelector(".bubble").innerHTML = `<b>${esc(title)}</b>${esc(text)}`;
  }
  async _load(force) {
    const hass = this._hass;
    if (!hass || !hass.callApi || !this._sources) return;
    const from = this._from, to = addDays(from, this._days), key = `${+from}|${this._sources.map((s) => s.entity).join(",")}`;
    if (!force && key === this._key) return;
    this._key = key;
    const out = [], missing = [];
    await Promise.all(this._sources.map(async (s, si) => {
      const st = hass.states[s.entity], label = (st && st.attributes.friendly_name) || s.name || s.entity;
      if (!st || st.state === "unavailable") { missing.push(label); return; }
      try {
        const rows = await hass.callApi("GET", `calendars/${s.entity}?start=${encodeURIComponent(from.toISOString())}&end=${encodeURIComponent(to.toISOString())}`);
        for (const r of rows || []) out.push({ title: r.summary || "(no name)", start: parse(r.start), end: parse(r.end), allDay: !r.start.dateTime, src: si });
      } catch (e) { missing.push(label); }
    }));
    if (key !== this._key) return;
    this._events = out;
    this._missing = missing;
    this._render();
    this._homework(true);
  }
  async _homework(force) {
    const hass = this._hass, id = this._config.homework, box = this.shadowRoot.querySelector(".hw");
    if (!id || !hass || !hass.callWS) { box.style.display = "none"; return; }
    const st = hass.states[id], key = st ? `${st.state}|${st.last_updated || ""}` : "missing";
    if (!force && key === this._hwKey) return;
    this._hwKey = key;
    let items = [];
    try { items = st ? await todoItems(hass, id) : []; } catch (e) { items = []; }
    this._hw = items;
    box.style.display = "";
    box.querySelector("h3 span").textContent = this._config.homework_title || (st && st.attributes.friendly_name) || "Homework";
    box.querySelector(".list").innerHTML = items.length ? items.map((it) => `<button class="hwi${it.status === "completed" ? " done" : ""}" data-hw="${esc(it.uid)}" aria-pressed="${it.status === "completed"}">${STAR}<span>${esc(it.summary)}${it.due ? ` <small>by ${esc(new Date(`${String(it.due).slice(0, 10)}T00:00:00`).toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" }))}</small>` : ""}</span></button>`).join("") : `<span class="free">${st ? "Nothing to do. Hooray!" : `I can't find ${esc(id)} in Home Assistant.`}</span>`;
  }
  _face(s) {
    if (s.person >= 0) return `<span class="face">${faceHtml(this._people[s.person], this._hass, s.colour)}</span>`;
    return `<span class="face">${(ICON[s.icon] || ICON.house).replace("<svg ", '<svg class="ic" ')}</span>`;
  }
  _render() {
    const root = this.shadowRoot, from = this._from, today = day0(new Date()), box = root.querySelector(".week"), evs = this._events;
    root.querySelector(".week").style.setProperty("--days", this._days);
    root.querySelector(".links").innerHTML = linksHtml(this._config.links);
    const last = addDays(from, this._days - 1), f = (d, o) => d.toLocaleDateString([], o);
    root.querySelector(".nav h2").textContent = this._days === 1 ? f(from, { weekday: "long", day: "numeric", month: "long" }) : `${f(from, { day: "numeric", month: from.getMonth() === last.getMonth() ? undefined : "short" })} to ${f(last, { day: "numeric", month: "long" })}`;
    const cols = Array.from({ length: this._days }, () => []);
    for (const ev of evs || []) for (const i of eventDays(ev, from, this._days)) cols[i].push(ev);
    box.innerHTML = cols.map((list, i) => {
      const d = addDays(from, i), cls = +d === +today ? " today" : d < today ? " past" : "";
      list.sort((a, b) => (a.allDay === b.allDay ? a.start - b.start : a.allDay ? -1 : 1));
      const body = !evs ? `<span class="free">Fetching...</span>` : !list.length ? `<span class="free">Nothing on</span>` : list.map((ev) => {
        const s = this._sources[ev.src];
        return `<div class="ev" style="--c:${esc(s.colour)}${s.person >= 0 ? "55" : ""}" title="${esc(s.name)}">${this._face(s)}<span>${esc(ev.title)}<small>${ev.allDay ? "All day" : ev.start < d ? `until ${hm(ev.end)}` : hm(ev.start)}</small></span></div>`;
      }).join("");
      return `<section class="day${cls}"><h3><span>${f(d, { weekday: "short" })}</span><span>${d.getDate()}</span></h3><div class="evs">${body}</div></section>`;
    }).join("");
    if (this._hold > Date.now()) return;
    const mine = (evs || []).filter((ev) => eventDays(ev, today, 1).length), title = this._config.title || "Our week";
    if (this._missing && this._missing.length) this._say("A calendar is not answering", `I can't read ${this._missing.join(", ")}. In Home Assistant it may need signing in to again. The others are shown.`, "oops");
    else if (!evs) this._say(title, "Fetching the calendars...", "think");
    else if (+from > +today || +addDays(from, this._days) <= +today) this._say(title, `${evs.length} thing${evs.length === 1 ? "" : "s"} on in these days.`, "happy");
    else if (!mine.length) this._say(title, "Nothing on today. A free day!", "party");
    else this._say(title, `Today: ${mine.slice(0, 3).map((e) => e.title).join(", ")}${mine.length > 3 ? ` and ${mine.length - 3} more` : ""}.`, "happy");
  }
  _writable() {
    return this._sources.map((s, i) => ({ ...s, i })).filter((s) => { const st = this._hass && this._hass.states[s.entity]; return s.add && st && st.state !== "unavailable" && (Number(st.attributes.supported_features) & 1); });
  }
  async _click(e) {
    if (followLink(e)) return;
    const root = this.shadowRoot, act = e.target.closest("[data-act]"), hw = e.target.closest("[data-hw]"), who = e.target.closest("[data-who]"), when = e.target.closest("[data-when]");
    if (who) { this._who = Number(who.dataset.who); root.querySelectorAll("[data-who]").forEach((b) => b.classList.toggle("on", b === who)); return; }
    if (when) { this._when = Number(when.dataset.when); root.querySelectorAll("[data-when]").forEach((b) => b.classList.toggle("on", b === when)); return; }
    if (hw) { this._tickHomework(hw.dataset.hw); return; }
    if (!act) return;
    const a = act.dataset.act;
    if (a === "prev" || a === "next") { this._from = addDays(this._from, (a === "next" ? 1 : -1) * this._days); this._events = null; this._render(); this._load(true); }
    else if (a === "today") { this._from = this._start(new Date()); this._events = null; this._render(); this._load(true); }
    else if (a === "cancel") root.querySelector("dialog").close();
    else if (a === "add") this._add();
    else if (a === "new") {
      const can = this._writable(), today = day0(new Date());
      if (!can.length) { this._hold = Date.now() + 7000; this._say("I can't add to these", "None of these calendars lets Home Assistant add events. A Local Calendar does.", "oops"); return; }
      this._who = can[0].i;
      const d0 = Math.round((today - this._from) / 864e5);
      this._when = d0 >= 0 && d0 < this._days ? d0 : 0;
      root.querySelector("#whos").innerHTML = can.map((s) => `<button class="btn who${s.i === this._who ? " on" : ""}" data-who="${s.i}">${this._face(s)}${esc(s.name || "Everyone")}</button>`).join("");
      root.querySelector("#whens").innerHTML = Array.from({ length: this._days }, (_, i) => { const d = addDays(this._from, i); return `<button class="btn pick${i === this._when ? " on" : ""}" data-when="${i}">${d.toLocaleDateString([], { weekday: "short" })} ${d.getDate()}</button>`; }).join("");
      root.querySelector("#what").value = "";
      root.querySelector("#time").value = "";
      this._show();
      root.querySelector("#what").focus();
    }
  }
  async _add() {
    const root = this.shadowRoot, text = root.querySelector("#what").value.trim(), time = root.querySelector("#time").value, s = this._sources[this._who];
    if (!text || !s) { root.querySelector("#what").focus(); return; }
    const d = addDays(this._from, this._when || 0);
    let data;
    if (time) {
      const [h, m] = time.split(":").map(Number), a = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m), b = new Date(+a + 3600e3), fmt = (x) => `${ymd(x)} ${String(x.getHours()).padStart(2, "0")}:${String(x.getMinutes()).padStart(2, "0")}:00`;
      data = { summary: text, start_date_time: fmt(a), end_date_time: fmt(b) };
    } else data = { summary: text, start_date: ymd(d), end_date: ymd(addDays(d, 1)) };
    root.querySelector("dialog").close();
    this._hold = Date.now() + 5000;
    try {
      await this._hass.callService("calendar", "create_event", data, { entity_id: s.entity });
      this._say("It's on the calendar!", `"${text}" on ${d.toLocaleDateString([], { weekday: "long" })}${time ? ` at ${time}` : ""}.`, "party");
    } catch (err) { this._say("That didn't work", `Home Assistant said: ${err && err.message ? err.message : "no"}.`, "oops"); }
    this._load(true);
  }
  async _tickHomework(uid) {
    const it = (this._hw || []).find((x) => x.uid === uid), id = this._config.homework;
    if (!it) return;
    const status = it.status === "completed" ? "needs_action" : "completed";
    this._hold = Date.now() + 5000;
    try {
      await this._hass.callService("todo", "update_item", { item: uid, status }, { entity_id: id });
      this._say(status === "completed" ? "Homework done!" : "Back on the list", `"${it.summary}"${status === "completed" ? " is finished. Brilliant." : " still needs doing."}`, status === "completed" ? "party" : "think");
    } catch (err) { this._say("That didn't work", `Home Assistant said: ${err && err.message ? err.message : "no"}.`, "oops"); }
    this._homework(true);
  }
}

if (!customElements.get("toon-chores-card")) customElements.define("toon-chores-card", ToonChoresCard);
if (!customElements.get("toon-calendar-card")) customElements.define("toon-calendar-card", ToonCalendarCard);
window.customCards = window.customCards || [];
for (const [type, name, description] of [["toon-chores-card", "Toon Chores Card", "A cartoon chore chart with stars, from your to-do lists"], ["toon-calendar-card", "Toon Calendar Card", "A cartoon family week, with a face for each person"]]) {
  if (!window.customCards.some((c) => c.type === type)) window.customCards.push({ type, name, description, preview: false, documentationURL: "https://github.com/digitaladaption/toon-house-card" });
}
