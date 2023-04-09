// Match a string that starts and ends with the same vowel

function regexVar() {
    let re = RegExp(/^([aeiou]).*\1$/);

    return re;
}

const regex = regexVar();

console.log(regex.test('bcd')); 
console.log(regex.test('abcda'));