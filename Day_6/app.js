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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


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
let n3 = 5;
let tc = 0
for (let i = 2; i <= n3; i++) {
  for (let j = 2; j <= n3; j++) {
    if (i % j == 0) {
      tc++;
    } 
}
  if (tc = 1) {
    console.log("primzahl haha", i);
    }
}
