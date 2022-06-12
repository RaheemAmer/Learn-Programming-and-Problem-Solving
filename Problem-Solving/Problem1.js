// fizz buzz
// write a program that prints each number from 1 to 20 on a new line

// for each multiple of 3, print fizz instead of number
// for ach multiple of 5, prit buzz instead of number
// for numbers which are not multiples of 3, 5 or both(15) print fizzbuzz instead of the number 
// -----------------------------
// for loop
// initialization -> set counter to 1
// break when counter reaches 20
// increment counter by 1

// 4 conditions using if
// if number MOD 15 === 0
//     print 'FizzBuzz'
// ELSE IF number MOD 3 ===0
//     print 'Fizz'
// ELSE IF number MOD 5 ===3
//     print 'Buzz'
// Else 
//     print number

for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
