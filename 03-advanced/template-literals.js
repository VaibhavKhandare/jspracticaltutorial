const name = 'Alice';
const age = 25;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

const price = 99.99;
const quantity = 3;
const total = `Total: $${(price * quantity).toFixed(2)}`;
console.log(total);

const multiline = `
  This is line 1
  This is line 2
  This is line 3
`;
console.log(multiline);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com'
};

const html = `
  <div class="user-card">
    <h2>${user.firstName} ${user.lastName}</h2>
    <p>Email: ${user.email}</p>
  </div>
`;
console.log(html);

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

const invoice = `
  Invoice Details:
  Subtotal: ${formatCurrency(100)}
  Tax: ${formatCurrency(10)}
  Total: ${formatCurrency(110)}
`;
console.log(invoice);

const items = ['apple', 'banana', 'orange'];
const list = `
  Shopping List:
  ${items.map((item, i) => `${i + 1}. ${item}`).join('\n  ')}
`;
console.log(list);

const isActive = true;
const status = `Status: ${isActive ? 'Active' : 'Inactive'}`;
console.log(status);

function sql(strings, ...values) {
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += `'${values[i]}'`;
    }
  });
  return result;
}

const table = 'users';
const id = 1;
const query = sql`SELECT * FROM ${table} WHERE id = ${id}`;
console.log(query);

const raw = String.raw`Line 1\nLine 2\tTabbed`;
console.log(raw);

function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? `**${values[i]}**` : '');
  }, '');
}

const important = 'JavaScript';
const text = highlight`Learning ${important} is fun!`;
console.log(text);
