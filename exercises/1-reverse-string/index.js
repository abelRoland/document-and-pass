/**
 * reverse a string
 * @param {string} str - the string to reverse;
 * @returns {string} - the reversed string 
 * 
 * @example
 * reverseString('hello there') // returns 'ereht olleh'
 */

const reverseString = (str) => {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

module.exports = reverseString
