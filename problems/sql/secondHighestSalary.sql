-- Problem: Second Highest Salary
-- https://leetcode.com/problems/second-highest-salary/
-- Difficulty: Medium
-- Pattern: Aggregation / Subquery / NULL handling

-- Given a table Employee(id, salary), return the second highest distinct salary.
-- If there is no second highest salary, return NULL.
--
-- Example 1:
--   Input:  Employee = [(1,100),(2,200),(3,300)]
--   Output: 200
--
-- Example 2:
--   Input:  Employee = [(1,100)]
--   Output: null
--
-- Constraints:
--   - salary is an integer
--   - there may be duplicate salaries
--   - must return NULL (not empty result) when no second highest exists

-- Schema
-- CREATE TABLE Employee (id INT PRIMARY KEY, salary INT);

-- Test data
-- INSERT INTO Employee VALUES (1, 100), (2, 200), (3, 300);
-- INSERT INTO Employee VALUES (1, 100);  -- single row case

-- Solution
SELECT
  NULL;  -- replace with your query

-- Expected (test 1): 200
-- Expected (test 2): NULL
