export const filterTypes = {
  name: {
    type: "free-text",
  },
  rarity: {
    type: "dropdown",
    options: [
      {
        name: "Common",
        text: "Common",
        selected: true,
      },
      {
        name: "Rare",
        text: "Rare",
        selected: false,
      },
      {
        name: "Super Rare",
        text: "Super Rare",
        selected: false,
      },
      {
        name: "Ultra Rare",
        text: "Ultra Rare",
        selected: false,
      },
    ],
  },
  typeline: {
    type: "free-text",
  },
  type: {
    type: "free-text",
  },
  frame: {
    type: "dropdown",
    options: [
      { name: "effect", text: "Effect", selected: true },
      { name: "normal", text: "Normal", selected: false },
      { name: "trap", text: "Trap", selected: false },
      { name: "spell", text: "Spell", selected: false },
      { name: "fusion", text: "Fusion", selected: false },
      { name: "ritual", text: "Ritual", selected: false },
    ],
  },
  description: {
    type: "free-text",
  },
  race: {
    type: "dropdown",
    options: [
      { name: "Beast", text: "Beast", selected: true },
      { name: "Rock", text: "Rock", selected: false },
      { name: "Insect", text: "Insect", selected: false },
      { name: "Machine", text: "Machine", selected: false },
      { name: "Fiend", text: "Fiend", selected: false },
      { name: "Warrior", text: "Warrior", selected: false },
      { name: "Normal", text: "Normal", selected: false },
      { name: "Dragon", text: "Dragon", selected: false },
      { name: "Continuous", text: "Continuous", selected: false },
      { name: "Ritual", text: "Ritual", selected: false },
      { name: "Aqua", text: "Aqua", selected: false },
      { name: "Equip", text: "Equip", selected: false },
      { name: "Spellcaster", text: "Spellcaster", selected: false },
      { name: "Fairy", text: "Fairy", selected: false },
      { name: "Reptile", text: "Reptile", selected: false },
      { name: "Field", text: "Field", selected: false },
      { name: "Fish", text: "Fish", selected: false },
      { name: "Dinosaur", text: "Dinosaur", selected: false },
      { name: "Zombie", text: "Zombie", selected: false },
      { name: "Plant", text: "Plant", selected: false },
      { name: "Quick-Play", text: "Quick-Play", selected: false },
      { name: "Counter", text: "Counter", selected: false },
      { name: "Winged Beast", text: "Winged Beast", selected: false },
      { name: "Beast-Warrior", text: "Beast-Warrior", selected: false },
      { name: "Sea Serpent", text: "Sea Serpent", selected: false },
      { name: "Pyro", text: "Pyro", selected: false },
      { name: "Thunder", text: "Thunder", selected: false },
    ],
  },
  atk: {
    type: "number",
    min: 0,
    max: 9999,
  },
  def: {
    type: "number",
    min: 0,
    max: 9999,
  },
  level: {
    type: "number",
    min: 1,
    max: 12,
  },
  archetype: {
    type: "free-text",
  },
  attribute: {
    type: "dropdown",
    options: [
      { name: "EARTH", text: "Earth", selected: true },
      { name: "DARK", text: "Dark", selected: false },
      { name: "LIGHT", text: "Light", selected: false },
      { name: "WATER", text: "Water", selected: false },
      { name: "FIRE", text: "Fire", selected: false },
      { name: "WIND", text: "Wind", selected: false },
    ],
  },
};
