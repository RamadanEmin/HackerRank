//DAY 9: Recursion

//Write a factorial function that takes a positive integer, N as a parameter and prints the result of N! (N factorial).

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}