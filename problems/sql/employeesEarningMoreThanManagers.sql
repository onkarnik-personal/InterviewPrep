-- Problem: Employees Earning More Than Their Managers
-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
-- Difficulty: Easy
-- Pattern: Self Join

-- Given a table Employee(id, name, salary, managerId),
-- find the names of employees who earn more than their manager.
--
-- Example:
--   Input:
--     Employee = [(1,'Joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,NULL),(4,'Max',90000,NULL)]
--   Output: [('Joe')]
--   Explanation: Joe earns 70000, his manager Sam earns 60000 → Joe earns more
--
-- Constraints:
--   - managerId is NULL if the employee has no manager
--   - guaranteed at least one result row in test data

-- Schema
-- CREATE TABLE Employee (
--   id INT PRIMARY KEY,
--   name VARCHAR(255),
--   salary INT,
--   managerId INT
-- );

-- Test data
-- INSERT INTO Employee VALUES (1,'Joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,NULL),(4,'Max',90000,NULL);

--solution 2 (slower)
SELECT name as Employee FROM Employee e1
WHERE salary > (
    SELECT salary FROM Employee e2
    WHERE e2.id = e1.managerId
);

-- Solution 2 (faster)
SELECT e1.name as Employee FROM Employee e1
INNER JOIN Employee e2 on e1.managerId = e2.id
WHERE e1.salary > e2.salary;

-- Expected: Joe
