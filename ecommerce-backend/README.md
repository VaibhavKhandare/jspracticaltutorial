# Ecommerce Backend API

## Setup
```bash
npm install
npm run dev
```

API runs on http://localhost:3000

## API Endpoints

### Products
- GET /api/products - List all products
- GET /api/products/:id - Get single product
- POST /api/products - Create product
- PUT /api/products/:id - Update product
- DELETE /api/products/:id - Delete product

### Users  
- GET /api/users - List all users
- GET /api/users/:id - Get single user
- POST /api/users - Create user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

### Cart
- GET /api/cart - Get all cart items
- GET /api/cart/user/:userId - Get user's cart
- POST /api/cart/add - Add item to cart
- PUT /api/cart/update/:id - Update cart item
- DELETE /api/cart/remove/:id - Remove item
- DELETE /api/cart/clear/:userId - Clear user's cart

### Orders
- GET /api/orders - List all orders
- GET /api/orders/:id - Get single order
- GET /api/orders/user/:userId - Get user's orders
- POST /api/orders/checkout - Create order from cart
- PATCH /api/orders/:id/status - Update order status
- DELETE /api/orders/:id - Cancel order

## Example Requests

### Create Product
```json
POST /api/products
{
  "name": "New Product",
  "price": 99.99,
  "stock": 10,
  "category": "Electronics"
}
```

### Add to Cart
```json
POST /api/cart/add
{
  "productId": 1,
  "quantity": 2,
  "userId": 1
}
```

### Checkout
```json
POST /api/orders/checkout
{
  "userId": 1,
  "shippingAddress": "123 Main St",
  "paymentMethod": "card"
}
```
