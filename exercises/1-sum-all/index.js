/**
 * The function takes 2 integers and returns the sum of every number between (and including) them.
 * 
 * @param {number} num1 - the first integer;
 * @param {number} num2 - the first integer;
 * @returns {number} sum - the sum of the two integers;
 * 
 * @example
 *   
 * sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
 */

const sumAll = (num1, num2) => {

    let sum = 0;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    let i = (num1 < num2) ? num1 : num2;
    let range = (num1 > num2) ? num1 : num2;

    while (i <= range) {
        sum += i;
        i++;
    }

    return sum;

}

module.exports = sumAll
