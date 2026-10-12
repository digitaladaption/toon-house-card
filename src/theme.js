// Colours and patterns. "toon" is the saturated cartoon look; "brick" is closer to a real British house.

const ROOMS_TOON = {
  living: { wall: "#F78FB3", floor: "#9C8CE8", pattern: "plain" },
  kitchen: { wall: "#7FD8BE", floor: "#FFD93B", floor2: "#FFF8D6", pattern: "check" },
  dining: { wall: "#FFC857", floor: "#DE8F4E", floor2: "#C97A3B", pattern: "wood" },
  hall: { wall: "#FFE27A", floor: "#DE8F4E", floor2: "#C97A3B", pattern: "wood" },
  bath: { wall: "#6FD3F5", floor: "#FFFFFF", floor2: "#8FDDF7", pattern: "check" },
  bedroom: [
    { wall: "#8FC4FA", floor: "#F9BFD8", pattern: "plain" },
    { wall: "#F9A8CB", floor: "#B7E4A6", pattern: "plain" },
    { wall: "#B4E68E", floor: "#FAD592", pattern: "plain" },
    { wall: "#CDB1F7", floor: "#FBE59A", pattern: "plain" },
  ],
  study: { wall: "#A6DE83", floor: "#DE8F4E", floor2: "#C97A3B", pattern: "wood" },
  utility: { wall: "#BCE3F7", floor: "#E9EDF2", floor2: "#C3CCD6", pattern: "check" },
  garage: { wall: "#D9D9E3", floor: "#C2C4CF", floor2: "#B3B5C1", pattern: "tile" },
  stairs: { wall: "#FFE27A", floor: "#DE8F4E", floor2: "#C97A3B", pattern: "wood" },
  store: { wall: "#E3D2F7", floor: "#D9C7A8", pattern: "plain" },
  other: { wall: "#FCE3B8", floor: "#F3D9A4", pattern: "plain" },
};
const ROOMS_BRICK = {
  living: { wall: "#F6E7CF", floor: "#F0BE96", pattern: "plain" },
  kitchen: { wall: "#F3F0E4", floor: "#F7E08C", floor2: "#FBF1C4", pattern: "check" },
  dining: { wall: "#F6E7CF", floor: "#D99A62", floor2: "#C98850", pattern: "wood" },
  hall: { wall: "#F3ECE0", floor: "#D5C6F2", pattern: "plain" },
  bath: { wall: "#E4F3F8", floor: "#FFFFFF", floor2: "#B5E1EE", pattern: "check" },
  bedroom: [
    { wall: "#EEF2F8", floor: "#C6D8F7", pattern: "plain" },
    { wall: "#F8EEF2", floor: "#F5C3DA", pattern: "plain" },
    { wall: "#F0F6EA", floor: "#C9E7B3", pattern: "plain" },
    { wall: "#F8F2E4", floor: "#FFD9A6", pattern: "plain" },
  ],
  study: { wall: "#EEF5E6", floor: "#BFE4A9", pattern: "plain" },
  utility: { wall: "#F1F1F1", floor: "#EADFC8", pattern: "plain" },
  garage: { wall: "#E2E2E2", floor: "#D0D0D0", floor2: "#C2C2C2", pattern: "tile" },
  stairs: { wall: "#F3ECE0", floor: "#D99A62", floor2: "#C98850", pattern: "wood" },
  store: { wall: "#F1EBE0", floor: "#E6E0D2", pattern: "plain" },
  other: { wall: "#FFF3D6", floor: "#EEE4CF", pattern: "plain" },
};

