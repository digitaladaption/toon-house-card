// Toon House Builder: upload a plan picture, find the rooms, tidy them up, download a house file.
// Everything happens in this browser tab. The picture is never sent anywhere.
import { wallMask, wallThickness, findFloors, inkMask, detectFloor, toFloor, guessNames, cleanFloor } from "./detect.js";
import { roofus, ICON } from "./art.js";

const $ = (id) => document.getElementById(id);
const MAX_SIDE = 2200;
const KIND = {
  window: { colour: "#00c8ff", name: "Window", icon: "window" },
  door: { colour: "#ff00c8", name: "Inside door", icon: "door" },
  opening: { colour: "#ff9600", name: "Open gap", icon: "opening" },
  extdoor: { colour: "#ff2020", name: "Outside door", icon: "extdoor" },
  frontdoor: { colour: "#7a4fc4", name: "Front door", icon: "frontdoor" },
  bifold: { colour: "#00c800", name: "Patio doors", icon: "bifold" },
  garage: { colour: "#784000", name: "Garage door", icon: "garageDoor" },
  none: { colour: "#bdbdbd", name: "Nothing here", icon: "none" },
};
const CYCLE_OUT = ["window", "extdoor", "frontdoor", "bifold", "garage", "none"], CYCLE_IN = ["door", "opening", "none"];
const STICKERS = [["Kitchen", "kitchen"], ["Living room", "living"], ["Dining room", "dining"], ["Bedroom", "bedroom"], ["Bathroom", "bathroom"], ["Ensuite", "ensuite"], ["WC", "wc"], ["Hall", "hall"], ["Landing", "landing"], ["Stairs", "stairs"], ["Garage", "garage"], ["Utility", "utility"], ["Study", "study"], ["Playroom", "playroom"], ["Store", "store"]];
const STEPS = ["plan", "check", "size", "rooms", "doors", "floors", "done"];
const TITLE = { plan: "Hi, I'm Roofus!", check: "Did I find your rooms?", size: "How big is it?", rooms: "Name the rooms", doors: "Doors and windows", floors: "Stack the floors", done: "Ta-da!" };
const TOOL = {
  colour: ["Show me a wall", "Tap on a wall in the picture."],
  wall: ["Adding a wall", "Drag a line where the wall should be. I'll stretch it to the walls either side."],
  merge: ["Joining rooms", "Tap the two rooms that should be one."],
  remove: ["Removing a room", "Tap the bit that isn't really a room."],
  box: ["Marking a floor", "Drag a box right round one floor of the plan."],
  measure: ["Measuring", "Drag along something you know the length of, like the width of a room."],
};

const S = { source: null, W: 0, H: 0, rgba: null, colour: null, wall: null, ink: null, t: 0, ppm: 0, ppmSet: false, floors: [], tool: "select", sel: null, mergeFirst: null, history: [], house: null, step: "plan", partied: false };
let canvas, ctx, card, previewTimer, pendingLine = 0;

