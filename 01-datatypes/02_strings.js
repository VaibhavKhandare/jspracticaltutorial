// Types of strings define
const firstName = 'Salman';
const lastName = "Khan";
const string2 = `Salman Khan`

const fullName = `Hii ${firstName} ${lastName}`;

console.log(` Size of Salman: ${"Salman".length}
| S a l m a n
| 0 1 2 3 4 5
| Character at index 2: ${"Salman".charAt(2)}`);


// Uppercasing 
console.log(` Original: ${"Salman"}
| Uppercase: ${"Salman".toUpperCase()}
| Lowercase: ${"Salman".toLowerCase()}`);

const email = '  salman@gmail.com  ';
const emailTrimmed = email.trim();
console.log(` Original: ${email}
| Length: ${email.length}
| Trimmed: ${emailTrimmed}
| Length: ${emailTrimmed.length}`);

// Add the multiple strings
console.log('Salman ' + " Khan" + ` is a ` + 10 + 100);

// String comparsion
const string5 = 'Hello World';
const string6 = 'Hello World';
console.log("Same string is true: " + (string5 === string6));
console.log("String1 is greater than String2: " + (string5 > string6));


const message = 'Hello World';
console.log(` Original: ${message}
| Substring: ${message.substring(0, 5)}
| Index of World: ${message.indexOf('World')}
| Replaced: ${message.replace('World', 'JavaScript')}`);

const stringNumber = '123';
console.log(
`Parse int of string number ${stringNumber}: ${parseInt(stringNumber)}
| Parse float of string number 123.45: ${parseFloat('123.45')}
| Number of 456: ${Number('456')}`);

