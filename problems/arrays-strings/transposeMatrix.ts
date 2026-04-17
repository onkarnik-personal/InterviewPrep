// Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/
// Difficulty: Easy
// Pattern: Matrix Traversal

// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal,
// switching the matrix's row and column indices.
//
// Example 1:
//   Input:  matrix = [[1,2,3],[4,5,6],[7,8,9]]
//   Output: [[1,4,7],[2,5,8],[3,6,9]]
//
// Example 2:
//   Input:  matrix = [[1,2,3],[4,5,6]]
//   Output: [[1,4],[2,5],[3,6]]
//
// Constraints:
//   m == matrix.length
//   n == matrix[i].length
//   1 <= m, n <= 1000
//   1 <= m * n <= 10^5
//   -10^9 <= matrix[i][j] <= 10^9

function transpose(matrix: number[][]): number[][] {
    const result = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0));
    for (let i = 0; i < matrix.length ; i++) {
        for (let j= 0; j < matrix[0].length; j++){
          result[j][i] = matrix[i][j]
        }
    }
    return result;
}

// Tests
import { runTests } from "../../utils/test";

runTests(transpose, [
  { input: [[1,2,3],[4,5,6],[7,8,9]], expected: [[1,4,7],[2,5,8],[3,6,9]] },
  { input: [[1,2,3],[4,5,6]],         expected: [[1,4],[2,5],[3,6]] },
  { input: [[1]],                     expected: [[1]] },
]);
