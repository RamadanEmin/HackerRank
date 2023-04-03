/*
  Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
  Determine if the columns are also in ascending alphabetical order, top to bottom.
  Return YES if they are or NO if they are not.
  Example:
  grid=['abc','ade','efg']
  The grid is illustrated below.
  abc
  ade
  efg
  The rows are already in alphabetical order.
  The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES.
  Only elements within the same row can be rearranged.
  They cannot be moved to a different row.
 */

const gridChallenge = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort();
    }
    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > grid[i + 1][j]) {
                return 'NO';
            }
        }
    }
    return 'YES';
};

console.log(gridChallenge(['abc','ade','efg']));