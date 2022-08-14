// متوسط المصفوفة

// قم بكتابة دالة function تستقبل مصفوفة array من نوع integer. تقوم الـدالة بحساب معدل متوسط المصفوفة وإرجاع النتيجة.

function get_mean(arr) {
    var sum = 0;
    number = arr.length;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    mean = sum / number;
    return (mean);
}