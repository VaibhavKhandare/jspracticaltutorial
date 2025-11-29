const express = require('express');
const router = express.Router();
const store = require('../data/store');

router.get('/', (req, res) => {
  res.json(store.users);
});

router.get('/:id', (req, res) => {
  const user = store.users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

router.post('/', (req, res) => {
  const { username, email, name } = req.body;
  
  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }
  
  const existingUser = store.users.find(u => u.email === email || u.username === username);
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }
  
  const newUser = {
    id: store.nextUserId++,
    username,
    email,
    name: name || username
  };
  
  store.users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
  const userIndex = store.users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  store.users[userIndex] = {
    ...store.users[userIndex],
    ...req.body,
    id: store.users[userIndex].id
  };
  
  res.json(store.users[userIndex]);
});

router.delete('/:id', (req, res) => {
  const userIndex = store.users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  store.users.splice(userIndex, 1);
  res.status(204).send();
});

module.exports = router;
