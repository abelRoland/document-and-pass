<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/22/2020, 9:46:09 PM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
Started
......


2 specs, 0 failures
Finished in 0.01 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(arrOfNumbers, ...toRemove) ⇒ <code>Array.&lt;number&gt;</code>
filters out all values that are strictly equal to toRemove
returns a new array, does not modify arrOfNumbers


**Returns**: <code>Array.&lt;number&gt;</code> - arrNew - the filtered numbers  

| Param | Type | Description |
| --- | --- | --- |
| arrOfNumbers | <code>Array.&lt;number&gt;</code> | the numbers to filter |
| ...toRemove | <code>number</code> | the number to remove |

**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(toRepeat, times) ⇒ <code>string</code>
* repeat a string a given number of times


**Returns**: <code>string</code> - - the final string  

| Param | Type | Description |
| --- | --- | --- |
| toRepeat | <code>string</code> | the string to repeat; |
| times | <code>number</code> | the number of times to repeat; |

**Example**  
```js
repeatString('hey', 3) // returns 'heyheyhey'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(str) ⇒ <code>string</code>
reverse a string


**Returns**: <code>string</code> - - the reversed string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to reverse; |

**Example**  
```js
reverseString('hello there') // returns 'ereht olleh'
```
**Test Report**
```
Started
............


4 specs, 0 failures
Finished in 0.003 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(num1, num2) ⇒ <code>number</code>
The function takes 2 integers and returns the sum of every number between (and including) them.


**Returns**: <code>number</code> - sum - the sum of the two integers;  

| Param | Type | Description |
| --- | --- | --- |
| num1 | <code>number</code> | the first integer; |
| num2 | <code>number</code> | the first integer; |

**Example**  
```js
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(num1) ⇒ <code>number</code>
The function takes 1 integers and returns the member of the Fibonacci series.


**Returns**: <code>number</code> - num - the member of the Fibonacci series;  

| Param | Type | Description |
| --- | --- | --- |
| num1 | <code>number</code> | the integer; |

**Example**  
```js
fibonacci(10) // returns 55
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles(arr) ⇒ <code>array</code>
It takes the array of objects and returns an array of specific properties of that objects


**Returns**: <code>array</code> - answer - array of specific properties of the objects  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | array of objects |

**Example**  
```js
console.log(getTheTitles(books)); // ['Book1', 'Book2']
```
**Test Report**
```
Started
...


1 spec, 0 failures
Finished in 0.001 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears(Year) ⇒ <code>Boolean</code>
It receives a year and it answers if the year is or isn't leap.


**Returns**: <code>Boolean</code> - answer - The answer of if the year is leap or not  

| Param | Type | Description |
| --- | --- | --- |
| Year | <code>number</code> | the year to test |

**Example**  
```js
console.log(leapYears(34992)) // returns true
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes(str) ⇒ <code>Boolean</code>
It receives a string and evaluates if it is a palindrome or not


**Returns**: <code>Boolean</code> - answer - The answer if is palindrome or not  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be evaluate |

**Example**  
```js
console.log(palindromes('Racecar!')) // returns true
```
**Test Report**
```
Started
...............


5 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar(str, amount) ⇒ <code>string</code>
It receives a string and a integer to shift the string, such as the Caesar Cypher


**Returns**: <code>string</code> - outpue - The string shifted.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be shifted |
| amount | <code>number</code> | the amount of shifting that the string will receive |

**Example**  
```js
console.log(caesar('Hello, World!', 5)) // returns 'Mjqqt, Btwqi!'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest(people) ⇒ <code>string</code>
*It receives a object with information about people and returns the oldest person


**Returns**: <code>string</code> - output - The oldest person.  

| Param | Type | Description |
| --- | --- | --- |
| people | <code>object</code> | the object with the people |

**Example**  
```js
console.log(findTheOldest(people).name) // returns 'Ray'
```
**Test Report**
```
Started
.........


3 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate(str) ⇒ <code>string</code>
It receives a string an turns the string in 'Pig Latin' language.


**Returns**: <code>string</code> - newString - The 'translation' for Pig Latin.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be changed |

**Example**  
```js
console.log(translate('eat pie')) // returns 'eatay iepay'
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.009 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase(str) ⇒ <code>string</code>
It receives a string an turns the string in snake case (snake_case)


**Returns**: <code>string</code> - str - The string in snake case  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be changed |

**Example**  
```js
console.log(snakeCase('SnAkE..CaSe..Is..AwEsOmE')) // returns 'snake_case_is_awesome'
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
