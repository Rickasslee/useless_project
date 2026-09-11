# Useless Calc

> *Because normal units are boring.*

---

## What is this?

**Useless Calc** is a humorous measurement calculator built as a college mini-project.

You enter a real measurement — a room's dimensions, your height, the weight of something — and the app gives you the mathematically correct answer in SI units. Then it immediately converts that answer into something completely ridiculous: bananas, cats, swimming pools, elephants, you name it.

The maths is real. The units are not.

---

## Features

- **6 measurement types:** Length, Height, Area, Volume, Weight, Capacity
- **Multiple input units** for each type (cm, m, ft, kg, lb, L, gallons, etc.)
- **Accurate SI conversion** — unit conversions are done properly before comparison
- **Funny comparison database** — dozens of real-world objects with their actual sizes/weights
- **Smart number formatting** — no ugly 14-decimal-place outputs; shows "1.2 million" where appropriate
- **Random comparisons** — every calculation picks a random funny unit; press the 🎲 button to try another
- **Friendly error messages** — validates inputs before calculating
- **Fully responsive** — works on desktop, laptop, and mobile
- **No internet required** — everything runs locally in the browser

---

## Technologies Used

- **HTML5** — structure and semantics
- **CSS3** — dark theme, grid layout, animations, responsive design (no frameworks)
- **Vanilla JavaScript (ES6+)** — all logic, unit conversion, and DOM manipulation (no libraries)

No backend. No database. No API keys. No external dependencies whatsoever.

---

## How the Calculations Work

### Step 1 — Convert to base SI unit

Every input is first converted to a standard base unit:

| Type     | Base Unit     |
|----------|---------------|
| Length   | meters (m)    |
| Height   | meters (m)    |
| Area     | square meters (m²) |
| Volume   | cubic meters (m³)  |
| Weight   | kilograms (kg) |
| Capacity | liters (L)    |

For **area**: each dimension is converted to meters independently, then multiplied.
For **volume**: each of the three dimensions is converted to meters independently, then all three are multiplied.

This ensures that `5 ft × 4 ft = 20 ft²` correctly becomes `≈ 1.86 m²`, not `20 × 0.3048 m²`.

### Step 2 — Divide by comparison object size

Each funny comparison object has a known real-world value in the same base unit. The app divides:

```
result_in_base_unit ÷ comparison_object_size = count
```

Example:
```
Room: 5 m × 4 m × 3 m = 60 m³
Banana volume: 0.00015 m³
60 ÷ 0.00015 = 400,000 bananas
```

### Step 3 — Format nicely

Large numbers are formatted as:
- `400,000` → `4,00,000`
- `1,200,000` → `1.2 million`
- `3,400,000,000` → `3.4 billion`

Small numbers get appropriate decimal places.

---

## How to Run

1. Download or clone this folder.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. That's it. No installation, no server, no setup.

---

## Why is it called Useless Calc?

Because the output — while mathematically correct — is completely useless in practice.

Nobody actually needs to know that their room fits 400,000 bananas. But once you know it, you can never unknow it. That's the whole point.

---

## File Structure

```
Useless Calc/
├── index.html   — The single HTML page
├── style.css    — All styles (dark theme, layout, animations)
├── script.js    — All logic (conversions, comparisons, display)
└── README.md    — This file
```

---

*Made with questionable priorities.*
