# DBMS Cheatsheet

## ACID

| Property | One-liner | Mechanism |
|---|---|---|
| Atomicity | All ops commit or none do | Undo log — reverses changes on failure |
| Consistency | DB moves between valid states only | Constraints (DB) + business rules (you) |
| Isolation | Concurrent transactions don't interfere | Row-level locks + isolation levels |
| Durability | Committed data survives crashes | Redo log (Write-Ahead Logging) |

## Isolation Levels (MySQL default = REPEATABLE READ)

| Level | Problem it allows |
|---|---|
| READ UNCOMMITTED | Dirty reads |
| READ COMMITTED | Non-repeatable reads |
| REPEATABLE READ | Phantom reads (mostly prevented in InnoDB) |
| SERIALIZABLE | Nothing — fully sequential |

## Key mechanisms
- **Undo log** — stores original row values before a write; used for rollback
- **Redo log** — stores committed changes; replayed on crash recovery
- **Row-level lock** — exclusive (write) or shared (read); released on commit
- **WAL** — write to redo log before confirming commit to client

---

## Likely interview questions
1. What does ACID stand for? Define each property in one sentence.
2. What happens if a transaction fails halfway through?
3. What's the difference between Consistency and Isolation?
4. What isolation level does MySQL use by default and why?
5. What is Write-Ahead Logging and why does it matter for Durability?
6. How does InnoDB implement Atomicity?
7. Two users book the last seat simultaneously — which ACID property prevents double booking?
