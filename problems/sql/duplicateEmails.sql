-- Problem: Duplicate Emails
-- URL: https://leetcode.com/problems/duplicate-emails/
-- Difficulty: Easy
-- Pattern: GROUP BY + HAVING

-- -----------------------------------------------
-- Problem Statement
-- -----------------------------------------------
-- Table: Person
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | email       | varchar |
-- +-------------+---------+
-- id is the primary key. Each row contains one email (no uppercase, no NULLs).
--
-- Write a solution to report all duplicate emails (emails that appear more than once).
-- Return the result in any order.
--
-- Example:
-- Input:
-- +----+---------+
-- | id | email   |
-- +----+---------+
-- | 1  | a@b.com |
-- | 2  | c@d.com |
-- | 3  | a@b.com |
-- +----+---------+
--
-- Output:
-- +---------+
-- | Email   |
-- +---------+
-- | a@b.com |
-- +---------+
-- Explanation: a@b.com appears in rows 1 and 3.

-- -----------------------------------------------
-- Schema
-- -----------------------------------------------
-- CREATE TABLE Person (
--     id    INT PRIMARY KEY,
--     email VARCHAR(255) NOT NULL
-- );

-- -----------------------------------------------
-- Test Data
-- -----------------------------------------------
-- INSERT INTO Person (id, email) VALUES
--     (1, 'a@b.com'),
--     (2, 'c@d.com'),
--     (3, 'a@b.com');

-- -----------------------------------------------
-- Solution
-- -----------------------------------------------
-- Expected output: a@b.com

SELECT email FROM Person 
GROUP BY email
HAVING COUNT(*) > 1;

