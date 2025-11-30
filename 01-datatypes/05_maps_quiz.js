const cart = {};
console.log(`Shopping cart starts empty. Add item "laptop" with price $999`)
let cartItem;
console.log(cartItem)

const userProfile = { name: "Alice", age: 25 };
console.log(`Profile ${JSON.stringify(userProfile)}. Check if "email" property exists`)
let hasEmail;
console.log(hasEmail)

const settings = { theme: "dark", notifications: true };
console.log(`Settings ${JSON.stringify(settings)}. Get all property names`)
let settingKeys;
console.log(settingKeys)

const inventory = { apples: 50, bananas: 30, oranges: 20 };
console.log(`Inventory ${JSON.stringify(inventory)}. Get all quantities and also the length of the inventory`)
let quantities;
console.log(quantities)

const product = { id: 101, name: "Widget", price: 19.99 };
console.log(`Product ${JSON.stringify(product)}. Remove "price" property`)
let productAfterDelete;
console.log(productAfterDelete)

const student = { name: "Bob", grade: "A", subject: "Math" };
console.log(`Student ${JSON.stringify(student)}. Count how many properties`)
let propertyCount;
console.log(propertyCount)

const config = { apiUrl: "https://api.example.com", timeout: 5000 };
console.log(`Config ${JSON.stringify(config)}. Get "apiUrl" value`)
let apiUrl;
console.log(apiUrl)

const gameScore = {};
gameScore.player1 = 100;
gameScore.player2 = 150;
console.log(`Game scores ${JSON.stringify(gameScore)}. Add player3 with score 200`)
let updatedScores;
console.log(updatedScores)

const book = { title: "JavaScript Guide", author: "John Doe", pages: 300 };
console.log(`Book ${JSON.stringify(book)}. Check if "isbn" exists`)
let hasIsbn;
console.log(hasIsbn)

const menu = { burger: 5.99, fries: 2.99, drink: 1.99 };
console.log(`Menu ${JSON.stringify(menu)}. Get all prices as array`)
let prices;
console.log(prices)

const user = { id: 1, username: "alice", role: "admin" };
console.log(`User ${JSON.stringify(user)}. Loop through and log each key-value pair`)
let userEntries;
console.log(userEntries)

const data = { x: 10, y: 20, z: 30 };
console.log(`Data ${JSON.stringify(data)}. Remove property "y"`)
let dataAfterDelete;
console.log(dataAfterDelete)

const account = { balance: 1000, currency: "USD" };
console.log(`Account ${JSON.stringify(account)}. Add property "type" with value "savings"`)
let updatedAccount;
console.log(updatedAccount)

const movie = { title: "Inception", year: 2010, director: "Nolan" };
console.log(`Movie ${JSON.stringify(movie)}. Check if "rating" property exists`)
let hasRating;
console.log(hasRating)

const shoppingList = { milk: 2, bread: 1, eggs: 12 };
console.log(`Shopping list ${JSON.stringify(shoppingList)}. Get all item names`)
let itemNames;
console.log(itemNames)

const profile = { name: "Sarah", age: 28, city: "NYC" };
console.log(`Profile ${JSON.stringify(profile)}. Update "age" to 29`)
let updatedProfile;
console.log(updatedProfile)

const stats = { wins: 10, losses: 5, draws: 2 };
console.log(`Stats ${JSON.stringify(stats)}. Calculate total games (wins + losses + draws)`)
let totalGames;
console.log(totalGames)

const preferences = { language: "en", theme: "dark", notifications: true };
console.log(`Preferences ${JSON.stringify(preferences)}. Remove "notifications" property`)
let updatedPreferences;
console.log(updatedPreferences)
