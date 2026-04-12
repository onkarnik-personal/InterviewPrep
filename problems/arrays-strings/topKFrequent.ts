// Problem: Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/
// Difficulty: Medium
// Pattern: HashMap + Bucket Sort (or Heap)

// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
//
// Example 1:
//   Input: nums = [1,1,1,2,2,3], k = 2
//   Output: [1,2]
//
// Example 2:
//   Input: nums = [1], k = 1
//   Output: [1]
//
// Constraints:
//   - 1 <= nums.length <= 10^5
//   - -10^4 <= nums[i] <= 10^4
//   - k is in the range [1, number of unique elements]
//   - Answer is guaranteed to be unique

function topKFrequent(nums: number[], k: number): number[] {
  // init frquency map
  const freqMap = new Map<number, number>();
  for (const num of nums) freqMap.set(num, (freqMap.get(num)??0) +1)
  /*
  ** sort approach O(n*log n) **
  const sortedBuckets = Array.from(freqMap).sort((a,b) => {
    return  b[1] - a[1];
  }); 
  const res =  sortedBuckets.slice(0,k).map(v => v[0]);
  return res;
  */
  
  // ** bucket approach ** O(n)
  // find max no. freq to init an array
  const freqValues = Array.from(freqMap);
  const buckets: number[][] = Array.from({length: nums.length+1}, () => []);
  for (const [num,freq] of freqValues) buckets[freq] = [...buckets[freq] ?? [], num];
  
  const result: number[] = [];

  for (let i = buckets.length-1; i >=0 && k !==0 ; i--) {
    if(buckets[i].length) {
      for (let j=0; j<buckets[i].length && k!==0; j++) {
        result.push(buckets[i][j]);
        --k;
      }
    }
  }

  return result;

}

// ---- Test Cases ----

console.log(topKFrequent([1, 1, 1,1 , 2,2,2, 3,], 2)); // Expected: [1, 2]
console.log(topKFrequent([1], 1));                 // Expected: [1]
console.log(topKFrequent([1, 2], 2));              // Expected: [1, 2]
