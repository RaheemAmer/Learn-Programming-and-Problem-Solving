// تحديد نوع الرقم المدخل

// قم بكتابة دالة function تستقبل عدد صحيح integer، تقوم الدالة بإرجاع القيمة odd في حال كان العدد فردي، والقيمة even في حال العدد زوجي.


function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return 'even';
    }
    else
        return 'odd';
}
