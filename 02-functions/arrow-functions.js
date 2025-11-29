const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => 'Hello!';

console.log(add(3, 4));
console.log(square(5));
console.log(greet());

const getUser = (name, age) => ({
  name,
  age,
  createdAt: new Date()
});

console.log(getUser('Bob', 30));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

console.log(doubled);
console.log(evens);

const calculator = {
  value: 0,
  add: function(n) {
    this.value += n;
    return this;
  },
  multiply: function(n) {
    this.value *= n;
    return this;
  },
  getValue: () => this.value
};

calculator.add(5).multiply(2);
console.log(calculator.value);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncOperation = async () => {
  console.log('Starting...');
  await delay(1000);
  console.log('Done!');
};

asyncOperation();

const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double = x => x * 2;

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(3));
