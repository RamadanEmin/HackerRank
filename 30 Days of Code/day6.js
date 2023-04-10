//DAY 6: Let's Review

//Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed 
//and odd-indexed characters as  space-separated strings on a single line 

function processData(input) {
    input = input.split("\n");

    for (let i = 1; i < input.length; i++) {
        let split = input[i].split("");

        var even = "";
        var odd = "";

        for (let j = 0; j < split.length; j++) {
            if (j % 2 == 0) {
                even += split[j];
            } else {
                odd += split[j];
            }
        }

        console.log(even + " " + odd);
    }
}