export const THEMES = {
  toon: {
    sky: "#6CCBFA", cloud: "#FFFFFF", sun: "#FFDD33", ink: "#1b1b1b",
    lawn: "#62CE3C", lawn2: "#56C232", earth: "#B57E4E", drive: "#CFC6E0", drive2: "#BDB3D1", path: "#F0E2BF", patio: "#F4D9A8", patio2: "#E6C68E",
    road: "#807C90", kerb: "#DAD7E3", fence: "#E9A85C", fencePost: "#C98238", hedge: "#3FB03A", leaf: ["#3FB03A", "#56C245", "#2F9E44"], blossom: "#E64980", trunk: "#9A5B34",
    flowers: ["#FF5D8F", "#FFD23F", "#FFFFFF", "#B197FC"],
    exterior: "#F9B58B", exteriorPattern: null, exterior2: "#F0A377", trim: "#FFFFFF", roof: "#C4513A", roof2: "#A8432F", roofPattern: "rooftile",
    chimney: "#D9744F", door: "#7A4FC4", doorInner: "#FFF7E6", knob: "#FFD23F", garage: "#FFF0D6", garage2: "#E5C9A0",
    wallCut: "#FFFDF4", inner: "#FCE3B8", slab: "#8C6A4A", glass: "#BDEBFF", curtain: "#9B6BE0", shutter: "#DDE4EA", shutter2: "#8793A0", shutterBox: "#8793A0",
    wood: "#9A5B34", woodLight: "#DBA15B", steel: "#C3CAD2", white: "#FBFBFB", water: "#9FE3FA", sofa: "#E07B2E", sofaDark: "#BE6220", duvet: ["#5BA8F5", "#F58FB7", "#7FD069", "#F5C24B"],
    rug: "#F2645A", cabinet: "#59B9E0", worktop: "#FFF4DC", tvUnit: "#6C56A8", fridge: "#D5F0F5", plant: "#3FB03A", pot: "#D9744F", dark: "#2B2F3A",
    planned: "#C4C4C4", bulbOn: "#FFE033", heat: "#FF8A3D", ok: "#69D14A", bad: "#FF5C5C", play: "#B79CFF", screen: "#7FD9FF",
    rooms: ROOMS_TOON, shade: [165, 255],
  },
  brick: {
    sky: "#8FD3FF", cloud: "#FFFFFF", sun: "#FFD83A", ink: "#1b1b1b",
    lawn: "#7CC53F", lawn2: "#6DB634", earth: "#9A7448", drive: "#DDA98A", drive2: "#CC9778", path: "#E7D8BC", patio: "#E7D8BC", patio2: "#D8C7A6",
    road: "#70737C", kerb: "#C9CBD1", fence: "#C98E4E", fencePost: "#8A5A3C", hedge: "#3F9A35", leaf: ["#3F9A35", "#4FB03F", "#2F8A3A"], blossom: "#A3243B", trunk: "#8A5A3C",
    flowers: ["#E64980", "#FFD23F", "#FFFFFF", "#9775FA"],
    exterior: "#D2603F", exteriorPattern: "brick", exterior2: "#B94E30", trim: "#FFFFFF", roof: "#4B4F5A", roof2: "#3A3D46", roofPattern: "rooftile",
    chimney: "#B94E30", door: "#2F5D8C", doorInner: "#FFFFFF", knob: "#D9D9D9", garage: "#F4F4F4", garage2: "#CFCFCF",
    wallCut: "#FFFDF4", inner: "#FFF3D6", slab: "#7A6652", glass: "#BDE8FF", curtain: "#E6DCC8", shutter: "#D9E0E6", shutter2: "#7d8a94", shutterBox: "#8B949C",
    wood: "#8A5A3C", woodLight: "#C9A063", steel: "#B9BEC5", white: "#F6F6F6", water: "#BFE9FF", sofa: "#E8734A", sofaDark: "#C95A33", duvet: ["#A5C8F5", "#F5B5D6", "#C9E7B3", "#FFD9A6"],
    rug: "#F2D8A0", cabinet: "#F3F3F3", worktop: "#B9BEC5", tvUnit: "#8A5A3C", fridge: "#B9BEC5", plant: "#3F9A35", pot: "#B94E30", dark: "#2B2F33",
    planned: "#BDBDBD", bulbOn: "#FFE033", heat: "#FF8A3D", ok: "#7CC44A", bad: "#FF6B6B", play: "#B79CFF", screen: "#7FD0FF",
    rooms: ROOMS_BRICK, shade: [150, 255],
  },
};

