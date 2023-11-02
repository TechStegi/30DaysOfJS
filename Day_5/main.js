
import countryArr from "./countries.js";

// 2.2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text.replace(/.,/g, "");
const words = text.split(' ');
console.log(words)
console.log(words.length)

// 2.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const shopArr = shoppingCart;
shopArr.unshift("Meat");
shopArr.push("Sugar");
shopArr.pop("Honey");
let teaIndex = shopArr.indexOf("Tea");
shopArr[teaIndex] = "Green Tea";

console.log(shoppingCart);

// 2.4
if (countryArr.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countryArr.push("Ethiopia");
    countryArr.sort();
}

// 2.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)


// 3.1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
const firstMinAge = ages[0];
const firstMaxAge = ages[ages.length - 1];
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
console.log(minAge, maxAge);

let medianAge;
if (ages.length % 2 === 0) {
    let firstMiddleItem = ages[ages.length / 2 - 1];
    let secondMiddleItem = ages[ages.length / 2];
    medianAge = (firstMiddleItem + secondMiddleItem) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}
console.log("Median age " + medianAge);

let agesSum = 0;
for (let x in ages) {
    agesSum = agesSum + ages[x];
}
const avgAge = agesSum / ages.length;
console.log("Average age " + avgAge);

const agesRange = maxAge - minAge;
console.log("Range of the Ages: " + agesRange);

const value1 = minAge - avgAge;
const value2 = maxAge - avgAge;
const calc = Math.abs(value2 - value1);
console.log("Compare 2 values: " + calc);

const countrySlice = countryArr.slice(0, 11);
console.log("3.1.1 " + countrySlice);

// find middle country(ies) in the countries array

function findMiddleCountry() {
    const middleItemIndex = Math.floor(countryArr.length / 2);
    if (countryArr.length % 2 === 0) {
        const firstMiddleCountry = countryArr[middleItemIndex - 1];
        const secondMiddleCountry = countryArr[middleItemIndex];
        return [firstMiddleCountry, secondMiddleCountry];
    } else {
        const singleMiddleCountry = countryArr[middleItemIndex];
        return singleMiddleCountry;
    }
}
console.log(findMiddleCountry());


let countries1 = [];
let countries2 = [];
let calc1 = Math.ceil(countryArr.length / 2);
let calc2 = countryArr.length / 2;
if (countryArr.length % 2 === 0) {
    countries1 = countryArr.slice(0, calc2);
    countries2 = countryArr.slice(calc2 + 1);
    console.log(countries1);
    console.log(countries2);
} else {
    countries1 = countryArr.slice(0, calc1);
    countries2 = countryArr.slice(calc1);
    console.log(countries1);
    console.log(countries2);
}
