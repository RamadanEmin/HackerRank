function modifyArray(numbers) {
    return numbers.map((num) => (num % 2 === 0 ? 2 * num : 3 * num));
}

console.log(modifyArray([1, 2, 3, 4, 5]));