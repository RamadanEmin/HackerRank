//DAY 8: Dictionaries and Maps

//Given  names and phone numbers, assemble a phone book that maps friends' names to their respective 
//phone numbers. You will then be given an unknown number of names to query your phone book for. For 
//each name queried, print the associated entry from your phone book on a new line in the form 
//name=phoneNumber; if an entry for name is not found, print Not found instead.

function processData(input) {
    input = input.split('\n');
    let inputs = Number(input[0]);

    let map = new Map();
    for (let i = 1; i <= inputs; i++) {
        map.set(input[i].split(' ')[0], input[i].split(' ')[1])
    }

    for (let j = inputs + 1; j < input.length; j++) {
        if (map.get(input[j]) != undefined) {
            console.log(input[j] + '=' + map.get(input[j]));
        } else {
            console.log('Not found');
        }
    }
} 