//DAY 3: Intro to Conditional Statements

//If N is odd, print Weird
//If N is even and in the inclusive range of 2 to 5, print Not Weird
//If N is even and in the inclusive range of 6 to 20, print Weird
//If N is even and greater than 20, print Not Weird

function main() {
    const N = parseInt(readLine().trim(), 10);

    if (N % 2 == 1) {
        console.log('Weird');
    }else if(2<=N && N<=5){
        console.log('Not Weird');
    }else if(6<=N && N<=20){
        console.log('Weird');
    }else if(N>20){
        console.log('Not Weird');
    }
}