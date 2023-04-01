/*
  Given an array of integers, where all elements but one occur twice, find the unique element.
  a=[1,2,3,4,3,2,1]
  The unique element is 4
 */

function lonelyinteger(a) {
    let lonely;
    for (let i = 0; i < a.length; i++) {
        if (a.filter(x => x == a[i]).length == 1) {
            lonely = a[i];
        }
    }
    return lonely;
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));