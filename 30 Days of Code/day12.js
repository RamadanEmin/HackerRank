//DAY 12: Inheritance

/* You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.
Complete the Student class by writing the following:
A Student class constructor, which has  parameters:
A string, firstName.
A string, lastName.
An integer, if.
An integer array (or vector) of test scores, scores.
A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average: 
*/

class Student extends Person {

    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.scores = scores;
    }
    
    calculate = () => {
        let sum = 0;
        this.scores.forEach(element => sum += element);
        const average = sum / this.scores.length;

        var letter = "";
        if (average >= 90 && average <= 100) {
            letter = "O";
        } else if (average >= 80 && average < 90) {
            letter = "E";
        } else if (average >= 70 && average < 80) {
            letter = "A";
        } else if (average >= 55 && average < 70) {
            letter = "P";
        } else if (average >= 40 && average < 55) {
            letter = "D";
        } else if (average < 40) {
            letter = "T";
        }

        return letter;
    }
}