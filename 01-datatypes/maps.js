const map = new Map();

map.set('name', 'Alice');
map.set('age', 25);
map.set(1, 'one');
map.set(true, 'boolean key');

console.log(map.get('name'));
console.log(map.get(1));
console.log(map.has('age'));
console.log(map.size);

map.delete('age');
console.log(map.size);

const userMap = new Map([
  ['id', 101],
  ['username', 'alice123'],
  ['role', 'admin']
]);

for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

const keys = Array.from(userMap.keys());
const values = Array.from(userMap.values());
console.log(keys, values);

const objectKey = { id: 1 };
const complexMap = new Map();
complexMap.set(objectKey, 'object as key');
console.log(complexMap.get(objectKey));

userMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

map.clear();
console.log(map.size);
