
// قم بكتابة دالة function تستقبل مصوفتان مكونة من اعداد صحيحة ومرتبة، تقوم هذه function بدمج المصفوفتان داخل مصفوفة واحدة بشكل مرتب ومن ثم تقوم بإرجاعها.

function mergeAndOrder(array1, array2) {
    const arrSorted1 = array1.sort();
    const arrSorted2 = array2.sort();
    const SortedArr = arrSorted1.concat(arrSorted2);
    console.log(SortedArr);
}
mergeAndOrder([1, 2], [6, 3]);