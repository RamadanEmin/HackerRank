function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * a + 2 * b,
        area: a * b
    };
}

console.log(Rectangle(4, 6));