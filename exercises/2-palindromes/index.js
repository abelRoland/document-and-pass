/**
 *It receives a string and evaluates if it is a palindrome or not
 *
 * @param {string} str - the string to be evaluate
 * 
 * @returns {Boolean} answer - The answer if is palindrome or not
 *
 * @example
 *
 * console.log(palindromes('Racecar!')) // returns true
 */

const palindromes = (str) => {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
};

module.exports = palindromes;
