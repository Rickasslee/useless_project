// ================================================================
//  USELESS CALC — script.js
//  All logic: inputs, unit conversion, funny comparisons, display
// ================================================================

"use strict";

// ── COMPARISON DATABASE ──────────────────────────────────────────

const COMPARISONS = {

  // LENGTH & HEIGHT (base unit: meters)
  length: [
    { name: "banana",           value: 0.18,  emoji: "🍌", plural: "bananas",           tagline: "Go bananas. Literally." },
    { name: "apple",            value: 0.09,  emoji: "🍎", plural: "apples",            tagline: "An apple a day keeps the sense away." },
    { name: "pencil",           value: 0.19,  emoji: "✏️", plural: "pencils",           tagline: "That's a lot of homework potential." },
    { name: "football",         value: 0.22,  emoji: "⚽", plural: "footballs",         tagline: "Kick it." },
    { name: "ruler",            value: 0.30,  emoji: "📏", plural: "rulers",            tagline: "Measured with a ruler. Reported in rulers." },
    { name: "human (avg)",      value: 1.70,  emoji: "🧍", plural: "average humans",   tagline: "Stack them. Don't ask why." },
    { name: "giraffe",          value: 5.0,   emoji: "🦒", plural: "giraffes",          tagline: "That's giraffe territory." },
    { name: "car",              value: 4.5,   emoji: "🚗", plural: "cars",              tagline: "Park that thought." },
    { name: "school bus",       value: 12.0,  emoji: "🚌", plural: "school buses",      tagline: "Education, but make it long." },
    { name: "double-decker bus",value: 11.0,  emoji: "🚌", plural: "double-decker buses",tagline: "Very British of you." },
    { name: "bowling pin",      value: 0.38,  emoji: "🎳", plural: "bowling pins",      tagline: "Strike!" },
    { name: "soda can",         value: 0.12,  emoji: "🥤", plural: "soda cans",         tagline: "Refreshingly pointless." },
  ],

  height: [
    { name: "banana",           value: 0.18,  emoji: "🍌", plural: "bananas",           tagline: "Standing on bananas sounds like a life choice." },
    { name: "apple",            value: 0.09,  emoji: "🍎", plural: "apples",            tagline: "An apple-stacked situation." },
    { name: "pencil",           value: 0.19,  emoji: "✏️", plural: "pencils",           tagline: "Pencil-tall. Write that down." },
    { name: "giraffe",          value: 5.0,   emoji: "🦒", plural: "giraffes",          tagline: "Going full giraffe mode." },
    { name: "average human",    value: 1.70,  emoji: "🧍", plural: "average humans",   tagline: "How many people tall are you?" },
    { name: "car",              value: 1.5,   emoji: "🚗", plural: "cars (height)",     tagline: "Measured in cars. As one does." },
    { name: "iPhone (lying flat)",value:0.16, emoji: "📱", plural: "iPhones stacked",   tagline: "A very expensive ruler." },
    { name: "door",             value: 2.1,   emoji: "🚪", plural: "standard doors",    tagline: "Can you fit through it? Possibly." },
    { name: "soda can",         value: 0.12,  emoji: "🥤", plural: "soda cans",         tagline: "Stacked. Fizzy. Useless." },
    { name: "bowling pin",      value: 0.38,  emoji: "🎳", plural: "bowling pins",      tagline: "You're quite a few pins tall." },
    { name: "school bus",       value: 3.5,   emoji: "🚌", plural: "school buses (height)", tagline: "Bus-height. Classic." },
    { name: "Eiffel Tower",     value: 330.0, emoji: "🗼", plural: "Eiffel Towers",     tagline: "C'est magnifique (and useless)." },
  ],

  // AREA (base unit: square meters)
  area: [
    { name: "smartphone screen",  value: 0.012,  emoji: "📱", plural: "smartphone screens",    tagline: "Life is just a series of scrolls." },
    { name: "notebook page",      value: 0.06,   emoji: "📓", plural: "notebook pages",         tagline: "Write this down." },
    { name: "pizza",              value: 0.08,   emoji: "🍕", plural: "large pizzas",           tagline: "Now that's a slice of information." },
    { name: "laptop screen",      value: 0.10,   emoji: "💻", plural: "laptop screens",         tagline: "Open tabs: too many." },
    { name: "standard door",      value: 2.0,    emoji: "🚪", plural: "standard doors",         tagline: "Door-sized thinking." },
    { name: "parking space",      value: 15.0,   emoji: "🅿️", plural: "parking spaces",         tagline: "Lots of parking potential." },
    { name: "badminton court",    value: 81.75,  emoji: "🏸", plural: "badminton courts",        tagline: "Shuttlecock not included." },
    { name: "tennis court",       value: 261.0,  emoji: "🎾", plural: "tennis courts",           tagline: "Love (of useless facts)." },
    { name: "football field",     value: 7140.0, emoji: "⚽", plural: "football fields",         tagline: "That's a lot of grass to mow." },
    { name: "sheet of A4 paper",  value: 0.0623, emoji: "📄", plural: "A4 sheets",              tagline: "Forest not included." },
    { name: "king-size bed",      value: 4.3,    emoji: "🛏️", plural: "king-size beds",         tagline: "Naptime at scale." },
    { name: "classroom",          value: 56.0,   emoji: "🏫", plural: "classrooms",             tagline: "Educational and also useless." },
  ],

  // VOLUME (base unit: cubic meters)
  volume: [
    { name: "banana",          value: 0.00015, emoji: "🍌", plural: "bananas",          tagline: "Very curvy data." },
    { name: "apple",           value: 0.00018, emoji: "🍎", plural: "apples",           tagline: "Keep the doctor far away." },
    { name: "football",        value: 0.005,   emoji: "⚽", plural: "footballs",        tagline: "Goal!" },
    { name: "basketball",      value: 0.007,   emoji: "🏀", plural: "basketballs",      tagline: "Slam dunk of a measurement." },
    { name: "microwave oven",  value: 0.05,    emoji: "📟", plural: "microwave ovens",  tagline: "Zap." },
    { name: "human body",      value: 0.07,    emoji: "🧍", plural: "human bodies",    tagline: "Please don't actually fill this." },
    { name: "bathtub",         value: 0.15,    emoji: "🛁", plural: "bathtubs",         tagline: "Rubber duck sold separately." },
    { name: "washing machine", value: 0.30,    emoji: "🫧", plural: "washing machines", tagline: "Spin cycle engaged." },
    { name: "refrigerator",    value: 0.60,    emoji: "🧊", plural: "refrigerators",    tagline: "Cool." },
    { name: "car",             value: 10.0,    emoji: "🚗", plural: "cars",             tagline: "Please do not fill your car." },
    { name: "shipping container",value: 33.2,  emoji: "📦", plural: "shipping containers",tagline: "Delivered. Eventually." },
    { name: "hot tub",         value: 1.5,     emoji: "♨️", plural: "hot tubs",         tagline: "Bubbles of knowledge." },
  ],

  // WEIGHT (base unit: kilograms)
  weight: [
    { name: "paperclip",        value: 0.001,  emoji: "📎", plural: "paperclips",        tagline: "Clipped together by science." },
    { name: "AA battery",       value: 0.023,  emoji: "🔋", plural: "AA batteries",      tagline: "Energetically irrelevant." },
    { name: "banana",           value: 0.12,   emoji: "🍌", plural: "bananas",           tagline: "Science in banana form." },
    { name: "apple",            value: 0.18,   emoji: "🍎", plural: "apples",            tagline: "Newton would be proud." },
    { name: "football",         value: 0.43,   emoji: "⚽", plural: "footballs",         tagline: "Heavy-duty fun fact." },
    { name: "cat",              value: 4.0,    emoji: "🐱", plural: "cats",              tagline: "Meow. Also, you weigh a lot of cats." },
    { name: "dog (avg)",        value: 20.0,   emoji: "🐶", plural: "average dogs",      tagline: "Good boys at scale." },
    { name: "human (avg)",      value: 70.0,   emoji: "🧍", plural: "average humans",   tagline: "Socially awkward unit of weight." },
    { name: "panda",            value: 100.0,  emoji: "🐼", plural: "pandas",            tagline: "Bamboo not included." },
    { name: "elephant",         value: 5000.0, emoji: "🐘", plural: "elephants",         tagline: "They never forget this measurement either." },
    { name: "bag of rice",      value: 5.0,    emoji: "🍚", plural: "5-kg bags of rice", tagline: "Grain-level accuracy." },
    { name: "textbook",         value: 1.5,    emoji: "📚", plural: "heavy textbooks",   tagline: "Knowledge has weight. Literally." },
  ],

  // CAPACITY (base unit: liters)
  capacity: [
    { name: "teaspoon",         value: 0.005,   emoji: "🥄", plural: "teaspoons",        tagline: "Just a tad." },
    { name: "shot glass",       value: 0.044,   emoji: "🥃", plural: "shot glasses",     tagline: "Measured in shots. Very academic." },
    { name: "cup of tea",       value: 0.24,    emoji: "🍵", plural: "cups of tea",      tagline: "Measured in British units." },
    { name: "water bottle",     value: 1.0,     emoji: "💧", plural: "water bottles",    tagline: "Stay hydrated, stay useless." },
    { name: "2L soda bottle",   value: 2.0,     emoji: "🥤", plural: "2L soda bottles",  tagline: "Carbonated knowledge." },
    { name: "bucket",           value: 10.0,    emoji: "🪣", plural: "buckets",          tagline: "Bucket-level measurements only." },
    { name: "bathtub",          value: 150.0,   emoji: "🛁", plural: "bathtubs",         tagline: "Fill it up." },
    { name: "fish tank (100L)", value: 100.0,   emoji: "🐠", plural: "100L fish tanks",  tagline: "Nemo called. He's concerned." },
    { name: "swimming pool",    value: 25000.0, emoji: "🏊", plural: "Olympic swimming pools", tagline: "Gold medal in useless facts." },
    { name: "milk carton",      value: 0.5,     emoji: "🥛", plural: "milk cartons",     tagline: "Got milk? Got math." },
    { name: "juice box",        value: 0.2,     emoji: "🧃", plural: "juice boxes",      tagline: "Straight from the carton." },
  ],
};

