# OS — Fundamentals

## 1. Process vs Thread

**Process** — an independent program in execution. Has its own memory space, resources, and at least one thread. Isolated by the OS — one process cannot directly access another's memory.

**Thread** — the smallest unit of execution inside a process. Shares the heap with sibling threads but has its own stack, program counter, and thread ID.

| | Process | Thread |
|---|---|---|
| Memory | Own memory space | Shared heap, own stack |
| Isolation | High — crash stays contained | Low — one bad thread crashes all |
| Context switch cost | High | Low |
| Use when | Independent tasks, fault isolation | Related tasks, shared data, performance matters |

**Examples:**
- Use multiple processes → Chrome tabs (one crash doesn't kill others)
- Use multiple threads → a web server handling requests (shared DB connection pool)

**Node.js angle:**
- Single-threaded event loop — handles concurrency via non-blocking I/O
- Never waits for I/O — delegates to the OS and moves on
- Weakness: CPU-heavy tasks (image processing, crypto) block the single thread
- Fix: use `worker_threads` (threads) or `child_process` (separate processes)

---

## 2. Context Switching ✅

**Definition:** The OS saving the current process/thread state and loading another one. This creates the illusion of parallelism on a single core.

**Where state is saved:** PCB (Process Control Block) — stores registers, program counter, stack pointer.

### When does it happen?

1. **Time slice expires** — OS gives each process a fixed CPU slot (e.g. 10ms). When it runs out, switch.
2. **Process waits on I/O** — reading a file, waiting for a network response. No point wasting CPU — switch to something else.
3. **Higher priority process becomes ready** — OS preempts the current one.
4. **Process voluntarily yields** — calls `sleep()`, waits on a lock/mutex, etc.

### What's the cost?

Every context switch involves:
- Saving and loading CPU registers, program counter, stack pointer
- CPU cache goes cold — the new process has different data in memory
- TLB flush — memory address mappings need to change for the new process

**Thread switch vs Process switch:**
- **Thread switch = cheaper** — threads share the same memory space, so no TLB flush or cache wipe. Just swap the stack and registers.
- **Process switch = expensive** — full memory context change, TLB flush, cache cold.

### Node.js angle

The event loop avoids context switching entirely for I/O — it delegates to the OS via callbacks and never blocks. That's why Node can handle thousands of concurrent connections cheaply on a single thread.

`worker_threads` do involve context switching, but you control when — you spin them up explicitly for CPU-heavy work.

---

## 3. Node.js Worker Threads ✅

**Why they exist:**
CPU-heavy tasks — image processing, parsing large CSVs, encryption, analytics — block the single-threaded event loop. The entire server stalls until the task finishes. Worker Threads are Node's solution: offload CPU work to a real OS thread so the event loop stays free.

**What they are:**
- Real OS threads — each runs on a separate CPU core in parallel
- Each worker gets its own V8 instance, own event loop, own memory heap
- Fully parallel — not just concurrent like async I/O

**How they communicate:**
```ts
// Main thread
import { Worker } from 'worker_threads';
const worker = new Worker('./heavy-task.js', { workerData: { input } });
worker.on('message', (result) => console.log(result)); // never blocks

// Worker thread
import { parentPort, workerData } from 'worker_threads';
const result = heavyComputation(workerData.input);
parentPort?.postMessage(result);
```
Message passing via `postMessage` / `on('message')` — the main thread never blocks waiting for the result.

**Shared memory:**
Workers can share memory via `SharedArrayBuffer` — unlike child processes which have fully separate memory spaces. Useful when passing large data (avoids copying it across message boundaries).

**Worker Threads vs Child Process:**

| | Worker Threads | Child Process |
|---|---|---|
| Memory | Shared via SharedArrayBuffer | Fully separate |
| Communication | postMessage (fast, in-process) | IPC / stdio (slower) |
| Overhead | Low (same process) | High (new process + own V8) |
| Fault isolation | Low — crash can affect main | High — crash stays isolated |
| Use when | CPU-heavy tasks, shared large data | Untrusted code, max isolation, run any binary |

**Real-world use case:**
An analytics API processing 100k orders. Without Worker Threads, one request freezes all other users for seconds. With a Worker Thread, the heavy aggregation runs on a separate core — the API stays responsive for everyone else.

---

## 4. Deadlock

> Coming next session.

### Topics to cover:
- What is a deadlock
- Four necessary conditions (Coffman conditions)
- How to prevent / avoid / detect deadlock
- Mutex vs Semaphore

---

## 5. Memory Management

> Coming soon.

### Topics to cover:
- Stack vs Heap (in depth)
- Stack overflow
- Heap allocation and garbage collection
- Virtual memory basics

---

## 6. Mutex vs Semaphore

> Coming soon.

---

## Quick Reference — Interview Cheatsheet

| Concept | One-liner |
|---|---|
| Process | Independent program, own memory, isolated |
| Thread | Unit of execution inside a process, shared heap |
| Context switch | OS saves state of one process/thread, loads another |
| PCB | Where OS stores the saved state of a process |
| Why thread switch is cheaper | Same memory space — no TLB flush, cache stays warmer |
| Node.js concurrency | Event loop + non-blocking I/O, single thread |
| Node.js CPU weakness | CPU tasks block the thread — use worker_threads |