/**
 *It receives a string an turns the string in 'Pig Latin' language.
 *
 * @param {string} str - the string to be changed
 * 
 * @returns {string} newString - The 'translation' for Pig Latin.
 *
 * @example
 *
 * console.log(translate('eat pie')) // returns 'eatay iepay'
 */

const translate = (str) => {
    const startsWithVowel = /^([aeiou])(.*)/g;
    const startsWithConsonant = /^([^aeiou]+)(.*)/g;
    const startsWithTwoConsonant = /^([^aeiou]+)$c{2}(.*)/g;
    const startsWithThreeConsonant = /^([^aeiou]+)$c{3}(.*)/g;
    const includeQu = /(qu+)(.*)/g;
    const startsWithConsonantAndQu = /^([^aeiou]+)(qu+)(.*)/g;
    
    let srtArr = str.split(' ');

    let newString = srtArr.map(item => {
        if (startsWithConsonantAndQu.test(item)){
            return item.replace(startsWithConsonantAndQu, (...args) => `${args[3]}${args[1]}${args[2]}ay`)
        }else if (includeQu.test(item)){
            return item.replace(includeQu, (...args) => `${args[2]}${args[1]}ay`)
        }else {
        return item
        .replace(startsWithVowel, (...args) => `${args[1]}${args[2]}ay`)
        .replace(startsWithConsonant, (...args) => `${args[2]}${args[1]}ay`)
        .replace(startsWithTwoConsonant, (...args) => `${args[2]}${args[1]}ay`)
        .replace(startsWithThreeConsonant, (...args) => `${args[2]}${args[1]}ay`);
        }
    });
    
    return newString.join(' ');
};



module.exports = translate;

