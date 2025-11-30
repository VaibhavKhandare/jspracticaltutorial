// Defining Numbers
const integer = 42;
const float = 3.14;
const negative = -10;

console.log(
`Arithmetic Operations:
| Sum of integer ${integer} and float ${float}: ${integer + float}
| Product of integer ${integer} and 2: ${integer * 2}
| Quotient of float ${float} and 2: ${float / 2}
|`);

console.log(
`Comparison Operations: 
| Integer ${5} is greater than float ${4}: ${5 > 4}
| Integer ${5} is less than float ${4}: ${5 < 4}
| Integer ${5} is equal to float ${4}: ${5 === 4}
| Integer ${5} is not equal to float ${4}: ${5 !== 4}
|`);

console.log(
`Math Operations:
| Round of float ${3.14}: ${Math.round(3.14)}
| Round of float ${9.8}: ${Math.round(9.8)}
| Floor of 4.9: ${Math.floor(4.9)}
| Ceil of 4.1: ${Math.ceil(4.1)}
| Absolute value of negative -10: ${Math.abs(-10)}
| Max of 1, 5, 3: ${Math.max(1, 5, 3)}
| Min of 1, 5, 3: ${Math.min(1, 5, 3)}
| Random number: ${Math.random()} gives 0 to 1 not including 1`);


console.log(
`Total of price 19.99 and quantity 3: ${19.99 * 3} 
Formated to 2 decimal places: ${Number((19.99 * 3).toFixed(2))}`);

