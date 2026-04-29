-- Problem: Nth Highest Salary
-- https://leetcode.com/problems/nth-highest-salary/
-- Difficulty: Medium
-- Pattern: Parameterized subquery / LIMIT + OFFSET

-- Write a SQL function that returns the nth highest distinct salary.
-- If there is no nth highest salary, return null.
--
-- Example 1:
--   Input:  Employee = [(1,100),(2,200),(3,300)], N = 2
--   Output: 200
--
-- Example 2:
--   Input:  Employee = [(1,100)], N = 2
--   Output: null
--
-- Constraints:
--   - salary is an integer
--   - there may be duplicate salaries (use DISTINCT)
--   - must return NULL (not empty result) when nth salary doesn't exist

-- Schema
-- CREATE TABLE Employee (id INT PRIMARY KEY, salary INT);

-- Test data
-- INSERT INTO Employee VALUES (1, 100), (2, 200), (3, 300);

-- LeetCode requires a function — note: OFFSET cannot take an expression directly in MySQL,
-- so you must declare a variable first.
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN

  RETURN (
    -- your query here
  );
END

-- Expected (N=2, three rows): 200
-- Expected (N=2, one row):    null