// For length and height, the comparison DB key is the same
COMPARISONS.height_alias = COMPARISONS.length;


// ── UNIT CONVERSION TO BASE SI ───────────────────────────────────

// Returns a multiplier: value_in_base_unit = input_value * multiplier
const TO_BASE = {
  length: {
    mm: 0.001,
    cm: 0.01,
    m:  1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mile: 1609.344,
  },
  height: {
    cm: 0.01,
    m:  1,
    ft: 0.3048,
    in: 0.0254,
  },
  area: {
    // These are LINEAR unit selectors; the squaring happens in the calculation
    cm: 0.01,
    m:  1,
    ft: 0.3048,
  },
  volume: {
    // LINEAR unit selectors; cubing happens in the calculation
    cm: 0.01,
    m:  1,
    ft: 0.3048,
  },
  weight: {
    mg: 0.000001,
    g:  0.001,
    kg: 1,
    lb: 0.453592,
  },
  capacity: {
    mL: 0.001,
    L:  1,
    gallons: 3.78541,
  },
};

// ── INPUT DEFINITIONS ────────────────────────────────────────────

const INPUTS_CONFIG = {
  length: {
    fields: [
      { id: "length_val", label: "Distance / Length", placeholder: "e.g. 100" },
    ],
    unitOptions: ["mm","cm","m","km","in","ft","yd","mile"],
    defaultUnit: "m",
    unitLabel: "Unit",
    baseUnit: "m",
  },
  height: {
    fields: [
      { id: "height_val", label: "Height", placeholder: "e.g. 175" },
    ],
    unitOptions: ["cm","m","ft","in"],
    defaultUnit: "cm",
    unitLabel: "Unit",
    baseUnit: "m",
  },
  area: {
    fields: [
      { id: "area_length", label: "Length", placeholder: "e.g. 5" },
      { id: "area_width",  label: "Width",  placeholder: "e.g. 4" },
    ],
    unitOptions: ["cm","m","ft"],
    defaultUnit: "m",
    unitLabel: "Unit (for both dimensions)",
    baseUnit: "m²",
  },
  volume: {
    fields: [
      { id: "vol_length", label: "Length", placeholder: "e.g. 5" },
      { id: "vol_width",  label: "Width",  placeholder: "e.g. 4" },
      { id: "vol_height", label: "Height", placeholder: "e.g. 3" },
    ],
    unitOptions: ["cm","m","ft"],
    defaultUnit: "m",
    unitLabel: "Unit (for all dimensions)",
    baseUnit: "m³",
  },
  weight: {
    fields: [
      { id: "weight_val", label: "Weight", placeholder: "e.g. 70" },
    ],
    unitOptions: ["mg","g","kg","lb"],
    defaultUnit: "kg",
    unitLabel: "Unit",
    baseUnit: "kg",
  },
  capacity: {
    fields: [
      { id: "cap_val", label: "Volume / Capacity", placeholder: "e.g. 2" },
    ],
    unitOptions: ["mL","L","gallons"],
    defaultUnit: "L",
    unitLabel: "Unit",
    baseUnit: "L",
  },
};

