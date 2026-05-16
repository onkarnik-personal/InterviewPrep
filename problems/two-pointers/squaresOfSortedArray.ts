// Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Difficulty: Easy
// Pattern: Two Pointers

// Given an integer array nums sorted in non-decreasing order, return an array
// of the squares of each number sorted in non-decreasing order.
//
// Example 1:
//   Input: nums = [-4,-1,0,3,10]
//   Output: [0,1,9,16,100]
//
// Example 2:
//   Input: nums = [-7,-3,2,3,11]
//   Output: [4,9,9,49,121]
//
// Constraints:
//   1 <= nums.length <= 10^4
//   -10^4 <= nums[i] <= 10^4
//   nums is sorted in non-decreasing order
//
// Follow up: O(n log n) is trivial — can you do it in O(n)?

function sortedSquares(nums: number[]): number[] {
    const res: number[] = Array.from({ length: nums.length});
    let l =0; let r=nums.length-1; let len = r;

    while(l<=r) {
        if(Math.abs(nums[l]) > Math.abs(nums[r])) {
            res[len] = Math.pow(nums[l],2);
            l++;
        } else {
            res[len] = Math.pow(nums[r],2);
            r--;
        }
        len--;
    }
    return res;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // Expected: [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Expected: [4, 9, 9, 49, 121]
console.log(sortedSquares([-1]));                // Expected: [1]
