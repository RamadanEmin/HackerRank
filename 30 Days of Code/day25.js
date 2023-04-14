//  DAY 25: Running Time and Complexity

//  A prime is a natural number greater than 1 that has no positive
//  divisors other than 1 and itself. Given a number, n, determine 
//  and print whether it's prime or notPrime.

function processData(input) {
    let inputArr = input.split('\n').map(Number);

    inputArr.shift();
    inputArr.forEach(function (element) {
        if (isPrime(element)) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    });
}

function isPrime(number) {
    let range = Math.floor(Math.sqrt(number));

    if (number < 2) {
        return false;
    } else if (number == 2) {
        return true;
    }

    for (let i = 2; i <= range; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}