// ---------- Roofus talks ----------
function say(text, mood = "happy", bad = false) {
  $("stitle").textContent = TITLE[S.step];
  $("status").textContent = text;
  $("bubble").classList.toggle("bad", bad);
  const r = $("roofus");
  r.innerHTML = roofus(bad ? "oops" : mood);
  r.classList.remove("jump");
  if (mood === "party" && !matchMedia("(prefers-reduced-motion:reduce)").matches) { void r.offsetWidth; r.classList.add("jump"); }
}
const status = (text, bad) => say(text, bad ? "oops" : "happy", bad);
function roomCount() {
  return S.floors.reduce((a, f) => a + (f.out ? f.out.rooms.length : 0), 0);
}
function stepSay() {
  const rooms = roomCount(), named = S.floors.reduce((a, f) => a + (f.out ? f.out.rooms.filter((r) => isNamed(f, r._region)).length : 0), 0);
  switch (S.step) {
    case "plan": say("Give me a picture of your floor plan and I'll build your house.", "happy"); break;
    case "check":
      if (!rooms) say("I can't see any rooms yet. Tap \"Not quite\" and show me a wall.", "oops", true);
      else say(`I found ${S.floors.length} floor${S.floors.length > 1 ? "s" : ""} and ${rooms} rooms, and coloured each one in. Does that look like your home?`, "wow");
      break;
    case "size": say(S.ppmSet ? "Got it! Every room is the right size now. Press Next." : "Tap a room, then tell me its size from your plan. One number is enough.", S.ppmSet ? "party" : "think"); break;
    case "rooms":
      if (named >= rooms && rooms) say("Every room has a name. Press Next!", "party");
      else say(`Tap a room, then pick its sticker. ${named} of ${rooms} named so far.`, "happy");
      break;
    case "doors": {
      const front = S.floors.some((f) => f.out && f.out.openings.some((o) => o.kind === "frontdoor"));
      say(front ? "Front door found! Tap any other strip that looks wrong, or press Next." : "Which one is your front door? Tap its strip until it turns purple.", front ? "party" : "think");
      break;
    }
    case "floors": say("Does upstairs sit in the right place? Check the 3D house and nudge it with the arrows.", "think"); break;
    case "done": say("Your house is ready! Save it and take it to Home Assistant.", "party"); break;
    default:
  }
}
function confetti() {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const box = $("confetti"), colours = ["#FFD83A", "#F78FB3", "#7FD8BE", "#C9B6FF", "#FF8A73", "#6CCBFA"];
  for (let i = 0; i < 70; i++) {
    const p = document.createElement("i");
    p.style.left = `${Math.random() * 100}%`;
    p.style.background = colours[i % colours.length];
    p.style.animationDuration = `${1.6 + Math.random() * 1.6}s`;
    p.style.animationDelay = `${Math.random() * 0.5}s`;
    box.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}

// ---------- steps ----------
function stepsNow() {
  return STEPS.filter((s) => s !== "floors" || S.floors.filter((f) => f.out && f.out.rooms.length).length > 1);
}
function go(step) {
  if (!S.source && step !== "plan") return;
  if (!stepsNow().includes(step)) step = "done";
  S.step = step;
  document.body.className = `toon step-${step}${S.source ? "" : " noplan"}${document.body.classList.contains("peek") && step !== "done" ? " peek" : ""}`;
  document.querySelectorAll(".step").forEach((el) => el.classList.toggle("show", el.dataset.for === step));
  setTool("select", true);
  S.view = ["size", "rooms", "doors"].includes(step) && S.floors.length > 1 ? (step !== "doors" && S.sel ? S.sel.fi : 0) : null;
  if (step === "rooms" && !selectedRoom()) pickNextUnnamed();
  setView(S.view);
  const list = stepsNow(), at = list.indexOf(step), dots = $("dots");
  dots.innerHTML = "";
  list.forEach((s, i) => {
    if (i) dots.appendChild(document.createElement("i"));
    const b = document.createElement("button");
    b.className = `dot${i < at ? " done" : ""}${i === at ? " now" : ""}`;
    b.dataset.step = s;
    b.textContent = String(i + 1);
    b.title = TITLE[s];
    b.setAttribute("aria-label", `Step ${i + 1}: ${TITLE[s]}`);
    b.disabled = !S.source && s !== "plan";
    b.onclick = () => go(s);
    dots.appendChild(b);
  });
  $("back").disabled = at <= 0;
  $("next").style.visibility = step === "done" ? "hidden" : "visible";
  panel();
  draw();
  stepSay();
  buildHouse();
  if (step === "done" && !S.partied) { S.partied = true; confetti(); }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function move(by) {
  const list = stepsNow(), at = list.indexOf(S.step);
  go(list[Math.max(0, Math.min(list.length - 1, at + by))]);
}

// ---------- loading the picture ----------
async function loadFile(file) {
  let bmp;
  try {
    bmp = await createImageBitmap(file);
  } catch (e) {
    say("I couldn't open that as a picture. Try a JPG, PNG or WebP. For a PDF, take a screenshot of the plan first.", "oops", true);
    return;
  }
  const k = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height)), c = document.createElement("canvas");
  c.width = Math.round(bmp.width * k);
  c.height = Math.round(bmp.height * k);
  c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
  setSource(c);
}
function setSource(c) {
  S.source = c;
  S.W = c.width;
  S.H = c.height;
  S.rgba = c.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, S.W, S.H).data;
  S.ink = inkMask(S.rgba, S.W, S.H);
  S.colour = guessWallColour();
  S.ppmSet = false;
  S.history = [];
  S.partied = false;
  S.view = null;
  $("drop").style.display = "none";
  canvas.style.display = "block";
  analyse();
  go("check");
}
function rotate() {
  if (!S.source) return;
  const c = document.createElement("canvas");
  c.width = S.H;
  c.height = S.W;
  const g = c.getContext("2d");
  g.translate(S.H, 0);
  g.rotate(Math.PI / 2);
  g.drawImage(S.source, 0, 0);
  setSource(c);
  $("helper").style.display = "";
}
// walls are usually the most common dark or strongly coloured ink on the plan
function guessWallColour() {
  const count = new Map(), d = S.rgba;
  for (let p = 0; p < d.length; p += 16) {
    const r = d[p], g = d[p + 1], b = d[p + 2], max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (!(max - min > 90 || max < 90)) continue;
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    count.set(key, (count.get(key) || 0) + 1);
  }
  let best = 0x111, n = 0;
  for (const [k, v] of count) if (v > n) { n = v; best = k; }
  return [((best >> 8) & 15) * 16 + 8, ((best >> 4) & 15) * 16 + 8, (best & 15) * 16 + 8];
}

