
// 1. 
// const base = parseInt(prompt("Enter base in meter"));
// const height = parseInt(prompt("Enter height in meter"));
// let area = 0.5 * base * height;
// console.log(`The area of the triangle is ${area}m`);


// 2.
// const sideA = parseInt(prompt("Enter side a: "));
// const sideB = parseInt(prompt("Enter side b: "));
// const sideC = parseInt(prompt("Enter side c: "));
// let perimeter = sideA + sideB + sideC;
// console.log(`The perimeter of the triangle is ${perimeter}`);


// 3. 
// const length = parseInt(prompt("Enter width: "));
// const width = parseInt(prompt("Enter height: "));
// let rectArea = length * width;
// let rectPerimeter = 2 * (length + width);
// console.log(`The perimeter of the rectangle is ${perimeter} and the area is ${rectArea}`);


// 4.
// let radius = parseInt(prompt("Enter radius: "));
// let circleArea = 3.14 * radius ** 2;
// let circumference = 2 * 3.14 * radius;
// console.log(`The area of the circle is ${circleArea} and the circumference is ${circumference}`);


// 5.
let x;
let H = 2 * x - 2
let slopeH = 2
console.log("5. " + slopeH);
// 0 = 2x-2
// 2x = 2
// x = 1
const xIntercept = 1;

//y = 2(0) - 2
// y = -2
const yIntercept = 2;

// 6.
// function point1(x1, y1) {
//     return { x: x1, y: y1 };
// }

// function point2(x2, y2) {
//     return { x: x2, y: y2 };
// }

// function calculateSlope(point1, point2) {
//     const m = (point2.y - point1.y) / (point2.x - point1.x);
//     return m;
// }
// console.log(calculateSlope(point1(2, 2), point2(6, 10)));


// 7. 
// The slope of the tasks 5) and 6) are the same: m=2


// 8. 
const y = x ** 2 + 6 * x + 9;
// 0 = x**2 + 6x + 9
// --> x1 = .. 
// --> x2 = ...

// 9.
// const hoursPrompt = parseInt(prompt("Enter hours: "));
// const rate = parseInt(prompt("Enter rate per hour: "));
// console.log(`Your weekly earning is ${hoursPrompt * rate}$`);

// 10.
// let gitName = "TechStegi";
// gitName.length > 7 ? console.log("Your name is long.") : console.log("Your name is short.");


// 11.
// let firstName2 = 'Asabeneh'
// let lastName2 = 'Yetayeh'
// firstName2.length > lastName2.length ? console.log("Your first name, Asabeneh is longer than your family name, Yetayeh") : console.log("Something went wrong.");

// 12. 
// let myAge = 250
// let yourAge = 25
// myAge.length > yourAge.length ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`I am ${yourAge - myAge} years older than you.`);

// 13.
// let dateNow = new Date();
// let birthY = parseInt(prompt("Enter birth year: "));
// let ageNow = dateNow.getFullYear() - birthY;
// ageNow >= 18 ? console.log(`You are ${ageNow}. You are old enough to drive.`) : console.log(`You are ${ageNow}. You will be allowed to drive in ${18 - ageNow} years.`);20020100

// 14.
// const livingYears = parseInt(prompt("Enter number of years you live: "));
// const seconds = livingYears * 365 * 24 * 60 * 60;
// console.log(`You lived ${seconds} seconds.`)

// 15.
const date15 = new Date();
const year = date15.getFullYear();
const monthDay = date15.getDate().toString().padStart(2, '0');
const month = (date15.getMonth() + 1).toString().padStart(2, '0');
const hour = date15.getHours().toString().padStart(2, '0');
const minutes = date15.getMinutes().toString().padStart(2, '0');
console.log(`
${year}-${month}-${monthDay} ${hour}:${minutes}
${monthDay}-${month}-${year} ${hour}:${minutes}
${monthDay}/${month}/${year} ${hour}:${minutes}
`);


// 16.
// --> see 15.i.
