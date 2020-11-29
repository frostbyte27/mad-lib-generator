/***
 * Mad Lib Generator
 * Randomly generates a mad-lib style message
 * By selecting a template and filler words
 */

//Mad Lib Templates
const templates = [
    "This <noun><s> is far too <adjective>. How is a <noun><s> supposed to <verb><f> when there is <a/an> <adjective> <noun><s>?",

    "I sure do love <a/an> <adjective> <noun><s>, especially whent the <noun><s> decides to <verb><f>.",

    "He decided to <verb><f> the <noun><p>, just so he could avoid the <adjective> <noun><s>.",

    "Some <noun><p> are <adjective>, some <noun><p> are <adjective>, but we can all agree <noun><p> <verb><f> <noun><p>.",

    "She wanted to <verb><f> the <noun><s>, but <adjective> <noun><p> wouldn't allow it."

];

//Each noun should include singular and plural version
const nouns = [
    {singular: "lettuce", plural: "lettuces", indef: "a"},
    {singular: "pistol", plural: "pistols", indef: "a"},
    {singular: "kitty cat", plural: "kitty cats", indef: "a"},
    {singular: "place of business", plural: "places of business", indef: "a"},
    {singular: "tank", plural: "tanks", indef: "a"},
    {singular: "idiot", plural: "idiots", indef: "an"},
    {singular: "toaster", plural: "toasters", indef: "a"},
    {singular: "octopus", plural: "octopi", indef: "an"},
    {singular: "international law enforcement agency", plural: "international law enforcement agencies", indef: "an"}

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
    template = replaceNouns(template);
    // console.log(typeof template);
    //Replace verbs
    template = replaceVerbs(template);

    //Replace adjectives
    template = replaceAdjectives(template);

    return template;

}

function replaceNouns(template){
    let nounTag = "<noun>";
    let pluralTag = "<p>";
    let singularTag = "<s>";
    let indefArt = "<a/an>";

    //get copy of nouns
    let nounSet = nouns.slice();
    let complete = false;
    let lastPos = 0;

    //find the next noun tag
    let pos = template.search(nounTag);
    while(pos >= 0){
        //console.log("Available Nouns: "+nounSet);
        //a noun tag was found
        //get a random noun, remove it from the choices
        let noun = removeRandom(nounSet);

        //check plurality, replace using the appropriate version of the noun
        let pTag = template.slice(pos+nounTag.length,pos+nounTag.length+pluralTag.length);

        //replace any preceding indefinite article with the one associated with this noun
        let indefPos = template.slice(lastPos,pos).search(indefArt);
        if(indefPos >= 0) template = template.replace(indefArt, noun.indef);

        if(pTag === singularTag){
            //replace with the actual selected noun
            template = template.replace(nounTag+singularTag, noun.singular);
        }
        else if(pTag === pluralTag){
            //replace with the actual selected noun
            template = template.replace(nounTag+pluralTag, noun.plural);
        }
        else{
            console.log('Error replacing noun: '+pTag+' does not match any plurality tag');
        }

        //find the next noun tag
        pos = template.search(nounTag);
        
    }

    return template;
}

function replaceVerbs(template){
    let verbTag = "<verb>"
    let pastTag = "<p>"
    let presentTag = "<c>"
    let futureTag = "<f>"

     //get copy of verbs
     let verbSet = verbs.slice();
     let complete = false;
     let lastPos = 0;
 
     //find the first verb tag
     let pos = template.search(verbTag);
     while(pos >= 0){
         
         //console.log("Available Verbs: "+verbSet);
         //a verb tag was found
         //get a random verb, remove it from the choices
         let verb = removeRandom(verbSet);
 
         //check tense, replace using the appropriate version of the verb
         let tTag = template.slice(pos+verbTag.length,pos+verbTag.length+pastTag.length);
 
         switch(tTag){
             case pastTag:
                 {template = template.replace(verbTag+pastTag, verb.past); break;}
            case presentTag:
                 {template = template.replace(verbTag+presentTag, verb.present); break;}
            case futureTag:
                 {template = template.replace(verbTag+futureTag, verb.future); break;}
            default:
            {
                console.log("unrecoginized tag: "+tTag);
                //template = template.replace(verbTag+pastTag, verb.past); break;
            }
         }
         
 
         //find the next verb tag
         pos = template.search(verbTag);
         
     }
 
     return template;

}

function replaceAdjectives(template){
    let adjTag = "<adjective>"

     //get copy of adjectives
     let adjSet = adjectives.slice();
     
     let lastPos = 0;
 
     //find the next adjective tag
     let pos = template.search(adjTag);
     while(pos >= 0){
         
         
         //an adjective tag was found
         //get a random adjective, remove it from the choices
         let adj = removeRandom(adjSet);
         
         //replace the tag
         template = template.replace(adjTag,adj);
 
         //find the next adjective tag
         pos = template.search(adjTag);
         
     }
 
     return template;

}


function selectTemplate(){
    //console.log("Choosing Template: ");

    //select a random template
    let index = Math.floor(Math.random()*(templates.length));
    let template = templates[index];
    //console.log(index+": "+template);
    return template;
}

// function selectNoun(){
//     //console.log("Choosing a noun: ");

//     //select a random template
//     let index = Math.floor(Math.random()*(nouns.length));
//     let nounObj = nouns[index];

//     return nounObj;
// }

// function selectVerb(tense){
//     console.log("Choosing Verb: ");

//     //select a random template
//     let index = Math.floor(Math.random()*(verbs.length));
//     let verbObj = verbs[index];

//     //Select either the past, present or future parameter
//     let verb = verbObj[tense];

//     console.log("\t\t"+verb);
//     return verb;
// }

// function selectAdjective(){
//     console.log("Choosing Adjective: ");

//     //select a random template
//     let index = Math.floor(Math.random()*(adjectives.length));
//     let template = adjectives[index];
//     console.log("\t\t"+adjective);
//     return adjective;
// }

function removeRandom(array){

    // console.log("Type of "+array.name+": "+typeof array);
    //select a random template
    let index = Math.floor(Math.random()*(array.length));
    let element = array[index];

    //remove the element from the array
    array.splice(index,1);
    return element;
}

//Primary script
console.log('Welcome to the Mad Lib Program');
for(let i=1; i<=5; i++){
    console.log(generateMadLib());
}

// console.log("Testing Noun Replacement...");
// let testStr = "So, <a/an> <noun><s> <verb><c> the <noun><p> but only <a/an> <noun><s> can <verb><f> these <noun><p>, mofo.";
// console.log(testStr);
// console.log(generateMadLib(testStr));
