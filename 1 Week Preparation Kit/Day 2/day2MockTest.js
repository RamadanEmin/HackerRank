/*
Sean invented a game involving a 2n x 2x matrix where each cell of the matrix
contains an integer. He can reverse any of its rows or columns any number of times.
The goal of the game is to maximize the sum of the elements in the n x n submatrix
located in the upper-left quadrant of the matrix. Given in the initial configurations
for q matrices, help Sean reverse the rows and columns of the each matrix in the best
possible way so that the sum of the elements in the matrix's upper-left quadrant is maxumal.

Exaplle
matrix = [[1,2],[3,4]]
It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1
1 2
4 3
And now reverse column 0:
4 2
1 3
The maximal sum is 4.
*/

const flippingMatrix = (matrix) => {
  let n = matrix.length / 2;
  let max = 0;
  let total = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][col], max);
      max = Math.max(matrix[row][2 * n - col - 1], max);
      max = Math.max(matrix[2 * n - row - 1][col], max);
      max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max);

      total += max;
    }
  }
  return total;
};

console.log(flippingMatrix([[1,2],[3,4]]));