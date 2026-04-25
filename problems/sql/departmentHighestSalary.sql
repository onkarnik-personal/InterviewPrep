-- Problem: Department Highest Salary
-- URL: https://leetcode.com/problems/department-highest-salary/
-- Difficulty: Medium
-- Pattern: GROUP BY + subquery (or JOIN on max)

-- -----------------------------------------------
-- Problem Statement
-- -----------------------------------------------
-- Table: Employee
-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | id           | int     |
-- | name         | varchar |
-- | salary       | int     |
-- | departmentId | int     |
-- +--------------+---------+
-- id is the primary key. departmentId is a foreign key to Department.id.
--
-- Table: Department
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | name        | varchar |
-- +-------------+---------+
-- id is the primary key.
--
-- Write a solution to find employees who have the highest salary in each department.
-- Include ties — if two employees share the highest salary, both appear.
-- Return the result in any order.
--
-- Example:
-- Employee:                               Department:
-- +----+-------+--------+--------------+  +----+-------+
-- | id | name  | salary | departmentId |  | id | name  |
-- +----+-------+--------+--------------+  +----+-------+
-- | 1  | Joe   | 70000  | 1            |  | 1  | IT    |
-- | 2  | Jim   | 90000  | 1            |  | 2  | Sales |
-- | 3  | Henry | 80000  | 2            |  +----+-------+
-- | 4  | Sam   | 60000  | 2            |
-- | 5  | Max   | 90000  | 1            |
-- +----+-------+--------+--------------+
--
-- Output:
-- +------------+----------+--------+
-- | Department | Employee | Salary |
-- +------------+----------+--------+
-- | IT         | Jim      | 90000  |
-- | IT         | Max      | 90000  |  ← tie, both included
-- | Sales      | Henry    | 80000  |
-- +------------+----------+--------+

-- -----------------------------------------------
-- Schema
-- -----------------------------------------------
-- CREATE TABLE Department (
--     id   INT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );
--
-- CREATE TABLE Employee (
--     id           INT PRIMARY KEY,
--     name         VARCHAR(255) NOT NULL,
--     salary       INT NOT NULL,
--     departmentId INT,
--     FOREIGN KEY (departmentId) REFERENCES Department(id)
-- );

-- -----------------------------------------------
-- Test Data
-- -----------------------------------------------
-- INSERT INTO Department (id, name) VALUES
--     (1, 'IT'),
--     (2, 'Sales');
--
-- INSERT INTO Employee (id, name, salary, departmentId) VALUES
--     (1, 'Joe',   70000, 1),
--     (2, 'Jim',   90000, 1),
--     (3, 'Henry', 80000, 2),
--     (4, 'Sam',   60000, 2),
--     (5, 'Max',   90000, 1);

-- -----------------------------------------------
-- Solution
-- -----------------------------------------------
-- Expected output: IT/Jim/90000, IT/Max/90000, Sales/Henry/80000

SELECT d.name Department, e.name Employee, e.salary Salary
FROM Employee e
LEFT JOIN Department d ON e.departmentId = d.id
JOIN (
    SELECT departmentId, MAX(salary) as MaxSalary
    FROM Employee
    GROUP BY departmentId
) as e2 ON d.id = e2.departmentId AND e.salary = e2.MaxSalary;