// ── STATE ────────────────────────────────────────────────────────

let currentType = "length";
let lastBaseValue = null;
let lastComparisons = null;
let lastCompIndex = 0;

// ── DOM REFS ─────────────────────────────────────────────────────

const typeGrid    = document.getElementById("typeGrid");
const inputsArea  = document.getElementById("inputsArea");
const errorMsg    = document.getElementById("errorMsg");
const calcBtn     = document.getElementById("calcBtn");
const resultCard  = document.getElementById("resultCard");
const resultNormal= document.getElementById("resultNormal");
const resultFunny = document.getElementById("resultFunny");
const resultTagline= document.getElementById("resultTagline");
const recalcBtn   = document.getElementById("recalcBtn");

// ── INIT ─────────────────────────────────────────────────────────

renderInputs(currentType);

typeGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".type-btn");
  if (!btn) return;
  const type = btn.dataset.type;
  if (type === currentType) return;

  typeGrid.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  currentType = type;
  renderInputs(type);
  hideResult();
  clearError();
});

calcBtn.addEventListener("click", () => {
  const result = calculate();
  if (!result) return;

  lastBaseValue  = result.baseValue;
  lastComparisons = COMPARISONS[currentType] || COMPARISONS["length"];
  lastCompIndex  = pickRandom(lastComparisons.length);

  showResult(result);
});

