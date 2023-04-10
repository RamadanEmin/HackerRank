function main(a, b, c) {
    var i = 4
    var d = 4.0
    var s = "HackerRank "


    let i2 = parseInt(a);
    let d2 = parseFloat(b);
    let s2 = c;

    console.log(i + i2);
    console.log((d + d2).toFixed(1));
    console.log(s.concat(s2));
}
main(12, 4.0, 'is the best place to learn and practice coding!');