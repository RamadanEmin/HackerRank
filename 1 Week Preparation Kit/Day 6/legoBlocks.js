/*
You have an infinite number of 4 types of lego blocks of sizes given as (depth x height x width):
Using these blocks, you want to make a wall of height n and width m. Features of the wall are:

- The wall should not have any holes in it.
- The wall you build should be one solid structure, so there should not be a straight vertical break across all rows of bricks.
- The bricks must be laid horizontally.

How many ways can the wall be built?
*/

function legoBlocks(n, m) {
    var modulo = BigInt(Math.pow(10, 9) + 7);
    var oneFloor = [];
    var dirtyMultiFloor = [];
    var cleanMultiFloor = [];

    oneFloor = [0n, 1n, 2n, 4n, 8n];

    for (let width = 1; width <= m; width++) {
        if (width > 4) {
            oneFloor[width] = (oneFloor[width - 1] + oneFloor[width - 2] + oneFloor[width - 3] + oneFloor[width - 4]) % modulo;
        }

        dirtyMultiFloor[width] = 1n;
        for (let k = 0; k < n; k++) {
            dirtyMultiFloor[width] *= oneFloor[width];
            dirtyMultiFloor[width] %= modulo;
        }
    }

    for (let width = 1; width <= m; width++) {
        cleanMultiFloor[width] = dirtyMultiFloor[width] + modulo;
        for (let k = 1; k < width; k++) {
            cleanMultiFloor[width] -= (cleanMultiFloor[k] * dirtyMultiFloor[width - k]) % modulo;
            cleanMultiFloor[width] += modulo;
        }
    }

    return cleanMultiFloor[m] % modulo;
}