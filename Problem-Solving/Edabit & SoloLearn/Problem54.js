// حذف آخر حرف

// قم بكتابة دالة function تستقبل نص من نوع string. تقوم الدالة بحذف آخر حرف من النص وإرجاع القيمة النصية بعد الحذف.

function deleteLastChar(word) {
    return word.slice(0, word.length - 1);
}