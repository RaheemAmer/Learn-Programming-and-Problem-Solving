// العناصر المتشابهة في المصفوفة

// قم بكتابة دالة function تستقبل مصفوفة array من نوع integer. تقوم الدالة بإرجاع العناصر المتشابهة في المصفوفة.


function get_duplicate_elements(arr) {
    const set = new Set(arr);
    const duplicates = arr.filter(item => {
        if (set.has(item)) {
            set.delete(item);
        }
        else {
            return item;
        }
    });
    return (duplicates);
}


