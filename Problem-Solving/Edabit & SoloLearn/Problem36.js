// مساحة الدائرة

// قم بكتابة دالة function تستقبل عدد عشري يُمثل نصف قطر الدائرة. تقوم الدالة بحساب مساحة الدائرة وإرجاع النتيجة.

// ملاحظة: قم بتعويض الثابت pi بالقيمة 3.14.
//A=πr2
function find_circle_area(radius) {
    pi = 3.14;
    return area = pi * (Math.pow(radius, 2));
}
find_circle_area(10);