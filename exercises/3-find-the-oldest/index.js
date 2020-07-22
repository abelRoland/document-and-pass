/**
 **It receives a object with information about people and returns the oldest person
 *
 * @param {object} people - the object with the people
 * 
 * @returns {string} output - The oldest person.
 *
 * @example
 *
 * console.log(findTheOldest(people).name) // returns 'Ray'
 */

let findTheOldest = function (people) {
        const thisYear = new Date().getFullYear();
      
        return people.reduce((res, person) => {
          const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
          return age > res.age ? { person, age } : res;
        }, { person: null, age: 0 }).person;
      }

module.exports = findTheOldest;
