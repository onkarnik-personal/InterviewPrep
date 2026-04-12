// Problem: Valid Anagram
// https://leetcode.com/problems/valid-anagram/
//
// Given two strings s and t, return true if t is an anagram of s,
// and false otherwise.
// An anagram is a word formed by rearranging the letters of another,
// using all original letters exactly once.
//
// Example 1:
//   Input: s = "anagram", t = "nagaram"
//   Output: true
//
// Example 2:
//   Input: s = "rat", t = "car"
//   Output: false
//
// Constraints:
//   - 1 <= s.length, t.length <= 5 * 10^4
//   - s and t consist of lowercase English letters

function isAnagram(s: string, t: string): boolean {
  // Your code here
  if (s.length !== t.length) return false;
  const occurMap = new Map();
  // set the character count map
  for (let i = 0 ; i < s.length; i++){
    const char = s.charAt(i);
    if (occurMap.has(char)) {
      let n = occurMap.get(char);
      occurMap.set(char, ++n);
    } else {
      occurMap.set(char, 1);
    }
  }

  // check if it matches with t
  for(let i=0; i < t.length; i++) {
    const charT = t.charAt(i);
    let n = occurMap.get(charT);
    if (!n) return false;
    occurMap.set(charT, --n)
  }

  return true;
}

// Test cases
console.log(isAnagram('anagram', 'nagaram')); // Expected: true
console.log(isAnagram('rat', 'car')); // Expected: false
console.log(isAnagram('a', 'a')); // Expected: true
console.log(isAnagram('ab', 'a')); // Expected: false


/**
  ---
  Cleaned up version:
  function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const occurMap = new Map<string, number>();
    for (const char of s) {
      occurMap.set(char, (occurMap.get(char) ?? 0) + 1);
    }
    for (const char of t) {
      const n = occurMap.get(char);
      if (!n) return false;
      occurMap.set(char, n - 1);
    }

    return true;
  }
 */