// نوع القيمة المدخلة

// قم بكتابة دالة function تستقبل قيمة نصية string. تقوم الـدالة بتحديد نوع القيمة الموجودة داخل القيمة النصية ما إذا كانت string أو integer أو float وإرجاع نوع القيمة.


function input_type(value) {
    if (value === +value && value === (value | 0)) {
        return 'integer';
    }
    else if (value === +value && value !== (value | 0)) {
        return 'float';
    }
    else {
        return 'string';
    }
}
