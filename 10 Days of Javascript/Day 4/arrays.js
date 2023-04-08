/*
   Return the second largest number in the array.
   @param {Number[]} nums - An array of numbers.
   @return {Number} The second largest number in the array.
*/

function getSecondLargest(nums) {
    return Array.from(new Set(nums)).sort((a, b) => b - a)[1];
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));