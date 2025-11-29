const firstName = 'John';
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.length);

const email = '  john@example.com  ';
console.log(email.trim());

const message = 'Hello World';
console.log(message.substring(0, 5));
console.log(message.indexOf('World'));
console.log(message.replace('World', 'JavaScript'));

const csv = 'apple,banana,orange';
const fruits = csv.split(',');
console.log(fruits);

const text = 'JavaScript';
console.log(text.startsWith('Java'));
console.log(text.endsWith('Script'));
console.log(text.includes('Script'));
