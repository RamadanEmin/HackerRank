// DAY 16: Exceptions - String to Integer

// Read string S, if it has an integer value, print it, if else print 'Bad String'. Must use a error catching, 
// cannot use if/else or loops.

function main() {
    const S = readLine();
    const N = Number(S);

    try {
        console.log(isNaN(N) ? 'Bad String' : N);
    } catch (error) {
        console.log('Bad String');
    }
}