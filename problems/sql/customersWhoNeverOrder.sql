-- Problem: Customers Who Never Order
-- URL: https://leetcode.com/problems/customers-who-never-order/
-- Difficulty: Easy
-- Pattern: LEFT JOIN + NULL check (or NOT IN subquery)

-- -----------------------------------------------
-- Problem Statement
-- -----------------------------------------------
-- Table: Customers
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | name        | varchar |
-- +-------------+---------+
-- id is the primary key.
--
-- Table: Orders
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | customerId  | int  |
-- +-------------+------+
-- id is the primary key. customerId is a foreign key to Customers.id.
--
-- Write a solution to find all customers who never placed an order.
-- Return the result in any order.
--
-- Example:
-- Customers:              Orders:
-- +----+-------+          +----+------------+
-- | id | name  |          | id | customerId |
-- +----+-------+          +----+------------+
-- | 1  | Alice |          | 1  | 1          |
-- | 2  | Bob   |          | 2  | 1          |
-- | 3  | Carol |          +----+------------+
-- +----+-------+
--
-- Output:
-- +-------+
-- | Customers |
-- +-------+
-- | Bob   |
-- | Carol |
-- +-------+

-- -----------------------------------------------
-- Schema
-- -----------------------------------------------
-- CREATE TABLE Customers (
--     id   INT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );
--
-- CREATE TABLE Orders (
--     id         INT PRIMARY KEY,
--     customerId INT,
--     FOREIGN KEY (customerId) REFERENCES Customers(id)
-- );

-- -----------------------------------------------
-- Test Data
-- -----------------------------------------------
-- INSERT INTO Customers (id, name) VALUES
--     (1, 'Alice'),
--     (2, 'Bob'),
--     (3, 'Carol');
--
-- INSERT INTO Orders (id, customerId) VALUES
--     (1, 1),
--     (2, 1);

-- -----------------------------------------------
-- Solution
-- -----------------------------------------------
-- Expected output: Bob, Carol
SELECT c.name as Customers
FROM Customers c
LEFT JOIN Orders o 
ON o.customerId  = c.id
WHERE o.id IS NULL;

