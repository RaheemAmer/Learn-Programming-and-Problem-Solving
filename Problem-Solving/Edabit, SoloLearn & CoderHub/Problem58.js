// البحث عن العنصر في المصفوفة

// قم بكتابة دالة function تستقبل قيمة نصية وحرف. تقوم الدالة بالبحث عن أول index مطابق للحرف المُدخل وإرجاع رقم index الخاص بذلك الحرف. تقوم الدالة بإرجاع القيمة -1 في حال عدم وجود تطابق.

function search(word, character) {
    let position = word.search(character);
    return position;
}