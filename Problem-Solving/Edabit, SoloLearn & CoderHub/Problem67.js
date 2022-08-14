// جمع الأعداد الزوجية في مصفوفة

// قم بكتابة دالة function تستقبل مصفوفة من نوع integer، تقوم الدالة بجمع الأعداد الزوجية فقط وإرجاع النتيجة كعدد صحيح integer.


function sum_even(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