// ---------- detection ----------
function newFloor(box, i) {
  return { box, name: i === 0 ? "Ground" : i === 1 ? "Upstairs" : `Floor ${i}`, virtualWalls: [], openGaps: [], names: [], deleted: [], kinds: [], dx: 0, dy: 0 };
}
function analyse() {
  S.wall = wallMask(S.rgba, S.W, S.H, S.colour, Number($("tolerance").value));
  S.t = wallThickness(S.wall, S.W, S.H);
  let boxes;
  if (S.ppmSet) boxes = findFloors(S.wall, S.ink, S.W, S.H, S.t, S.ppm);
  else {
    // First guess at the scale: most houses are about 10 m across. Wall thickness is a poor guide,
    // because plans draw walls anything from hairline to very thick.
    S.ppm = S.t / 0.27;
    for (let pass = 0; pass < 2; pass++) {
      boxes = findFloors(S.wall, S.ink, S.W, S.H, S.t, S.ppm);
      if (!boxes.length) break;
      S.ppm = Math.max(...boxes.map((b) => Math.max(b.x1 - b.x0, b.y1 - b.y0))) / 11;
    }
    boxes = findFloors(S.wall, S.ink, S.W, S.H, S.t, S.ppm);
  }
  S.floors = boxes.slice(0, 4).map(newFloor);
  S.sel = null;
  S.view = null;
  redetect();
}
function regionAt(f, x, y) {
  const lx = Math.round(x - f.box.x0), ly = Math.round(y - f.box.y0), d = f.det;
  if (lx < 0 || ly < 0 || lx >= d.bw || ly >= d.bh) return 0;
  return d.lab[ly * d.bw + lx];
}
// a point that is certainly inside a region (its centre can fall outside an L-shaped room)
function seedOf(f, region) {
  const d = f.det, r = d.rooms.find((q) => q.id === region);
  if (!r) return null;
  for (const y of [Math.round(r.cy), r.y0 + 2, r.y1 - 2]) {
    let s = -1;
    for (let x = r.x0; x <= r.x1 + 1; x++) {
      const on = x <= r.x1 && d.lab[y * d.bw + x] === region;
      if (on && s < 0) s = x;
      if (!on && s >= 0) return { x: Math.round((s + x) / 2) + f.box.x0, y: y + f.box.y0 };
    }
  }
  return { x: Math.round(r.cx) + f.box.x0, y: Math.round(r.cy) + f.box.y0 };
}
const gapCentre = (f, g) => (g.horizontal ? { x: (g.a0 + g.a1) / 2 + f.box.x0, y: (g.l0 + g.l1) / 2 + f.box.y0 } : { x: (g.l0 + g.l1) / 2 + f.box.x0, y: (g.a0 + g.a1) / 2 + f.box.y0 });
const near = (p, q, d = 8) => Math.abs(p.x - q.x) <= d && Math.abs(p.y - q.y) <= d;
const isNamed = (f, region) => f.names.some((n) => regionAt(f, n.x, n.y) === region);

function redetect() {
  S.floors.forEach((f, i) => {
    f.det = detectFloor(S.wall, S.ink, S.W, S.H, { box: f.box, ppm: S.ppm, thickness: S.t, virtualWalls: f.virtualWalls, openGaps: f.openGaps });
    const names = new Map();
    for (const n of f.names) { const r = regionAt(f, n.x, n.y); if (r) names.set(r, { name: n.name }); }
    const out = guessNames(toFloor(f.det, names), i);
    const gone = new Set(f.deleted.map((p) => regionAt(f, p.x, p.y)).filter(Boolean));
    const dropped = new Set(out.rooms.filter((r) => gone.has(r._region)).map((r) => r.id));
    out.rooms = out.rooms.filter((r) => !dropped.has(r.id));
    out.openings = out.openings.filter((o) => !dropped.has(o.room));
    for (const o of out.openings) {
      const c = gapCentre(f, o._gap), k = f.kinds.find((q) => near(q, c));
      if (k) o.kind = k.kind;
    }
    out.openings = out.openings.filter((o) => o.kind !== "none");
    f.out = out;
    // a tint for each room, drawn over the plan
    const d = f.det, img = new ImageData(d.bw, d.bh), idxOf = new Map(out.rooms.map((r, k) => [r._region, k]));
    for (let p = 0; p < d.bw * d.bh; p++) {
      const k = idxOf.get(d.lab[p]);
      if (k == null) continue;
      img.data[p * 4] = (k * 97 + 60) % 200 + 40;
      img.data[p * 4 + 1] = (k * 57 + 120) % 200 + 40;
      img.data[p * 4 + 2] = (k * 151 + 30) % 200 + 40;
      img.data[p * 4 + 3] = 120;
    }
    const c = document.createElement("canvas");
    c.width = d.bw;
    c.height = d.bh;
    c.getContext("2d").putImageData(img, 0, 0);
    f.tint = c;
  });
  draw();
  panel();
  buildHouse();
}

// ---------- the house file ----------
function buildHouse() {
  const floors = S.floors.filter((f) => f.out && f.out.rooms.length);
  if (!floors.length) { S.house = null; preview(); return; }
  const depth0 = floors[0].out.size[1], lights = $("lights").checked;
  const house = { title: $("title").value || "My house", floors: [] };
  floors.forEach((f, i) => {
    const clean = cleanFloor(f.out), fl = { id: i === 0 ? "ground" : `floor${i}`, name: f.name || `Floor ${i}` };
    if (i > 0) fl.offset = [Math.round(f.dx * 100) / 100, Math.round((depth0 - f.out.size[1] + f.dy) * 100) / 100];
    fl.rooms = clean.rooms;
    fl.openings = clean.openings;
    if (lights) {
      fl.devices = f.out.rooms.filter((r) => r._area > 3).map((r) => {
        const s = seedOf(f, r._region);
        return { name: `${r.name} light`, kind: "light", x: Math.round(((s.x - f.box.x0) / S.ppm - f.out.origin[0]) * 100) / 100, y: Math.round(((s.y - f.box.y0) / S.ppm - f.out.origin[1]) * 100) / 100, entity: null };
      });
    }
    house.floors.push(fl);
  });
  S.house = house;
  preview();
}
function fitPreview() {
  if (!card) return;
  const box = $("preview");
  card.style.setProperty("--toon-house-min-h", "0px");
  card.style.setProperty("--toon-house-h", `${Math.max(120, box.clientHeight)}px`);
}
function preview() {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    if (!S.house) return;
    if (!card) {
      card = document.createElement("toon-house-card");
      $("preview").innerHTML = "";
      $("preview").appendChild(card);
      new ResizeObserver(fitPreview).observe($("preview"));
    }
    // the 3D house shows the same floor as the plan, and the whole house from outside at the end
    const shown = S.view != null && S.house.floors[S.view] ? S.house.floors[S.view].id : "ground";
    card.setConfig({ layout: S.house, view: S.step === "floors" || S.step === "done" ? "outside" : shown });
    card.hass = { states: {}, callService() {} };
    fitPreview();
    window.card = card;
  }, 250);
}
function download() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(S.house, null, 2)], { type: "application/json" }));
  a.download = "house.json";
  a.click();
  confetti();
  say("Saved house.json! Now follow the three steps below to put it in Home Assistant.", "party");
}

