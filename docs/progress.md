# DSA Progress Log

## Stats
- **Prep Start Date:** Apr 11, 2026
- **Target:** 3 months | Pune product-based companies
- **Language:** TypeScript
- **LeetCode Total:** ~51 solved (mix of Easy/Medium, pre-prep + prep)

---

## CS Fundamentals Progress

### OS
| Topic | Status |
|---|---|
| Process vs Thread | ✅ |
| Context Switching | ✅ |
| Node.js Worker Threads | ✅ |
| Deadlock | ⬜ |
| Memory Management | ⬜ |
| Mutex vs Semaphore | ⬜ |

### DBMS
| Topic | Status |
|---|---|
| ACID, Normalization, Indexing, Joins, Transactions | ⬜ |

### Networks
| Topic | Status |
|---|---|
| HTTP/S, TCP/UDP, DNS, REST vs GraphQL, WebSockets | ⬜ |

---

## Pre-Prep History (solved before Apr 2026)
> These count as "seen" but may need a revisit — some are old (2023) and forgotten.

| # | Problem | Difficulty | Status | Last Solved |
|---|---|---|---|---|
| 1 | Two Sum | Easy | Accepted | Yesterday (Day 1) |
| 2 | Add Two Numbers | Med | Accepted | 2023.05.19 |
| 3 | Longest Substring Without Repeating Characters | Med | Accepted | 2023.05.24 |
| 6 | Zigzag Conversion | Med | Accepted | 2023.06.25 |
| 9 | Palindrome Number | Easy | Accepted | 2023.05.06 |
| 14 | Longest Common Prefix | Easy | Accepted | 2023.05.19 |
| 20 | Valid Parentheses | Easy | Accepted | 2023.06.25 |
| 21 | Merge Two Sorted Lists | Easy | Accepted | 2023.05.08 |
| 26 | Remove Duplicates from Sorted Array | Easy | Accepted | 2023.08.30 |
| 27 | Remove Element | Easy | Accepted | 2023.08.30 |
| 28 | Find the Index of the First Occurrence in a String | Easy | Accepted | 2023.07.01 |
| 34 | Find First and Last Position of Element in Sorted Array | Med | Accepted | 2024.06.11 |
| 35 | Search Insert Position | Easy | Accepted | 2023.09.10 |
| 49 | Group Anagrams | Med | Accepted | Yesterday (Day 1) |
| 58 | Length of Last Word | Easy | Accepted | 2023.09.10 |
| 64 | Minimum Path Sum | Med | Runtime Error | 2023.03.27 |
| 66 | Plus One | Easy | Accepted | 2023.09.10 |
| 70 | Climbing Stairs | Easy | Accepted | 2025.03.15 |
| 75 | Sort Colors | Med | Accepted | 2024.06.13 |
| 88 | Merge Sorted Array | Easy | Accepted | 2023.08.30 |
| 94 | Binary Tree Inorder Traversal | Easy | Accepted | 2023.05.17 |
| 112 | Path Sum | Easy | Accepted | 2025.03.23 |
| 141 | Linked List Cycle | Easy | Accepted | 2023.05.29 |
| 176 | Second Highest Salary | Med | Accepted | 2023.05.18 |
| 177 | Nth Highest Salary | Med | Accepted | 2023.05.18 |
| 217 | Contains Duplicate | Easy | Accepted | 2023.05.05 |
| 237 | Delete Node in a Linked List | Med | Accepted | 2023.07.16 |
| 242 | Valid Anagram | Easy | Accepted | Yesterday (Day 1) |
| 300 | Longest Increasing Subsequence | Med | Accepted | 2025.03.16 |
| 322 | Coin Change | Med | Accepted | 2025.03.16 |
| 344 | Reverse String | Easy | Accepted | 2023.07.07 |
| 974 | Subarray Sums Divisible by K | Med | Accepted | 2024.06.11 |
| 945 | Minimum Increment to Make Array Unique | Med | Accepted | 2024.06.14 |
| 1051 | Height Checker | Easy | Accepted | 2024.06.10 |
| 1071 | Greatest Common Divisor of Strings | Easy | Accepted | 2024.03.06 |
| 1122 | Relative Sort Array | Easy | Accepted | 2024.06.11 |
| 1209 | Remove All Adjacent Duplicates in String II | Med | Accepted | 2024.09.08 |
| 1456 | Maximum Number of Vowels in a Substring of Given Length | Med | Accepted | 2023.05.05 |
| 1572 | Matrix Diagonal Sum | Easy | Accepted | 2023.05.08 |
| 1757 | Recyclable and Low Fat Products | Easy | Accepted | 2023.05.18 |
| 1768 | Merge Strings Alternately | Easy | Accepted | 2024.02.14 |
| 2 | Add Two Numbers | Med | Accepted | 2023.05.19 |
| 2037 | Minimum Number of Moves to Seat Everyone | Easy | Accepted | 2024.06.13 |
| 2083 | Substrings That Begin and End With the Same Letter | Med | Accepted | 2024.06.13 |
| 2115 | Find All Possible Recipes from Given Supplies | Med | Wrong Answer | 2025.03.21 |
| 2130 | Maximum Twin Sum of a Linked List | Med | Accepted | 2023.05.17 |
| 2215 | Find the Difference of Two Arrays | Easy | Accepted | 2023.05.03 |
| 2236 | Root Equals Sum of Children | Easy | Accepted | 2023.02.28 |
| 2619 | Array Prototype Last | Easy | Accepted | 2023.11.20 |
| 2620 | Counter | Easy | Accepted | 2024.06.13 |
| 2667 | Create Hello World Function | Easy | Accepted | 2024.06.13 |
| 3191 | Minimum Operations to Make Binary Array Elements Equal to One I | Med | Accepted | 2025.03.19 |

