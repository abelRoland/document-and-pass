/**
 *It receives a string and a integer to shift the string, such as the Caesar Cypher
 *
 * @param {string} str - the string to be shifted
 * 
 * @param {number} amount - the amount of shifting that the string will receive
 * 
 * @returns {string} outpue - The string shifted.
 *
 * @example
 *
 * console.log(caesar('Hello, World!', 5)) // returns 'Mjqqt, Btwqi!'
 */

const caesar = (str, amount) => {
    if (amount < 0) {
    return caesar(str, amount + 26);
  }

  let output = '';

  // Go through each character
  for (let i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    let c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      let code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {

        c = String.fromCharCode(((code - 65 + amount) % 26) + 65); // Uppercase letters

      } else if (code >= 97 && code <= 122) {

        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);  // Lowercase letters

      }
    }

    output += c;
  }

  // All done!
  return output;
};

module.exports = caesar;