recalcBtn.addEventListener("click", () => {
  if (lastBaseValue === null || !lastComparisons) return;
  let newIdx;
  do {
    newIdx = pickRandom(lastComparisons.length);
  } while (newIdx === lastCompIndex && lastComparisons.length > 1);
  lastCompIndex = newIdx;
  displayFunny(lastBaseValue, lastComparisons[lastCompIndex]);
});

// ── RENDER INPUTS ────────────────────────────────────────────────

function renderInputs(type) {
  const cfg = INPUTS_CONFIG[type];
  inputsArea.innerHTML = "";

  cfg.fields.forEach(field => {
    const row = document.createElement("div");
    row.className = "input-row";
    row.innerHTML = `
      <label for="${field.id}">${field.label}</label>
      <div class="input-group">
        <input
          type="number"
          id="${field.id}"
          placeholder="${field.placeholder}"
          min="0"
          step="any"
          autocomplete="off"
        />
      </div>
    `;
    inputsArea.appendChild(row);
  });

  // Unit selector row
  const unitRow = document.createElement("div");
  unitRow.className = "unit-row";
  const unitId = `${type}_unit`;
  const options = cfg.unitOptions.map(u =>
    `<option value="${u}"${u === cfg.defaultUnit ? " selected" : ""}>${u}</option>`
  ).join("");
  unitRow.innerHTML = `
    <label for="${unitId}">${cfg.unitLabel}:</label>
    <select id="${unitId}">${options}</select>
  `;
  inputsArea.appendChild(unitRow);
}

// ── CALCULATE ────────────────────────────────────────────────────

