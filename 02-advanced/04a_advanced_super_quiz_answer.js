const orders = [
  { id: 1, userId: 101, items: [{ productId: 1, quantity: 2, price: 1199.99 }], total: 2399.98, status: 'pending' },
  { id: 2, userId: 102, items: [{ productId: 2, quantity: 1, price: 429.99 }], total: 429.99, status: 'pending' },
  { id: 3, userId: 103, items: [{ productId: 3, quantity: 0, price: 599.99 }], total: 0, status: 'pending' },
  { id: 4, userId: 104, items: [{ productId: 4, quantity: 3, price: 799.99 }], total: 2399.97, status: 'pending' }
];

const inventory = {
  1: { stock: 5, name: 'iPhone 15 Pro Max' },
  2: { stock: 10, name: 'iPhone SE' },
  3: { stock: 0, name: 'iPhone 13 Mini' },
  4: { stock: 8, name: 'Samsung Galaxy S24' }
};

const randomDelay = () => Math.floor(Math.random() * 1000) + 500;

const validateOrder = (order) => {
  try {
    if (order.total <= 0) {
      throw new Error('Order total must be greater than 0');
    }
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error.message };
  }
};

const checkInventory = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = inventory[productId];
      if (item && item.stock > 0) {
        resolve({ inStock: true, available: item.stock });
      } else {
        reject(new Error('Out of stock'));
      }
    }, randomDelay());
  });
};

const processPayment = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.total > 5000) {
        reject(new Error('Payment failed'));
      } else {
        resolve({ success: true, transactionId: `TXN${Date.now()}` });
      }
    }, 1000);
  });
};

const processOrder = async (order) => {
  try {
    const validation = validateOrder(order);
    if (!validation.valid) {
      return { success: false, error: validation.error, orderId: order.id };
    }

    for (const item of order.items) {
      const inventoryCheck = await checkInventory(item.productId);
      console.log(`Inventory check for product ${item.productId}:`, inventoryCheck);
    }

    const payment = await processPayment(order);
    return { success: true, orderId: order.id, transactionId: payment.transactionId };
  } catch (error) {
    return { success: false, error: error.message, orderId: order.id };
  }
};

const processAllOrders = async () => {
  console.log('\n=== Processing all orders in parallel ===');
  const results = await Promise.all(orders.map(order => processOrder(order)));
  results.forEach(result => {
    console.log(`Order ${result.orderId}:`, result.success ? 'SUCCESS' : `FAILED - ${result.error}`);
  });
  return results;
};

const processAllOrdersSettled = async () => {
  console.log('\n=== Processing all orders with allSettled ===');
  const promises = orders.map(order => processOrder(order));
  const results = await Promise.allSettled(promises);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      const data = result.value;
      console.log(`Order ${data.orderId}:`, data.success ? 'SUCCESS' : `FAILED - ${data.error}`);
    } else {
      console.log(`Order ${orders[index].id}: REJECTED -`, result.reason);
    }
  });
  return results;
};

const processOrdersSequentially = async () => {
  console.log('\n=== Processing orders sequentially ===');
  const results = [];
  for (const order of orders) {
    const result = await processOrder(order);
    results.push(result);
    console.log(`Order ${result.orderId} processed:`, result.success ? 'SUCCESS' : `FAILED - ${result.error}`);
  }
  return results;
};

const fetchOrderDetails = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        resolve(order);
      } else {
        reject(new Error(`Order ${orderId} not found`));
      }
    }, randomDelay());
  });
};

const getOrderWithDetails = async (orderId) => {
  try {
    const order = await fetchOrderDetails(orderId);
    
    const inventoryPromises = order.items.map(item => checkInventory(item.productId));
    const inventoryResults = await Promise.all(inventoryPromises);
    
    return {
      ...order,
      inventory: inventoryResults
    };
  } catch (error) {
    return { error: error.message, orderId };
  }
};

const withTimeout = (promise, timeoutMs) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Operation timeout')), timeoutMs)
    )
  ]);
};

const processOrderWithTimeout = async (order) => {
  try {
    const result = await withTimeout(processOrder(order), 2000);
    return result;
  } catch (error) {
    return { success: false, error: error.message, orderId: order.id };
  }
};

const retry = async (fn, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${maxRetries}`);
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

const processOrderWithRetry = async (order) => {
  try {
    const result = await retry(() => processOrder(order));
    return result;
  } catch (error) {
    return { success: false, error: error.message, orderId: order.id };
  }
};

const finalProcessing = async () => {
  console.log('\n=== Final: Processing with timeout and retry ===');
  const results = await Promise.allSettled(
    orders.map(order => processOrderWithRetry(order))
  );
  
  const successful = [];
  const failed = [];
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled' && result.value.success) {
      successful.push(result.value);
    } else {
      failed.push({
        orderId: orders[index].id,
        error: result.status === 'fulfilled' ? result.value.error : result.reason
      });
    }
  });
  
  console.log('\n=== Summary ===');
  console.log(`Successful orders: ${successful.length}`);
  successful.forEach(s => console.log(`  Order ${s.orderId}: ${s.transactionId}`));
  
  console.log(`\nFailed orders: ${failed.length}`);
  failed.forEach(f => console.log(`  Order ${f.orderId}: ${f.error}`));
  
  return { successful, failed };
};

console.log('=== Advanced Super Quiz Solution ===');
processAllOrders();
setTimeout(() => processAllOrdersSettled(), 3000);
setTimeout(() => processOrdersSequentially(), 6000);
setTimeout(() => {
  getOrderWithDetails(1).then(result => {
    console.log('\n=== Order with details ===');
    console.log(JSON.stringify(result, null, 2));
  });
}, 9000);
setTimeout(() => finalProcessing(), 12000);

