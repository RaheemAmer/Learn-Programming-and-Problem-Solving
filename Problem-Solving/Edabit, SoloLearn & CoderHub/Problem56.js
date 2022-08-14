// حساب تكرار حرف

// قم بكتابة دالة function تستقبل متغيرين الأول قيمة نصية من نوع string ، والثاني حرف من نوع string ، تقوم الدالة function بحساب تكرار الحرف المدخل من القيمة النصية ، ثم تقوم الدالة بارجاع النتيجة من نوع 

function count_char(sentence, ch) {
    var counter = 0;
    for (i = 0; i < sentence.length; i++) {
        if (sentence[i] === ch) {
            counter++;
        }
    }
    return counter;
}