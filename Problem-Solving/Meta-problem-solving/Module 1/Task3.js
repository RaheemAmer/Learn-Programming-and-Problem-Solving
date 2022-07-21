// ### Complete the following steps to create: Are You Old Enough?

// Answer:

var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
}
else if (age <= 65 && age >= 18) {
    console.log("Each month you get a salary");
}
else if (age < 18) {
    console.log("You get an allowance");
}
else {
    console.log("The value of the age variable is not numerical");
}


// ### Code the *days of the week* program as a switch statement



var day = "sunday";
switch (day) {
    case "monday":
        console.log("Do something");
        break;
    case "tuesday":
        console.log("Do something");
        break;
    case "wednesday":
        console.log("Do something");
        break;
    case "thursday":
        console.log("Do something");
        break;
    case "friday":
        console.log("Do something");
        break;
    case "saturday":
        console.log("Do something");
        break;
    case "sunday":
        console.log("Do something");
        break;
    default:
        console.log("There is no such day");
        break;
}



for (var i = 0; i < 10; i++) {
    console.log(i);
}


// While

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}




// ** Exercise: Repetitive tasks with loops **

// Task1

for (var i = 0; i < 6; i++) {
    console.log(i);
}
console.log("Counting completed");


// Task2

for (var i = 6; i > 0; i--) {
    console.log(i);
}
console.log("Countdown finished!");


// Task3

var i = 0;
while (i < 6) {
    console.log(i);
    i++;
}
console.log("Countdown completed!");


// Task4


var i = 5;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("Countdown finished!");


// Task5
var counter = 2018;
while (counter <= 2022) {
    console.log(counter);
    counter++;
}

// Nested loops
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 6; j++) {
        console.log("Week" + i + "Day" + j);
    }
}

// Exercise: Working with conditionals and loops
// Exercise 1
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    }
    else if (i == 2) {
        console.log("Silver medal");
    }
    else if (i == 3) {
        console.log("Bronze medal");
    }
    else {
        console.log(i);
    }
}

// Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
            break;
    }
}