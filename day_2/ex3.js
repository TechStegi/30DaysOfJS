
// 1. 
let loveSent = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log("1. " + loveSent.match(/love/gi).length);

// 2. 
let sent1 = 'You cannot end a sentence with because because because is a conjunction';
console.log("2. " + sent1.match(/because/g).length);

// 3. 
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let replace = sentence.replace(/[%$@&#;]/g, "");
console.log("3. " + replace);


// 4. 
let sent2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = sent2.match(/\d+/g);
console.log("4.");
console.log(numbers);
for (let x in numbers) {
    numbers[x] = parseInt(numbers[x]);
}
console.log(numbers);
console.log((numbers[0] + numbers[2]) * 12 + numbers[1]);
