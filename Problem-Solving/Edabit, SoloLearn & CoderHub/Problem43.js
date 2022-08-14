
// قم بكتابة دالة function تستقبل مصوفتان مكونة من اعداد صحيحة ومرتبة، تقوم هذه function بدمج المصفوفتان داخل مصفوفة واحدة بشكل مرتب ومن ثم تقوم بإرجاعها.

function mergeAndOrder(array1, array2) {
    let SortedArr = (array1.concat(array2)).sort();
    return (SortedArr);
}
mergeAndOrder([1, 2], [6, 3]);