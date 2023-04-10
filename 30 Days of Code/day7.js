//DAY 7: Arrays

//Given an array, arr, of n integers, print arr's elements in reverse order as a single line of space-separated numbers.

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    console.log(arr.reverse().join(' '));
}