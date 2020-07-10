/**
 * filters out all values that are strictly equal to toRemove
 * returns a new array, does not modify arrOfNumbers
 * @param {number[]} arrOfNumbers - the numbers to filter
 * @param {number} toRemove - the number to remove
 * @returns {number[]} arrNew - the filtered numbers
 */

const removeFromArray = (arrOfNumbers, ...toRemove) => {
    let arrNew = [];
    for (const number of arrOfNumbers) {
        if (!toRemove.includes(number)) {
            arrNew.push(number);
        }
    }
    return arrNew;
};

module.exports = removeFromArray
