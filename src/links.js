/* Big cartoon tabs for moving between dashboard pages (the house, the calendar, the chores) on a wall tablet,
   where Home Assistant's own top bar is usually hidden. Any toon card takes the same "links" list. */
import { ICON } from "./art.js";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const STAR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5l3.800 8 8.700 1.100-6.400 6 1.700 8.700L16 23l-7.800 4.300 1.700-8.700-6.400-6 8.700-1.100z" fill="#FFD83A" stroke="#1b1b1b" stroke-width="2.400" stroke-linejoin="round"/></svg>`.replace(/\.(\d)00/g, ".$1");
const CAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="#1b1b1b" stroke-width="2.400" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="24" height="21" rx="3" fill="#fff"/><path d="M4 13h24" /><rect x="4" y="7" width="24" height="6" rx="3" fill="#FF8A73"/><path d="M10 4v6M22 4v6"/><circle cx="11" cy="19" r="1.500" fill="#1b1b1b"/><circle cx="16" cy="19" r="1.500" fill="#1b1b1b"/><circle cx="21" cy="19" r="1.500" fill="#1b1b1b"/><circle cx="11" cy="24" r="1.500" fill="#1b1b1b"/></g></svg>`.replace(/\.(\d)00/g, ".$1");
const ART = { ...ICON, star: STAR, chores: STAR, calendar: CAL };

export const LINKS_STYLE = `
  .links{display:flex;gap:8px;flex-wrap:wrap;pointer-events:none}
  .links a{pointer-events:auto;font:inherit;font-weight:800;font-size:15px;min-height:44px;padding:5px 12px 5px 8px;border:3px solid #1b1b1b;border-radius:14px;background:#fff;color:#1b1b1b;cursor:pointer;box-shadow:2px 3px 0 #1b1b1b;display:inline-flex;align-items:center;gap:6px;text-decoration:none;-webkit-tap-highlight-color:transparent}
  .links a:active{transform:translate(2px,3px);box-shadow:none}
  .links a.here{background:#FFD83A}
  .links a:focus-visible{outline:4px solid #7A4FC4;outline-offset:2px}
  .links svg{width:26px;height:26px;flex:none}
  @media (max-width:600px){.links a{font-size:13px;min-height:40px;padding:4px 9px 4px 6px}.links svg{width:22px;height:22px}}
`;
// is this link the page being looked at? Same path, and any settings in the link's address match too.
function isHere(path) {
  try {
    const u = new URL(path, location.href), now = new URLSearchParams(location.search);
    if (u.origin !== location.origin || u.pathname.replace(/\/+$/, "") !== location.pathname.replace(/\/+$/, "")) return false;
    for (const [k, v] of u.searchParams) if (now.get(k) !== v) return false;
    return true;
  } catch (e) { return false; }
}
// the tabs. links: [{ name, path, icon }]
export function linksHtml(links) {
  return (Array.isArray(links) ? links : []).filter((l) => l && l.path).map((l) => {
    const path = String(l.path), on = isHere(path);
    return `<a href="${esc(path)}" data-link="${esc(path)}" class="${on ? "here" : ""}"${on ? ' aria-current="page"' : ""}>${ART[l.icon] || ""}<span>${esc(l.name || path)}</span></a>`;
  }).join("");
}
/* Go to another dashboard page without reloading Home Assistant. Kiosk mode in the address is kept.
   Call from a click handler: returns true if the click was on a tab. */
export function followLink(e) {
  const a = e.target.closest ? e.target.closest("[data-link]") : null;
  if (!a) return false;
  let path = a.dataset.link;
  if (/^https?:/.test(path) || /\.html(\?|#|$)/.test(path)) return true;   // somewhere outside Home Assistant: let the browser take it
  e.preventDefault();
  if (new URLSearchParams(location.search).has("kiosk") && !/[?&]kiosk/.test(path)) path += `${path.includes("?") ? "&" : "?"}kiosk`;
  history.pushState(null, "", path);
  window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
  return true;
}
