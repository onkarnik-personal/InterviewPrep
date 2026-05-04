// Move Zeroes
// https://leetcode.com/problems/move-zeroes/
// Difficulty: Easy
// Pattern: Two Pointers

// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements. Do this in-place.
//
// Example 1:
//   Input: nums = [0,1,0,3,12]
//   Output: [1,3,12,0,0]
//
// Example 2:
//   Input: nums = [0]
//   Output: [0]
//
// Constraints:
//   1 <= nums.length <= 10^4
//   -2^31 <= nums[i] <= 2^31 - 1
//
// Note: You must do this in-place without making a copy of the array.

function moveZeroes(nums: number[]): void {
    let x = 0; let y = 0

    while(y < nums.length -1) {
        if(nums[x] === 0) {
            while(nums[y]===0 && y < nums.length -1) y++;
            // swap numbers
            const temp = nums[x]
            nums[x] = nums[y]
            nums[y] = temp
        }
        x++;
        if(y < x) y = x
    }
}

const a = [0, 1, 0, 3, 12];
moveZeroes(a);
console.log(a); // Expected: [1, 3, 12, 0, 0]

const b = [0];
moveZeroes(b);
console.log(b); // Expected: [0]

const c = [1, 0, 0, 2, 3];
moveZeroes(c);
console.log(c); // Expected: [1, 2, 3, 0, 0]
