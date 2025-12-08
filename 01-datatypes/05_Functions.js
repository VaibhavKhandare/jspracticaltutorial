// Function Traditional Functions

// why need functions?
console.log(1+5)
console.log(2+10);
console.log(20+30);

function add(a, b) {
  const sum = a + b;
  return sum;
}

console.log(add(1, 5));
console.log(add(2, 10));
console.log(add(20, 30));

// Fat arrow function
const add1 = (a, b) => {
  const sum = a + b;
  return sum;
}

const add2 = (a, b) => a + b;

const multiply = (a, b) => a * b;
const greet = () => 'Hello!'; 
const greetWithName = name => `Hello ${name}!`;
const square = x => x * x;

// function in function modularity
const sumOfSquares = (a, b)=> {
  const aSquare = square(a);
  const bSquare = square(b);
  return add(aSquare, bSquare);
}

console.log(`Arrow functions calling:
| Add: ${add(3, 4)}
| Square: ${square(5)}
| Greet: ${greet()}
| Sum of squares: ${sumOfSquares(3, 4)}`);


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

console.log(`Array methods with arrows:
| Doubled: ${doubled}
| Evens: ${evens}`);

const fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple', 'strawberry', 'watermelon'];

// Iterrating over array using forEach method
fruits.forEach(fruit => {
  console.log(`Fruit: ${fruit}`);
});

fruits.forEach((fruit, index) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// sort fruits array in ascending order by length
fruits.sort((a, b) => a.length - b.length);
console.log(`Sorted fruits in ascending order by length: ${fruits}`);

fruits.filter(fruit => fruit.length > 5);
console.log(`Fruits with length greater than 5: ${fruits}`);