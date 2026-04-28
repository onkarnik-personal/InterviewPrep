// Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
// Difficulty: Medium
// Pattern: HashSet

// Problem:
// Determine if a 9x9 Sudoku board is valid.
// A board is valid if:
//   - Each row contains digits 1-9 with no repetition
//   - Each column contains digits 1-9 with no repetition
//   - Each of the nine 3x3 sub-boxes contains digits 1-9 with no repetition
//
// Empty cells are marked '.' and are ignored.
// You do NOT need to check if the puzzle is solvable — only if current filled cells are valid.
//
// Example 1:
// Input:
// [["5","3",".",".","7",".",".",".","."],
//  ["6",".",".","1","9","5",".",".","."],
//  [".","9","8",".",".",".",".","6","."],
//  ["8",".",".",".","6",".",".",".","3"],
//  ["4",".",".","8",".","3",".",".","1"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".","6",".",".",".",".","2","8","."],
//  [".",".",".","4","1","9",".",".","5"],
//  [".",".",".",".","8",".",".","7","9"]]
// Output: true
//
// Example 2:
// Input: same board but board[0][0] = "8" (now col 0 has two 8s — rows 0 and 3)
// Output: false
//
// Constraints:
// - board.length == 9
// - board[i].length == 9
// - board[i][j] is a digit 1-9 or '.'

function isValidSudoku(board: string[][]): boolean {
  // step 1: validate columns
  for (let i = 0; i < board[0].length; i++) {
    const colSet = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      if (colSet.has(num)) return false; // duplicate number in a row
      colSet.add(num)
    }
  }

  // step 2: validate rows
  for (let i = 0; i < board.length; i++) {
    const rowSet = new Set();
    for (let j = 0; j < board.length; j++) {
      const num = board[j][i]
      if (num === '.') continue;
      if (rowSet.has(num)) return false; // duplicat in a row
      rowSet.add(num);
    }
  }
  // step 3: validate sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxSet = new Set()
      for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
        for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
          const boxNum = board[i][j]
          if (boxNum === '.') continue;
          if (boxSet.has(boxNum)) return false;
          boxSet.add(boxNum);
        }
      }
    }
  }

  return true;
}

// --- Test cases ---
const validBoard: string[][] = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const invalidBoard: string[][] = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."], // 8 here...
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"], // ...and 8 here — col 0 duplicate
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const testCase3 = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
];

console.log(isValidSudoku(validBoard));   // expected: true
console.log(isValidSudoku(invalidBoard)); // expected: false
console.log(isValidSudoku(testCase3)); // expected: false
