// Write pseudo code that will perform the following.
// a) Read in 5 separate numbers.
// b) Calculate the average of the five numbers.
// c) Find the smallest (minimum) and largest (maximum) of the five entered numbers.
// d) Write out the results found from steps b and c with a message describing what they are
let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter another number"));
let num3 = Number(prompt("Enter another number"));
let num4 = Number(prompt("Enter another number"));
let num5 = Number(prompt("Enter another number"));
let avg = (num1 + num2 + num3 + num4 + num5) / 5;
alert("The average of the five numbers is " + avg);
let min = Math.min(num1, num2, num3, num4, num5);
let max = Math.max(num1, num2, num3, num4, num5);
alert("The max of the five numbers is " + max);
alert("The min of the five numbers is " + min);

