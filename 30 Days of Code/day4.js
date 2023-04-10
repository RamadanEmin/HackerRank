//DAY 4: Class vs. Instance

//Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. The constructor must assign initialAge to  age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:
//
//yearPasses() should increase the  instance variable by 1.
//amIOld() should perform the following conditional actions:
//If age < 13, print You are young..
//If age >= 14 and age < 18, print You are a teenager..
//Otherwise, print You are old..


function Person(initialAge) {
    let age;
    if (initialAge >= 0) {
        age = initialAge;
    } else {
        age = 0;
        console.log('Age is not valid, setting age to 0.');
    }
    this.amIOld = function () {
        if (age < 13) {
            console.log('You are young.');
        } else if (13 <= age && age < 18) {
            console.log('You are a teenager.');
        } else {
            console.log('You are old.');
        }

    };
    this.yearPasses = function () {
        age++;
    };
}