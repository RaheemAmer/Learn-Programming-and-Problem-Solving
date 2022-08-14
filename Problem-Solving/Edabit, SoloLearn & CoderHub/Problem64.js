// التحقق من النصوص في المصفوفة

// قم بكتابة دالة function تستقبل مصفوفة array من نوع string. تقوم الدالة بالتحقق من القيم المتشابهة داخل المصفوفة، حيث تقوم الدالة بإرجاع القيمة true إذا كانت القيم متساوية وإرجاع القيمة false إذا كانت غير ذلك.


// To check if all values in an array are equal:

//     Use the Array.every() method to iterate over the array.
//     Check if each array element is equal to the first one.
//     The every method only returns true if the condition is met for all array elements.

function stringCheck(value) {
    const result = value.every(element => {
        if (element === value[0]) {
            return true;
        }
    });
    return result;
}