// Drawings for the importer: Roofus the guide, and the little picture on each button. All original inline SVG.

const INK = "#1b1b1b";
const svg = (body, vb = "0 0 32 32") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" aria-hidden="true"><g fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;

// Roofus: a small house with a face. mood: happy | wow | think | oops | party
export function roofus(mood = "happy") {
  const eyes = {
    happy: `<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle class="pupil" cx="43.5" cy="67" r="3" fill="${INK}" stroke="none"/><circle class="pupil" cx="79.5" cy="67" r="3" fill="${INK}" stroke="none"/>`,
    wow: `<circle cx="42" cy="65" r="8.5" fill="#fff"/><circle cx="78" cy="65" r="8.5" fill="#fff"/><circle cx="42" cy="65" r="3.4" fill="${INK}" stroke="none"/><circle cx="78" cy="65" r="3.4" fill="${INK}" stroke="none"/>`,
    think: `<circle cx="42" cy="66" r="7" fill="#fff"/><circle cx="78" cy="66" r="7" fill="#fff"/><circle cx="45" cy="62.5" r="3" fill="${INK}" stroke="none"/><circle cx="81" cy="62.5" r="3" fill="${INK}" stroke="none"/><path d="M33 53l14-3M73 50l14 3"/>`,
    oops: `<circle cx="42" cy="67" r="7" fill="#fff"/><circle cx="78" cy="67" r="7" fill="#fff"/><circle cx="42" cy="69" r="3" fill="${INK}" stroke="none"/><circle cx="78" cy="69" r="3" fill="${INK}" stroke="none"/><path d="M34 55l13 4M86 55l-13 4"/><path d="M95 56c4 6 4 10 0 12-4-2-4-6 0-12z" fill="#9FE3FA"/>`,
    party: `<path d="M35 67q7-9 14 0M71 67q7-9 14 0" stroke-width="3.4"/>`,
  }[mood] || "";
  const mouth = {
    happy: `<path d="M50 82q10 9 20 0" stroke-width="3.2"/>`,
    wow: `<ellipse cx="60" cy="85" rx="6" ry="7.5" fill="#7A2E2E"/>`,
    think: `<path d="M52 85h15" stroke-width="3.2"/>`,
    oops: `<path d="M50 88q10-8 20 0" stroke-width="3.2"/>`,
    party: `<path d="M47 80q13 17 26 0z" fill="#7A2E2E"/><path d="M53 87q7 5 14 0" stroke="#FF8FA3" stroke-width="3"/>`,
  }[mood] || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" role="img" aria-label="Roofus the house">
    <g fill="none" stroke="${INK}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
      <g class="puff"><circle cx="93" cy="12" r="6" fill="#fff"/><circle cx="103" cy="5" r="4" fill="#fff"/></g>
      <rect x="82" y="20" width="14" height="24" fill="#D9744F"/>
      <rect x="20" y="50" width="80" height="62" rx="10" fill="#F9B58B"/>
      <path d="M8 56 60 12l52 44z" fill="#C4513A"/>
      <path d="M24 44h72M33 36h54" stroke="#A8432F" stroke-width="2.4"/>
      <circle cx="29" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/><circle cx="91" cy="80" r="5" fill="#F78FB3" stroke="none" opacity=".8"/>
      ${eyes}${mouth}
      <rect x="51" y="96" width="18" height="16" rx="3" fill="#7A4FC4"/><circle cx="64.5" cy="105" r="1.6" fill="#FFD83A" stroke="none"/>
      <path d="M20 86q-12 2-13 13M100 86q12 2 13 13" stroke-width="3.2"/>
    </g></svg>`;
}

export const ICON = {
  // tools
  upload: svg(`<path d="M16 22V7M10 12l6-6 6 6" stroke-width="3"/><path d="M5 20v5h22v-5"/>`),
  example: svg(`<rect x="5" y="6" width="22" height="20" rx="2" fill="#fff"/><path d="M5 15h12v11M17 15V6M17 20h10" stroke="#3A6FD8" stroke-width="2.8"/>`),
  wall: svg(`<rect x="4" y="8" width="24" height="16" rx="2" fill="#F9B58B"/><path d="M4 16h24M13 8v8M21 16v8M9 16v8M17 8v8"/>`),
  join: svg(`<rect x="4" y="8" width="11" height="16" rx="2" fill="#C9B6FF"/><rect x="17" y="8" width="11" height="16" rx="2" fill="#7FD8BE"/><path d="M11 16h10M18 13l3 3-3 3M14 13l-3 3 3 3" stroke-width="2.6"/>`),
  remove: svg(`<circle cx="16" cy="16" r="11" fill="#FF9F8A"/><path d="M11 11l10 10M21 11L11 21" stroke-width="3"/>`),
  measure: svg(`<rect x="3" y="11" width="26" height="10" rx="2" fill="#FFD83A"/><path d="M8 11v4M13 11v6M18 11v4M23 11v6"/>`),
  floor: svg(`<rect x="5" y="6" width="22" height="20" rx="2" stroke-dasharray="4 3.5" fill="#fff"/><path d="M11 20v-6l5-4 5 4v6z" fill="#F9B58B"/>`),
  colour: svg(`<path d="M20 5l7 7-3 3-7-7z" fill="#C9B6FF"/><path d="M18 9L7 20l-1 6 6-1 11-11" fill="#fff"/><path d="M6 26l2-2"/>`),
  turn: svg(`<path d="M26 16a10 10 0 1 1-4-8" stroke-width="3"/><path d="M23 3v6h-6" stroke-width="3"/>`),
  undo: svg(`<path d="M10 9l-6 6 6 6" stroke-width="3"/><path d="M4 15h14a8 8 0 0 1 0 16h-3" stroke-width="3" transform="translate(0 -5)"/>`),
  back: svg(`<path d="M19 6l-10 10 10 10" stroke-width="3.4"/>`),
  next: svg(`<path d="M13 6l10 10-10 10" stroke-width="3.4"/>`),
  save: svg(`<path d="M16 5v15M10 14l6 6 6-6" stroke-width="3"/><path d="M5 22v5h22v-5"/>`),
  copy: svg(`<rect x="11" y="10" width="15" height="17" rx="2" fill="#fff"/><path d="M21 10V6H7v17h4"/>`),
  yes: svg(`<circle cx="16" cy="16" r="11" fill="#9BE37A"/><path d="M10 16l4 5 8-9" stroke-width="3"/>`),
  no: svg(`<circle cx="16" cy="16" r="11" fill="#FFD83A"/><path d="M16 9v8" stroke-width="3"/><circle cx="16" cy="22" r="1.4" fill="${INK}"/>`),
  eye: svg(`<path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z" fill="#fff"/><circle cx="16" cy="16" r="4" fill="#7A4FC4"/>`),
  close: svg(`<path d="M8 8l16 16M24 8L8 24" stroke-width="3.4"/>`),
  up: svg(`<path d="M6 19l10-10 10 10" stroke-width="3.4"/>`),
  down: svg(`<path d="M6 13l10 10 10-10" stroke-width="3.4"/>`),
  // rooms
  kitchen: svg(`<path d="M7 14h18v9a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z" fill="#FFD83A"/><path d="M4 14h24M12 14v-3a4 4 0 0 1 8 0v3M11 7q1-2 0-4M16 6q1-2 0-4"/>`),
  living: svg(`<path d="M6 17v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5" fill="#E07B2E"/><rect x="3" y="15" width="26" height="9" rx="3" fill="#F0974F"/><path d="M7 24v3M25 24v3"/>`),
  dining: svg(`<circle cx="16" cy="17" r="8" fill="#fff"/><circle cx="16" cy="17" r="4"/><path d="M5 6v8M3 6v4a2 2 0 0 0 4 0V6M28 6v20M28 6c-3 2-3 8 0 9"/>`),
  bedroom: svg(`<path d="M4 9v17M4 20h24v6M28 20v-3a4 4 0 0 0-4-4H13v7" fill="none"/><rect x="13" y="13" width="15" height="7" rx="3" fill="#5BA8F5"/><circle cx="9" cy="16" r="3" fill="#fff"/>`),
  bathroom: svg(`<path d="M3 16h26v3a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7z" fill="#9FE3FA"/><path d="M8 16V8a3 3 0 0 1 6 0M9 26l-1 3M23 26l1 3"/>`),
  ensuite: svg(`<path d="M9 28V9a5 5 0 0 1 10 0" /><path d="M14 12h10l-1 3h-8z" fill="#9FE3FA"/><path d="M16 18v3M19.5 18v5M23 18v3" stroke="#3AA7D8"/>`),
  wc: svg(`<rect x="9" y="4" width="14" height="9" rx="2" fill="#fff"/><path d="M7 15h18a9 9 0 0 1-18 0z" fill="#fff"/><path d="M13 24v4h6v-4"/>`),
  hall: svg(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#DBA15B"/><circle cx="19" cy="17" r="1.5" fill="${INK}"/><path d="M5 28h22"/>`),
  landing: svg(`<path d="M4 27h7v-6h7v-6h7V9" stroke-width="3"/><path d="M22 6l3-3 3 3" stroke-width="2.6"/>`),
  stairs: svg(`<path d="M4 27h6v-5h6v-5h6v-5h6V6" stroke-width="3"/>`),
  garage: svg(`<path d="M4 13 16 5l12 8v14H4z" fill="#D9D9E3"/><path d="M9 27v-9h14v9M9 21h14M9 24h14"/>`),
  utility: svg(`<rect x="6" y="4" width="20" height="24" rx="3" fill="#fff"/><circle cx="16" cy="18" r="6" fill="#9FE3FA"/><path d="M10 8h3M17 8h5"/>`),
  study: svg(`<path d="M16 9c-3-3-8-3-12-2v17c4-1 9-1 12 2 3-3 8-3 12-2V7c-4-1-9-1-12 2z" fill="#B4E68E"/><path d="M16 9v17"/>`),
  playroom: svg(`<rect x="4" y="16" width="11" height="11" rx="2" fill="#FF8FA3"/><rect x="17" y="16" width="11" height="11" rx="2" fill="#5BA8F5"/><rect x="10.5" y="5" width="11" height="11" rx="2" fill="#FFD83A"/>`),
  store: svg(`<path d="M4 11l12-6 12 6v12l-12 6-12-6z" fill="#DBA15B"/><path d="M4 11l12 6 12-6M16 17v12"/>`),
  own: svg(`<path d="M5 27l2-7L21 6l5 5L12 25z" fill="#FFD83A"/><path d="M18 9l5 5"/>`),
  // doors and windows
  window: svg(`<rect x="6" y="6" width="20" height="20" rx="2" fill="#BDEBFF"/><path d="M16 6v20M6 16h20"/>`),
  door: svg(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FFF7E6"/><circle cx="19" cy="17" r="1.5" fill="${INK}"/>`),
  opening: svg(`<path d="M7 28V8a9 9 0 0 1 18 0v20" stroke-width="3"/>`),
  extdoor: svg(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#FF8A73"/><circle cx="19" cy="17" r="1.5" fill="${INK}"/>`),
  frontdoor: svg(`<rect x="9" y="4" width="14" height="24" rx="2" fill="#7A4FC4"/><rect x="12.5" y="8" width="7" height="6" rx="1" fill="#BDEBFF"/><circle cx="19.5" cy="19" r="1.6" fill="#FFD83A" stroke="none"/>`),
  bifold: svg(`<rect x="4" y="5" width="24" height="22" rx="2" fill="#BDEBFF"/><path d="M12 5v22M20 5v22"/>`),
  garageDoor: svg(`<rect x="4" y="7" width="24" height="20" rx="2" fill="#FFF0D6"/><path d="M4 12h24M4 17h24M4 22h24"/>`),
  none: svg(`<circle cx="16" cy="16" r="11" fill="#eee"/><path d="M9 23L23 9" stroke-width="3"/>`),
};
