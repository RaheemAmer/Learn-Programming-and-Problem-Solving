// حذف العناصر المتشابهة في المصفوفة

// قم بكتابة دالة function تستقبل مصفوفة array من نوع integer، تقوم الـدالة function بحذف العناصر المتشابهة في نفس الـمصفوفة array ثم قم بارجاع المصفوفة array من نوع integer.

function remove_duplicate(arr) {
    let uniqueChars = [...new Set(arr)];
    return uniqueChars;
}