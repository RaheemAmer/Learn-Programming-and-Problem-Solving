// Write pseudo code that will calculate a running sum. A user will enter numbers that will be added to the
// sum and when a negative number is encountered, stop adding numbers and write out the final result

let sum = 0;
let num = Number(prompt("Enter a number"));
while (num >= 0) {
    sum += num;
    num = Number(prompt("Enter a number"));
}
alert(sum);