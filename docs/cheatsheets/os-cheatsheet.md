# OS Fundamentals — Interview Cheatsheet

## Process vs Thread

| | Process | Thread |
|---|---|---|
| Memory | Own memory space | Shared heap, own stack |
| Isolation | High — crash stays contained | Low — one bad thread crashes all |
| Context switch cost | High (TLB flush, cache miss) | Low (same memory space) |
| Creation overhead | High | Low |
| Use when | Independent tasks, fault isolation | Related tasks, shared data, speed |

- **Process** — independent program in execution; isolated by the OS
- **Thread** — smallest execution unit inside a process; shares heap with siblings
- Chrome tabs = processes. Web server request handlers = threads.
- Node.js = single-threaded event loop; fix CPU tasks with `worker_threads` or `child_process`

---

## Context Switching

**What:** OS saves current process/thread state (PCB) and loads another. Creates illusion of parallelism.

**PCB stores:** CPU registers, program counter, stack pointer, memory map pointer, I/O state

**Triggers:**

| Trigger | Reason |
|---|---|
| Time slice expires | OS preemption — "your turn is over" |
| I/O wait | Process blocked — switch to something useful |
| Higher-priority process ready | Preemptive scheduling |
| System call / hardware interrupt | Timer, keyboard, network packet |
| Voluntary yield | sleep(), mutex wait |

**Cost — why it's expensive:**
- Saving/loading registers
- TLB flush (process switch only) — virtual→physical address cache invalidated
- Cache thrashing — CPU L1/L2 goes cold for the new process

**Thread vs Process switch:**

| | Thread Switch | Process Switch |
|---|---|---|
| TLB flush | No (same memory space) | Yes |
| Cache impact | Low | High (cold cache) |
| Cost | ~microseconds | 10–100× more expensive |

**Node.js:** Event loop avoids context switches for I/O entirely — delegates to OS via callbacks, never blocks.

---

## Node.js Worker Threads

- **Why:** CPU-heavy tasks (CSV parsing, image processing, encryption) block the event loop
- **What:** Real OS threads — own V8 instance, own event loop, own heap, runs on separate core
- **Communicate:** `postMessage` / `on('message')` — main thread never blocks
- **Shared memory:** `SharedArrayBuffer` — avoids copying large data (unlike child processes)

**Worker Threads vs Child Process:**

| | Worker Threads | Child Process |
|---|---|---|
| Memory | Shared via SharedArrayBuffer | Fully separate |
| Communication | postMessage (fast) | IPC / stdio (slower) |
| Overhead | Low | High (new process + V8) |
| Fault isolation | Low | High |
| Use when | CPU tasks, shared large data | Untrusted code, max isolation |

---

## Likely Interview Questions

1. What's the difference between a process and a thread?
2. Why is a thread context switch cheaper than a process context switch?
3. What is a PCB and what does it store?
4. When does context switching happen — what are the triggers?
5. Why does Node.js use a single thread and how does it handle concurrency?
6. What is the TLB and why does it need to be flushed on a process switch?
7. When would you use `worker_threads` vs `child_process` in Node.js?