// ---------- drawing the plan with what was found ----------
function pill(text, x, y, size, fill, fg = "#1b1b1b") {
  ctx.font = `700 ${size}px Fredoka, system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const w = ctx.measureText(text).width + size * 0.9, h = size * 1.5;
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, h / 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = Math.max(1.5, size / 9);
  ctx.strokeStyle = "#1b1b1b";
  ctx.stroke();
  ctx.fillStyle = fg;
  ctx.fillText(text, x, y + size * 0.05);
}
function draw() {
  if (!S.source) return;
  const view = viewRect();
  if (canvas.width !== view.w || canvas.height !== view.h) { canvas.width = view.w; canvas.height = view.h; }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, view.w, view.h);
  ctx.translate(-view.x, -view.y);
  ctx.drawImage(S.source, 0, 0);
  const lw = Math.max(2, view.w / 420), font = Math.round(Math.max(13, view.w / 42)), labels = ["rooms", "doors", "floors", "done"].includes(S.step);
  const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 260);
  S.floors.forEach((f, fi) => {
    if (f.tint) ctx.drawImage(f.tint, f.box.x0, f.box.y0);
    ctx.setLineDash([lw * 4, lw * 3]);
    ctx.lineWidth = lw;
    ctx.strokeStyle = "#1b1b1b";
    ctx.strokeRect(f.box.x0, f.box.y0, f.box.x1 - f.box.x0, f.box.y1 - f.box.y0);
    ctx.setLineDash([]);
    if (!f.out) return;
    const fat = S.step === "doors" ? Math.round(lw * 1.6) : 1;
    for (const o of f.out.openings.concat(S.step === "doors" ? hiddenOpenings(f) : [])) {
      const g = o._gap, pad = g.virtual ? 0 : fat;
      const r = g.horizontal ? [g.a0 + f.box.x0, g.l0 + f.box.y0 - pad, g.a1 - g.a0, g.l1 - g.l0 + 1 + 2 * pad] : [g.l0 + f.box.x0 - pad, g.a0 + f.box.y0, g.l1 - g.l0 + 1 + 2 * pad, g.a1 - g.a0];
      ctx.fillStyle = (KIND[o.kind] || KIND.none).colour;
      ctx.fillRect(...r);
      if (S.step === "doors") { ctx.lineWidth = Math.max(1.5, lw * 0.7); ctx.strokeStyle = "#1b1b1b"; ctx.strokeRect(...r); }
    }
    ctx.strokeStyle = "#ff9600";
    ctx.lineWidth = lw * 1.5;
    for (const v of f.virtualWalls) { ctx.beginPath(); ctx.moveTo(v.x0, v.y0); ctx.lineTo(v.x1, v.y1); ctx.stroke(); }
    for (const r of f.out.rooms) {
      const s = seedOf(f, r._region), picked = S.sel && S.sel.fi === fi && regionAt(f, S.sel.x, S.sel.y) === r._region;
      if (!s) continue;
      if (picked) {
        const q = f.det.rooms.find((x) => x.id === r._region);
        ctx.strokeStyle = "#7A4FC4";
        ctx.lineWidth = lw * 2.2;
        ctx.setLineDash([lw * 3, lw * 2]);
        ctx.strokeRect(q.x0 + f.box.x0 + lw, q.y0 + f.box.y0 + lw, q.x1 - q.x0 - 2 * lw, q.y1 - q.y0 - 2 * lw);
        ctx.setLineDash([]);
      }
      if (!labels) continue;
      if (S.step === "rooms" && !isNamed(f, r._region)) {
        const rad = font * (0.95 + 0.18 * pulse);
        ctx.beginPath();
        ctx.arc(s.x, s.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = picked ? "#C9B6FF" : "#FFD83A";
        ctx.fill();
        ctx.lineWidth = Math.max(2, font / 7);
        ctx.strokeStyle = "#1b1b1b";
        ctx.stroke();
        ctx.fillStyle = "#1b1b1b";
        ctx.font = `700 ${Math.round(font * 1.25)}px Fredoka, system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("?", s.x, s.y + font * 0.06);
      } else pill(r.name, s.x, s.y, font, picked ? "#C9B6FF" : S.step === "rooms" ? "#9BE37A" : "#fff");
    }
  });
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  if (S.drag) {
    ctx.strokeStyle = "#7A4FC4";
    ctx.lineWidth = lw * 2;
    if (S.tool === "box") ctx.strokeRect(S.drag.x0, S.drag.y0, S.drag.x1 - S.drag.x0, S.drag.y1 - S.drag.y0);
    else { ctx.beginPath(); ctx.moveTo(S.drag.x0, S.drag.y0); ctx.lineTo(S.drag.x1, S.drag.y1); ctx.stroke(); }
  }
}

