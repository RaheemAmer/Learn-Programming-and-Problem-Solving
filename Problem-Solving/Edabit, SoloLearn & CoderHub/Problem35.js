// عدد زوجي أم فردي

// قم بكتابة دالة function تستقبل عدد من نوع integer، تقوم الدالة function بإرجاع قيمة من نوع string توضّح ما إذا كان العدد زوجي أو فردي

function odd_even(number) {
    if (number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

odd_even(5);