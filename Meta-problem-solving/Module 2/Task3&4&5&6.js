// Add an if statement inside the for loop whose condition works as follows:

//Access each of the letters inside the passed in word using the counter variable, with word[i].

//Check if the current word[i] is equal to the value of match.

function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        console.log("Index " + i + " ,The letter is " + word[i]);
        if (match === word.charAt(i)) {
            console.log(`the current word: ${word[i]} is equal to the value of match: ${i}`);
        }
        else {
            console.log(`The value of match: ${i} hasn't been matched`);
        }
    }
}
letterFinder("test", "t");