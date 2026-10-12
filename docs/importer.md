# Start from a floor plan picture

The importer turns a picture of a floor plan into a house file. It runs in your browser: the picture is never uploaded anywhere.

![The importer with the example plan](img/importer.png)

## Open it

**[https://digitaladaption.github.io/toon-house-card/importer/](https://digitaladaption.github.io/toon-house-card/importer/)**

Or run it from a copy of this project:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/importer/`. To try it straight away, use [`examples/example-plan.png`](../examples/example-plan.png).

## Steps

1. **Choose your plan.** A JPG, PNG or WebP. For a PDF, take a screenshot. The front of the house should be at the bottom; use **Turn a quarter** if it is not.
2. **Check the rooms.** Each room it found is tinted. If nothing is tinted, press **Pick wall colour** and click on a wall.
3. **Set the scale.** Click a room, type its size as printed on the plan, press **Set scale**. One number is enough. Or press **Measure for scale** and drag along a length you know.
4. **Name the rooms.** Click a room and type its name. The name sets its colours: a kitchen gets a checked floor, a bathroom gets tiles.
5. **Fix what it got wrong.**
   - **Add a wall**: drag a line where one room should be two. The two sides stay open to each other.
   - **Join two rooms**: click two rooms that should be one.
   - **Remove a room**: click an area that is not a room.
   - **Mark a floor**: drag a box round a floor it missed or cut short.
   - Click a door or window to change what it is. Click the front door until it turns purple.
6. **Line up the floors.** Upper floors are lined up with the front and left of the ground floor. Use the shift boxes if yours sits differently.
7. **Download house.json**, put it in `config/www/toon-house/` and point the card at `/local/toon-house/house.json`.

Then add your devices to the file by hand: see [the house file guide](house-file.md#devices).

## What to expect

It works well on plans with solid or thick walls in one colour, like most estate agent plans. Plans drawn with thin lines, low-resolution pictures and plans with coloured room fills need more fixing by hand.

It cannot read text, so it does not know room names or the printed sizes. It guesses the scale by assuming the house is about 10 m across, which is why setting the scale comes first.

Windows are recognised by the lines drawn across them. Patio doors drawn the same way as windows come out as windows: click them to change.

Walls at an angle, curved walls and split levels are not handled. Draw those rooms as the nearest rectangle.
