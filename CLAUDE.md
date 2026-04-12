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
When starting a new problem:
1. Create a `.ts` file in the correct `problems/<pattern>/` folder, named in camelCase after the problem (e.g. `topKFrequent.ts`)
2. File must include: problem title, LeetCode URL, difficulty, pattern, full problem statement with examples and constraints, empty solution function with correct signature, and test cases
3. Update `docs/progress.md` — add the problem row under today's day with status WIP
4. Update `docs/plan.md` — mark the problem as WIP

When the problem is solved:
1. Update the progress.md row — fill in pattern and notes (key bug or insight)
2. Fill in "What clicked" and "Revisit" for the day
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
    └── dynamic-programming/