/*
  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
  Example
  arr=[1,3,5,7,9]
 
  The minimum sum is 1+3+5+7 and the maximum sum is 3+5+7+9. The function prints:
  16 24
 */

const miniMaxSum = (arr) => {
    let sortedArr = arr.sort();
    let minSum = sortedArr.slice(0, sortedArr.length - 1).reduce((a, b) => a + b, 0);
    let maxSum = sortedArr.slice(1).reduce((a, b) => a + b, 0);

    console.log(minSum, maxSum);
};

miniMaxSum([1,3,5,7,9]);