// نوع القيمة المدخلة

// قم بكتابة دالة function تستقبل قيمة نصية string. تقوم الـدالة بتحديد نوع القيمة الموجودة داخل القيمة النصية ما إذا كانت string أو integer أو float وإرجاع نوع القيمة.

function input_type(value) {
    if (typeof value == "string")
        return 'string';
    else if (value % 1 != 0)
        return 'double';
    else
        return 'integer';
}
input_type(1);