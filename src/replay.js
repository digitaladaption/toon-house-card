/* Replay: wind the house back through the last day. The lights, blinds, radiators and the weather
   are drawn as they were, from Home Assistant's history. Nothing can be switched while looking at the past. */
const DAY = 24 * 3600 * 1000, STEP = 5 * 60 * 1000, STEPS = DAY / STEP;

export const REPLAY_STYLE = `
  .replay{position:absolute;left:10px;right:10px;bottom:30px;display:none;align-items:center;gap:8px;padding:8px 10px;background:#FFFDF4;border:3px solid #1b1b1b;border-radius:16px;box-shadow:3px 4px 0 #1b1b1b;pointer-events:auto;z-index:3}
  .replay.open{display:flex}
  .replay button{flex:none;min-width:44px;min-height:40px;padding:4px 10px}
  .replay input{flex:1;min-width:60px;height:36px;accent-color:#7A4FC4}
  .replay .when{flex:none;font-weight:900;font-size:14px;min-width:112px;text-align:center}
  .wrap.past .foot{display:none}
  @media (max-width:600px){.replay{flex-wrap:wrap}.replay input{order:5;flex-basis:100%}.replay .when{flex:1;text-align:left}}
`;

// the state each entity had at time t (ms), from history rows { entity: [{ s, a, lu }] } sorted by time
export function snapshot(history, t) {
  const out = {};
  for (const [id, rows] of Object.entries(history || {})) {
    let lo = 0, hi = rows.length - 1, at = -1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (rows[mid].lu * 1000 <= t) { at = mid; lo = mid + 1; } else hi = mid - 1; }
    if (at < 0) at = 0;   // before the first row we know of: the nearest we have
    if (!rows.length) continue;
    // attributes are left out of a row when they did not change
    let a = null;
    for (let i = at; i >= 0 && !a; i--) a = rows[i].a || null;
    out[id] = { entity_id: id, state: rows[at].s, attributes: a || {} };
  }
  return out;
}
export function whenText(t, now = Date.now()) {
  const d = new Date(t), today = new Date(now), time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return `${d.getDate() === today.getDate() ? "Today" : "Yesterday"} ${time}`;
}

export class Replay {
  constructor(card) {
    this.card = card;
    const el = this.el = document.createElement("div");
    el.className = "replay";
    el.innerHTML = `<button data-act="play" aria-label="Play">Play</button><span class="when" aria-live="off"></span><input type="range" min="0" max="${STEPS}" step="1" aria-label="Time in the last day"><button data-act="now">Back to now</button>`;
    card._wrap.appendChild(el);
    el.addEventListener("click", (e) => {
      const b = e.target.closest("[data-act]");
      if (!b) return;
      if (b.dataset.act === "now") this.stop();
      else this.play(!this.timer);
    });
    el.querySelector("input").addEventListener("input", (e) => { this.play(false); this.seek(Number(e.target.value)); });
  }
  get on() { return !!this.history; }
  async start() {
    const card = this.card, live = card._live;
    if (this.on || this.loading || !live || !live.callWS) return;
    const ids = new Set([card._config.weather, card._config.sun || "sun.sun"].filter((id) => id && id.includes(".")));
    for (const F of card._floors || []) for (const d of F.floor.devices || []) if (d.entity) ids.add(d.entity);
    this.end = Date.now();
    this.loading = true;
    card._say("Fetching the last day...", "", 20000);
    try {
      this.history = await live.callWS({ type: "history/history_during_period", start_time: new Date(this.end - DAY).toISOString(), end_time: new Date(this.end).toISOString(), entity_ids: [...ids], minimal_response: false, no_attributes: false, significant_changes_only: false });
    } catch (e) {
      this.history = null;
      card._say(`I couldn't fetch the history: ${e && e.message ? e.message : "Home Assistant said no"}.`, "", 8000);
    }
    this.loading = false;
    if (!this.history) return;
    card._toast.style.display = "none";
    this.el.classList.add("open");
    card._wrap.classList.add("past");
    this.seek(STEPS - 36);   // three hours ago, so there is something to play
  }
  seek(step) {
    if (!this.on) return;
    this.step = Math.max(0, Math.min(STEPS, step));
    const t = this.end - DAY + this.step * STEP, card = this.card, live = card._live;
    this.el.querySelector("input").value = this.step;
    this.el.querySelector(".when").textContent = whenText(t, this.end);
    card._hass = { ...live, states: { ...live.states, ...snapshot(this.history, t) }, callService: () => card._say("This is the past. Press Back to now to switch things.", "", 4000) };
    card._hassChanged();
  }
  play(go) {
    clearInterval(this.timer);
    this.timer = null;
    if (go && this.on) {
      if (this.step >= STEPS) this.seek(0);
      this.timer = setInterval(() => { if (this.step >= STEPS) this.play(false); else this.seek(this.step + 1); }, 110);
    }
    const b = this.el.querySelector("[data-act='play']");
    b.textContent = this.timer ? "Pause" : "Play";
    b.classList.toggle("on", !!this.timer);
  }
  stop() {
    this.play(false);
    if (!this.on) return;
    this.history = null;
    this.el.classList.remove("open");
    this.card._wrap.classList.remove("past");
    this.card._hass = this.card._live;
    this.card._hassChanged();
  }
}
