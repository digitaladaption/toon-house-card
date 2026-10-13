/* A screensaver for a wall tablet: after a while with nobody touching it, the screen shows your pictures,
   one after another, with a big clock. A touch brings the dashboard back. Any toon card can switch it on:
     screensaver: { after: 300, every: 30, pictures: [/local/a.jpg, /local/b.jpg], clock: 24 }
   clock: 24 or 12 picks the kind of clock, true leaves it to the device, false hides it.
   fit: fill makes each picture cover the whole screen.
   One screensaver serves the whole page, whichever card asked for it. */
import { ensureFont, FONT } from "./font.js";

const STYLE = `
  .thc-saver{position:fixed;inset:0;z-index:2147483000;background:#1b1b1b;display:none;font-family:${FONT};color:#fff;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}
  .thc-saver.on{display:block;animation:thc-in .8s ease}
  @keyframes thc-in{from{opacity:0}}
  .thc-saver .bg,.thc-saver .pic{position:absolute;inset:0;background-position:center 30%;background-repeat:no-repeat;opacity:0;transition:opacity 1.6s ease}
  .thc-saver .bg{background-size:cover;filter:blur(26px) brightness(.55);transform:scale(1.15)}
  .thc-saver .pic{background-size:contain;inset:3vh 3vw;animation:thc-drift 40s ease-in-out infinite alternate}
  .thc-saver.fill .pic{background-size:cover;inset:0}
  .thc-saver .show{opacity:1}
  @keyframes thc-drift{from{transform:scale(1)}to{transform:scale(1.045)}}
  .thc-saver .clock{position:absolute;left:4vw;bottom:5vh;text-shadow:0 0 0 #000,3px 4px 0 #1b1b1b,-2px -2px 0 #1b1b1b,2px -2px 0 #1b1b1b,-2px 2px 0 #1b1b1b;line-height:1}
  .thc-saver .time{font-weight:700;font-size:min(9vw,12vh)}
  .thc-saver .date{font-weight:700;font-size:min(3vw,3.8vh);margin-top:.6vh}
  .thc-saver .wx{font-weight:500;font-size:min(2.4vw,3vh);margin-top:.5vh}
  .thc-saver.night .bg{filter:blur(26px) brightness(.25)}
  .thc-saver.night .pic{filter:brightness(.5)}
  @media (prefers-reduced-motion:reduce){.thc-saver .pic{animation:none}.thc-saver .bg,.thc-saver .pic{transition:none}}
`;
const S = { config: null, key: "", el: null, idle: null, turn: null, tick: null, i: 0, layer: 0, hass: null, users: new Set() };
const EVENTS = ["pointerdown", "keydown", "wheel", "touchstart"];

function text() {
  const c = S.config, hass = S.hass, now = new Date(), w = c && c.weather && hass && hass.states[c.weather];
  const kind = c ? Number(c.clock) : 0;
  S.el.querySelector(".time").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", ...(kind === 24 ? { hourCycle: "h23" } : kind === 12 ? { hour12: true } : {}) });
  S.el.querySelector(".date").textContent = now.toLocaleDateString([], { weekday: "long", day: "numeric", month: "long" });
  S.el.querySelector(".wx").textContent = w && typeof w.attributes.temperature === "number" ? `${Math.round(w.attributes.temperature)}° outside` : "";
  const sun = hass && hass.states[(c && c.sun) || "sun.sun"];
  S.el.classList.toggle("night", !!(c && c.dim !== false && sun && sun.state === "below_horizon"));
}
function picture() {
  const list = S.config.pictures;
  if (!list.length) return;
  const url = String(list[S.i % list.length]), img = new Image();
  S.i++;
  // only swap once the next picture has arrived, so there is never a blank screen
  img.onload = () => {
    if (!S.el) return;
    const a = S.el.querySelectorAll(".bg"), b = S.el.querySelectorAll(".pic"), n = (S.layer = 1 - S.layer);
    for (const set of [a, b]) { set[n].style.backgroundImage = `url("${url.replace(/"/g, "%22")}")`; set[n].classList.add("show"); set[1 - n].classList.remove("show"); }
  };
  img.src = url;
}
function show() {
  if (!S.config || !S.el || S.el.classList.contains("on")) return;
  S.el.classList.add("on");
  text();
  picture();
  S.turn = setInterval(picture, Math.max(5, Number(S.config.every) || 30) * 1000);
  S.tick = setInterval(text, 10000);
}
function hide() {
  if (!S.el || !S.el.classList.contains("on")) return false;
  S.el.classList.remove("on");
  clearInterval(S.turn);
  clearInterval(S.tick);
  return true;
}
function arm() {
  clearTimeout(S.idle);
  if (S.config) S.idle = setTimeout(show, Math.max(5, Number(S.config.after) || 300) * 1000);
}
// a touch while the pictures are showing only brings the dashboard back: it must not also press what is underneath
function onTouch(e) {
  if (hide()) { e.stopPropagation(); e.preventDefault(); S.swallow = Date.now() + 600; }
  arm();
}
function onClick(e) {
  if (Date.now() < (S.swallow || 0)) { e.stopPropagation(); e.preventDefault(); }
}
function stop() {
  clearTimeout(S.idle);
  hide();
  for (const ev of EVENTS) window.removeEventListener(ev, onTouch, true);
  window.removeEventListener("click", onClick, true);
  if (S.el) S.el.remove();
  S.el = null;
  S.config = null;
  S.key = "";
}
/* Called by a card with its "screensaver" setting (or nothing, to give it up) and itself as the user. */
export function useScreensaver(user, config, hass) {
  if (hass) S.hass = hass;
  const c = config && typeof config === "object" ? { ...config, pictures: [].concat(config.pictures || config.picture || []).filter(Boolean) } : null;
  if (!c || !c.pictures.length) { leaveScreensaver(user); return; }
  S.users.add(user);
  const key = JSON.stringify(c);
  if (key === S.key) return;
  if (!S.el) {
    ensureFont();
    const el = (S.el = document.createElement("div"));
    el.className = "thc-saver";
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", "Screensaver. Touch to go back.");
    el.innerHTML = `<style>${STYLE}</style><div class="bg"></div><div class="bg"></div><div class="pic"></div><div class="pic"></div><div class="clock"><div class="time"></div><div class="date"></div><div class="wx"></div></div>`;
    document.body.appendChild(el);
    for (const ev of EVENTS) window.addEventListener(ev, onTouch, { capture: true, passive: false });
    window.addEventListener("click", onClick, true);
  }
  S.config = c;
  S.key = key;
  S.el.querySelector(".clock").style.display = c.clock === false ? "none" : "";
  // fit: fill stretches each picture to the edges of the screen (trimming what does not fit) instead of showing all of it
  S.el.classList.toggle("fill", c.fit === "fill" || c.fit === "cover");
  arm();
  // to see it straight away, add ?screensaver to the page address
  if (new URLSearchParams(location.search).has("screensaver")) show();
}
export function leaveScreensaver(user) {
  S.users.delete(user);
  if (!S.users.size) stop();
}
// for tests
export const screensaverState = () => ({ on: !!(S.el && S.el.classList.contains("on")), users: S.users.size, pictures: S.config ? S.config.pictures.length : 0, index: S.i, shown: S.el ? [...S.el.querySelectorAll(".pic.show")].map((p) => p.style.backgroundImage) : [], time: S.el ? S.el.querySelector(".time").textContent : "" });
if (typeof window !== "undefined") window.toonScreensaver = { show, hide, state: screensaverState };
