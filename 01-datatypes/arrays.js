const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push('grape');
fruits.unshift('mango');
console.log(fruits);

const lastFruit = fruits.pop();
const firstFruit = fruits.shift();
console.log(lastFruit, firstFruit);

const moreFruits = ['kiwi', 'pear'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);

console.log(fruits.includes('banana'));
console.log(fruits.indexOf('orange'));

const sliced = numbers.slice(1, 3);
console.log(sliced);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][1]);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);

const unique = [...new Set([1, 2, 2, 3, 3, 4])];
console.log(unique);
