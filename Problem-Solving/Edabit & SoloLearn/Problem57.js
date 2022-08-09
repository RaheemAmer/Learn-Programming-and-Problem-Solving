// طباعة سلسلة من الأرقام

// قم بكتابة دالة function تستقبل عدد من نوع integer ، وتقوم الـدالة function بطباعة الأرقام من صفر إلى نفس العدد المدخل كقيمة نصية من نوع

function numbers_range(number) {
    var arr = [];
    for (i = 0; i < number; i++) {
        arr.push(i);
    }
    let text = arr.toString().replace(/,/g, " ");
    return text;
}