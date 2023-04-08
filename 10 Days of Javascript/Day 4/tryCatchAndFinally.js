function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }
    catch (error) {
        console.log("s.split is not a function");
    }
    finally {
        console.log(s);
    }
}

reverseString('1234');
reverseString(1234);