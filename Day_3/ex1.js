
// 1. 

let firstName = "Tom";
let lastName = "Peterson";
const country = "USA";
const city = "Bangladesh";
let isMarried = true;
let age = 21;
let year = 2023;

console.log("1. " + typeof firstName);
console.log("1. " + typeof lastName);
console.log("1. " + typeof country);
console.log("1. " + typeof city);
console.log("1. " + typeof isMarried);
console.log("1. " + typeof age);
console.log("1. " + typeof year);


// 2. 
console.log("2. " + typeof '10' == 10);

// 3. 
console.log("3. " + parseInt('9.8') == 10);

// 4.1
let statement1 = true;
let statement2 = -10000000;
let statement3 = " ";
console.log("4.1 " + Boolean(statement1) + " " + Boolean(statement2) + " " + Boolean(statement3));

// 4.2
let state1 = 0;
let state2 = NaN;
let state3 = "";
console.log("4.2 " + Boolean(state1) + " " + Boolean(state2) + " " + Boolean(state3));


// 5. Expected results in // comments 
let arr = [
    4 > 3,   // true
    4 >= 3,  // true
    4 < 3,  //false
    4 <= 3,  //false
    4 == 4,  //true
    4 === 4, //true
    4 != 4, //false
    4 !== 4, //false
    4 != '4',//false
    4 == '4',//true
    4 === '4',//false
    "python".length !== 'jargon'.length, //false
];

for (let x in arr) {
    console.log(arr[x]);
}

console.log("5.12 " + Boolean("python".length !== 'jargon'.length));
// got everything correct :)


// 6. 
const arr2 = [
    4 > 3 && 10 < 12,   //true
    4 > 3 && 10 > 12,   //false
    4 > 3 || 10 < 12,   //true
    4 > 3 || 10 > 12,   //true
    !(4 > 3),           //false
    !(4 < 3),           //true
    !(false),           //true
    !(4 > 3 && 10 < 12),//false
    !(4 > 3 && 10 > 12),//true
    !(4 === '4'),       //true
    !"dragon".includes("on") && !"python".includes("on"),//false
];

for (let x in arr2) {
    console.log(`6.${parseInt(x) + 1} ` + arr2[x]);
}

// 7.
let date = new Date();
let arr3 = [
    date.getFullYear(),
    date.getMonth() + 1,
    date,
    date.getDay(),
    date.getHours(),
    date.getMinutes(),
    date.getTime()
];

for (let x in arr3) {
    console.log(`7.${parseInt(x) + 1} ` + arr3[x]);
}