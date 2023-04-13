//DAY 20: Sorting

// Using a bubble sort return how many swaps were completed in order to return the array in numerical order. 
// Also return the first Element and the last element in the array.

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    let numberOfSwap = 0;
    for (let i = 0; i < n - 1; i++) {
        let curVal = a[i];
        let nextVal = a[i + 1];
        while (curVal > nextVal) {
            a[i] = nextVal;
            a[i + 1] = curVal;
            numberOfSwap++;
            i--;
            curVal = a[i];
            nextVal = a[i + 1];
        }
    }
    console.log(`Array is sorted in ${numberOfSwap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}