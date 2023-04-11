// DAY 10: Binary Numbers

//Convert base 10 number to base 2. Then count the consecutive ones, and return that number

function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = [];
    let count = 0;
    let binary = n.toString(2).split('');

    binary.forEach((num, i) => {
        if (num == 1) {
            count++;
            if (i == binary.length - 1) {
                arr.push(count);
            }
        } else {
            arr.push(count);
            count = 0;
        }
    });

    const ans = arr.sort((a, b) => b - a)[0];
    console.log(ans);
}