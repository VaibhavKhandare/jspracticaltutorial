const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const cartRouter = require('./routes/cart');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Ecommerce API Running', endpoints: [
    '/api/products',
    '/api/orders',
    '/api/cart',
    '/api/users'
  ]});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Ecommerce backend running on http://localhost:${PORT}`);
});
