const store = {
  products: [
    { id: 1, name: 'Laptop', price: 999.99, stock: 10, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 699.99, stock: 15, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 199.99, stock: 20, category: 'Electronics' },
    { id: 4, name: 'T-Shirt', price: 29.99, stock: 50, category: 'Clothing' },
    { id: 5, name: 'Book', price: 14.99, stock: 100, category: 'Books' }
  ],
  users: [
    { id: 1, username: 'john_doe', email: 'john@example.com', name: 'John Doe' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith' }
  ],
  cart: [],
  orders: [],
  nextProductId: 6,
  nextUserId: 3,
  nextOrderId: 1,
  nextCartId: 1
};

module.exports = store;
