

// 3.1
let monthInput = prompt("Enter a month: ");
const monthInputLowerCase = monthInput.toLowerCase();
const finalMonth = monthInputLowerCase.charAt(0).toUpperCase() + monthInputLowerCase.slice(1);
switch (finalMonth) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${finalMonth} has 31 days.`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${finalMonth} has 30 days.`);
        break;
    case 'February':
        console.log(`${finalMonth} has 28 days. In 2024 February has 29 days, because this will be a leap year, as well as in 2028, 2032, etc. Every 4 years is a leap year if the year is divisible by 4. If the year is also divisible by  `); // 3.2 leap year considered?!
        break;
    default:
        console.log("Please enter a valid month");
        setTimeout(() => monthInput = prompt("Enter a month: "), 2000);
}

