/**
 * @param {number[]} nums
 * @return {boolean}
*/

// 217. Contains Duplicate
// Easy

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = function (nums) {
    if (nums.length !== new Set(nums).size) {
        return true;
    }

    return false;
};

// Check if an Array contains Duplicates #

//      To check if an array contains duplicates:
//     Pass the array to the Set constructor and access the size property on the Set.
//     Compare the size of the Set to the array's length.
//     If the Set contains as many values as the array, then the array doesn't contain duplicates.
//      We used the Set object to remove all duplicates from the array.
//      The Set object stores only unique values and removes all duplicates automatically.