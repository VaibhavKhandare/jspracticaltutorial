// Defining Arrays
const fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple', 'strawberry', 'watermelon'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];

// Accessing array elements by index (0-based)
console.log(`First fruit: ${fruits[0]}`);

// Getting array length
console.log(`Number of fruits: ${fruits.length}`);

// Adding element to end of array
fruits.push('grape');
console.log(`Fruits after adding grape: ${fruits}`);

// Spread operator (...) - expands array into individual elements
// Combines two arrays by spreading their elements
const moreFruits = ['kiwi', 'pear'];
const allFruits = [...fruits, ...moreFruits];
console.log(`All fruits: ${allFruits}`);

// Checking if array includes a value
console.log(`Does fruits include banana? ${fruits.includes('banana')}`);

// Finding index of an element
console.log(`Index of orange: ${fruits.indexOf('orange')}`);

// Slice method - extracts portion of array
// slice(startIndex, endIndex) - endIndex is exclusive (not included)
// slice(1, 3) means: start at index 1, end before index 3 (so gets index 1 and 2)
const sliced = numbers.slice(1, 3);
console.log(`Sliced numbers: ${sliced}`);

// Multi-dimensional arrays (arrays within arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(`Element at row 1, column 1: ${matrix[1][1]}`);

// Array destructuring - extract elements into variables
// ...rest collects remaining elements into array
const [first, second, ...rest] = numbers;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);

// Converting string to array using split
const csv = 'apple,banana,orange';
const fruitsArray = csv.split(',');
console.log(`Fruits array: ${fruitsArray}`);

// Converting array to string using join
const fruitsString = fruits.join(',');
console.log(`Fruits string: ${fruitsString}`);

// Iterrating over array using for...of loop
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

for (const index in fruits) {
  console.log(`Index: ${index}, Fruit: ${fruits[index]}`);
}

// Iterrating over array using forEach method
fruits.forEach(fruit => {
  console.log(`Fruit: ${fruit}`);
});

fruits.forEach((fruit, index) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// sort fruits array in ascending order
fruits.sort();
console.log(`Sorted fruits: ${fruits}`);

// sort fruits array in descending order
fruits.sort().reverse();
console.log(`Sorted fruits in descending order: ${fruits}`);

// sort fruits array in ascending order by length
fruits.sort((a, b) => a.length - b.length);
console.log(`Sorted fruits in ascending order by length: ${fruits}`);

fruits.filter(fruit => fruit.length > 5);
console.log(`Fruits with length greater than 5: ${fruits}`);