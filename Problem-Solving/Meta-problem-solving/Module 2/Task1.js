//Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        if (match === word.charAt(i)) {
            console.log("The letter position is " + i);
            break;
        }
    }
}
letterFinder("raheem", "e");