// الجمع التراكمي

// قم بكتابة دالة function تستقبل مصفوفة array من نوع integer وتقوم بإرجاع حاصل جمع جميع الأعداد و عدد العناصر في الـ مصفوفة array.

function cumulative_addition(elements_array) {
    var sum = 0;
    for (i = 0; i < elements_array.length; i++) {
        sum += elements_array[i];
    }
    var list = [];
    list.push(sum);
    list.push(elements_array.length);
    return list;
}