// جمع الأعداد الفردية في مصفوفة

// قم بكتابة دالة function تستقبل مصفوفة من نوع integer، تقوم الدالة بجمع الأعداد الفردية فقط وإرجاع النتيجة كعدد صحيح integer.

function sumOdd(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}