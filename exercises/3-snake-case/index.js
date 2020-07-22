/**
 *It receives a string an turns the string in snake case (snake_case)
 *
 * @param {string} str - the string to be changed
 * 
 * @returns {string} str - The string in snake case
 *
 * @example
 *
 * console.log(snakeCase('SnAkE..CaSe..Is..AwEsOmE')) // returns 'snake_case_is_awesome'
 */


const snakeCase = (str) => {
  
  if (str.charAt(2)===str.charAt(2).toUpperCase()){
      return str.replace(/\.+/g,'_').toLowerCase();
  }
  
  else{
      return str
      .replace(/[^a-zA-Z -]/g, "")
      .replace(/[ -]/g, '_')
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .toLowerCase();
            
  }

}

module.exports = snakeCase

