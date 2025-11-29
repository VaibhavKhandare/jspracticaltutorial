const isActive = true;
const isCompleted = false;

console.log(isActive && isCompleted);
console.log(isActive || isCompleted);
console.log(!isActive);

const age = 18;
const canVote = age >= 18;
console.log(canVote);

const username = 'admin';
const password = '123456';
const isValidLogin = username === 'admin' && password === '123456';
console.log(isValidLogin);

const truthy = Boolean(1);
const falsy = Boolean(0);
console.log(truthy, falsy);

const emptyString = '';
const filledString = 'hello';
console.log(!!emptyString);
console.log(!!filledString);

const nullValue = null;
const undefinedValue = undefined;
const hasValue = nullValue ?? 'default';
console.log(hasValue);

const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(grade);
