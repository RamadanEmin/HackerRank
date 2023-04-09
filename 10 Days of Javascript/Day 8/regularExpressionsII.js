// Match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
// followed by one or more letters. 

function regexVar() {
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-z])*$')

    return re;
}

const titleMatcher = regexVar();

console.log(titleMatcher.test("Mrs.Y"));

console.log(titleMatcher.test("Dr#Joseph"));