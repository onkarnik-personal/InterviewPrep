// Problem: Two Sum
// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  // Your code here
  const indexMap = new Map();
  const ans: number[] = [];
  nums.forEach((number, i) => {
    if (!indexMap.has(number)) indexMap.set(number, i);
    
    const missingSum = target - number;
    if (indexMap.has(missingSum)) {
      const firstIndex = indexMap.get(missingSum);
      if (firstIndex !== i) {
        ans.push(...[firstIndex, i]);
      }
    }
  })
  return ans;
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
