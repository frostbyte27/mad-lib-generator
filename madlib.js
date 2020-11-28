/***
 * Mad Lib Generator
 * Randomly generates a mad-lib style message
 * By selecting a template and filler words
 */

//Mad Lib Templates
const templates = [];

//Each noun should include singular and plural version
const nouns = [
    {singular: "lettuce", plural: "lettuces"},
    {singular: "pistol", plural: "pistols"},
    {singular: "kitty cat", plural: "kitty cats"},
    {singular: "place of business", plural: "places of business"},
    {singular: "tank", plural: "tanks"},

];
//Each verb should include past, present and future tense

const verbs = [
    {past: "cooked", present: "cooks", future:  "cook"},
    {past: "fought", present: "fights", future: "fight"},
    {past: "boogied", present: "boogies", future: "boogie"},
    {past: "exploded", present: "explodes", future: "explode"},
    {past: "ran over", present: "runs over", future: "run over"},
    {past: "flapped", present: "flaps", future: "flap"},
];
//Just adjectives
const adjectives = [
    "metal",
    "wild",
    "domesticated",
    "abnormal",
    "medicated",
    "cocky",
    "massive",
    "disrespectful",
    "impressive",
    "out of control",
    "internet worthy",
    "hilarious",
    "sexy",
    "hot",
    "very tactful",
    "bearded",
    "duck-like",
    "violent",
    "slimy",
    "insanely creepy",
    "self-centered",
    "talking",
    "naked",
    "angry",
    "shaky",
    "deep",
    "sick",
    "zippy",
    "sticky",
    "fluffy",
    "frozen",
    "unholy",
    "painfully honest",
    "filthy",
    "fighting",
    "bonkers",
    "harsh",
    "frisky",
    "greedy",
    "crawly",
    "insane",
    "hideous",
    "ungodly",
    "abusive",
    "drunken",
    "hateful",
    "idiotic",
    "twisted",
    "useless",
    "yapping",
    "magical",
    "indecent",
    "godawful",
    "arrogant",
    "confused",
    "flirting",
    "high-end",
    "insecure",
    "maniacal",
    "sickened",
    "slippery",
    "stubborn",
    "tripping",
    "vengeful",
    "sinister",
    "costumed",
    "cowardly",
    "haunting",
    "startled",
    "demanding",
    "shivering",
    "offensive",
    "nighttime",
    "startling",
    "disgusting",
    "slap happy",
    "disturbing",
    "adulterous",
    "blathering",
    "flickering",
    "rebellious",
    "impertinent",
    "bull headed",
    "hyperactive",
    "infuriating",
    "outnumbered",
    "pea-brained",
    "territorial",
    "underhanded",
    "zombie like",
    "mischievous",
    "at-the-ready",
    "free-loading",
    "house-broken",
    "up-to-no-good",
    "cruel-hearted",
    "misunderstood",
    "narrow-minded",
    "self-absorbed",
    "bat-shit-crazy",
    "fiercely-loyal",
    "out-of-control",
    "fear-inspiring",
    "bat shit crazy",
    "mentally impaired"
];

/**
 * Builds and returns a randomly generated Mad-Lib
 */
function generateMadLib(){


}



//Primary script
console.log('Welcome to the Mad Lib Program');