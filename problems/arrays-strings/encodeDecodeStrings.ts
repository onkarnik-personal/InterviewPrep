// Encode and Decode Strings
// https://leetcode.com/problems/encode-and-decode-strings/
// Difficulty: Medium
// Pattern: String Encoding / Length-Prefix

// Problem:
// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then sent over the network and decoded back to the original list.
//
// Implement:
//   encode(strs: string[]): string
//   decode(s: string): string[]
//
// The encoded string may contain any character including special chars.
// You cannot use a simple delimiter like "," because the strings themselves may contain it.
//
// Example 1:
// Input:  ["hello", "world"]
// Output: ["hello", "world"]  (after encode → decode round-trip)
//
// Example 2:
// Input:  [""]
// Output: [""]
//
// Example 3:
// Input:  ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
//
// Constraints:
// - 0 <= strs.length <= 200
// - 0 <= strs[i].length <= 200
// - strs[i] contains any possible character (including special chars)



function encode(strs: string[]): string {
  // encode pattern 5#hello5#world 0# 2#we3#say1#:3#yes  13#contains#hash9#and,comma
  let encoded: string = ''
  for( const str of strs ) {
    encoded += str.length+'#';
    encoded += str;
  }
  return encoded;
}

// 1 3 # c o n t a i n  s  #  h  a  s  h  9  #  a  n  d  ,  c  o  m  m  a
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26

function decode(s: string): string[] {
  const decoded: string[] = []
  let i =0;
  let wordLen = "";
  let startIdx = 0
  let endIdx = 0
  while(i < s.length) {
    wordLen = s.slice(i).split('#')[0]; // "9"
    startIdx = i + wordLen.length + 1 ; // 0 + 2 + 1 = 3 :: 16 + 1 + 1 = 18
    endIdx = startIdx + Number(wordLen); // 3+13=16 :: 18 + 9 = 27
    decoded.push(s.slice(startIdx, endIdx))  
    i = endIdx; // 16 :: 
  }
  return decoded;
}

// --- Test cases ---
const tests: string[][] = [
  ["hello", "world"],
  [""],
  ["we", "say", ":", "yes"],
  ["contains#hash", "and,comma"],
  [],
];

for (const input of tests) {
  const encoded = encode(input);
  const decoded = decode(encoded);
  const pass = JSON.stringify(decoded) === JSON.stringify(input);
  console.log(`${pass ? "PASS" : "FAIL"} | input: ${JSON.stringify(input)} | encoded: "${encoded}" | decoded: ${JSON.stringify(decoded)}`);
}
