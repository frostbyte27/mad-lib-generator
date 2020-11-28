/***
 * Mad Lib Generator
 * Randomly generates a mad-lib style message
 * By selecting a template and filler words
 */

//Mad Lib Templates
const templates = [
    "This <noun><s> is far too <adjective>. How is a <noun><s> supposed to <verb><f> when there is <a/an> <adjective> <noun><s>?",

    "I sure do love <a/an> <adjective> <noun><s>, especially whent the <noun><s> decides to <verb><f>.",

    "He decided to <verb> the <noun><p>, just so he could avoid the <adjective> <noun><s>.",

    "Some <noun><p> are <adjective>, some <noun><p> are <adjective>, but we can all agree <noun><p> <verb><f> <noun><p>.",

    "She wanted to <verb><f> the <noun><s>, but <adjective> <noun><p> wouldn't allow it."

];

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
    //Select a template string
    let template = selectTemplate();

    //Replace all nouns


}

function replaceNouns(template){
    let nounTag = "<noun>";
    let pluralTag = "<p>";
    let singularTag = "<s>";

    //Keep track of nouns that have already been used
    //avoids duplicates
    let used = [];
    let complete = false;
    
    while(!complete){
        //replace any instances of singular nouns
        let pos = template.search(nounTag+singularTag);
        if( pos >= 0){
            //a singular noun tag was found
            //get a random noun, remove it from the 
            let noun = selectNoun(false);

            //determine a/an usage based on first char of noun
            // if( template.slice(pos - ))

            //replace with the actual selected noun
            template = template.replace(nounTag+singularTag, noun);
        }
        else{
            //replace any instances of plural nouns
            let pos = template.search(nounTag+pluralTag);
            if( pos >= 0){
                //a singular noun tag was found
                //get a random noun, remove it from the 
                let noun = selectNoun(true);

                //determine a/an usage based on first char of noun
                // if( template.slice(pos - ))

                //replace with the actual selected noun
                template = template.replace(nounTag+pluralTag, noun);
            }
            else{
                complete = true;
            }
        }
    }

    return template;

}


function selectTemplate(){
    console.log("Choosing Template: ");

    //select a random template
    let index = Math.floor(Math.random()*(templates.length));
    let template = templates[index];
    console.log(index+": "+template);
    return template;
}

function selectNoun(isPlural){
    console.log("Choosing a noun: ");

    //select a random template
    let index = Math.floor(Math.random()*(nouns.length));
    let nounObj = nouns[index];

    return isPlural ? nounObj.plural : nounObj.singular;
}

function selectVerb(tense){
    console.log("Choosing Verb: ");

    //select a random template
    let index = Math.floor(Math.random()*(verbs.length));
    let verbObj = verbs[index];

    //Select either the past, present or future parameter
    let verb = verbObj[tense];

    console.log("\t\t"+verb);
    return verb;
}

function selectAdjective(){
    console.log("Choosing Adjective: ");

    //select a random template
    let index = Math.floor(Math.random()*(adjectives.length));
    let template = adjectives[index];
    console.log("\t\t"+adjective);
    return adjective;
}

//Primary script
console.log('Welcome to the Mad Lib Program');
// for(let i=1; i<=5; i++){
//     generateMadLib();
// }

console.log("Testing Noun Replacement...");
let testStr = "This <noun><s> has many <noun><p> but only a <noun><s> can beat these <noun><p>, mofo.";
console.log(testStr);
console.log(replaceNouns(testStr));
