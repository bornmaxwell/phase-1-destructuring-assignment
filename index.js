// Animal sounds destructuring
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
const { moo, neigh, baa, oink, cluck } = animalSounds;

// Animal names destructuring (assigns "cow" directly to `bessie`)
const bessie = "cow";
const dolly = "sheep";
const babe = "pig";
const little = "chicken";
const animalNames = {
  
  cow: "bessie",
  sheep: "dolly",
  pig: "babby",
  chicken: "little",
};

// Animal colors destructuring
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = animalColors;

// Rainbow colors array destructuring
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Rainbow colors initials destructuring, excluding `indigo` and using initials
const [r, o, y, g, b, i, v] = rainbowColors;
const [, , , , , indg] = rainbowColors; // Only assigns `indigo` as `indg`

// Muppet details object destructuring (direct global assignment of muppetName, color, etc.)
const muppet = {
  name: "Miss Piggy",
  color: "pink",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
const { name: muppetName, color, job, partner } = muppet;

// Muppet songs object with nested destructuring
const muppetSongs = {
  song1: "Never Before, Never Again",
  song2: "Moving Right Along",
  song3: "Happy Feet",
  song4: "I Hope That Something Better Comes Along",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};
const { song1 : song, song2, song4, nested: { job: nestedJob, partner: nestedPartner } } = muppetSongs;