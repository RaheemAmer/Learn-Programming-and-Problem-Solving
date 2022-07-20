function get_mean(arr) {
    var sum = 0;
    // write your code here
    number = arr.length;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    mean = sum / number;
    console.log(mean);
}
get_mean([6, 7, 8, 9]);