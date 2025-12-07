// import express and cors
const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

// create express app
const app = express();
const PORT = process.env.PORT || 8000;

// use cors to allow cors requests
app.use(cors());
// use express.json() to parse json requests
app.use(express.json());

app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Ecommerce API Running', endpoints: [
    '/api/products',
  ]});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Ecommerce backend running on http://localhost:${PORT}`);
});