function calculate() {
  clearError();
  const cfg = INPUTS_CONFIG[currentType];

  // Gather input values
  const values = {};
  for (const field of cfg.fields) {
    const el = document.getElementById(field.id);
    const raw = el ? el.value.trim() : "";
    if (raw === "") {
      showError(`Please fill in the "${field.label}" field.`);
      return null;
    }
    const num = parseFloat(raw);
    if (isNaN(num)) {
      showError(`"${field.label}" must be a valid number.`);
      return null;
    }
    if (num < 0) {
      showError(`"${field.label}" can't be negative. Physics would like a word.`);
      return null;
    }
    if (num === 0) {
      showError(`"${field.label}" is zero. That's... technically nothing.`);
      return null;
    }
    values[field.id] = num;
  }

  const unitEl = document.getElementById(`${currentType}_unit`);
  const unit   = unitEl ? unitEl.value : cfg.defaultUnit;

  // Convert to base SI
  let baseValue, displayResult;

  switch (currentType) {
    case "length": {
      const m = values["length_val"] * TO_BASE.length[unit];
      baseValue     = m;
      displayResult = formatWithUnit(m, "m");
      break;
    }
    case "height": {
      const m = values["height_val"] * TO_BASE.height[unit];
      baseValue     = m;
      displayResult = formatWithUnit(m, "m");
      break;
    }
    case "area": {
      // Convert each dimension to meters, then multiply
      const mult = TO_BASE.area[unit];
      const lm   = values["area_length"] * mult;
      const wm   = values["area_width"]  * mult;
      baseValue     = lm * wm;
      displayResult = formatWithUnit(baseValue, "m²");
      break;
    }
    case "volume": {
      const mult = TO_BASE.volume[unit];
      const lm   = values["vol_length"] * mult;
      const wm   = values["vol_width"]  * mult;
      const hm   = values["vol_height"] * mult;
      baseValue     = lm * wm * hm;
      displayResult = formatWithUnit(baseValue, "m³");
      break;
    }
    case "weight": {
      const kg  = values["weight_val"] * TO_BASE.weight[unit];
      baseValue     = kg;
      displayResult = formatWithUnit(kg, "kg");
      break;
    }
    case "capacity": {
      const L   = values["cap_val"] * TO_BASE.capacity[unit];
      baseValue     = L;
      displayResult = formatWithUnit(L, "L");
      break;
    }
  }

  return { baseValue, displayResult };
}

// ── SHOW / HIDE RESULTS ──────────────────────────────────────────

