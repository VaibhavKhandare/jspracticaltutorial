// Types of strings define
const firstName = 'Salman';
const lastName = "Khan";
const string2 = `Salman Khan`

const fullName = `Hii ${firstName} ${lastName} ${2025 - 1965}`;
console.log(fullName);

console.log(` Size of Salman: ${"Salman".length}
| S a l m a n
| 0 1 2 3 4 5
| Character at index 2: ${"Salman".charAt(2)}
| Character at index 2: ${"Salman"[2]}`);


// Uppercasing 
console.log(` Original: ${"Salman"}
| UPPERCASE: ${"Salman".toUpperCase()}
| lowercase: ${"Salman".toLowerCase()}`);

const email = '  salman@gmail.com  ';
const emailTrimmed = email.trim();
console.log(` Original: ${email}
| Length: ${email.length}
| Trimmed: ${emailTrimmed}
| Length: ${emailTrimmed.length}`);

// Add the multiple strings
console.log(10 + 100 + ' Salman ' + " Khan" + ` is a ` + 10 + 100);

// String comparsion
const string5 = 'Hello World';
const string6 = 'Hello World';
console.log("Same string is true: " + (string5 === string6));
console.log("String1 is greater than String2: " + (string5 > string6));


const message = 'Hello World';
console.log(` Original: ${message}
| Substring: ${message.substring(0, 5)}
| Index of World: ${message.indexOf('Wor')}
| Replaced: ${message.replace('World', 'JavaScript')}`);

const stringNumber = '123';
console.log(
`Parse int of string number ${stringNumber}: ${parseInt(stringNumber)}
| Parse float of string number 123.45: ${parseFloat('123.45')}
| Number of 456: ${Number('456')}`);

//Date and Time
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(String(now.getDate()).padStart(2, '0'));
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.toISOString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
