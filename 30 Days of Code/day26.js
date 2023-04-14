// DAY 26: NESTED LOGIC

// Your local library needs your help! Given the expected and actual return dates for a library book, 
// create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: .
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, .
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the .
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of .

function processData(input) {
    let dates = input.split('\n');
    let fine = 0;

    let a = dates[0].split(' ').map(Number);
    let b = dates[1].split(' ').map(Number);
    let actDate = new Date(a[2], a[1], a[0]);
    let expDate = new Date(b[2], b[1], b[0]);

    if (actDate <= expDate) {
        fine = 0;
    } else if (a[1] == b[1] && a[2] == b[2]) {
        fine = 15 * (a[0] - b[0]);
    } else if (a[2] == b[2]) {
        fine = 500 * (a[1] - b[1]);
    } else {
        fine = 10000;
    }
    console.log(fine);
}