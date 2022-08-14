// الجمع التسلسلي

// قم بكتابة دالة function تستقبل عدد صحيح integer. تقوم الـدالة بجمع جميع الأعداد من 1 إلى الرقم الذي تم تمريره وإرجاع النتيجة.

function number_sum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}
number_sum(3);