export function resolveTheme(name, overrides) {
  const base = THEMES[name] || THEMES.toon;
  return { ...base, ...(overrides || {}), rooms: { ...base.rooms, ...((overrides && overrides.rooms) || {}) } };
}

const TYPE_WORDS = [
  ["stairs", /stair/i], ["garage", /garage|carport/i], ["kitchen", /kitchen/i], ["dining", /dining|breakfast/i],
  ["bath", /bath|ensuite|en-suite|shower|wc|toilet|cloak|wet room/i], ["bedroom", /bed|nursery|guest/i],
  ["living", /living|lounge|sitting|family|snug|tv room|den/i], ["study", /study|office|play|games|gym|library/i],
  ["utility", /utility|laundry|boot|pantry/i], ["hall", /hall|landing|porch|entrance|lobby|corridor/i], ["store", /store|robe|wardrobe|closet|cupboard|loft|attic/i],
];
export function roomType(room) {
  if (room.type) return room.type;
  const text = `${room.name || ""} ${room.id || ""}`;
  for (const [type, re] of TYPE_WORDS) if (re.test(text)) return type;
  return "other";
}
// colours for one room: the room's own settings win, then the theme's for that kind of room
export function roomStyle(theme, room, bedroomIndex) {
  const type = roomType(room);
  let s = theme.rooms[type] || theme.rooms.other;
  if (Array.isArray(s)) s = s[bedroomIndex % s.length];
  return {
    type,
    wall: room.wall_colour || s.wall,
    floor: room.floor_colour || s.floor,
    floor2: room.floor_colour2 || s.floor2 || null,
    pattern: room.pattern || (room.floor_colour ? "plain" : s.pattern),
  };
}

function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16), f = (v) => Math.max(0, Math.min(255, Math.round(v * k)));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}
// repeat size in metres for each pattern
export const PATTERN_SIZE = { check: 1.0, wood: 1.2, tile: 1.0, brick: 0.9, rooftile: 0.42, stripes: 3.2, paving: 1.2, planks: 0.5 };

export function drawPattern(pattern, a, b) {
  const c = document.createElement("canvas"), S = 128;
  c.width = c.height = S;
  const g = c.getContext("2d");
  b = b || shade(a, 0.86);
  g.fillStyle = a;
  g.fillRect(0, 0, S, S);
  g.fillStyle = b;
  g.strokeStyle = b;
  g.lineWidth = 4;
  switch (pattern) {
    case "check": g.fillRect(0, 0, S / 2, S / 2); g.fillRect(S / 2, S / 2, S / 2, S / 2); break;
    case "wood":
      for (let i = 0; i < 4; i++) {
        g.fillRect(0, i * 32, S, 3);
        g.fillRect((i * 53 + 20) % S, i * 32, 3, 32);
      }
      break;
    case "tile": g.fillRect(0, 0, S, 3); g.fillRect(0, 0, 3, S); g.fillRect(0, S / 2, S, 3); g.fillRect(S / 2, 0, 3, S); break;
    case "brick":
    case "paving":
      for (let i = 0; i < 4; i++) {
        g.fillRect(0, i * 32, S, 4);
        for (let x = (i % 2) * 32; x < S; x += 64) g.fillRect(x, i * 32, 4, 32);
      }
      break;
    case "rooftile":
      g.fillRect(0, S - 10, S, 10);
      for (let x = 0; x < S; x += 32) g.fillRect(x, 0, 3, S);
      break;
    case "stripes": g.fillRect(0, 0, S, S / 2); break;
    case "planks":
      g.fillRect(0, 0, 5, S);
      g.fillRect(S / 2, 0, 5, S);
      break;
    default:
  }
  return c;
}
