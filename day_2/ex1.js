
let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log("Substring " + challenge.substring(3, 7));
console.log(challenge.slice(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(companies.split(','));
console.log("12. " + challenge.replace("JavaScript", "Python"));
console.log("13. " + challenge.charAt(15));
console.log("14. " + challenge.charCodeAt("J"));
console.log("15. " + challenge.indexOf("a"));
console.log("16. " + challenge.lastIndexOf("a"));

let sentence = "You cannot end a sentence because because because is a conjunction";

console.log("17. " + sentence.indexOf("because"));
console.log("18. " + sentence.lastIndexOf("because"));
console.log("19. " + sentence.search("because"));
console.log("20. " + sentence.trim());
console.log("21. " + challenge.startsWith("30 D"));
console.log("22. " + challenge.endsWith("cript"));
console.log("23. " + challenge.match(/a/g));

let first = "30 Days of";
let second = "JavaScript";
console.log("24. " + first.concat(" ", second));
console.log("25. " + challenge.repeat(2).replace("t3", "t 3"));




