/**
 * It receives a year and it answers if the year is or isn't leap.
 *
 * @param {number} Year - the year to test
 * 
 * @returns {Boolean} answer - The answer of if the year is leap or not
 *
 * @example
 *
 * console.log(leapYears(34992)) // returns true
 */
const leapYears = function (num) {
    if (num  % 4 === 0) {
        if (num % 100 === 0 && num % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

module.exports = leapYears