// ---------- the guide panel ----------
function selectedRoom() {
  if (!S.sel) return null;
  const f = S.floors[S.sel.fi];
  if (!f || !f.out) return null;
  const region = regionAt(f, S.sel.x, S.sel.y), room = f.out.rooms.find((r) => r._region === region);
  return room ? { f, room, region, box: f.det.rooms.find((q) => q.id === region) } : null;
}
function panel() {
  const sel = selectedRoom();
  $("swatch").firstElementChild.style.background = S.colour ? `rgb(${S.colour.join(",")})` : "#fff";
  // size step
  $("sizeNone").style.display = sel ? "none" : "";
  $("sizeBox").style.display = sel ? "" : "none";
  if (sel) {
    $("sizeRoom").textContent = "The room you tapped";
    $("rsize").textContent = `I make it ${((sel.box.x1 - sel.box.x0 + 1) / S.ppm).toFixed(2)} m across and ${((sel.box.y1 - sel.box.y0 + 1) / S.ppm).toFixed(2)} m down${S.ppmSet ? "." : ", but that's a guess. What does your plan say?"}`;
  }
  $("scale").textContent = S.ppmSet ? "The size is set. You can change it by doing this again." : "Until you set it, I'm guessing your home is about 10 m across.";
  // rooms step
  $("roomNone").style.display = sel ? "none" : "";
  $("roomBox").style.display = sel ? "" : "none";
  if (sel) {
    const named = isNamed(sel.f, sel.region);
    $("roomNow").textContent = named ? sel.room.name : "not named yet";
    $("rname").value = named ? sel.room.name : "";
  }
  // floors step
  const fl = $("floors");
  fl.innerHTML = "";
  S.floors.forEach((f, i) => {
    const n = f.out ? f.out.rooms.length : 0, row = document.createElement("div");
    row.className = "floorCard";
    const moved = [f.dx ? `${Math.abs(f.dx)} m ${f.dx > 0 ? "right" : "left"}` : "", f.dy ? `${Math.abs(f.dy)} m ${f.dy > 0 ? "forward" : "back"}` : ""].filter(Boolean).join(", ");
    row.innerHTML = `<div class="row" style="margin-top:0"><input class="toon fname" value="${f.name.replace(/"/g, "&quot;")}" aria-label="Floor name" style="flex:1"><span class="pill">${n} rooms</span></div>
      ${i > 0 ? `<div class="row"><div class="pad"><button class="btn u" aria-label="Move back">${ICON.up}</button><button class="btn l" aria-label="Move left">${ICON.back}</button><button class="btn d" aria-label="Move forward">${ICON.down}</button><button class="btn r" aria-label="Move right">${ICON.next}</button></div><div class="hint" style="flex:1">${moved ? `Moved ${moved}.` : "Lined up with the front and left of the floor below."}</div></div>
      <div class="row"><button class="btn swap">This one is lower down</button><button class="btn del">Remove</button></div>` : `<div class="row"><button class="btn del">Remove</button></div>`}`;
    row.querySelector(".fname").onchange = (e) => { f.name = e.target.value; draw(); buildHouse(); };
    if (i > 0) {
      const nudge = (dx, dy) => () => { remember(); f.dx = Math.round((f.dx + dx) * 100) / 100; f.dy = Math.round((f.dy + dy) * 100) / 100; panel(); buildHouse(); };
      row.querySelector(".u").onclick = nudge(0, -0.25);
      row.querySelector(".d").onclick = nudge(0, 0.25);
      row.querySelector(".l").onclick = nudge(-0.25, 0);
      row.querySelector(".r").onclick = nudge(0.25, 0);
      row.querySelector(".swap").onclick = () => { remember(); [S.floors[i - 1], S.floors[i]] = [S.floors[i], S.floors[i - 1]]; S.sel = null; redetect(); };
    }
    row.querySelector(".del").onclick = () => { remember(); S.floors.splice(i, 1); S.sel = null; redetect(); go(S.step); };
    fl.appendChild(row);
  });
}
function usedNames() {
  return S.floors.flatMap((f) => (f.out ? f.out.rooms.filter((r) => isNamed(f, r._region)).map((r) => r.name) : []));
}
function setName(name) {
  const s = selectedRoom();
  name = (name || "").trim();
  if (!s || !name) return;
  remember();
  s.f.names = s.f.names.filter((n) => regionAt(s.f, n.x, n.y) !== s.region);
  s.f.names.push({ x: S.sel.x, y: S.sel.y, name });
  redetect();
  if (S.step === "rooms") { pickNextUnnamed(); stepSay(); }
}
function pickNextUnnamed() {
  for (let fi = 0; fi < S.floors.length; fi++) {
    const f = S.floors[fi];
    if (!f.out) continue;
    const r = f.out.rooms.find((q) => !isNamed(f, q._region));
    if (r) { S.sel = { fi, ...seedOf(f, r._region) }; if (S.floors.length > 1 && S.view !== fi) setView(fi); draw(); panel(); return true; }
  }
  S.sel = null;
  draw();
  panel();
  if (roomCount() && !S.allNamed) { S.allNamed = true; confetti(); }
  return false;
}

