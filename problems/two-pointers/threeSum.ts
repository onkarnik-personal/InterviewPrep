// Problem: 3Sum
// https://leetcode.com/problems/3sum/
// Difficulty: Medium
// Pattern: Two Pointers (sort + fix + two pointers)

// Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]]
// such that i != j != k and nums[i] + nums[j] + nums[k] == 0.
// The solution set must not contain duplicate triplets.
//
// Example 1:
//   Input:  nums = [-1, 0, 1, 2, -1, -4]
//   Output: [[-1, -1, 2], [-1, 0, 1]]
//
// Example 2:
//   Input:  nums = [0, 1, 1]
//   Output: []
//
// Example 3:
//   Input:  nums = [0, 0, 0]
//   Output: [[0, 0, 0]]
//
// Constraints:
//   - 3 <= nums.length <= 3000
//   - -10^5 <= nums[i] <= 10^5

function threeSum(nums: number[]): number[][] {
    const ans: number[][] = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                ans.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--
                l++;
                r-- 
            } else if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            }
        }
    }
    return ans;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));               // Expected: []
console.log(threeSum([0, 0, 0]));               // Expected: [[0,0,0]]
