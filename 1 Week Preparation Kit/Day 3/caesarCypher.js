/*
 Julius Caesar protected his confidential information by encrypting it using a cipher. 
 Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet,
 just rotate back to the front of the alphabet. 
 In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 Original alphabet:      abcdefghijklmnopqrstuvwxyz
 Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
*/

const caesarCipher = (s, k) => {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let ch = s.charCodeAt(i);
        if (65 <= ch && ch <= 90) {
            result += String.fromCharCode((ch - 65 + k) % 26 + 65);
        } else if (97 <= ch && ch <= 122) {
            result += String.fromCharCode((ch - 97 + k) % 26 + 97);
        } else {
            result += s[i];
        }
    }
    return result;
};

console.log(caesarCipher('middle-Outz', 2));