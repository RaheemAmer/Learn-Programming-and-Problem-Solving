
// مطابقة مصفوفتين

// قم بكتابة دالة function تستقبل مصفوفتين arrays من نوع string وتقوم بإرجاع قيمة true أو false اعتمادا على مطابقة جميع الكلمات في المصفوفة array2 مع الكلمات الموجودة في الـمصفوفة array1.



function match_arrays(array1, array2) {
    return Array.isArray(array1) &&
        Array.isArray(array2) &&
        array1.length === array2.length &&
        array1.every((val, index) => val === array2[index]);
}
match_arrays(['hello', 'word2'], ['hello', 'there', 'word2']);