function showResult(result) {
  const { baseValue, displayResult } = result;

  // Normal result
  resultNormal.innerHTML = `Actual result: <strong>${displayResult}</strong>`;

  // Funny comparison
  const comps = COMPARISONS[currentType] || COMPARISONS["length"];
  const comp  = comps[lastCompIndex];
  displayFunny(baseValue, comp);

  // Show card
  resultCard.classList.remove("hidden");
  resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function displayFunny(baseValue, comp) {
  const count = baseValue / comp.value;
  const formatted = formatCount(count);

  resultFunny.innerHTML =
    `${comp.emoji} That's approximately <span class="funny-number">${formatted}</span> <span class="funny-unit">${comp.plural}</span>.`;
  resultTagline.textContent = comp.tagline;
  renderAnimation(currentType, count, comp.emoji);
}

function hideResult() {
  resultCard.classList.add("hidden");
}

// ── NUMBER FORMATTING ────────────────────────────────────────────

function formatCount(n) {
  if (n >= 1e9)        return `${smartRound(n / 1e9)} billion`;
  if (n >= 1e6)        return `${smartRound(n / 1e6)} million`;
  if (n >= 1000)       return commaFormat(Math.round(n));
  if (n >= 100)        return Math.round(n).toString();
  if (n >= 10)         return parseFloat(n.toFixed(1)).toString();
  if (n >= 1)          return parseFloat(n.toFixed(2)).toString();
  if (n >= 0.01)       return parseFloat(n.toFixed(3)).toString();
  return parseFloat(n.toFixed(5)).toString();
}

function smartRound(n) {
  // e.g. 1.234 → "1.2", 10.6 → "10.6", 100 → "100"
  if (n >= 100) return Math.round(n).toString();
  if (n >= 10)  return parseFloat(n.toFixed(1)).toString();
  return parseFloat(n.toFixed(2)).toString();
}

function commaFormat(n) {
  return n.toLocaleString("en-IN");
}

// Format with appropriate SI prefix and unit label
function formatWithUnit(value, unit) {
  if (unit === "m") {
    if (value >= 1000)  return `${smartRound(value / 1000)} km`;
    if (value >= 1)     return `${parseFloat(value.toFixed(3))} m`;
    if (value >= 0.01)  return `${parseFloat((value * 100).toFixed(2))} cm`;
    return `${parseFloat((value * 1000).toFixed(2))} mm`;
  }
  if (unit === "m²") {
    if (value >= 1e6)   return `${smartRound(value / 1e6)} km²`;
    return `${parseFloat(value.toFixed(4))} m²`;
  }
  if (unit === "m³") {
    return `${parseFloat(value.toFixed(5))} m³`;
  }
  if (unit === "kg") {
    if (value >= 1000)  return `${smartRound(value / 1000)} tonnes`;
    if (value >= 1)     return `${parseFloat(value.toFixed(3))} kg`;
    if (value >= 0.001) return `${parseFloat((value * 1000).toFixed(2))} g`;
    return `${parseFloat((value * 1e6).toFixed(2))} mg`;
  }
  if (unit === "L") {
    if (value >= 1000)  return `${smartRound(value / 1000)} kL`;
    if (value >= 1)     return `${parseFloat(value.toFixed(3))} L`;
    return `${parseFloat((value * 1000).toFixed(2))} mL`;
  }
  return value.toString();
}

// ── UTILITIES ────────────────────────────────────────────────────

function pickRandom(max) {
  return Math.floor(Math.random() * max);
}

function showError(msg) {
  errorMsg.textContent = msg;
}

function clearError() {
  errorMsg.textContent = "";
}

// ── ENTER KEY on inputs ──────────────────────────────────────────

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement.tagName === "INPUT") {
    calcBtn.click();
  }
});




// ================================================================
//  ANIMATION ENGINE
//  Renders a proportional emoji grid/stack/pile per measurement type.
//  MAX = 50 slots. count >= 50 -> all filled ("overflow").
//  count < 50  -> round(count) filled, rest shown as ghost slots.
// ================================================================

const ANIM_MAX     = 50;
const ANIM_STAGGER = 28; // ms between each emoji popping in

function renderAnimation(type, count, emoji) {
  var section   = document.getElementById("animSection");
  var container = document.getElementById("animContainer");
  var label     = document.getElementById("animCountLabel");
  if (!section || !container || !label) return;

  // Wipe previous render
  container.innerHTML = "";
  container.className = "anim-container";

  var filled   = count >= ANIM_MAX ? ANIM_MAX : Math.max(1, Math.round(count));
  var empty    = ANIM_MAX - filled;
  var overflow = count > ANIM_MAX;

  // Label copy
  if (overflow) {
    label.textContent = "All 50 slots packed — " + formatCount(count - ANIM_MAX) + " more couldn't squeeze in \uD83D\uDE35";
  } else if (filled <= 2) {
    label.textContent = "Just " + filled + ". That's barely anything. \uD83D\uDE14";
  } else {
    label.textContent = filled + " of 50 slots filled";
  }

  container.classList.add("anim-" + type);

  // Volume + Capacity: completely different falling-into-box animation
  if (type === "volume" || type === "capacity") {
    var MAX_FALL  = 20;
    var showCount = Math.min(Math.max(1, Math.round(count)), MAX_FALL);
    label.textContent = "Dropping " + showCount + " in \u2014 " + formatCount(count) + " total";
    buildFallingBox(container, showCount, emoji, type);
    return;
  }

  switch (type) {
    case "length": buildLength(container, filled, empty, emoji); break;
    case "height": buildHeight(container, filled, empty, emoji); break;
    case "area":   buildArea(container, filled, empty, emoji);   break;
    case "weight": buildWeight(container, filled, emoji);        break;
  }
}

// ── LENGTH: fills left to right in rows ─────────────────────────
function buildLength(c, filled, empty, emoji) {
  for (var i = 0; i < filled; i++) c.appendChild(makeUnit(emoji, i, "pop-in"));
  for (var i = 0; i < empty;  i++) c.appendChild(makeGhost(emoji));
}

