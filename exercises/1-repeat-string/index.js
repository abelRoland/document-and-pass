/**
 ** repeat a string a given number of times
 * @param {string} toRepeat - the string to repeat;
 * @param {number} times - the number of times to repeat;
 * @returns {string} - the final string 
 * 
 * @example
 * repeatString('hey', 3) // returns 'heyheyhey'
 */

const repeatString = (toRepeat, times) => {
 let stringtoRepeat = String(toRepeat);
 let result = '';
 if (typeof times !== 'number') {
    throw new Error('parameter must be a number');
  }

  if (times < 0) {
    return 'ERROR';
  }
 for (let i = 0; i < times; i++) {
    result += stringtoRepeat;
 }
 return result;
}

module.exports = repeatString
