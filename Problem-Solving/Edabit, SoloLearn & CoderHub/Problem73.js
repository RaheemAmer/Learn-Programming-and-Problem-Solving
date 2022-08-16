
// مطابقة مصفوفتين

// قم بكتابة دالة function تستقبل مصفوفتين arrays من نوع string وتقوم بإرجاع قيمة true أو false اعتمادا على مطابقة جميع الكلمات في المصفوفة array2 مع الكلمات الموجودة في الـمصفوفة array1.

function match_arrays(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every(element => {
            if (array2.includes(element)) {
                return true;
            }

            return false;
        });
    }

    return false;
}
