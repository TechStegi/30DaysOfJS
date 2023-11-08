
import cts from "./countries.js"

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


// 1.
// for (let i = 0; i <= 10; i++) {
//     console.log("1.1.1. " + i);
// }

// let i = 0;
// while (i <= 10) {
//     console.log("1.1.2. " + i);
//     i++;
// }

// let j = 0;
// do {
//     console.log("1.1.3. " + j);
//     j++;
// } while (j <= 10);


// 2. 
// for (let i = 10; i >= 0; i--) {
//     console.log("1.2.1. " + i);
// }

// let i = 10;
// while (i >= 0) {
//     console.log("1.2.2. " + i);
//     i = i-1;
// }

// let j = 10;
// do {
//     console.log("1.2.3. " + j);
//     j--;
// } while(j  >= 0);


// 3. 

// let n = 8;
// for (let i = 0; i <= n; i++) {
//     console.log("1.3.1. " + i);
// }


// 4.
// for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= i; j++) {
//     console.log("#");
//     }
// }


// 5.
// n = 5
// for (let i = 0; i <= n; i++) {
//   result = i**2;
//   console.log(i, "x", i, "=", result);
// }


// 6. 
// n = 10;
// console.log("i", "i^2", "i^3");
// for(let i = 0; i <= n; i++) {
//   result1 = i**2
//   result2 = i**3
//   console.log(i, result1, result2);
// }


// 7.
// let n1 = 100;
// for (let i = 0; i <= n1; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 8.
// let n2 = 100;
// for (let i = 0; i <= n2; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 9. 
// let n3 = 20;
// let tc = 0
// for (let i = 2; i <= n3; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j == 0) {
//       tc = tc + 1;
//     } 
//   }
//   if (tc === 1) {
//       console.log("primzahl haha", i);
//   }
//   tc = 0;
// }


// 10.
let s = 0
for (let i = 0; i <= 100; i++) {
  s = s + i;
}
console.log(s);


// 11.
let s1 = 0;
let s2 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    s1 = s1 + i;
  } else {
    s2 = s2 + i;
  }
}
console.log("The sum of all evens from 0 to 100 is", s1, ". And the sum of all odds from 0 to 100 is", s2);


// 12.
console.log([s1, s2]);

// 13.
// Generate an array of 5 random numbers between a specified range (e.g., 1 to 100)
function generateRandomNumbers1(min, max, count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

const minRange = 1;
const maxRange = 3;
const numberOfRandomNumbers = 5;

const randomNumbers = generateRandomNumbers1(minRange, maxRange, numberOfRandomNumbers);

console.log("Array of 5 random numbers:", randomNumbers);


// 14.
function generateRandomNumbers2(min, max, count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumbers.includes(randomNumber)) {
      count = count + 1;
      continue;
    } else {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

const randomNumbers2 = generateRandomNumbers2(1, 5, 5)
console.log("Array of 5 random unique numbers:", randomNumbers2);


// 15.
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let password1 = "";
function char6() {
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * alphabet.length);
    password1 = password1 + alphabet[randomNumber];
  }
  console.log(password1);
}
char6();


// Exercise Level 2, 1. 
let password2 = "";
function charAnyCount(n) {
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * alphabet.length);
    password2 = password2 + alphabet[randomNumber];
  }
  console.log(password2);
}
charAnyCount(12);

// Exercise Level 2, 2.
const hexDigits = '0123456789ABCDEF';
let hexaNumber = "#";
function randomColor() {
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexDigits.length);
    hexaNumber = hexaNumber + hexDigits[randomNumber];
  }
  console.log(hexaNumber);
}
randomColor();

// Exercise Level 2, 3. 
const rgbDigits = "0123456789";
let rgb1 = "";
let rgb2 = "";
let rgb3 = "";
function rndmRGB() {
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 256);
    rgb1 = randomNumber;
  }
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 256);
    rgb2 = randomNumber;
  }
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 256);
    rgb3 = randomNumber;
  }
  const rgb = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  console.log(rgb);
}
rndmRGB();


// Exercise Level 2, 4.
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries);


// Exercise Level 2, 5.
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);


// Exercise Level 2, 6.
const all = [];
for (let i = 0; i < countries.length; i++) {
  let threeDigits = countries[i].slice(0, 3).toUpperCase();
  let countriesLengthLocal = countries[i].length;
  let oneCountryArr = [countries[i], threeDigits, countriesLengthLocal];
  all.push(oneCountryArr);
}
console.log(all);


// Exercise Level 2, 7.
let winnerArr = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")
  ) {
    winnerArr.push(countries[i]);
  }
}
if (winnerArr.length < 1) {
  console.log("All these countries are without land.");
} else {
  console.log(winnerArr);
}


// Exercise Level 2, 8.
let winnerArr1 = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia")) {
    winnerArr1.push(countries[i]);
  }
}
if (winnerArr1.length < 1) {
  console.log("These countries are without ia.");
} else {
  console.log(winnerArr1);
}


// Exercise Level 2, 9.
function mostChars() {
  let lengthArr = [];
  for (let i = 0; i < countries.length; i++) {
    lengthArr.push(countries[i].length);
  }
  console.log(lengthArr);
  console.log((Math.max(...lengthArr)));
  let wordIndex = lengthArr.indexOf(Math.max(...lengthArr));
  return countries[wordIndex];
}
console.log(mostChars());


// Exercise Level 2, 10.
function char5() {
  let winnerArr = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
      winnerArr.push(countries[i]);
    }
  }
  return winnerArr;
}
console.log(char5());


// Exercise Level 2, 11.
function longestWord(arr) {
  let lengthArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArr.push(arr[i].length);
  }
  let longestWordIndex = lengthArr.indexOf(Math.max(...lengthArr));
  return arr[longestWordIndex];
}
console.log("longest word: " + longestWord(webTechs));


// Exercise Level 2, 12.
function n12(arr){
  let all1 = [];
  for (let i = 0; i < arr.length; i++) {
    let singleArr = [arr[i], arr[i].length];
    all1.push(singleArr);
  }
  return all1;
}
console.log(n12(webTechs));


// Exercise Level 2, 13.
function MERN() {
  const mernStack = ["MongoDB", "Express", "React", "Node"];
  let acronym = "";
  for (let i = 0; i < mernStack.length; i++) {
    acronym = acronym + mernStack[i].charAt(0).toUpperCase();
  }
  return acronym;
}
console.log(MERN());


// Exercise Level 2, 14.
let arr1 =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let x of arr1) {
  console.log(x);
}


// Exercise Level 2, 15.
function reverseFruits() {
  let fruits = ['banana', 'orange', 'mango', 'lemon'];
  let zwischenspeicher = fruits.slice();
  let fruits2 = [];
  for (let i = 0; i < zwischenspeicher.length; i++) {
    let saveLast = fruits.pop();
    fruits2.push(saveLast);
  }
  return fruits2;
}
console.log(reverseFruits());


// Exercise Level 2, 15.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
const allStack = fullStack[0].concat(fullStack[1]);
for (let x of allStack) {
 console.log( x.toUpperCase());
}


// Exercise Level 3
let countriesCopy = cts.slice();
let sortedCountries = cts.slice().sort();
let arr3 = [];
for (let i = 0; i < sortedCountries.length; i++) {
  if (sortedCountries[i].includes("land")) {
    arr3.push(sortedCountries[i]);
  } 
}
console.log(arr3);
let arr4 = [];
for (let i = 0; i < countriesCopy.length; i++) {
  if (countriesCopy[i].includes(" ")) {
    arr4.push(countriesCopy[i]);
  }
}
console.log("Countries with two or more words:", arr4);