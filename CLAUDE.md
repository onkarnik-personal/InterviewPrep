# DSA Prep — Claude Context

## About me
- Name: Onkar Nikam, SDE 2 at Pattern (Pune)
- Full-stack: React, Node.js, TypeScript, MySQL
- Preparing for interviews at Pune product-based companies
- Timeline: 3 months (Apr – Jul 2026)
- DSA language: TypeScript

## Current level
- LeetCode: ~50 solved (32E, 17M, 0H)
- Not actively practiced in the past year
- DSA is a weak area — starting structured prep from scratch

## Problem workflow

### TypeScript (DSA problems)
When starting a new problem:
1. Create a `.ts` file in the correct `problems/<pattern>/` folder, named in camelCase after the problem (e.g. `topKFrequent.ts`)
2. File must include: problem title, LeetCode URL, difficulty, pattern, full problem statement with examples and constraints, empty solution function with correct signature, and test cases
3. Update `docs/progress.md` — add the problem row under today's day with status WIP
4. Update `docs/plan.md` — mark the problem as WIP

When the problem is solved:
1. Update the progress.md row — fill in pattern and notes (key bug or insight)
2. Fill in "What clicked" and "Revisit" for the day
3. Update plan.md — mark checkbox as done, remove WIP

### SQL (query practice)
When starting a new SQL problem:
1. Create a `.sql` file in `problems/sql/`, named in camelCase after the problem (e.g. `secondHighestSalary.sql`)
2. File must include: problem title, LeetCode URL, difficulty, pattern, full problem statement with examples and constraints, schema as commented-out `CREATE TABLE`, test data as commented-out `INSERT` statements, and an empty/stub `SELECT` with expected output in a comment
3. Update `docs/progress.md` — add the problem row under today's day with status WIP
4. Update `docs/plan.md` — mark the problem as WIP

When the SQL problem is solved:
1. Replace the stub with the working query
2. Update the progress.md row — fill in pattern and notes (key insight, e.g. "window function vs GROUP BY")
3. Update plan.md — mark checkbox as done, remove WIP

## How to help me
- Give hints before full solutions — let me think first
- Point out bugs and explain *why* they're bugs
- After each problem, summarize the pattern and gotchas
- Keep solutions clean TypeScript (no any, proper types)

## Progress
- See `progress.md` for full log
- See `plan.md` for 3-month roadmap
- See `patterns/` for pattern notes

## Folder structure
DSA prep/
├── CLAUDE.md
├── package.json
├── .prettierrc
├── node_modules/
├── docs/
│   ├── plan.md
│   ├── progress.md
│   ├── patterns/
│   ├── system-design/
│   └── cs-fundamentals/
│       ├── os.md
│       ├── dbms.md
│       └── networks.md
└── problems/
    ├── arrays-strings/
    │   ├── twoSum.ts
    │   ├── isAnagram.ts
    │   └── groupAnagrams.ts
    ├── two-pointers/
    ├── sliding-window/
    ├── stack/
    ├── binary-search/
    ├── linked-list/
    ├── trees/
    ├── graphs/
    ├── dynamic-programming/
    └── sql/
        └── secondHighestSalary.sql

---

## CS Fundamentals & System Design Workflow

### Folder structure addition
```
docs/
├── cs-fundamentals/
│   ├── os.md
│   ├── dbms.md
│   ├── networks.md
│   └── system-design.md
├── cheatsheets/
│   ├── os-cheatsheet.md
│   ├── dbms-cheatsheet.md
│   ├── networks-cheatsheet.md
│   └── system-design-cheatsheet.md
└── progress.md
```

### Session start
1. Read the relevant topic file (e.g. `os.md`) to find where we left off
2. Check progress.md for the CS Fundamentals status table
3. Resume from the last `> Coming next session` marker in the topic file

### During the session
- Teach concepts clearly with examples — Onkar is a full-stack dev, use Node.js/React/MySQL analogies where possible
- After each concept is explained and understood, write it to the topic file immediately
- Format: full reading material (explanation + examples + analogies) followed by a quick reference table at the bottom
- Keep a conversational teaching style in the notes — not just bullet dumps

### Session end
1. Update the topic file — remove `> Coming next session` markers for covered topics, add them for next ones
2. Regenerate the cheatsheet file for that topic — keep it to 1 page max, interview-ready, print-friendly
3. Update progress.md — mark covered topics with ✅ in the CS Fundamentals table
4. Commit everything with message: `cs: <topic> — <what was covered>`

### Cheatsheet format rules
- Max 1 page when printed (aim for ~40 lines)
- One-liner definitions only — no long explanations
- Tables and bullet points only — no prose
- Grouped by topic
- End with a "likely interview questions" section (5–7 questions, no answers — just prompts to self-test)

### How to help
- Give analogies before theory — Onkar learns better with concrete examples first
- After explaining a concept, ask "does that click?" before moving on
- Quiz at the end of each session covering everything from that session
- Don't rush — depth over speed

### CS Fundamentals topics order
1. OS — Process/Thread ✅, Context Switching ✅, Deadlock, Memory Management, Mutex vs Semaphore
2. DBMS — ACID, Normalization, Indexing, Joins, Transactions & Locks
3. Networks — HTTP vs HTTPS, TCP vs UDP, DNS flow, REST vs GraphQL, WebSockets vs polling

### System Design topics order
1. Core concepts — DNS, HTTP, Client-Server, REST vs WebSocket
2. SQL vs NoSQL, Indexing, Caching, CAP theorem
3. Load balancing, API Gateway, Rate limiting
4. HLD: URL Shortener → Notification System → Chat System → Rate Limiter → E-commerce Order Flow
5. LLD: SOLID → Design Patterns → Parking Lot → Notification Service → LRU Cache → Rate Limiter    