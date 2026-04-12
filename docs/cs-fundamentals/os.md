# OS — Fundamentals

## Process vs Thread ✅

**Process** — independent program in execution. Has its own memory space, resources, and at least one thread. Isolated by the OS — one process can't directly access another's memory.

**Thread** — smallest unit of execution inside a process. Shares heap with sibling threads but has its own stack, program counter, and thread ID.

- One bad thread can crash the entire process (shared memory = shared risk)
- **Use multiple processes** — independent tasks, need fault isolation (e.g. Chrome tabs)
- **Use multiple threads** — related tasks, need shared data, performance matters

**Node.js angle:**
- Single-threaded event loop — handles concurrency via non-blocking I/O
- Never waits for I/O — delegates to the OS and moves on
- Weakness: CPU-heavy tasks block the single thread (use worker threads or child processes)

---

## Context Switching (partial) 🔄

OS saves current process/thread state into PCB (Process Control Block) — registers, program counter, stack pointer.
Loads the next process's saved state.
Creates the illusion of parallelism on a single core.

> Resume: cover cost of context switching, when it happens, and how it relates to threads vs processes.
