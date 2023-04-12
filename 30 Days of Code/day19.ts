// DAY 19: Interfaces

// The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are 
// provided for you in the editor below.

// Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. 
// The implementation for the divisorSum(n) method must return the sum of all divisors of n.

function main() {
    let num = Number(readLine());
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    console.log('I implemented: AdvancedArithmetic');
    console.log(sum);
}