// ---------- editing ----------
function remember() {
  S.history.push(JSON.stringify({ ppm: S.ppm, ppmSet: S.ppmSet, floors: S.floors.map(({ det, out, tint, ...f }) => f) }));
  if (S.history.length > 40) S.history.shift();
}
function undo() {
  const h = S.history.pop();
  if (!h) { status("There's nothing to undo."); return; }
  const v = JSON.parse(h);
  S.ppm = v.ppm;
  S.ppmSet = v.ppmSet;
  S.floors = v.floors;
  S.sel = null;
  redetect();
  status("Undone.");
}
function floorAt(p) {
  return S.floors.findIndex((f) => p.x >= f.box.x0 && p.x <= f.box.x1 && p.y >= f.box.y0 && p.y <= f.box.y1);
}
// which part of the picture is on screen: one floor (zoomed in) or the whole plan
function viewRect() {
  const f = S.view != null ? S.floors[S.view] : null;
  if (!f) return { x: 0, y: 0, w: S.W, h: S.H };
  const m = Math.round(Math.max(24, (f.box.x1 - f.box.x0) * 0.05)), x = Math.max(0, f.box.x0 - m), y = Math.max(0, f.box.y0 - m);
  return { x, y, w: Math.min(S.W, f.box.x1 + m) - x, h: Math.min(S.H, f.box.y1 + m) - y };
}
function setView(v) {
  S.view = v != null && S.floors[v] ? v : null;
  const tabs = $("tabs"), show = S.floors.length > 1 && ["size", "rooms", "doors"].includes(S.step);
  tabs.style.display = show ? "flex" : "none";
  tabs.innerHTML = "";
  if (show) {
    const add = (label, v2) => {
      const b = document.createElement("button");
      b.className = `btn${S.view === v2 ? " on" : ""}`;
      b.textContent = label;
      b.onclick = () => setView(v2);
      tabs.appendChild(b);
    };
    S.floors.forEach((f, i) => add(f.name, i));
    add("Whole plan", null);
  }
  draw();
  if (S.house) preview();
}
function toPicture(e) {
  // the canvas keeps its shape inside its box, so allow for the empty margins
  const r = canvas.getBoundingClientRect(), v = viewRect(), k = Math.min(r.width / v.w, r.height / v.h);
  const ox = (r.width - v.w * k) / 2, oy = (r.height - v.h * k) / 2;
  return { x: v.x + (e.clientX - r.left - ox) / k, y: v.y + (e.clientY - r.top - oy) / k };
}
function click(p) {
  if (S.tool === "colour") {
    const x = Math.round(p.x), y = Math.round(p.y), i = (y * S.W + x) * 4;
    S.colour = [S.rgba[i], S.rgba[i + 1], S.rgba[i + 2]];
    setTool("select", true);
    analyse();
    go("check");
    return;
  }
  const fi = floorAt(p);
  if (fi < 0) { status("Tap inside one of the dashed boxes."); return; }
  const f = S.floors[fi], region = regionAt(f, p.x, p.y), room = f.out.rooms.find((r) => r._region === region);
  if (S.tool === "select") {
    if (S.step === "doors") {
      const reach = Math.max(8, viewRect().w / 90);
      const hit = f.out.openings.concat(hiddenOpenings(f)).find((o) => {
        const g = o._gap, x = p.x - f.box.x0, y = p.y - f.box.y0, a = g.horizontal ? x : y, l = g.horizontal ? y : x;
        return !g.virtual && a >= g.a0 - 3 && a <= g.a1 + 3 && l >= g.l0 - reach && l <= g.l1 + reach;
      });
      if (!hit) { status("Tap one of the coloured strips on the walls."); return; }
      remember();
      const c = gapCentre(f, hit._gap), list = hit._gap.ext ? CYCLE_OUT : CYCLE_IN, next = list[(list.indexOf(hit.kind) + 1) % list.length];
      f.kinds = f.kinds.filter((q) => !near(q, c));
      f.kinds.push({ x: c.x, y: c.y, kind: next });
      redetect();
      if (next === "frontdoor") { stepSay(); confetti(); } else say(next === "none" ? "Gone. Tap the same spot again to bring it back." : `That's now: ${KIND[next].name.toLowerCase()}. Tap again for the next kind.`, "happy");
      return;
    }
    if (S.step !== "size" && S.step !== "rooms") return;
    if (!room) { status("Tap on one of the coloured rooms."); return; }
    S.sel = { fi, ...seedOf(f, region) };
    draw();
    panel();
    if (S.step === "size") { say("Now type what your plan says for this room. One number is enough.", "think"); $("sw").focus({ preventScroll: true }); }
    return;
  }
  if (!room) { status("That isn't a room. Tap on a coloured area."); return; }
  if (S.tool === "remove") {
    remember();
    f.deleted.push(seedOf(f, region));
    S.sel = null;
    setTool("select", true);
    redetect();
    status(`Removed ${room.name}. Press Undo if that was a mistake.`);
  } else if (S.tool === "merge") {
    if (!S.mergeFirst || S.mergeFirst.fi !== fi) { S.mergeFirst = { fi, region }; say("Now tap the room to join it to.", "think"); return; }
    const a = S.mergeFirst.region, between = f.det.gaps.filter((g) => (g.a === a && g.b === region) || (g.b === a && g.a === region));
    S.mergeFirst = null;
    if (a === region) { status("Tap two different rooms."); return; }
    if (!between.length) { status("Those two rooms don't share a door or gap, so I can't join them.", true); return; }
    remember();
    for (const g of between) {
      if (g.virtual) f.virtualWalls = f.virtualWalls.filter((v) => !near({ x: (v.x0 + v.x1) / 2, y: (v.y0 + v.y1) / 2 }, gapCentre(f, g), 6));
      else f.openGaps.push(gapCentre(f, g));
    }
    S.sel = null;
    setTool("select", true);
    redetect();
    say("Joined into one room.", "party");
  }
}
// openings the user has switched off, so they can be tapped back on
function hiddenOpenings(f) {
  return f.det.gaps.filter((g) => f.kinds.some((k) => k.kind === "none" && near(k, gapCentre(f, g)))).map((g) => ({ kind: "none", _gap: g }));
}
function applyScale(ppm, text) {
  remember();
  S.ppm = ppm;
  S.ppmSet = true;
  redetect();
  say(text, "party");
}
function dragEnd(d) {
  const p0 = { x: d.x0, y: d.y0 }, long = Math.hypot(d.x1 - d.x0, d.y1 - d.y0);
  if (S.tool === "box") {
    if (Math.abs(d.x1 - d.x0) < 3 * S.ppm || Math.abs(d.y1 - d.y0) < 3 * S.ppm) { status("Drag a bigger box, right round the floor."); return; }
    remember();
    const box = { x0: Math.round(Math.max(0, Math.min(d.x0, d.x1))), y0: Math.round(Math.max(0, Math.min(d.y0, d.y1))), x1: Math.round(Math.min(S.W - 1, Math.max(d.x0, d.x1))), y1: Math.round(Math.min(S.H - 1, Math.max(d.y0, d.y1))) };
    // a new box replaces any floor it mostly covers
    S.floors = S.floors.filter((f) => !(f.box.x0 >= box.x0 - 10 && f.box.x1 <= box.x1 + 10 && f.box.y0 >= box.y0 - 10 && f.box.y1 <= box.y1 + 10));
    S.floors.push(newFloor(box, S.floors.length));
    S.floors.sort((a, b) => a.box.x0 - b.box.x0 || a.box.y0 - b.box.y0);
    S.floors.forEach((f, i) => { if (/^(Ground|Upstairs|Floor \d+)$/.test(f.name)) f.name = newFloor(f.box, i).name; });
    setTool("select", true);
    redetect();
    go("check");
  } else if (S.tool === "measure") {
    if (long < 20) { status("Drag a longer line."); return; }
    pendingLine = long;
    $("mlen").value = "";
    $("modal").style.display = "grid";
    $("mlen").focus();
  } else if (S.tool === "wall") {
    const fi = floorAt(p0);
    if (fi < 0 || long < 0.3 * S.ppm) { status("Drag a line across the room, inside a dashed box."); return; }
    remember();
    const horizontal = Math.abs(d.x1 - d.x0) >= Math.abs(d.y1 - d.y0);
    // stretch each end to the nearest real wall, so a line drawn a little short still closes the room off
    const reach = (x, y, dx, dy) => {
      for (let k = 0; k <= S.ppm; k++) {
        const px = Math.round(x + dx * k), py = Math.round(y + dy * k);
        if (px < 0 || py < 0 || px >= S.W || py >= S.H) break;
        if (S.wall[py * S.W + px]) return k + 2;
      }
      return 0;
    };
    let v;
    if (horizontal) {
      const xa = Math.min(d.x0, d.x1), xb = Math.max(d.x0, d.x1), y = Math.round(d.y0);
      v = { x0: xa - reach(xa, y, -1, 0), y0: y, x1: xb + reach(xb, y, 1, 0), y1: y };
    } else {
      const ya = Math.min(d.y0, d.y1), yb = Math.max(d.y0, d.y1), x = Math.round(d.x0);
      v = { x0: x, y0: ya - reach(x, ya, 0, -1), x1: x, y1: yb + reach(x, yb, 0, 1) };
    }
    S.floors[fi].virtualWalls.push(v);
    S.sel = null;
    setTool("select", true);
    redetect();
    if (S.step === "rooms") pickNextUnnamed();
    say("Wall added. The two sides stay open to each other, like an open-plan room.", "party");
  }
}
function setTool(t, quiet) {
  S.tool = t;
  S.mergeFirst = null;
  document.querySelectorAll("button[data-tool]").forEach((b) => b.classList.toggle("on", b.dataset.tool === t));
  canvas.style.cursor = t === "select" ? "pointer" : "crosshair";
  $("tool").style.display = t === "select" ? "none" : "flex";
  if ((t === "box" || t === "colour") && S.view != null) setView(null);
  if (t !== "select") {
    $("toolName").textContent = TOOL[t][0];
    say(TOOL[t][1], "think");
    if (window.innerWidth <= 760) canvas.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!quiet) stepSay();
}

