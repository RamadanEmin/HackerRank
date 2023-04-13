// DAY 21: Generics

// Write a single generic function named printArray; this function must take an array of generic 
// elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution 
// class in your editor tests your function.

function main() {
    let arr = inputLines.map(readLine);
    const map: {
        [key: string]: boolean;
    } = {};

    arr.forEach((el, idx) => {
        if (el in map) {

        } else if (idx !== 0) {
            map[el] = true;
            console.log(el);
        }
    });

}