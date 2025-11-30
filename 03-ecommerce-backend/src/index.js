const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
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
