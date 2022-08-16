// إضافة كلمة داخل نص

// قم بكتابة دالة function تستقبل قيمتين الأولى عدد صحيح integer والثانية قيمة نصية string. تقوم الدالة بإضافة كلمة Hi أو Bye على الاسم المدخل بحيث Hi =1 و Bye= 0.


function say_hi_bye(name, num) {
    var greetings;
    if (num === 0) {
        greetings = "Bye";
        return greetings + " " + name;
    }
    else if (num === 1) {
        greetings = "Hi";
        return greetings + " " + name;
    }
}
