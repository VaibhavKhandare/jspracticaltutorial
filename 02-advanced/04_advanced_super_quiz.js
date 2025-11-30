const orders = [
  { id: 1, userId: 101, items: [{ productId: 1, quantity: 2, price: 1199.99 }], total: 2399.98, status: 'pending' },
  { id: 2, userId: 102, items: [{ productId: 2, quantity: 1, price: 429.99 }], total: 429.99, status: 'pending' },
  { id: 3, userId: 103, items: [{ productId: 3, quantity: 0, price: 599.99 }], total: 0, status: 'pending' },
  { id: 4, userId: 104, items: [{ productId: 4, quantity: 3, price: 799.99 }], total: 2399.97, status: 'pending' }
];

const inventory = {
  1: { stock: 5, name: 'iPhone 15 Pro Max' },
  2: { stock: 10, name: 'iPhone SE' },
  3: { stock: 0, name: 'iPhone 13 Mini' },
  4: { stock: 8, name: 'Samsung Galaxy S24' }
};

const randomDelay = () => Math.floor(Math.random() * 1000) + 500;

// Task 1: Create a function validateOrder that throws an error if order total is 0 or negative
// Use try-catch to handle the error and return {valid: false, error: message} or {valid: true}

// Task 2: Create a function checkInventory that returns a Promise
// Promise resolves with {inStock: true, available: stock} if stock > 0
// Promise rejects with 'Out of stock' if stock is 0
// Simulate API delay using randomDelay()

// Task 3: Create a function processPayment that returns a Promise
// Promise resolves with {success: true, transactionId: 'TXN123'} after 1 second
// Promise rejects with 'Payment failed' if order total > 5000

// Task 4: Create async function processOrder that:
// - Validates the order (use try-catch)
// - Checks inventory (await the promise)
// - Processes payment (await the promise)
// - Returns {success: true, orderId, transactionId} or handles errors gracefully

// Task 5: Process all orders using Promise.all() to handle them in parallel
// Log results for each order

// Task 6: Use Promise.allSettled() to process all orders
// Log which orders succeeded and which failed

// Task 7: Create async function processOrdersSequentially that processes orders one by one
// Use for...of loop with await to process each order sequentially

// Task 8: Create function fetchOrderDetails that returns a Promise
// Resolves with order details after randomDelay()
// Rejects if orderId doesn't exist in orders array

// Task 9: Create async function getOrderWithDetails that:
// - Fetches order details (await)
// - Fetches inventory for each item in parallel using Promise.all()
// - Combines and returns order with inventory info
// Handle errors with try-catch

// Task 10: Create function withTimeout that wraps a promise
// If promise takes more than 2 seconds, reject with 'Operation timeout'

// Task 11: Process orders with timeout protection
// Use the withTimeout wrapper for each order processing

// Task 12: Create retry function that retries a promise up to 3 times
// Wait 1 second between retries
// Log each attempt

// Final: Process all orders with error handling, timeout, and retry logic
// Log final results: successful orders, failed orders, and summary

console.log('=== Advanced Super Quiz ===');
console.log('Complete all tasks above to build a robust order processing system!');

