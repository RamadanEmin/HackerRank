function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const root = Math.sqrt((p * p) - (16 * a));
    const s1 = (p + root) / 4;
    const s2 = (p - root) / 4
    return [s2, s1]
}

const [s1, s2] = [10, 14];

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log(x, y);