---

## Prep Log (Apr 2026 onwards)

### Day 1 — Apr 11, 2026
**Pattern Focus:** HashMap

| Problem | Difficulty | Pattern | Notes |
|---|---|---|---|
| Two Sum | Easy | HashMap | Bug: falsy index — use `!== undefined` not `if (map[idx])` |
| Valid Anagram | Easy | HashMap / CharCount | Count s, decrement for t |
| Group Anagrams | Medium | HashMap (sorted key) | `forEach` cant break — use `for...of` |

**What clicked:** HashMap turns O(n²) into O(n). Sorted string as map key groups anagrams.

**Revisit:** None

---

### Day 2 — Apr 12, 2026
**Pattern Focus:** HashMap + Bucket Sort

| Problem | Difficulty | Pattern | Notes |
|---|---|---|---|
| Top K Frequent Elements | Medium | HashMap + Bucket Sort | buckets[freq] = nums with that freq; scan right-to-left to collect top k |
| Product of Array Except Self | Medium | Prefix / Suffix Product | prefixArr[i] = prefixArr[i-1] * nums[i-1]; same for suffix right-to-left |
| Valid Sudoku | Medium | HashSet | Dropped — restart later |

**What clicked:** Bucket sort avoids O(n log n) sort. Prefix/suffix arrays carry a running product — each index builds on the previous, not recomputed from scratch.

**Revisit:** Valid Sudoku — HashSet logic was fine, got tripped up by 2D matrix traversal (box indexing). Restart when comfortable with matrix problems.

**CS Fundamentals:**
- Process vs Thread — fully covered (see os.md)
- Context Switching — partially covered (PCB, state save/load, illusion of parallelism); resume next session

---
### Day 3 — Apr 14, 2026
**Pattern Focus:** String Encoding

| Problem | Difficulty | Pattern | Notes |
|---|---|---|---|
| Encode and Decode Strings | Medium | String Encoding / Length-Prefix | Length-prefix with `#` separator; use length to slice, not split |

**What clicked:** Can't use a plain delimiter — strings may contain it. Prefix each string with `len#` so decode always reads the length first, then slices exactly that many chars. The `#` inside strings doesn't matter because you never split on it.

**Revisit:** None

---
### Day 4 — Apr 15, 2026
**Pattern Focus:** HashSet

| Problem | Difficulty | Pattern | Notes |
|---|---|---|---|
| Longest Consecutive Sequence | Medium | HashSet | Iterate over Set not array — duplicates cause O(n²) if you loop nums |

**What clicked:** Only start counting from a number where `n-1` doesn't exist. Iterating over the Set (not the array) ensures each unique number is processed once → O(n).

**Revisit:** None

**CS Fundamentals:**
- Context Switching ✅ — cost (TLB flush, cache thrash), triggers, thread vs process switch cost
- Node.js Worker Threads ✅ — why they exist, how they work, postMessage, SharedArrayBuffer, vs child_process

---
### Day 5 — Apr 17, 2026
**Pattern Focus:** Matrix Traversal (warm-up for Valid Sudoku)

| Problem | Difficulty | Pattern | Notes |
|---|---|---|---|
| Transpose Matrix | Easy | Matrix Traversal | Allocate fresh result with `Array.from`; `result[j][i] = matrix[i][j]` |
| Rotate Image | Medium | Matrix Traversal | Transpose in-place then reverse each row |

**What clicked:** `result = matrix` is a reference, not a copy — always allocate fresh. Transpose formula: swap row/col indices.

**Revisit:** None


---
<!-- Copy the Day block above for each new session -->
