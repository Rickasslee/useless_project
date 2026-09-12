![Useless Calc](useless_readme.png)

# Useless Calc 🎯

## Basic Details
### Team Name: Las Noches

### Team Members
- **Team Lead:** Don Savio K J - SNMIMT Maliankara
- **Member 2:** Joyal Joshy - SNMIMT Maliankara

---

### Project Description
Useless Calc is a humorous measurement calculator. You enter real measurements — a room's dimensions, your height, the weight of something — and it gives you the mathematically correct answer. Then it immediately converts that answer into something completely ridiculous: bananas, cats, elephants, swimming pools, cardboard boxes full of basketballs. The maths is accurate. The units are not.

---

### The Problem (that doesn't exist)
Nobody has ever truly *felt* what 60 cubic metres means. Metres, kilograms, litres — they're cold, lifeless numbers that fail to convey the soul of a measurement. How many cats is your little brother? How many bananas tall is your house? Science has failed us.

---

### The Solution (that nobody asked for)
Useless Calc translates your boring SI measurements into units that actually resonate with the human experience — giraffes, shot glasses, pandas, and shipping containers. Pick a measurement type, enter your numbers in whatever unit you like, and watch the app do real unit conversion math before presenting you with a result that is 100% correct and 0% useful. Also there are emojis falling into a cardboard box.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Frameworks:** None — pure vanilla, zero dependencies
- **Libraries:** None
- **Tools:** VS Code, Git, GitHub, Git LFS

**For Hardware:**
- Not applicable — this is a browser-based software project

---

### Implementation

**For Software:**

**Installation**
```bash
git clone https://github.com/Rickasslee/useless_project.git
cd useless_project
```

**Run**
```bash
# No server needed. Just open the file.
start index.html      # Windows
open index.html       # macOS
xdg-open index.html   # Linux
```

---

## Project Documentation

### For Software:

**Screenshots**

![](<workflow 1.png>)

*Step 1 — Pick your measurement type. Length, Height, Area, Volume, Weight, or Capacity. Select your completely necessary measurement.*

![](<workflow 2.png>)

*Step 2 — Enter your numbers (we promise to judge them). Choose your input units from a full list: mm, cm, m, km, ft, in, lb, kg, mL, gallons, and more.*

![](<workflow 3.png>)

*Step 3 — The Verdict. The real SI result is shown first, followed by the useless comparison in large bold text, a tagline, and an animated emoji visual specific to the measurement type.*

---

**Diagrams**

```
User selects measurement type
        ↓
Dynamic input fields render (correct fields per type)
        ↓
User enters values + selects unit
        ↓
Each dimension converted to SI base unit independently
(e.g. 5 ft × 4 ft → 1.524 m × 1.219 m, not 20 ft² × 0.093)
        ↓
Result computed (multiply for area/volume)
        ↓
Random funny comparison selected from local database
        ↓
result ÷ comparison_size = count
        ↓
Count formatted (comma / million / billion)
        ↓
Displayed + type-specific emoji animation plays
```

*Each measurement type has its own animation: Length → horizontal row, Height → vertical stack, Area → tile grid, Weight → emojis fall and pile up, Volume → emojis rain into a 📦 cardboard box, Capacity → emojis rain into a 🪣 bucket.*

---

### For Hardware:
Not applicable.

---

## Project Demo

**Video**

> 📹 **Demo video:** https://drive.google.com/file/d/1N2XyuVIkdmFQc9GehWvtHJUVNDw9uU-N/view?usp=sharing

*The 3-minute video walks through all six measurement categories (Length, Height, Area, Volume, Weight, Capacity), demonstrates correct unit conversion, funny comparison output, and all emoji animations.*

**Additional Demos**

[Live on GitHub Pages — open index.html directly from the repo](https://github.com/Rickasslee/useless_project)

---

## Team Contributions

- **Don Savio K J:** Project architecture, JavaScript calculation engine, unit conversion logic, animation system (all 6 types), UI layout and CSS design, Git setup
- **Joyal Joshy:** Comparison database (70+ funny objects across 6 categories), UI testing across all measurement types, content writing and taglines, QA

---

*Made with ❤️ at TinkerHub Useless Projects*

