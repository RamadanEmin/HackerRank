// DAY 14: Scope

// Complete the Difference class by writing the following:
// A class constructor that takes an array of integers as a parameter and saves it to the elements instance variable.
// A computeDifference method that finds the maximum absolute difference between any numbers in N and stores it in the
// maximumDifference instance variable.

function main() {
    const inputs = inputLines.map(readLine)[1].split(' ');
    let max = -Infinity;
    let min = Infinity;
    inputs.forEach(str => {
        max = Math.max(Number(str), max);
        min = Math.min(Number(str), min);
    });

    console.log(Math.abs(max - min));
}