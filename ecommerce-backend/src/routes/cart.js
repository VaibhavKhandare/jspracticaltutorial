const express = require('express');
const router = express.Router();
const store = require('../data/store');

router.get('/', (req, res) => {
  res.json(store.cart);
});

router.post('/add', (req, res) => {
  const { productId, quantity, userId } = req.body;
  
  if (!productId || !quantity || !userId) {
    return res.status(400).json({ error: 'ProductId, quantity, and userId are required' });
  }
  
  const product = store.products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  if (product.stock < quantity) {
    return res.status(400).json({ error: 'Insufficient stock' });
  }
  
  const existingItem = store.cart.find(
    item => item.productId === productId && item.userId === userId
  );
  
  if (existingItem) {
    existingItem.quantity += quantity;
    res.json(existingItem);
  } else {
    const newCartItem = {
      id: store.nextCartId++,
      userId,
      productId,
      productName: product.name,
      price: product.price,
      quantity
    };
    store.cart.push(newCartItem);
    res.status(201).json(newCartItem);
  }
});

router.put('/update/:id', (req, res) => {
  const { quantity } = req.body;
  const itemIndex = store.cart.findIndex(item => item.id === parseInt(req.params.id));
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Cart item not found' });
  }
  
  if (quantity <= 0) {
    store.cart.splice(itemIndex, 1);
    return res.status(204).send();
  }
  
  const product = store.products.find(p => p.id === store.cart[itemIndex].productId);
  if (product && product.stock < quantity) {
    return res.status(400).json({ error: 'Insufficient stock' });
  }
  
  store.cart[itemIndex].quantity = quantity;
  res.json(store.cart[itemIndex]);
});

router.delete('/remove/:id', (req, res) => {
  const itemIndex = store.cart.findIndex(item => item.id === parseInt(req.params.id));
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Cart item not found' });
  }
  
  store.cart.splice(itemIndex, 1);
  res.status(204).send();
});

router.delete('/clear/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  store.cart = store.cart.filter(item => item.userId !== userId);
  res.status(204).send();
});

router.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userCart = store.cart.filter(item => item.userId === userId);
  const total = userCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  res.json({
    items: userCart,
    total: parseFloat(total.toFixed(2)),
    count: userCart.reduce((sum, item) => sum + item.quantity, 0)
  });
});

module.exports = router;
