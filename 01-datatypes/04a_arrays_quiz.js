const shoppingCart = ['milk', 'bread', 'eggs', 'cheese'];
console.log(`Shopping cart ${shoppingCart}. Get first item`)
let firstItem;
console.log(firstItem)

const playlist = ['Song A', 'Song B', 'Song C', 'Song D', 'Song E'];
console.log(`Playlist ${playlist}. How many songs?`)
let playlistLength;
console.log(playlistLength)

const todoList = ['Buy groceries', 'Call dentist', 'Finish project'];
console.log(`Todo list ${todoList}. Add "Pay bills" to end`)
let updatedTodos;
console.log(updatedTodos)

const favorites = ['pizza', 'burger'];
const newFavorites = ['sushi', 'pasta'];
console.log(`Old favorites ${favorites}, new ${newFavorites}. Combine into one array`)
let allFavorites;
console.log(allFavorites)

const productList = ['laptop', 'mouse', 'keyboard', 'monitor'];
const searchItem = 'mouse';
console.log(`Products ${productList}. Check if "${searchItem}" exists`)
let hasProduct;
console.log(hasProduct)

const studentNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const findName = 'Charlie';
console.log(`Students ${studentNames}. Find index of "${findName}"`)
let studentIndex;
console.log(studentIndex)

const prices = [10, 20, 30, 40, 50, 60];
console.log(`Prices ${prices}. Get from index 2 to 4 (inclusive start, exclusive end)`)
let selectedPrices;
console.log(selectedPrices)

const gameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];
console.log(`Tic-tac-toe board. Get middle cell (row 1, column 1)`)
let middleCell;
console.log(middleCell)

const orderItems = ['shirt', 'pants', 'shoes', 'hat', 'socks'];
console.log(`Order ${orderItems}. Extract first, second, and rest items`)
let firstOrder;
let secondOrder;
let remainingOrders;
console.log(firstOrder, secondOrder, remainingOrders)

const tags = 'javascript,react,nodejs,express';
console.log(`Tags "${tags}". Convert to array`)
let tagsArray;
console.log(tagsArray)

const cartItems = ['apple', 'banana', 'orange'];
const newItem = 'grape';
console.log(`Cart ${cartItems}. Add "${newItem}" without modifying original`)
let newCart;
console.log(newCart)

const infiniteToDo = ['task1', 'task2', 'task3', 'task4', 'task5'];
console.log(`Todo list ${infiniteToDo}. Get last item (hint: length - 1)`)
let lastTask;
console.log(lastTask)

const shoppingList = ['milk', 'bread', 'chocolate', 'chocolate', 'chocolate'];
console.log(`Shopping list ${shoppingList}. Count "chocolate" appearances`)
let chocolateCount;
console.log(chocolateCount)

const emptyArray = [];
console.log(`Array ${emptyArray}. Is it empty?`)
let isEmpty;
console.log(isEmpty)

const duplicateNumbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(`Array ${duplicateNumbers}. Remove duplicates using Set`)
let uniqueNumbers;
console.log(uniqueNumbers)

const reverseMe = ['read', 'this', 'backwards'];
console.log(`Secret message ${reverseMe}. Reverse to decode!`)
let decodedArray;
console.log(decodedArray)
