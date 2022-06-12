// Write pseudo code that performs the following: Ask a user to enter a number. If the number is between 0
// and 10, write the word blue. If the number is between 10 and 20, write the word red. if the number is between
// 20 and 30, write the word green. If it is any other number, write that it is not a correct color option

let number = prompt("Enter a number");
if (number >= 0 && number <= 10) {
    console.log("blue");
}
else if (number >= 10 && number <= 20) {
    console.log("red");
}
else if (number >= 20 && number <= 30) {
    console.log("green");
}
else {
    console.log("not a correct color option");
}
