// نصف قطر الدائرة

// قم بكتابة دالة function تستقبل عدد عشري موجب يُمثل محيط الدائرة. تقوم الـدالة بحساب نصف القطر وإرجاع نتيجته.

// ملاحظة: قم بتعويض الثابت pi بالقيمة 3.14.
// r = c/2*pi

function raduis(circumference) {
    pi = 3.14;
    radiusOfCircle = circumference / (2 * pi);
    return radiusOfCircle;
}