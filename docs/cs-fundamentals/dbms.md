# DBMS — Fundamentals

> Coming next session: ACID Properties

---

## Your context going in

You've used MySQL throughout your career at the **service layer** — querying data via an ORM or writing simple SELECT/JOIN queries. You've never owned schema design from scratch. You once optimized a 5-second query to 100ms but needed help — the fix was replacing `RANK() OVER (PARTITION BY ...)` with a plain `GROUP BY + ORDER BY`. You understood the fix immediately when shown, but couldn't arrive at it yourself.

That's the gap we're closing: **you understand SQL syntax but not the mental model behind query planning, schema tradeoffs, and when to reach for which tool.**

---

## Topics

1. ACID — what each property means and when each gets violated
2. Normalization — 1NF/2NF/3NF, and when to denormalize deliberately
3. Indexing — B-tree internals, what queries use indexes, what kills them
4. Joins — INNER, LEFT, RIGHT, FULL — execution model, not just syntax
5. Transactions & Locks — isolation levels, deadlocks, how MySQL handles them
6. Query patterns — aggregation vs window functions, correlated subqueries, CTEs

---

> Coming next session: ACID Properties
