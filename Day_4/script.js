

// Ex. Level 2: 1.
// let number = parseInt(prompt("Enter number: "));
// number % 2 === 0 ? console.log("Number is even") : console.log("Number is uneven")

// Ex. Level 2: 2.
// let season;
// let month = prompt("Enter month: ");
// switch (month.toLowerCase()) {
//     case 'september':
//     case 'october':
//     case 'november':
//         season = "Autumn"
//         break;
//     case 'december':
//     case 'january':
//     case 'february':
//         season = "Winter"
//         break;
//     case 'march':
//     case 'april':
//     case 'may':
//         season = "Spring"
//         break;
//     case 'june':
//     case 'july':
//     case 'august':
//         season = "Summer"
//         break;
//     default:
//         console.log("Please enter a valid month.");
//         month = prompt("Enter month: ");
// }
// console.log(season);



// Ex. Level 2: 3.

// Ask the user for input
const userInput = prompt("What is the day today?");

if (userInput) {
    // Convert the input to lowercase to handle different letter cases
    const userDay = userInput.toLowerCase();
    let day = userDay.charAt(0).toUpperCase() + userDay.slice(1);

    // Check if it's a workday (Monday to Friday)
    if (userDay === "monday" || userDay === "tuesday" || userDay === "wednesday" || userDay === "thursday" || userDay === "friday") {
        console.log(`${day} is a working day.`);
    } else if (userDay === "saturday" || userDay === "sunday") {
        console.log(`${day} is a weekend day.`);
    } else {
        console.log("Invalid input. Please enter a valid day of the week.");
    }
} else {
    console.log("No input provided. Please enter a day of the week.");
}
