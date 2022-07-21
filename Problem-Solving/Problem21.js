//Buggy Code (Part 7)
//Mubashir wants to swap two given numbers! -It is not returning the right values. Can you help him fix it?
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b]
}