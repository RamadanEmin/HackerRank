// Consider a database table, Emails, which has the attributes First Name and Email ID.
// Given N rows of data simulating the Emails table, print an alphabetically - ordered list 
// of people whose email address ends in @gmail.com.

function main() {
    var N = parseInt(readLine());
    var patt = new RegExp("@gmail.com");
    var names = [];
    for (var a0 = 0; a0 < N; a0++) {
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        if (patt.test(emailID)) {
            names.push(firstName);
        }
    }
    names.sort().forEach(function (name) {
        console.log(name);
    });
}