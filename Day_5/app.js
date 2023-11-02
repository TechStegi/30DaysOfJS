
// 1.4

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const first = arr[0];
const middle = arr[parseInt(arr.length / 2)];
const last = arr[arr.length - 1];
console.log(first, middle, last);


// 1.14
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let companiesArr = companies.split(', ');
console.log(companiesArr);

let filter = [];
for (let x in companiesArr) {
    let match = companiesArr[x].match(/o/gi);
    if (match) {
        if (match.length > 1) {
            filter.push(companiesArr[x]);
        }
    }
}

console.log(filter);