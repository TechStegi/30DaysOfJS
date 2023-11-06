

console.log("The quote \"There is no exercise better for the heart than reaching down and lifting people up.\" by John Holmes teaches us to help one another");
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

let strNumber = '10'
console.log("3. " + typeof strNumber !== 10 ? parseInt(strNumber) : "'10' is exactly equal to 10");

let strFloat = '9.8'
if (strFloat == 10) {
    console.log("nice")
} else {
    console.log(Math.round(parseFloat(strFloat)));
}

let python = "python";
let jargon = "jargon";

if (python.search("on") === -1 && jargon.search("on") !== -1) {
    console.log("5. " + "'on' is found in both");
} else {
    console.log("'on' is NOT found in both")
}

let jargonSentence = "I hope this course is not full of jargon.";

if (jargonSentence.indexOf("jargon") !== -1) {
    console.log("6. " + "jargon is in the sentence")
} else {
    console.log("NO jargon in sentence")
}

function gen0and100() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}
console.log("7. Between 0 and 100: " + gen0and100());


function gen50and100() {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}
console.log("8. Between 50 and 100: " + gen50and100());


function gen0and255() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}
console.log("9. Between 0 and 255: " + gen0and255());


// 10.
let js = "JavaScript";
let rndmChar = js[Math.floor(Math.random() * js.length)];
console.log("10. Random Char: " + rndmChar);


// 11.

// \n 
// \t 
// \\ 
// \' 
// \"
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

// 12.
let sent2 = 'You cannot end a sentence with because because because is a conjunction';
let substr = sent2.substr(31, 23);
console.log(substr)
