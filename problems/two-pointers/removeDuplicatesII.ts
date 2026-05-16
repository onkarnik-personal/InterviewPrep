// Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Difficulty: Medium
// Pattern: Two Pointers

// Given a sorted array nums, remove duplicates in-place such that each unique
// element appears at most twice. Return the number of valid elements k.
// The first k elements of nums should hold the result.
//
// Example 1:
//   Input: nums = [1,1,1,2,2,3]
//   Output: k = 5, nums = [1,1,2,2,3,_]
//
// Example 2:
//   Input: nums = [0,0,1,1,1,1,2,3,3]
//   Output: k = 7, nums = [0,0,1,1,2,3,3,_,_]
//
// Constraints:
//   1 <= nums.length <= 3 * 10^4
//   -10^4 <= nums[i] <= 10^4
//   nums is sorted in non-decreasing order

function removeDuplicates(nums: number[]): number {

}

const a = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(a), a); // Expected: 5 [1,1,2,2,3,_]

const b = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(b), b); // Expected: 7 [0,0,1,1,2,3,3,_,_]
