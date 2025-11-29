const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchUser(id) {
  await delay(500);
  return { id, name: `User${id}`, email: `user${id}@example.com` };
}

async function fetchOrders(userId) {
  await delay(300);
  return [
    { id: 1, userId, total: 99.99 },
    { id: 2, userId, total: 149.99 }
  ];
}

async function getUserWithOrders(userId) {
  try {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(userId);
    return { ...user, orders };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

getUserWithOrders(1).then(data => console.log(data));

async function fetchMultipleUsers(ids) {
  const promises = ids.map(id => fetchUser(id));
  const users = await Promise.all(promises);
  return users;
}

fetchMultipleUsers([1, 2, 3]).then(users => console.log(users));

async function raceExample() {
  const fast = delay(100).then(() => 'fast');
  const slow = delay(500).then(() => 'slow');
  const result = await Promise.race([fast, slow]);
  console.log(result);
}

raceExample();

async function processQueue(items) {
  for (const item of items) {
    console.log(`Processing ${item}`);
    await delay(200);
  }
  console.log('All items processed');
}

processQueue(['A', 'B', 'C']);

async function retryOperation(operation, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await delay(1000 * (i + 1));
    }
  }
}

const unreliableOperation = async () => {
  if (Math.random() > 0.7) {
    return 'Success!';
  }
  throw new Error('Failed');
};

retryOperation(unreliableOperation)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
