/*
  Given a square matrix, calculate the absolute difference between the sums of its diagonals.
  For example, the square matrix arr is shown below:
  123
  456
  989
  The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5 +9=17. Their absolute difference is |15-17|= 2
 */

function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let difference = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
        secondDiagonal += arr[i][arr.length - i - 1];
    }

    difference = Math.abs(firstDiagonal - secondDiagonal);

    return difference;
}

console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]));