// مقارنة أطول عدد خانات لنصين

// قم بكتابة دالة function تقوم باستقبال قيمتين نصية string. تقوم هذه الدالة بمقارنة عدد الخانات النصية لكل من هذين المدخلين ومن ثم تقوم بإرجاع العدد الأكبر لعدد الخانات.

function returnStringLetters(string1, string2) {
    if (string1.length > string2.length) {
        return string1.length;
    }
    else {
        return string2.length;
    }
}