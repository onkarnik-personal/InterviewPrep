# DSA Interview Prep Plan
**Target:** [Your target companies/roles]
**Timeline:** [X months starting Month Year]
**Language:** TypeScript
**Daily Time:** ~2hrs weekdays, more on weekends

---

## Daily Time Split
| Activity | Weekday | Weekend |
|---|---|---|
| DSA | 1.5 hrs | 3 hrs |
| System Design | 30 mins | 1 hr |
| CS Fundamentals | 30 mins | 1 hr |

---

## Month 1 — Foundations (Arrays, Strings, HashMap, Two Pointers, Sliding Window)

> Goal: Be comfortable with easy problems in < 10 mins. Crack mediums with hints.

### Week 1 — Arrays & Strings + HashMap
- [ ] Two Sum
- [ ] Valid Anagram
- [ ] Group Anagrams
- [ ] Contains Duplicate
- [ ] Top K Frequent Elements
- [ ] Product of Array Except Self
- [ ] Valid Sudoku
- [ ] Encode and Decode Strings
- [ ] Longest Consecutive Sequence

### Week 2 — Two Pointers
- [ ] Valid Palindrome
- [ ] Two Sum II (sorted)
- [ ] 3Sum
- [ ] Container With Most Water
- [ ] Trapping Rain Water
- [ ] Move Zeroes (283)
- [ ] Squares of a Sorted Array (977)
- [ ] Remove Duplicates from Sorted Array II (80)

### Week 3 — Sliding Window
- [ ] Best Time to Buy and Sell Stock
- [ ] Longest Substring Without Repeating Characters
- [ ] Longest Repeating Character Replacement
- [ ] Permutation in String
- [ ] Minimum Window Substring

### Week 4 — Stack
- [ ] Valid Parentheses
- [ ] Min Stack
- [ ] Evaluate Reverse Polish Notation
- [ ] Daily Temperatures
- [ ] Car Fleet

---

## Month 2 — Core DS (Binary Search, Linked List, Trees)

> Goal: Solve mediums independently. Start timing yourself (target < 20 mins).

### Week 5 — Binary Search
- [ ] Binary Search
- [ ] Koko Eating Bananas
- [ ] Search Insert Position (35)
- [ ] Search in Rotated Sorted Array
- [ ] Find First and Last Position of Element in Sorted Array (34)
- [ ] Find Minimum in Rotated Sorted Array

### Week 6 — Linked List
- [ ] Reverse Linked List
- [ ] Merge Two Sorted Lists
- [ ] Reorder List
- [ ] Remove Nth Node From End
- [ ] Linked List Cycle
- [ ] LRU Cache

### Week 7 — Trees
- [ ] Invert Binary Tree
- [ ] Max Depth of Binary Tree
- [ ] Diameter of Binary Tree
- [ ] Balanced Binary Tree
- [ ] Same Tree
- [ ] Level Order Traversal
- [ ] BST Validate
- [ ] Lowest Common Ancestor
- [ ] Binary Tree Inorder Traversal (94)
- [ ] Path Sum (112)

---

## Month 3 — Advanced + Mock Interviews (Graphs, DP, Revision)

> Goal: Solve mediums in < 15 mins. Attempt hards. Do mock interviews.

### Week 8-9 — Graphs
- [ ] Number of Islands
- [ ] Clone Graph
- [ ] Max Area of Island
- [ ] Pacific Atlantic Water Flow
- [ ] Course Schedule
- [ ] Number of Connected Components
- [ ] Graph Valid Tree

### Week 10 — Dynamic Programming
- [ ] Climbing Stairs
- [ ] House Robber
- [ ] Longest Common Subsequence
- [ ] Coin Change
- [ ] 0/1 Knapsack
- [ ] Longest Increasing Subsequence

### Week 11-12 — Mock Interviews + Weak Area Revision
- [ ] 2 mock interviews/week (use Pramp or a friend)
- [ ] Re-solve all "Revisit" problems from progress.md
- [ ] Review all pattern notes in /patterns/

---

## System Design Plan (30 mins/day parallel)

> Target: Explain architecture clearly, justify tradeoffs.

