// Problem: Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Difficulty: Medium
// Pattern: Two Pointers

// Given a 1-indexed sorted array of integers, find two numbers that add up to target.
// Return their indices as [index1, index2] where index1 < index2.
// Each input has exactly one solution. You may not use the same element twice.
// Must use only constant extra space.
//
// Example 1:
//   Input:  numbers = [2,7,11,15], target = 9
//   Output: [1,2]  (numbers[0] + numbers[1] = 2 + 7 = 9)
//
// Example 2:
//   Input:  numbers = [2,3,4], target = 6
//   Output: [1,3]
//
// Example 3:
//   Input:  numbers = [-1,0], target = -1
//   Output: [1,2]
//
// Constraints:
//   - 2 <= numbers.length <= 3 * 10^4
//   - -1000 <= numbers[i] <= 1000
//   - numbers is sorted in non-decreasing order
//   - -1000 <= target <= 1000
//   - exactly one solution exists

import { runTests } from "../../utils/test";

function twoSumII(numbers: number[], target: number): number[] {
  for(let i=0; i < numbers.length -1; i++) {
    for(let j=i+1; j<numbers.length; j++){
      if (numbers[i] + numbers[j] === target) return [i+1, j+1]
    }
  }
  return [];
}

// faster one 
function twoSum(numbers: number[], target: number): number[] {
  let i =0; let j = numbers.length-1;
  while(i<j) {
    const sum = numbers[i] + numbers[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++
    } else {
      return [i+1,j+1];
    }
  }
  return [];
}

const testCases = [
  { input: [[2, 7, 11, 15], 9], expected: [1, 2] },
  { input: [[2, 3, 4], 6], expected: [1, 3] },
  { input: [[-1, 0], -1], expected: [1, 2] },
];

runTests(([numbers, target]) => twoSumII(numbers as number[], target as number), testCases);
