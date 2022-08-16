// تحديد العملية الرياضية

// قم بكتابة دالة function تستقبل متغيرين من نوع integer ، تقوم الدالة ـ function باختيار العملية الرياضية المناسبة التي تؤدي للرقم 24 ، ثم قم بارجاع النتيجة من نوع string حيث توضح نوع العملية الرياضية

//    "divided"
//    "multiplied"
//    "added"
//    "subtracted"
//    "None"


function operation(num1, num2) {
    if (num1 + num2 === 24) {
        return 'added';
    }
    else if (num1 * num2 === 24) {
        return 'multiplied';
    }
    else if (num1 - num2 === 24 || num2 - num1 === 24) {
        return 'subtracted';
    }
    else if (num1 / num2 === 24 || num2 / num1 === 24) {
        return 'divided';
    }
    else {
        return 'None';
    }
}
