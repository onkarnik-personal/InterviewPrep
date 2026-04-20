// Problem: Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/
// Difficulty: Easy
// Pattern: Two Pointers

// A phrase is a palindrome if, after converting all uppercase letters to lowercase
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
// Example 1:
//   Input:  s = "A man, a plan, a canal: Panama"
//   Output: true  ("amanaplanacanalpanama" is a palindrome)
//
// Example 2:
//   Input:  s = "race a car"
//   Output: false  ("raceacar" is not a palindrome)
//
// Example 3:
//   Input:  s = " "
//   Output: true  (empty string after filtering is a palindrome)
//
// Constraints:
//   - 1 <= s.length <= 2 * 10^5
//   - s consists only of printable ASCII characters

import { runTests } from "../../utils/test";


function isPalindrome(s: string): boolean {

    if (s.length === 0) return true;
    let ptr1 = 0;
    let ptr2 = s.length-1;

    const isValid = (c : string) => {
      return /[a-z0-9]/.test(c)
    }

    while(ptr1 < ptr2) {
      const m = s.charAt(ptr1).toLowerCase();
      const n = s.charAt(ptr2).toLowerCase();
      if(!isValid(m)) {
        ptr1 ++
        continue
      }
      if(!isValid(n)) {
        ptr2--
        continue
      }

      if(m !== n) return false;

      ptr1++;
      ptr2--;
    }

    return true;
}

const testCases = [
  { input: ["A man, a plan, a canal: Panama"], expected: true },
  { input: ["race a car"], expected: false },
  { input: [" "], expected: true },
];

runTests(([s]) => isPalindrome(s), testCases);
