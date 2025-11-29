const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, email } = user;
console.log(name, email);

const { id: userId, name: userName } = user;
console.log(userId, userName);

const { phone = 'N/A' } = user;
console.log(phone);

const { address: { city, country } } = user;
console.log(city, country);

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

const [, , third] = numbers;
console.log(third);

const [head, ...tail] = numbers;
console.log(head, tail);

function getUserInfo({ name, email, age = 18 }) {
  return `${name} (${email}), Age: ${age}`;
}

console.log(getUserInfo(user));

function processData([first, second, ...rest]) {
  console.log('First:', first);
  console.log('Second:', second);
  console.log('Rest:', rest);
}

processData([10, 20, 30, 40, 50]);

const data = {
  results: [
    { id: 1, value: 100 },
    { id: 2, value: 200 }
  ],
  total: 2
};

const { results: [firstResult], total } = data;
console.log(firstResult, total);

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

const csv = '1,John,john@example.com';
const [id, name2, email2] = csv.split(',');
console.log(id, name2, email2);

const config = {
  api: {
    url: 'https://api.example.com',
    key: 'secret',
    timeout: 5000
  },
  features: {
    darkMode: true,
    notifications: false
  }
};

const { 
  api: { url: apiUrl, timeout = 3000 },
  features: { darkMode }
} = config;

console.log(apiUrl, timeout, darkMode);
