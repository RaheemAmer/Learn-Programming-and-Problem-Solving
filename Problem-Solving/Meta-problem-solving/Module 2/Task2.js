//Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

function recursion(word) {
    for (i = 0; i < word.length; i++) {
        console.log(i, word[i]);
    }

}
recursion("raheem");
