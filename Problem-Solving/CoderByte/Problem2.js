//First Factorial
//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
//https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/

function FirstFactorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * FirstFactorial(num - 1));
    }
}

console.log(FirstFactorial(readline()));