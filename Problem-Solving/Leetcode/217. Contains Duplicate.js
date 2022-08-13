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