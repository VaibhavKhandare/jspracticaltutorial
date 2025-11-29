const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
  { id: 3, name: 'Shirt', price: 29, category: 'Clothing' },
  { id: 4, name: 'Book', price: 15, category: 'Books' },
  { id: 5, name: 'Headphones', price: 199, category: 'Electronics' }
];

const names = products.map(product => product.name);
console.log(names);

const pricesWithTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.1
}));
console.log(pricesWithTax);

products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}: $${product.price}`);
});

const electronics = products.filter(product => product.category === 'Electronics');
console.log(electronics);

const affordable = products.filter(product => product.price < 100);
console.log(affordable);

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log(sortedByPrice);

const sortedByName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

const firstExpensive = products.find(product => product.price > 500);
console.log(firstExpensive);

const hasBooks = products.some(product => product.category === 'Books');
const allExpensive = products.every(product => product.price > 10);
console.log(hasBooks, allExpensive);

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});
console.log(grouped);
