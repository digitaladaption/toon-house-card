# The house file

The house can be written in the card's YAML under `layout:` or kept in a JSON file. The two are the same thing in different clothes. This page lists everything it can contain.

All sizes are in **metres**. `x` runs left to right. `y` runs from the back of the house to the front.

## Top level

| Key | What it is |
|---|---|
| `title` | Name shown on the card |
| `theme` | `toon` or `brick` |
| `colours` | Single colour changes on top of the theme (see [Colours](#colours)) |
| `storey_height` | Room height in metres. Default `2.4` |
| `floors` | The floors, lowest first. Required |
| `roofs` | Roof parts. Leave out for an automatic roof |
| `chimneys` | Chimneys |
| `outside` | Garden, drive, fences and trees. Leave out for an automatic garden |

## Floors

```yaml
floors:
  - id: ground          # used by the card's "view" option
    name: Ground        # text on the button
    offset: [0, 0]      # shift this floor sideways, if its plan starts at a different corner
    rooms: [...]
    openings: [...]
    furniture: [...]
    devices: [...]
```

`offset` matters when an upper floor is smaller than the one below and you measured it from its own corner. `offset: [2, 0]` moves the whole floor 2 m to the right.

## Rooms

```yaml
rooms:
  - { id: living, name: Living room, rect: [0, 0, 5, 4.5] }
  - id: landing
    name: Landing
    points: [[4.6, 2.8], [7, 2.8], [7, 5.6], [2.2, 5.6], [2.2, 4.2], [4.6, 4.2]]
    label: [4.6, 4.9]
```

| Key | What it is |
|---|---|
| `id` | A short name you choose. Openings and devices refer to it |
| `name` | Shown on the plan. Also used to guess the kind of room |
| `rect` | `[left, back, right, front]` |
| `points` | Corner points, for a room that is not a rectangle. Use this or `rect` |
| `type` | Kind of room, if the name does not say: `living`, `kitchen`, `dining`, `hall`, `bath`, `bedroom`, `study`, `utility`, `garage`, `stairs`, `store` |
| `floor_colour`, `wall_colour` | Your own colours for this room |
| `pattern` | Floor pattern: `plain`, `check`, `wood`, `tile` |
| `floor_colour2` | Second colour for a patterned floor |
| `label` | Where to put the room's name, if the middle is a bad spot |
| `up` | For a stairs room: which way the stairs climb, `n`, `s`, `e` or `w` |

The kind of room decides its colours and floor pattern. A kitchen gets a checked floor, a bathroom gets tiles, bedrooms take turns through four colour pairs.

Rooms that share a wall should use the same number for the shared edge. Do not leave a gap for the wall: the card adds walls by itself (0.24 m outside walls, 0.12 m inside walls).

## Openings

Doors, windows and gaps in walls.

```yaml
openings:
  - { room: living, wall: n, at: 1.5, width: 2.0, kind: window, name: Living room window }
```

| Key | What it is |
|---|---|
| `room` | The room whose wall it is in |
| `wall` | Which side of that room: `n` (back), `s` (front), `w` (left), `e` (right) |
| `at` | Where it starts along that wall. For `n` and `s` walls this is an `x` position; for `w` and `e` walls it is a `y` position |
| `width` | How wide it is |
| `kind` | See below |
| `name` | Used in warnings |
| `colour` | For outside doors |

| `kind` | What you get |
|---|---|
| `window` | Window with white frame, sill and curtains. Outside walls only |
| `bifold` | Glazed patio doors down to the floor. Outside walls only |
| `frontdoor` | Coloured front door with a step and a path to the road |
| `extdoor` | Plain outside door, such as a back door |
| `garage` | Garage door. If it faces the front, a drive is added |
| `door` | Inside door, drawn standing ajar |
| `opening` | An open gap with no door, such as between a kitchen and a dining room |

A door between two rooms only needs listing once, from either room.

## Furniture

```yaml
furniture:
  - { type: sofa, x: 2.4, y: 3.6, rot: 180 }
  - { type: table, x: 6.7, y: 2.7, w: 2.0, d: 1.0 }
```

`x`, `y` is the middle of the item. `rot` turns it clockwise in degrees. `w`, `d`, `h` change its width, depth and height. Unturned, the back of a sofa or the head of a bed is towards the back of the house.

Types: `sofa`, `sofa_l`, `armchair`, `tv_board`, `coffee_table`, `rug`, `table`, `desk`, `chair`, `stool`, `sideboard`, `shelf`, `kitchen` (a run of units), `worktop` (an island), `sink`, `stove`, `fridge`, `washer`, `bed`, `single_bed`, `bedside`, `wardrobe`, `bathtub`, `wc`, `washbasin`, `shower`, `plant`, `car`.

A `car` can go on the drive or in the garage. Give it a `colour` if you like.

## Devices

```yaml
devices:
  - { name: Kitchen light, kind: light, x: 7.6, y: 1.2, entity: light.kitchen }
  - { name: Living room blind, kind: cover, room: living, wall: n, at: 2.5, entity: cover.living_room_blind }
  - { name: Hall radiator, kind: climate, room: hall, wall: w, at: 6.0, entity: null }
```

| Key | What it is |
|---|---|
| `name` | Shown when a planned device is tapped |
| `kind` | `light`, `switch`, `cover`, `climate`, `lock`, `motion`, `contact`, `camera`, `speaker`, `tv`, `sensor` |
| `entity` | The Home Assistant entity. `null` draws it grey as planned |
| `x`, `y` | A spot on the floor, **or** |
| `room`, `wall`, `at` | a place on a wall, the same way as openings |
| `rot` | For a `tv`: which way it faces, in degrees |
| `nav` | A dashboard path to open if it is tapped while still planned |

A `cover` on a wall is attached to the window, patio door or garage door at that position. Its slats follow the entity's `current_position`.

## Roofs

Leave `roofs` out and the card adds a pitched roof over the top floor and flat roofs over any lower part that sticks out. To shape the roof yourself, list its parts:

```yaml
roofs:
  - { type: gable, rect: [0, 0, 10, 8], ridge: x, level: 2, pitch: 30 }
  - { type: lean, rect: [6.6, 8, 10, 10], level: 1, high: n, rise: 0.6 }
  - { type: flat, rect: [0, 8, 3, 10], level: 1 }
```

| Key | What it is |
|---|---|
| `type` | `gable` (two slopes meeting at a ridge), `lean` (one slope), `flat` |
| `rect` | The rooms it covers, `[left, back, right, front]`, measured to the room edges |
| `level` | How many storeys are under it. `1` sits on the ground floor walls, `2` on the first floor walls |
| `ridge` | For a gable: `x` if the ridge runs left to right, `y` if it runs back to front |
| `pitch` | For a gable: slope in degrees. Default `30` |
| `high` | For a lean-to: the side that is highest, `n`, `s`, `e` or `w` |
| `rise` | For a lean-to: how much higher the high side is. Default `0.6` |
| `overhang` | How far the roof sticks out past the walls. Default `0.45` |

Roof positions are in ground-floor coordinates, so add the floor's `offset` if it has one.

```yaml
chimneys:
  - { x: 1.2, y: 4.0 }                 # top and base worked out for you
  - { x: 9, y: 7, from: 5.0, top: 7.4, smoke: false }
```

## Outside

Leave `outside` out and you get a lawn, a fence round the back, a path from the front door, a drive from a front-facing garage, three trees, bushes under the windows and a road.

```yaml
outside:
  plot: { x0: -2, x1: 12, back: -9, front: 15 }   # edges of the garden
  drive: [6, 10, 10.5, 15]                         # one rectangle, or a list of them
  path: [3.6, 8.2, 4.8, 15]
  patio: [5.4, -3.2, 10, -0.3]
  fence: [w, n, e]                                 # sides with a fence
  hedge: [e]                                       # sides with a hedge instead
  trees:
    - { x: 0, y: -6, size: 1.2 }
    - { x: 10, y: 13, size: 0.8, blossom: true }
  bushes: false
  flowers: false
  mailbox: false
  road: false
```

Use `path: []` or `drive: []` to have none.

## Colours

`theme` picks a whole palette. `colours` changes single entries, either in the house file or in the card options:

```yaml
colours:
  exterior: "#F4E285"
  roof: "#5C7AEA"
  door: "#D7263D"
```

Useful names: `sky`, `lawn`, `exterior`, `roof`, `trim`, `door`, `garage`, `chimney`, `drive`, `path`, `patio`, `fence`, `hedge`, `curtain`, `sofa`, `rug`, `cabinet`, `worktop`, `wood`, `woodLight`.

Setting `exteriorPattern: brick` draws brick courses on the outside walls; `exteriorPattern: null` leaves them plain.
