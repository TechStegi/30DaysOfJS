function sumAllNums() {
 console.log(arguments);
}

sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// # Exercise 2, Nr 3
function printArray(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i])
    }
    for (el in a){
        console.log(el)
    }
    for (el of a) {
        console.log(el)
    }
}


printArray(["hello", "lappen", 2, "am", 15])


function addItem(item) {
    arr = ["hello", "yes", 15]
    arr.push(item)
    return arr
}

console.log(addItem(19))


// Exercise 3 Nr 1
const prompt = require('prompt-sync')();

// charInput = parseInt(prompt("How much characters should the id have: "));
// idInput = parseInt(prompt("Number of id's to be generated: "));

function userIdGeneratedByUser(charCount, idCount) {
    let allIds = []
    for (let j = 0; j < idCount; j++) {
        let id = "";
        for (let i = 0; i < charCount; i++) {
            let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,;?!-+~"
            let rndmIndex = Math.floor(Math.random()*(chars.length))
            id = id + chars[rndmIndex];
        }
        allIds.push(id)
        id = ""
    }
    for (el of allIds) {
        console.log(el)
    }
}

userIdGeneratedByUser(7, 2)


function shuffleArray(arr) {
    arr.sort(() => 0.5 - Math.random())
    return arr
}

console.log(shuffleArray(["hello", "rndm", 21, 123, 35, 13, 5, "hi"]))


function isEmpty(arg) {
    return arg === undefined || arg === '' || arg === null
}
console.log(isEmpty(" "))


function sumOfArrayItems(...numbers) {
    s = 0
    for (let i = 0; i < numbers.length; i++) {
        s = s + numbers[i]
    }
    return s
}

console.log(sumOfArrayItems(1, 2, 3))

