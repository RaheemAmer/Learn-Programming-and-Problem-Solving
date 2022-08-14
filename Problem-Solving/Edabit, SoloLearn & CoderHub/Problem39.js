// حجم المخروط

// قم بكتابة دالة function تستقبل عددين عشريين يُمثلان نصف قطر شكل مخروطي قائم وإرتفاعه. تقوم الدالة بحساب حجم المخروط وإرجاع النتيجة.

// ملاحظة: قُم بتعويض الثابت pi بالقيمة 3.14.

function cone_volume(radius, height) {
    pi = 3.14;
    volume = pi * Math.pow(radius, 2) * height / 3;
    return volume;
}