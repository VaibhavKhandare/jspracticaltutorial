const express = require('express');
const router = express.Router();
const store = require('../data/store');

router.get('/', (req, res) => {
  res.json(store.orders);
});

router.get('/:id', (req, res) => {
  const order = store.orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

router.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userOrders = store.orders.filter(o => o.userId === userId);
  res.json(userOrders);
});

router.post('/checkout', (req, res) => {
  const { userId, shippingAddress, paymentMethod } = req.body;
  
  if (!userId || !shippingAddress) {
    return res.status(400).json({ error: 'UserId and shipping address are required' });
  }
  
  const userCart = store.cart.filter(item => item.userId === userId);
  
  if (userCart.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }
  
  const orderItems = userCart.map(item => {
    const product = store.products.find(p => p.id === item.productId);
    if (product) {
      product.stock -= item.quantity;
    }
    return {
      productId: item.productId,
      productName: item.productName,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity
    };
  });
  
  const total = orderItems.reduce((sum, item) => sum + item.subtotal, 0);
  
  const newOrder = {
    id: store.nextOrderId++,
    userId,
    items: orderItems,
    total: parseFloat(total.toFixed(2)),
    shippingAddress,
    paymentMethod: paymentMethod || 'cash',
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  store.orders.push(newOrder);
  store.cart = store.cart.filter(item => item.userId !== userId);
  
  res.status(201).json(newOrder);
});

router.patch('/:id/status', (req, res) => {
  const { status } = req.body;
  const orderIndex = store.orders.findIndex(o => o.id === parseInt(req.params.id));
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  
  store.orders[orderIndex].status = status;
  store.orders[orderIndex].updatedAt = new Date().toISOString();
  
  res.json(store.orders[orderIndex]);
});

router.delete('/:id', (req, res) => {
  const orderIndex = store.orders.findIndex(o => o.id === parseInt(req.params.id));
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  if (store.orders[orderIndex].status !== 'pending') {
    return res.status(400).json({ error: 'Can only cancel pending orders' });
  }
  
  store.orders[orderIndex].items.forEach(item => {
    const product = store.products.find(p => p.id === item.productId);
    if (product) {
      product.stock += item.quantity;
    }
  });
  
  store.orders.splice(orderIndex, 1);
  res.status(204).send();
});

module.exports = router;
