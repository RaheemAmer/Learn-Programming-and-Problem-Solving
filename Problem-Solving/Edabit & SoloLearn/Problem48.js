// المتوسط الحسابي

// قم بكتابة دالة function تستقبل مصفوفة array مكونة من أعداد صحيحة integer. تقوم هذه الدالة بإرجاع قيمة المتوسط الحسابي لهذه الأعداد.

function average(values) {
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    return avg;
}