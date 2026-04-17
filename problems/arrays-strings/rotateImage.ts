// Rotate Image
// https://leetcode.com/problems/rotate-image/
// Difficulty: Medium
// Pattern: Matrix Traversal

// You are given an n x n 2D matrix representing an image.
// Rotate the matrix 90 degrees clockwise IN-PLACE.
// You must modify the matrix directly — do NOT allocate another matrix.
//
// Example 1:
//   Input:  [[1,2,3],[4,5,6],[7,8,9]]
//   Output: [[7,4,1],[8,5,2],[9,6,3]]
//
// Example 2:
//   Input:  [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//   Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//
// Constraints:
//   n == matrix.length == matrix[i].length
//   1 <= n <= 20
//   -1000 <= matrix[i][j] <= 1000

function rotate(matrix: number[][]): void {
    // step 1: swap/transpose in place
    for (let i =0; i < matrix.length; i++){
        for(let j = i; j < matrix[0].length; j++){
            const m = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = m;
        }
    } 
    // step 2: resverse the rows
    for (let i=0; i<matrix.length;i++) {
        matrix[i] = matrix[i].reverse(); // O(n) reverse in place by two pointers 
    }
}

// Tests
import { runInPlaceTests } from "../../utils/test";

runInPlaceTests(rotate, [
  { input: [[1,2,3],[4,5,6],[7,8,9]],                        expected: [[7,4,1],[8,5,2],[9,6,3]] },
  { input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] },
]);
