/*
 * Multiply the number n, being operated upon,
 * by every positive integer smaller than n.
 */

function factorial(n) {
    if (n < 2) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(4));