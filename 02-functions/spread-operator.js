const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original, copy);

const numbers = [5, 1, 9, 3, 7];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function sum(x, y, z) {
  return x + y + z;
}

const args = [1, 2, 3];
console.log(sum(...args));

const person = { name: 'John', age: 30 };
const address = { city: 'NYC', country: 'USA' };
const fullProfile = { ...person, ...address };
console.log(fullProfile);

const defaults = { theme: 'dark', lang: 'en', notifications: true };
const userPrefs = { theme: 'light', notifications: false };
const settings = { ...defaults, ...userPrefs };
console.log(settings);

const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
const updatedUser = { ...user, email: 'newemail@example.com' };
console.log(updatedUser);

const { id, ...userWithoutId } = user;
console.log(userWithoutId);

function logAll(...args) {
  args.forEach(arg => console.log(arg));
}

logAll('a', 'b', 'c');

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first, rest);

const addItem = (array, item) => [...array, item];
const removeItem = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

const items = ['a', 'b', 'c'];
console.log(addItem(items, 'd'));
console.log(removeItem(items, 1));
