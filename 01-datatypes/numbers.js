const integer = 42;
const float = 3.14;
const negative = -10;

console.log(integer + float);
console.log(integer * 2);
console.log(float / 2);

console.log(Math.round(float));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.abs(negative));

console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));
console.log(Math.random());

const price = 19.99;
const quantity = 3;
const total = price * quantity;
console.log(total.toFixed(2));

const stringNumber = '123';
console.log(parseInt(stringNumber));
console.log(parseFloat('123.45'));
console.log(Number('456'));

console.log(Number.isInteger(42));
console.log(Number.isNaN(NaN));
console.log(isFinite(100));
