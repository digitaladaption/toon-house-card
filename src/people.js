/* The family: little cartoon faces for the calendar, the chore chart and the rooms of the house.
   All original drawings. look: a ready-made type ("dad", "mum", "girl", "boy", "baby", "gran", "grandad")
   or { type, skin, hair, top, glasses, beard, style } to make it look like the real person.
   style: "sunny" is a second way of drawing the face: yellow skin, big round eyes, a toothy grin. */
const INK = "#1b1b1b";
export const SKINS = { peach: "#FFD2B0", fair: "#FFE3CF", tan: "#E8B48A", brown: "#B97A56", dark: "#7A4A32", sunny: "#FFD83A" };
const TYPES = {
  dad: { hair: "#6B4226", top: "#3A8FD8", skin: "peach" }, mum: { hair: "#8A3B1E", top: "#E0569B", skin: "peach" },
  girl: { hair: "#D9A441", top: "#B197FC", skin: "peach" }, boy: { hair: "#4A3524", top: "#58C472", skin: "peach" },
  baby: { hair: "#D9A441", top: "#FFD83A", skin: "peach" }, gran: { hair: "#D9D9E3", top: "#7FD8BE", skin: "peach", glasses: true },
  grandad: { hair: "#C9CBD1", top: "#F0974F", skin: "peach", glasses: true },
};
export const LOOKS = Object.keys(TYPES);
export const COLOURS = ["#5BA8F5", "#F58FB7", "#B197FC", "#FFD23F", "#7FD069", "#FF8A73", "#7FD8BE"];

export function lookOf(look) {
  const o = typeof look === "string" ? { type: look } : { ...(look || {}) };
  const type = TYPES[o.type] ? o.type : "dad", base = TYPES[type];
  const sunny = o.style === "sunny";
  return { type, sunny, hair: o.hair || base.hair, top: o.top || base.top, skin: SKINS[o.skin] || o.skin || (sunny ? SKINS.sunny : SKINS[base.skin]), glasses: o.glasses != null ? !!o.glasses : !!base.glasses, beard: !!o.beard };
}