// ── HEIGHT: stacks upward (column-reverse flex) ──────────────────
// With flex-direction:column-reverse, DOM-first child = visually bottom.
// We want filled at bottom, empty at top -> render filled first.
function buildHeight(c, filled, empty, emoji) {
  for (var i = 0; i < filled; i++) c.appendChild(makeUnit(emoji, i, "rise-in"));
  for (var i = 0; i < empty;  i++) c.appendChild(makeGhost(emoji));
}

// ── AREA: 2D tile grid ───────────────────────────────────────────
function buildArea(c, filled, empty, emoji) {
  for (var i = 0; i < filled; i++) c.appendChild(makeUnit(emoji, i, "pop-in"));
  for (var i = 0; i < empty;  i++) c.appendChild(makeGhost(emoji));
}

// buildVolume: replaced by buildFallingBox — kept as stub to avoid errors
function buildVolume(c, filled, empty, emoji) { /* unused */ }

// ── WEIGHT: emojis fall from top and pile at the bottom ──────────
// No ghost slots — the empty vertical space IS the visual.
function buildWeight(c, filled, emoji) {
  for (var i = 0; i < filled; i++) {
    var el  = makeUnit(emoji, i, "fall-in");
    var rot = ((Math.random() * 44) - 22).toFixed(1);
    el.style.setProperty("--rot", rot + "deg");
    // Also stagger weight a bit more slowly so the fall reads clearly
    el.style.animationDelay = (i * 48) + "ms";
    c.appendChild(el);
  }
}

// buildCapacity: replaced by buildFallingBox — kept as stub to avoid errors
function buildCapacity(c, filled, empty, emoji) { /* unused */ }

// ── DOM helpers ──────────────────────────────────────────────────
function makeUnit(emoji, index, animClass) {
  var el = document.createElement("span");
  el.className = "emoji-unit " + animClass;
  el.textContent = emoji;
  el.style.animationDelay = (index * ANIM_STAGGER) + "ms";
  return el;
}

function makeGhost(emoji) {
  var el = document.createElement("span");
  el.className = "emoji-empty";
  el.textContent = emoji;
  return el;
}



// ================================================================
//  FALLING-INTO-BOX ANIMATION (Volume + Capacity)
//  A large container emoji sits at the bottom.
//  The comparison emojis rain in from the top and vanish into it.
// ================================================================

function buildFallingBox(container, count, emoji, type) {
  // Pick the right container emoji
  var boxEmoji = (type === "capacity") ? "\uD83E\uDEA3" : "\uD83D\uDCE6";
  // 🪣 for capacity, 📦 for volume

  // Outer zone: positions everything
  var zone = document.createElement("div");
  zone.className = "box-drop-zone";

  // Layer 1: falling emoji sprites
  var rain = document.createElement("div");
  rain.className = "box-rain";

  for (var i = 0; i < count; i++) {
    var el = document.createElement("span");
    el.className = "box-fall-item";
    el.textContent = emoji;

    // All items spawn right above the box center
    // Small horizontal wobble (+-15px) keeps it from looking robotic
    var wobble = (Math.random() * 30 - 15).toFixed(1);
    // Gentle random start rotation
    var rot    = ((Math.random() * 40) - 20).toFixed(1);
    // Stagger delay: each item waits a bit longer than the previous
    var delay  = (i * 240 + Math.floor(Math.random() * 60));
    // Slightly varying fall speed
    var dur    = (520 + Math.floor(Math.random() * 200));

    el.style.left = "50%";                         // always centered
    el.style.setProperty("--wobble", wobble + "px");
    el.style.setProperty("--rot", rot + "deg");
    el.style.animationDelay    = delay + "ms";
    el.style.animationDuration = dur + "ms";

    rain.appendChild(el);
  }

  // Layer 2: the container emoji (sits on top so items disappear behind/inside it)
  var boxEl = document.createElement("div");
  boxEl.className = "box-container-emoji";
  boxEl.textContent = boxEmoji;

  zone.appendChild(rain);
  zone.appendChild(boxEl);
  container.appendChild(zone);
}

