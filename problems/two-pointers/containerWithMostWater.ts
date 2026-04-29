// Problem: Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// Difficulty: Medium
// Pattern: Two Pointers

// Given an array height of n integers, find two lines that together with the
// x-axis form a container that holds the most water. Return the max area.
// Area = min(height[l], height[r]) * (r - l)
//
// Example 1:
//   Input:  height = [1,8,6,2,5,4,8,3,7]
//   Output: 49  (lines at index 1 (h=8) and index 8 (h=7): min(8,7) * 7 = 49)
//
// Example 2:
//   Input:  height = [1,1]
//   Output: 1
//
// Constraints:
//   - 2 <= n <= 10^5
//   - 0 <= height[i] <= 10^4

function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length -1;
    let dist = height.length -1;
    let max = 0
    while (l < r ) {
        const shorter = height[l] < height [r] ? height[l] : height[r];
        const area = shorter*dist;
        if(area > max) {
            max = area;
        }
        if(height[l] < height[r]){
            l++
        }else {
            r--
        }
        dist--;
    }
    return max;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1]));                // Expected: 1
