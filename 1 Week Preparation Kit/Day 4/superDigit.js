/*
  We define super digit of an integer x using the following rules:
  Given an integer, we need to find the super digit of the integer.
 
   - If x has only 1 digit, then its super digit is  x .
   - Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x .
  For example, the super digit of 9875 will be calculated as:
 
  super_digit(9875)   	9+8+7+5 = 29 
    super_digit(29) 	2 + 9 = 11
    super_digit(11)		1 + 1 = 2
    super_digit(2)		= 2
    Example 
    n='9875'
    k=4
*/

function superDigit(n, k) {
    let numString = n.toString();
    if (numString.length == 1) {
      return n;
    }
    let sum = 0;
  
    for (let i = 0; i < numString.length; i++) {
      sum += Number.parseInt(numString.charAt(i));
    }
    if (k > 0) {
      sum = sum * k;
    }
    return superDigit(sum, 0);
}

console.log(superDigit(9875));