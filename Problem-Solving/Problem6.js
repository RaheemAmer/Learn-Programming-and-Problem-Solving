// Write pseudo code to print all multiples of 5 between 1 and 100 (including both 1 and 100)
for (i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
    else {
        console.log("not a multiple of 5");
    }
}