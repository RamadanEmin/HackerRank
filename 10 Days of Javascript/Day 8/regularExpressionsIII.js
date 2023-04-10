//  Match all occurrences of numbers in a string.

function regexVar() {
    let re = new RegExp('\\d+', 'g')
   
    return re;
}

const numberMatcher = regexVar();

console.log(numberMatcher.test("hey"));
console.log(numberMatcher.test("393939"));