function getMaxLessThanK(n, k) {
    return ((k | k - 1) > n) ? (k - 2) : (k - 1)
}

console.log(getMaxLessThanK(5, 2));
console.log(getMaxLessThanK(8, 5));
console.log(getMaxLessThanK(2, 2));