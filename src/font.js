// The rounded cartoon font, carried inside the card file so it works with no internet.
import f500 from "../assets/fonts/fredoka-latin-500-normal.woff2";
import f700 from "../assets/fonts/fredoka-latin-700-normal.woff2";

export const FONT = '"Toon House","Trebuchet MS","Segoe UI",system-ui,sans-serif';
// @font-face inside a shadow root is ignored, so it goes in the page head, once
export function ensureFont() {
  if (document.getElementById("toon-house-font")) return;
  const st = document.createElement("style");
  st.id = "toon-house-font";
  st.textContent = `@font-face{font-family:"Toon House";src:url(${f500}) format("woff2");font-weight:500;font-display:swap}@font-face{font-family:"Toon House";src:url(${f700}) format("woff2");font-weight:700 900;font-display:swap}`;
  document.head.appendChild(st);
}
