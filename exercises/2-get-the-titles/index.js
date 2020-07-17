/**
 *  It takes the array of objects and returns an array of specific properties of that objects
 *
 * @param {array} arr - array of objects
 * 
 * @returns {array} answer - array of specific properties of the objects
 *
 * @example
 *
 * console.log(getTheTitles(books)); // ['Book1', 'Book2']
 *
 */
const getTheTitles = (arr) => {
    const answer = arr.map(x => x.title);
    return answer; 
}

module.exports = getTheTitles;
