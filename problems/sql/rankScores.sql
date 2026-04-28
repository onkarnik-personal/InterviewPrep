-- Problem: Rank Scores
-- https://leetcode.com/problems/rank-scores/
-- Difficulty: Medium
-- Pattern: Window Functions / DENSE_RANK

-- Given a Scores table, rank each score from highest to lowest.
-- Rules:
--   - Ties share the same rank
--   - No gaps after a tie (1, 1, 2 — not 1, 1, 3)
--   - Return ordered by score DESC
--
-- Example:
--   Input:
--     Scores = [(1,3.50),(2,3.65),(3,4.00),(4,3.85),(5,4.00),(6,3.65)]
--   Output:
--     | score | rank |
--     | 4.00  |  1   |
--     | 4.00  |  1   |
--     | 3.85  |  2   |
--     | 3.65  |  3   |
--     | 3.65  |  3   |
--     | 3.50  |  4   |
--
-- Constraints:
--   - 1 <= n <= 3 * 10^4
--   - score is a decimal with two decimal places

-- Schema
-- CREATE TABLE Scores (id INT PRIMARY KEY, score DECIMAL(4,2));

-- Test data
-- INSERT INTO Scores VALUES (1, 3.50), (2, 3.65), (3, 4.00), (4, 3.85), (5, 4.00), (6, 3.65);

-- Solution
SELECT 
score, 
DENSE_RANK() OVER (
    ORDER BY score DESC
) AS `rank`
FROM Scores; 


-- Expected:
-- | score | rank |
-- | 4.00  |  1   |
-- | 4.00  |  1   |
-- | 3.85  |  2   |
-- | 3.65  |  3   |
-- | 3.65  |  3   |
-- | 3.50  |  4   |
