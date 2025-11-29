function add(a, b) {
  return a + b;
}

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(add(5, 3));
console.log(greet());
console.log(greet('John'));

const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5));

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

function createUser(name, age, city) {
  return {
    name,
    age,
    city,
    isAdult: age >= 18
  };
}

const user = createUser('Alice', 25, 'NYC');
console.log(user);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const addFive = outer(5);
console.log(addFive(3));
