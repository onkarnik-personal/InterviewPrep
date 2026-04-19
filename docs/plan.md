# DSA Interview Prep Plan
**Target:** Pune product-based companies (not FAANG)
**Timeline:** 3 months (Apr 2026 – Jul 2026)
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

### Week 1 — Arrays & Strings + HashMap ✅
- [x] Two Sum
- [x] Valid Anagram
- [x] Group Anagrams
- [x] Contains Duplicate
- [x] Top K Frequent Elements
- [x] Product of Array Except Self
- [ ] Valid Sudoku
- [x] Encode and Decode Strings
- [x] Longest Consecutive Sequence

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
- [x] Longest Substring Without Repeating Characters
- [ ] Longest Repeating Character Replacement
- [ ] Permutation in String
- [ ] Minimum Window Substring

### Week 4 — Stack
- [x] Valid Parentheses
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
- [x] Search Insert Position (35)
- [ ] Search in Rotated Sorted Array
- [x] Find First and Last Position of Element in Sorted Array (34)
- [ ] Find Minimum in Rotated Sorted Array

### Week 6 — Linked List
- [ ] Reverse Linked List
- [x] Merge Two Sorted Lists
- [ ] Reorder List
- [ ] Remove Nth Node From End
- [x] Linked List Cycle
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
- [x] Binary Tree Inorder Traversal (94)
- [x] Path Sum (112)

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
- [x] Climbing Stairs
- [ ] House Robber
- [ ] Longest Common Subsequence
- [x] Coin Change
- [ ] 0/1 Knapsack
- [x] Longest Increasing Subsequence

### Week 11-12 — Mock Interviews + Weak Area Revision
- [ ] 2 mock interviews/week (use Pramp or a friend)
- [ ] Re-solve all "Revisit" problems from progress.md
- [ ] Review all pattern notes in /patterns/

---

## System Design Plan (30 mins/day parallel)

> Target: Explain architecture clearly, justify tradeoffs, relate to real work at Pattern.

### Month 1 — Core Concepts (theory + your own experience)
- [ ] How the web works — DNS, HTTP, Client-Server
- [ ] REST vs WebSocket (you've used both — write it in your own words)
- [ ] SQL vs NoSQL — when to use what
- [ ] Indexing — what it is, B-tree, when it helps/hurts
- [ ] Caching — strategies (write-through, write-back, eviction), Redis use cases (you've used it)
- [ ] CAP theorem — Consistency, Availability, Partition tolerance
- [ ] Load balancing — round robin, sticky sessions
- [ ] API Gateway, Rate limiting basics

### Month 2 — HLD of Classic Systems (1 system per week)
- [ ] URL Shortener (great starter — covers hashing, DB, caching)
- [ ] Notification System (covers queues, push/pull, retries — close to your work)
- [ ] Chat System (covers WebSocket, Redis pub/sub — you've used Socket.io)
- [ ] Rate Limiter (covers Redis, sliding window — directly mappable to your stack)
- [ ] Job Scheduler / Task Queue
- [ ] E-commerce Order Flow (closest to Pattern — design checkout, inventory, Shopify sync)

### Month 3 — LLD + OOP Design (Pune companies ask this often at SDE 2)
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
- [x] Process vs Thread
- [x] Context switching
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

> Goal: Build real SQL fluency — write complex queries from scratch without AI help, own schema design, and bring this skill into daily work at Pattern, not just interviews.
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

### Month 2 — Window functions (your gap)
- [ ] Rank Scores (178) — DENSE_RANK vs naive ORDER BY
- [ ] Nth Highest Salary (177) — parameterized subquery
- [ ] Department Top 3 Salaries (185) — DENSE_RANK OVER PARTITION BY
- [ ] Consecutive Available Seats (603) — self join, range logic
- [ ] Game Play Analysis I (511) — MIN date per user
- [ ] Game Play Analysis IV (534) — window + date comparison

### Month 3 — Hard + schema design
- [ ] Human Traffic of Stadium (601) — consecutive rows, complex condition
- [ ] Trips and Users (262) — multi-table join + rate calculation
- [ ] Design a schema from scratch (Pattern use case — TBD)

---

## Notes
- Don't chase hard problems yet — consistency > difficulty
- After solving, always ask: "What's the pattern? When would I use this?"
- Update progress.md every session — takes 2 mins, saves hours later
- Problems marked [x] from pre-prep — consider re-solving if solved in 2023 (likely forgotten)
- For system design: don't just read — draw the diagram, then explain it out loud