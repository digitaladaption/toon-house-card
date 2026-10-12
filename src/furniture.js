// Furniture as simple blocks. Each part: [x, z, w, d, y0, y1, colour, shape]. Local z is "down the plan"; the back of a sofa or bed is at -d/2.

export const FURNITURE_SIZE = {
  sofa: [2.2, 0.95, 0.85], sofa_l: [2.6, 1.8, 0.85], armchair: [0.95, 0.9, 0.85], tv_board: [1.8, 0.42, 0.5], coffee_table: [1.1, 0.6, 0.45], rug: [2.0, 1.4, 0.02],
  table: [1.8, 0.9, 0.76], chair: [0.46, 0.5, 0.9], stool: [0.45, 0.45, 0.44], sideboard: [1.4, 0.45, 0.85], shelf: [0.9, 0.35, 1.8], desk: [1.3, 0.65, 0.75],
  kitchen: [2.4, 0.62, 0.92], worktop: [2.0, 0.9, 0.92], sink: [0.9, 0.62, 0.92], stove: [0.6, 0.62, 0.92], fridge: [0.6, 0.65, 1.8], washer: [0.6, 0.6, 0.85],
  bed: [1.6, 2.05, 0.9], single_bed: [0.9, 2.0, 0.9], wardrobe: [1.8, 0.6, 2.1], bedside: [0.45, 0.4, 0.55],
  bathtub: [1.7, 0.75, 0.58], wc: [0.38, 0.6, 0.8], washbasin: [0.6, 0.46, 0.85], shower: [0.9, 0.9, 2.0], plant: [0.45, 0.45, 1.1], car: [1.8, 4.2, 1.45],
};

export function furnitureParts(f, C, index = 0) {
  const def = FURNITURE_SIZE[f.type] || [0.6, 0.6, 0.6];
  const w = f.w || def[0], d = f.d || def[1], h = f.h || def[2], P = [];
  const legs = (top, t, col) => { for (const sx of [-1, 1]) for (const sz of [-1, 1]) P.push([sx * (w / 2 - t), sz * (d / 2 - t), t, t, 0, top, col]); };
  const duvet = Array.isArray(C.duvet) ? C.duvet[index % C.duvet.length] : C.duvet;
  switch (f.type) {
    case "sofa":
    case "sofa_l":
    case "armchair":
      P.push([0, 0.08, w, d - 0.16, 0.12, 0.45, C.sofa], [0, -d / 2 + 0.14, w, 0.28, 0.12, 0.88, C.sofaDark],
        [-w / 2 + 0.12, 0.08, 0.24, d - 0.16, 0.45, 0.66, C.sofaDark], [w / 2 - 0.12, 0.08, 0.24, d - 0.16, 0.45, 0.66, C.sofaDark]);
      break;
    case "tv_board": P.push([0, 0, w, d, 0, h, C.tvUnit]); break;
    case "coffee_table": P.push([0, 0, w, d, 0.36, 0.45, C.woodLight]); legs(0.36, 0.07, C.wood); break;
    case "rug": P.push([0, 0, w, d, 0.03, 0.06, C.rug]); break;
    case "table":
    case "desk": P.push([0, 0, w, d, h - 0.07, h, C.woodLight]); legs(h - 0.07, 0.08, C.wood); break;
    case "chair": P.push([0, 0, w, d, 0.4, 0.47, C.wood], [0, -d / 2 + 0.03, w, 0.06, 0.47, h, C.wood]); legs(0.4, 0.05, C.wood); break;
    case "stool": P.push([0, 0, w, d, 0.36, 0.44, C.wood, "cyl"], [0, 0, 0.1, 0.1, 0, 0.36, C.steel, "cyl"]); break;
    case "sideboard": P.push([0, 0, w, d, 0.06, h, C.wood]); break;
    case "shelf":
    case "wardrobe":
    case "bedside": P.push([0, 0, w, d, 0, h, C.woodLight]); break;
    case "fridge": P.push([0, 0, w, d, 0, h, C.fridge]); break;
    case "washer": P.push([0, 0, w, d, 0, h, C.white], [0, d / 2, 0.36, 0.04, 0.25, 0.61, C.steel]); break;
    case "kitchen":
    case "worktop": P.push([0, 0, w, d, 0, h - 0.05, C.cabinet], [0, 0, w + 0.04, d + 0.04, h - 0.05, h, C.worktop]); break;
    case "sink": P.push([0, 0, w, d, 0, h - 0.05, C.cabinet], [0, 0, w + 0.04, d + 0.04, h - 0.05, h, C.worktop], [0, 0, w - 0.3, d - 0.24, h, h + 0.02, C.water]); break;
    case "stove":
      P.push([0, 0, w, d, 0, h - 0.05, C.white], [0, 0, w + 0.04, d + 0.04, h - 0.05, h, C.dark]);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) P.push([sx * 0.14, sz * 0.14, 0.18, 0.18, h, h + 0.02, C.bad, "cyl"]);
      break;
    case "bed":
    case "single_bed":
      P.push([0, 0, w, d, 0.12, 0.36, C.wood], [0, 0.06, w - 0.06, d - 0.16, 0.36, 0.56, duvet], [0, -d / 2 + 0.05, w, 0.1, 0, 1.0, C.wood]);
      if (w > 1.2) P.push([-w / 4, -d / 2 + 0.38, w / 2 - 0.16, 0.4, 0.56, 0.68, C.white], [w / 4, -d / 2 + 0.38, w / 2 - 0.16, 0.4, 0.56, 0.68, C.white]);
      else P.push([0, -d / 2 + 0.38, w - 0.2, 0.4, 0.56, 0.68, C.white]);
      break;
    case "bathtub": P.push([0, 0, w, d, 0, h, C.white], [0, 0, w - 0.2, d - 0.2, h, h + 0.02, C.water]); break;
    case "wc": P.push([0, -d / 2 + 0.1, w + 0.06, 0.2, 0, 0.8, C.white], [0, 0.1, w, w, 0, 0.42, C.white, "cyl"]); break;
    case "washbasin": P.push([0, -0.05, 0.2, 0.2, 0, 0.72, C.white], [0, 0, w, d, 0.72, h, C.white], [0, 0.02, w - 0.2, d - 0.18, h, h + 0.02, C.water]); break;
    case "shower": P.push([0, 0, w, d, 0, 0.1, C.white], [0, 0, w - 0.06, d - 0.06, 0.1, 1.95, "glass"]); break;
    case "plant": P.push([0, 0, w * 0.7, w * 0.7, 0, 0.35, C.pot, "cyl"], [0, 0, w, w, 0.55, 0.55 + w, C.plant, "ball"], [0, 0, w * 0.75, w * 0.75, 0.9, 0.9 + w * 0.75, C.plant, "ball"]); break;
    case "car": {
      const body = f.colour || "#E8483F";
      P.push([0, 0, w, d, 0.3, 0.8, body], [0, 0.15, w - 0.16, d * 0.5, 0.8, h, body], [0, 0.15, w - 0.12, d * 0.5 - 0.3, 0.86, h - 0.1, "glass"]);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) P.push([sx * (w / 2 - 0.05), sz * (d / 2 - 0.8), 0.66, 0.24, 0, 0.66, C.dark, "wheel"]);
      break;
    }
    default: P.push([0, 0, w, d, 0, h, C.planned]);
  }
  return P;
}
