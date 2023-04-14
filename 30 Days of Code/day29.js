// Given set S = {1,2,3,...,N}.Find two integers, A and B (where A < B), from set S such that 
// the value of A&B is the maximum possible and also less than a given integer, K. In this case, &
// represents the bitwise AND operator.

function bitwiseAnd(N, K) {
    let max = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = N; j > i; j--) {
            let bitAndOp = i & j;
            if (bitAndOp > max && bitAndOp < K) {
                max = bitAndOp;
            }
        }
    }

    return max;
}