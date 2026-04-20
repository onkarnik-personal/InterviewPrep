# DBMS — Fundamentals

---

## Your context going in

You've used MySQL throughout your career at the **service layer** — querying data via an ORM or writing simple SELECT/JOIN queries. You've never owned schema design from scratch. You once had to optimize a 5-second query to 100ms but had very little DBMS exposure — you needed to learn what window functions, RANK, and PARTITION even were before you could understand the fix (replacing `RANK() OVER (PARTITION BY ...)` with a plain `GROUP BY + ORDER BY`).

That's the gap: **not just syntax — the fundamental building blocks of SQL beyond basic CRUD.** Schema design, query planning, knowing what tools exist and when to reach for each.

---

## Topics

1. ACID — what each property means and when each gets violated ✅
2. Normalization — 1NF/2NF/3NF, and when to denormalize deliberately
3. Indexing — B-tree internals, what queries use indexes, what kills them
4. Joins — INNER, LEFT, RIGHT, FULL — execution model, not just syntax
5. Transactions & Locks — isolation levels, deadlocks, how MySQL handles them
6. Query patterns — aggregation vs window functions, correlated subqueries, CTEs

---

## ACID Properties

A **transaction** is a group of operations that succeed or fail together — all or nothing. ACID is the 4 guarantees every transaction in a relational DB provides.

### A — Atomicity
All operations in a transaction commit, or none do. Enforced via the **undo log** — before modifying any row, MySQL writes the original value to this log. If the transaction fails, InnoDB reads the undo log and reverses every change in reverse order.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 5000 WHERE id = 1;  -- undo log saves original
UPDATE accounts SET balance = balance + 5000 WHERE id = 2;  -- undo log saves original
-- crash here → InnoDB restores both rows from undo log
COMMIT;
```

### C — Consistency
The DB moves from one valid state to another. Schema rules (constraints, foreign keys, NOT NULL, UNIQUE) are never violated mid-transaction. Enforced by two layers:
- **DB engine** — checks constraints on every write automatically
- **You** — business rules the DB can't know (e.g. order total = sum of line items) are your responsibility inside the transaction

### I — Isolation
Concurrent transactions don't interfere with each other. The final result is the same as if they ran one after the other. Enforced via **row-level locks**:
- **Exclusive lock** — placed on rows you write; no other transaction can read or write until you commit
- **Shared lock** — placed on rows you read (in some modes); others can read but not write

MySQL has 4 isolation levels — trading correctness for performance:

| Level | What you might see |
|---|---|
| READ UNCOMMITTED | Dirty reads — you see uncommitted changes from other transactions |
| READ COMMITTED | No dirty reads, but data can change between two reads in same transaction |
| REPEATABLE READ | Same row always returns same value within your transaction (**MySQL default**) |
| SERIALIZABLE | Full isolation — truly sequential, slowest |

Practical example: two API requests at Pattern hitting the same order row simultaneously — InnoDB's row lock ensures one waits for the other. Your code never sees partial state.

### D — Durability
Once committed, data survives crashes. Enforced via the **redo log (Write-Ahead Logging)**:

```
COMMIT → write to redo log (disk) → confirm to client → write to data file (async)
```

Client gets confirmation only after the redo log hits disk. On crash, InnoDB replays the redo log on restart to recover committed data.

### Mechanisms summary

| Property | Mechanism |
|---|---|
| Atomicity | Undo log |
| Consistency | Constraints + your application code |
| Isolation | Row-level locks + isolation levels |
| Durability | Redo log (Write-Ahead Logging) |

---

> Coming next session: Normalization (1NF, 2NF, 3NF)
