const person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  isActive: true
};

console.log(person.name);
console.log(person['age']);

person.city = 'New York';
person.age = 31;
console.log(person);

delete person.isActive;
console.log(person);

const product = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
  specs: {
    ram: '16GB',
    storage: '512GB'
  }
};

console.log(product.specs.ram);

const { name, price } = product;
console.log(name, price);

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);
console.log(keys, values, entries);

const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { theme: 'light' };
const settings = { ...defaults, ...userPrefs };
console.log(settings);

console.log('email' in person);
console.log(person.hasOwnProperty('name'));
