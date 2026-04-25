-- Problem: Rising Temperature
-- URL: https://leetcode.com/problems/rising-temperature/
-- Difficulty: Easy
-- Pattern: Self join + date arithmetic

-- -----------------------------------------------
-- Problem Statement
-- -----------------------------------------------
-- Table: Weather
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | recordDate    | date    |
-- | temperature   | int     |
-- +---------------+---------+
-- id is the primary key.
--
-- Find all ids where the temperature is higher than the previous day.
-- Return the result in any order.
--
-- Example:
-- +----+------------+-------------+
-- | id | recordDate | temperature |
-- +----+------------+-------------+
-- | 1  | 2015-01-01 | 10          |
-- | 2  | 2015-01-02 | 25          |
-- | 3  | 2015-01-03 | 20          |
-- | 4  | 2015-01-04 | 30          |
-- +----+------------+-------------+
--
-- Output:
-- +----+
-- | id |
-- +----+
-- | 2  |
-- | 4  |
-- +----+
-- Explanation: Jan 02 (25 > 10), Jan 04 (30 > 20)

-- -----------------------------------------------
-- Schema
-- -----------------------------------------------
-- CREATE TABLE Weather (
--     id          INT PRIMARY KEY,
--     recordDate  DATE NOT NULL,
--     temperature INT NOT NULL
-- );

-- -----------------------------------------------
-- Test Data
-- -----------------------------------------------
-- INSERT INTO Weather (id, recordDate, temperature) VALUES
--     (1, '2015-01-01', 10),
--     (2, '2015-01-02', 25),
--     (3, '2015-01-03', 20),
--     (4, '2015-01-04', 30);

-- -----------------------------------------------
-- Solution
-- -----------------------------------------------
-- Expected output: id 2, id 4

SELECT w1.id 
FROM Weather w1
JOIN Weather w2 ON DATEDIFF(w1.recordDate,w2.recordDate) = 1
WHERE w1.temperature > w2.temperature;