// ---------- wiring ----------
window.addEventListener("DOMContentLoaded", () => {
  canvas = $("plan");
  ctx = canvas.getContext("2d");
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = ICON[el.dataset.icon] || ""; if (!el.style.display) el.style.display = "inline-flex"; });
  $("logoArt").innerHTML = roofus("happy");
  for (const [name, icon] of STICKERS) {
    const b = document.createElement("button");
    b.className = "btn sticker";
    b.innerHTML = `${ICON[icon]}<span>${name}</span>`;
    b.onclick = () => {
      const used = usedNames().filter((n) => n === name || n.startsWith(`${name} `)).length;
      setName(name === "Bedroom" ? `Bedroom ${used + 1}` : used ? `${name} ${used + 1}` : name);
    };
    $("stickers").appendChild(b);
  }
  for (const k of ["window", "door", "opening", "extdoor", "frontdoor", "bifold", "garage", "none"]) {
    $("keys").insertAdjacentHTML("beforeend", `<span class="pill"><i style="background:${KIND[k].colour}"></i>${ICON[KIND[k].icon]}${KIND[k].name}</span>`);
  }
  $("file").onchange = (e) => e.target.files[0] && loadFile(e.target.files[0]);
  $("drop").onclick = () => $("file").click();
  const drop = document.body;
  drop.addEventListener("dragover", (e) => { e.preventDefault(); $("drop").classList.add("over"); });
  drop.addEventListener("dragleave", () => $("drop").classList.remove("over"));
  drop.addEventListener("drop", (e) => { e.preventDefault(); $("drop").classList.remove("over"); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });
  $("tryExample").onclick = () => fetch("../examples/example-plan.png").then((r) => r.blob()).then(loadFile).catch(() => say("I couldn't fetch the example plan. Choose a picture of your own instead.", "oops", true));
  document.querySelectorAll("button[data-tool]").forEach((b) => (b.onclick = () => setTool(S.tool === b.dataset.tool ? "select" : b.dataset.tool)));
  $("toolStop").onclick = () => setTool("select");
  $("rotate").onclick = rotate;
  $("otherPlan").onclick = () => $("file").click();
  $("looksRight").onclick = () => go("size");
  $("notQuite").onclick = () => { $("helper").style.display = ""; say("No problem. Show me a wall, turn the picture, or draw a box round a floor I missed.", "think"); };
  $("undo").onclick = undo;
  $("back").onclick = () => move(-1);
  $("next").onclick = () => move(1);
  $("tolerance").onchange = () => { if (S.source) { analyse(); go("check"); $("helper").style.display = ""; } };
  $("title").onchange = buildHouse;
  $("lights").onchange = buildHouse;
  $("download").onclick = download;
  $("again").onclick = () => location.reload();
  $("copy").onclick = async () => {
    const yaml = "type: custom:toon-house-card\nlayout: /local/toon-house/house.json\n";
    try { await navigator.clipboard.writeText(yaml); say("Copied! Paste it into a new card on your dashboard.", "party"); } catch (e) { say(yaml, "happy"); }
  };
  $("rnameOk").onclick = () => setName($("rname").value);
  $("rname").addEventListener("keydown", (e) => { if (e.key === "Enter") setName($("rname").value); });
  $("setscale").onclick = () => {
    const s = selectedRoom(), w = parseFloat($("sw").value), d = parseFloat($("sd").value);
    if (!s) return;
    const got = [];
    if (w > 0.3) got.push((s.box.x1 - s.box.x0 + 1) / w);
    if (d > 0.3) got.push((s.box.y1 - s.box.y0 + 1) / d);
    if (!got.length) { status("Type the room's size in metres, as printed on your plan. One number is enough.", true); return; }
    if (got.length === 2 && Math.abs(got[0] - got[1]) / got[0] > 0.2) { status("Those two numbers don't fit this room's shape. Check them, or swap across and down.", true); return; }
    applyScale(got.reduce((a, b) => a + b, 0) / got.length, "Got it! Every room is the right size now. Press Next.");
  };
  $("mok").onclick = () => {
    const m = parseFloat($("mlen").value);
    $("modal").style.display = "none";
    setTool("select", true);
    if (!(m > 0.2)) { status("No length given, so the size is unchanged."); return; }
    applyScale(pendingLine / m, `Got it! That line is ${m} m. Press Next.`);
  };
  $("mcancel").onclick = () => { $("modal").style.display = "none"; setTool("select"); };
  $("mlen").addEventListener("keydown", (e) => { if (e.key === "Enter") $("mok").click(); });
  $("previewToggle").onclick = () => { document.body.classList.toggle("peek"); setTimeout(fitPreview, 50); };
  canvas.addEventListener("pointerdown", (e) => {
    if (!S.source) return;
    const p = toPicture(e);
    S.down = p;
    if (S.tool === "wall" || S.tool === "box" || S.tool === "measure") { S.drag = { x0: p.x, y0: p.y, x1: p.x, y1: p.y }; canvas.setPointerCapture(e.pointerId); }
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!S.drag) return;
    const p = toPicture(e);
    S.drag.x1 = p.x;
    S.drag.y1 = p.y;
    if (S.tool === "wall" || S.tool === "measure") { if (Math.abs(p.x - S.drag.x0) >= Math.abs(p.y - S.drag.y0)) S.drag.y1 = S.drag.y0; else S.drag.x1 = S.drag.x0; }
    draw();
  });
  canvas.addEventListener("pointerup", (e) => {
    if (!S.source || !S.down) return;
    const d = S.drag;
    S.drag = null;
    S.down = null;
    if (d) { dragEnd(d); draw(); } else click(toPicture(e));
  });
  // the "?" badges on unnamed rooms gently pulse
  setInterval(() => { if (S.source && S.step === "rooms" && !S.drag && !matchMedia("(prefers-reduced-motion:reduce)").matches) draw(); }, 130);
  go("plan");
  // lets the test (or a curious user) load a picture from an address: ?plan=...
  const q = new URLSearchParams(location.search).get("plan");
  if (q) fetch(q).then((r) => r.blob()).then(loadFile);
  window.importer = S;
  window.importerGo = go;
  // for tests: where a point of the picture is on screen right now (null if that part is not in view)
  window.importerPoint = (x, y) => {
    const r = canvas.getBoundingClientRect(), v = viewRect(), k = Math.min(r.width / v.w, r.height / v.h);
    if (x < v.x || y < v.y || x > v.x + v.w || y > v.y + v.h) return null;
    return { x: r.left + (r.width - v.w * k) / 2 + (x - v.x) * k, y: r.top + (r.height - v.h * k) / 2 + (y - v.y) * k };
  };
  window.importerView = setView;
});
