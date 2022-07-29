// الأعداد الأولية بين قيمتين

// قم بكتابة الدالة function تستقبل عددين، كلاهما عدد صحيح، ثم تقوم الدالة بإرجاع مصفوفة تحتوي على جميع الأرقام الأولية بين هذين الرقمين.

function getPrimesBetween(a, b) {
    arr = [];
    for (i = a; i < b; i++) {
        for (let j = 2; j * j <= i; j++) {
            if (i % j !== 0) {
                arr.push(arr[i]);
            }
        }
    }
    return arr;
}
getPrimesBetween(1, 10);

//not working