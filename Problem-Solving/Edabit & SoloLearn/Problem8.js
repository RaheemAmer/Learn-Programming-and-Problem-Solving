// Write pseudo code that reads in three numbers and writes them all in sorted order.
let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let num3 = Number(prompt("Enter the third number"));
let sorted = [num1, num2, num3].sort((a, b) => a - b);
alert(sorted);