// Problem: Group Anagrams
// https://leetcode.com/problems/group-anagrams/
//
// Given an array of strings, group the anagrams together.
// You can return the answer in any order.
//
// Example 1:
//   Input: strs = ["eat","tea","tan","ate","nat","bat"]
//   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Example 2:
//   Input: strs = [""]
//   Output: [[""]]
//
// Example 3:
//   Input: strs = ["a"]
//   Output: [["a"]]
//
// Constraints:
//   - 1 <= strs.length <= 10^4
//   - 0 <= strs[i].length <= 100
//   - strs[i] consists of lowercase English letters

function groupAnagrams(strs: string[]): string[][] {
  // Your code here
  const groupMap = new Map<string, string[]>();
  for(const str of strs) {
    const sortedStr = str.split('').sort().join('');
    const existingStrArr = groupMap.get(sortedStr) ?? [];
    groupMap.set(sortedStr, [...existingStrArr, str])
  }
  return [...groupMap.values()]
}

// Test cases
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]] (any order)
console.log(groupAnagrams(['']));
// Expected: [[""]]
console.log(groupAnagrams(['a']));
// Expected: [["a"]]
