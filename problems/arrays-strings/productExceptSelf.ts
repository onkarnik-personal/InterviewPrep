// Problem: Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// Difficulty: Medium
// Pattern: Prefix / Suffix Product

// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
//
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
//
// Example 1:
//   Input: nums = [1,2,3,4]
//   Output: [24,12,8,6]
//
// Example 2:
//   Input: nums = [-1,1,0,-3,3]
//   Output: [0,0,9,0,0]
//
// Constraints:
//   - 2 <= nums.length <= 10^5
//   - -30 <= nums[i] <= 30
//   - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer

function productExceptSelf(nums: number[]): number[] {
  const prefixArr: number[] = [];
  const suffixArr: number[] = [];
  const output: number[] = [];

  // calc prefix
  for( let i = 0; i < nums.length; i++){
    let prefixVal = 1;
    if (i !== 0) prefixVal = prefixArr[i-1] * nums[i-1];
    prefixArr[i] = prefixVal;
  }

  // calc suffix
  for(let i= nums.length - 1 ; i >= 0; i--){
    let suffixVal = 1;
    if(i !== nums.length-1 ) suffixVal = suffixArr[i+1] * nums[i+1];
    suffixArr[i] = suffixVal;
  }

  // make output array
  for(let i = 0; i < nums.length; i++ ){
    const outputVal = prefixArr[i]*suffixArr[i];
    output.push(outputVal === -0 ? 0 : outputVal);
  }

  return output;

}

// ---- Test Cases ----

console.log(productExceptSelf([1, 2, 3, 4]));        // Expected: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));   // Expected: [0,0,9,0,0]
