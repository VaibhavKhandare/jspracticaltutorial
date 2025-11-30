const obj = {};

obj.name = 'Alice';
obj.age = 25;
obj[1] = 'one';
obj[true] = 'boolean key';

console.log(`Accessing properties:
| Get name: ${obj.name}
| Get numeric key 1: ${obj[1]}
| Check if age exists: ${'age' in obj}`);

delete obj.age;
console.log(`After deleting age, size: ${Object.keys(obj).length}`);

const userObj = {
  id: 101,
  username: 'alice123',
  role: 'admin'
};

const keys = Object.keys(userObj);
const values = Object.values(userObj);
console.log(`Keys: ${keys}
| Values: ${values}`);

const entries = Object.entries(userObj);
console.log(`Entries: ${entries}`);
console.log(`Iterating object entries:`);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

Object.entries(userObj).forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
});

Object.keys(obj).forEach(key => delete obj[key]);
console.log(`After clearing, size: ${Object.keys(obj).length}`);


// Spread operator 
const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { theme: 'light' , notifications: false};
const settings = { ...defaults, ...userPrefs };
console.log("Settings: ", settings, "Defaults: ", defaults, "User Prefs: ", userPrefs);
