const express = require('express');
const router = express.Router();
const store = require('../data/store');

router.get('/', (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  let filtered = [...store.products];
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (minPrice) {
    filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
  }
  
  res.json(filtered);
});

router.get('/:id', (req, res) => {
  const product = store.products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

router.post('/', (req, res) => {
  const { name, price, stock, category } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  
  const newProduct = {
    id: store.nextProductId++,
    name,
    price,
    stock: stock || 0,
    category: category || 'General'
  };
  
  store.products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const productIndex = store.products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  store.products[productIndex] = {
    ...store.products[productIndex],
    ...req.body,
    id: store.products[productIndex].id
  };
  
  res.json(store.products[productIndex]);
});

router.delete('/:id', (req, res) => {
  const productIndex = store.products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  store.products.splice(productIndex, 1);
  res.status(204).send();
});

module.exports = router;
