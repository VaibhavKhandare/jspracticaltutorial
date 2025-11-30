// Function Traditional Functions

// why need functions?
console.log(1+5)
console.log(2+10);
console.log(20+30);

function add(a, b) {
  return a + b;
}

console.log(add(1, 5));
console.log(add(2, 10));
console.log(add(20, 30));

// Fat arrow function
const add1 = (a, b) => {
  return a + b;
}

const add2 = (a, b) => a + b;

const multiply = (a, b) => a * b;
const greet = () => 'Hello!'; 
const greetWithName = name => `Hello ${name}!`;
const square = x => x * x;

const sumOfSquares = (a, b)=> {
  const aSquare = square(a);
  const bSquare = square(b);
  return add(aSquare, bSquare);
}

console.log(`Arrow functions:
| Add: ${add(3, 4)}
| Square: ${square(5)}
| Greet: ${greet()}
| Sum of squares: ${sumOfSquares(3, 4)}`);

const createUser = (name, age) => ({
  name,
  age,
  createdAt: new Date()
});

console.log(createUser('Bob', 30));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

console.log(`Array methods with arrows:
| Doubled: ${doubled}
| Evens: ${evens}`);

const products = [
  { name: 'iphone', price: 999 },
  { name: 'samsung', price: 1099 },
  { name: 'nokia', price: 1199 }
];

const fixedNames = products.map(p => ({
  ...p,
  name: p.name.charAt(0).toUpperCase() + p.name.slice(1).toLowerCase()
}));

console.log(`Fixed product names:`, fixedNames);

let total = 0; // There is also a var keyword but we will use let in this course
const calculateTotal = (items) => items.forEach((item) => total += item.price);
console.log(`Total price: $${calculateTotal(products)}`);