### Month 1 — Core Concepts
- [ ] How the web works — DNS, HTTP, Client-Server
- [ ] REST vs WebSocket
- [ ] SQL vs NoSQL — when to use what
- [ ] Indexing — what it is, B-tree, when it helps/hurts
- [ ] Caching — strategies (write-through, write-back, eviction), Redis use cases
- [ ] CAP theorem — Consistency, Availability, Partition tolerance
- [ ] Load balancing — round robin, sticky sessions
- [ ] API Gateway, Rate limiting basics

### Month 2 — HLD of Classic Systems (1 system per week)
- [ ] URL Shortener (great starter — covers hashing, DB, caching)
- [ ] Notification System (covers queues, push/pull, retries)
- [ ] Chat System (covers WebSocket, Redis pub/sub)
- [ ] Rate Limiter (covers Redis, sliding window)
- [ ] Job Scheduler / Task Queue
- [ ] E-commerce Order Flow (checkout, inventory)

### Month 3 — LLD + OOP Design
- [ ] SOLID principles — read + write one example each
- [ ] Design Patterns: Singleton, Factory, Observer, Strategy
- [ ] LLD: Design a Parking Lot
- [ ] LLD: Design a Notification Service
- [ ] LLD: Design an LRU Cache (bonus: you'll also solve it as a DSA problem)
- [ ] LLD: Design a Rate Limiter

---

## CS Fundamentals (30 mins/day parallel)

| Topic | Status | Target |
|---|---|---|
| System Design basics | Weak | Understand HLD, LLD, CAP theorem |
| OS (process, threads, deadlock) | Partial | Be solid on all core concepts |
| DBMS (ACID, indexing, joins) | Weak | Define ACID cleanly, explain B-tree index |
| Networks (HTTP, DNS, TCP/UDP) | Decent | Revise and hold |

### OS Topics to Cover
- [ ] Process vs Thread
- [ ] Context switching
- [ ] Deadlock — conditions, prevention
- [ ] Memory management (stack vs heap)
- [ ] Mutex vs Semaphore

### DBMS Topics to Cover
- [ ] ACID properties — define each clearly
- [ ] Normalization (1NF, 2NF, 3NF)
- [ ] Indexing — B-tree, when to index
- [ ] Joins — INNER, LEFT, RIGHT, FULL
- [ ] Transactions and locks

### Networks Topics to Cover
- [ ] HTTP vs HTTPS
- [ ] TCP vs UDP — when to use which
- [ ] DNS resolution flow
- [ ] REST vs GraphQL
- [ ] WebSockets vs HTTP polling

---

## SQL Practice (daily, alongside DSA)

> Goal: Build real SQL fluency — write complex queries from scratch without AI help.
> Files live in `problems/sql/` — each is a self-contained `.sql` file with schema, test data, and solution.

### Month 1 — Core patterns + joins
- [ ] Second Highest Salary (176) — NULL handling, LIMIT/OFFSET, subquery
- [ ] Employees Earning More Than Their Managers (181) — self join
- [ ] Duplicate Emails (182) — GROUP BY + HAVING
- [ ] Customers Who Never Order (183) — LEFT JOIN vs NOT IN
- [ ] Department Highest Salary (184) — GROUP BY + subquery
- [ ] Rising Temperature (197) — date arithmetic, self join
- [ ] Recyclable and Low Fat Products (1757) — basic WHERE filter (warm-up)
- [ ] Find Customer Referee (584) — NULL comparison gotcha

### Month 2 — Window functions
- [ ] Rank Scores (178) — DENSE_RANK vs naive ORDER BY
- [ ] Nth Highest Salary (177) — parameterized subquery
- [ ] Department Top 3 Salaries (185) — DENSE_RANK OVER PARTITION BY
- [ ] Consecutive Available Seats (603) — self join, range logic
- [ ] Game Play Analysis I (511) — MIN date per user
- [ ] Game Play Analysis IV (534) — window + date comparison

### Month 3 — Hard + schema design
- [ ] Human Traffic of Stadium (601) — consecutive rows, complex condition
- [ ] Trips and Users (262) — multi-table join + rate calculation
- [ ] Design a schema from scratch (TBD)

---

## Notes
- Don't chase hard problems yet — consistency > difficulty
- After solving, always ask: "What's the pattern? When would I use this?"
- Update progress.md every session — takes 2 mins, saves hours later
- For system design: don't just read — draw the diagram, then explain it out loud