// an SVG face, 64 by 64. ring: a colour for the circle behind it (the person's colour on the calendar)
export function avatar(look, ring) {
  const L = lookOf(look), t = L.type, s = `stroke="${INK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"`;
  const thin = `stroke="${INK}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`;
  const baby = t === "baby", cy = baby ? 31 : 28, r = baby ? 17 : 15.5;
  let back = "", front = "";
  if (t === "mum") back = `<path d="M13 30c0-15 8-22 19-22s19 7 19 22c0 9 1 14 4 19H9c3-5 4-10 4-19z" fill="${L.hair}" ${s}/>`;
  if (t === "gran") back = `<circle cx="32" cy="10" r="7" fill="${L.hair}" ${s}/>`;
  if (t === "girl") back = `<circle cx="11" cy="24" r="7.5" fill="${L.hair}" ${s}/><circle cx="53" cy="24" r="7.5" fill="${L.hair}" ${s}/>`;
  if (t === "dad" || t === "boy") front = `<path d="M16.5 25c-1-11 6-16.5 15.5-16.5S48.5 14 47.5 25c-4-6-9-8-15.5-8s-11.5 2-15.5 8z" fill="${L.hair}" ${s}/>`;
  if (t === "grandad") front = `<path d="M16.5 27c-2-3-2-7 1-9M47.5 27c2-3 2-7-1-9" fill="none" ${s}/><path d="M15.5 24q1.5-5 5-7M48.5 24q-1.5-5-5-7" fill="none" stroke="${L.hair}" stroke-width="5" stroke-linecap="round"/>`;
  if (t === "mum" || t === "gran") front = `<path d="M16.5 25c0-10 7-15.5 15.5-15.5S47.5 15 47.5 25c-6-1-11-4-14-9-3 5-9 8-17 9z" fill="${L.hair}" ${s}/>`;
  if (t === "girl") front = `<path d="M16.5 25c0-10 7-15.5 15.5-15.5S47.5 15 47.5 25c-5-2-9-5-11-9-4 5-11 8-20 9z" fill="${L.hair}" ${s}/><path d="M9 17l5 4-6 2zM55 17l-5 4 6 2z" fill="#FF5D8F" ${s}/>`;
  if (baby) front = `<path d="M32 14c-1-5 3-8 6-5s-1 6-4 4" fill="none" stroke="${L.hair}" stroke-width="3.4" stroke-linecap="round"/>`;
  const eyeY = cy - 1, eye = baby ? 2.6 : 2.1;
  const face = `<circle cx="${32 - r - 1}" cy="${cy + 1}" r="3.2" fill="${L.skin}" ${s}/><circle cx="${32 + r + 1}" cy="${cy + 1}" r="3.2" fill="${L.skin}" ${s}/>
    <circle cx="32" cy="${cy}" r="${r}" fill="${L.skin}" ${s}/>
    ${L.sunny ? `<circle cx="26.4" cy="${cy + 2}" r="${baby ? 6 : 5.4}" fill="#fff" ${thin}/><circle cx="37.6" cy="${cy + 2}" r="${baby ? 6 : 5.4}" fill="#fff" ${thin}/><circle cx="27.6" cy="${cy + 2.4}" r="1.6" fill="${INK}"/><circle cx="36.4" cy="${cy + 2.4}" r="1.6" fill="${INK}"/>`
    : `<circle cx="25" cy="${cy + 5}" r="3" fill="#F78FB3" opacity=".65"/><circle cx="39" cy="${cy + 5}" r="3" fill="#F78FB3" opacity=".65"/>
    <circle cx="26" cy="${eyeY}" r="${eye}" fill="${INK}"/><circle cx="38" cy="${eyeY}" r="${eye}" fill="${INK}"/>`}
    ${baby ? `<circle cx="32" cy="${cy + (L.sunny ? 11 : 8)}" r="4" fill="#7FD9FF" ${s}/><circle cx="32" cy="${cy + (L.sunny ? 11 : 8)}" r="1.3" fill="#fff"/>` : L.sunny ? `<path d="M27 ${cy + 9.6}q5 3.6 10 0" fill="none" ${s}/>` : `<path d="M26.5 ${cy + 5.5}q5.5 5 11 0" fill="none" ${s}/>`}
    ${L.beard && !baby ? `<g${L.sunny ? ' transform="translate(0 3.4)"' : ""}><path d="M18 ${cy + 3}c1 12 7 15 14 15s13-3 14-15c-3 4-7 4-9 2-2 3-8 3-10 0-2 2-6 2-9-2z" fill="${L.hair}" ${s}/><path d="M27.5 ${cy + 6.5}q4.5 3 9 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>` : ""}
    ${L.glasses ? `<circle cx="26" cy="${eyeY}" r="5" fill="#ffffff55" ${thin}/><circle cx="38" cy="${eyeY}" r="5" fill="#ffffff55" ${thin}/><path d="M31 ${eyeY}h2" ${thin}/>` : ""}`;
  const body = `<path d="M12 64c1-11 8-17 20-17s19 6 20 17z" fill="${L.top}" ${s}/>${baby ? `<path d="M25 49q7 8 14 0" fill="#fff" ${s}/>` : ""}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">${ring ? `<defs><clipPath id="thc-face"><circle cx="32" cy="32" r="29"/></clipPath></defs><circle cx="32" cy="32" r="30.5" fill="${ring}" stroke="${INK}" stroke-width="3"/>` : ""}<g${ring ? ' clip-path="url(#thc-face)"' : ""}>${back}${body}${face}${front}</g>${ring ? `<circle cx="32" cy="32" r="30.5" fill="none" stroke="${INK}" stroke-width="3"/>` : ""}</svg>`;
}

// what to draw for a person: their own picture if they have one, else their cartoon face
export function faceHtml(p, hass, ring) {
  const ent = p.person && hass && hass.states[p.person], pic = p.picture || (ent && ent.attributes && ent.attributes.entity_picture) || "";
  if (pic && p.picture !== false && (p.picture || !p.look)) return `<img src="${String(pic).replace(/"/g, "&quot;")}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;border:3px solid ${INK};background:${ring || "#fff"};box-sizing:border-box">`;
  return avatar(p.look, ring);
}
