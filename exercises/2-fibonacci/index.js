/**
 * The function takes 1 integers and returns the member of the Fibonacci series.
 * 
 * @param {number} num1 - the integer;
 * @returns {number} num - the member of the Fibonacci series;
 * 
 * @example
 *   
 * fibonacci(10) // returns 55
 */
 
const fibonacci = (num) => {
    if (num < 0) {
        return 'OOPS';
    }
    const arr = [0, 1];
    
    for(let i = 2; i <= num; i++) {
        let first = arr[i - 1];
        let second = arr[i - 2];
        arr.push(first + second); 
    }
    return arr[num];

}

module.exports = fibonacci
