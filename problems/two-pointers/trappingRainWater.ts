// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
// Difficulty: Hard
// Pattern: Two Pointers

// Given n non-negative integers representing an elevation map where the width
// of each bar is 1, compute how much water it can trap after raining.
//
// Example 1:
//   Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
//   Output: 6
//
// Example 2:
//   Input: height = [4,2,0,3,2,5]
//   Output: 9
//
// Constraints:
//   n == height.length
//   1 <= n <= 2 * 10^4
//   0 <= height[i] <= 10^5

function trap(height: number[]): number {
    let l = 0; let r = height.length -1;
    let maxLeft = height[l]; let maxRight = height[r];
    let res = 0;
    while(l < r) {
        if(maxLeft < maxRight) {
            l++;
            maxLeft = Math.max(maxLeft, height[l]);
            res += maxLeft - height[l]; 
        } else {
            r--;
            maxRight = Math.max(maxRight, height[r]);
            res += maxRight - height[r]
        }
    }

    return res;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected: 6
console.log(trap([4, 2, 0, 3, 2, 5]));                    // Expected: 9
