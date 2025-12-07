console.log('=== Real-World Promise Scenarios ===')

const checkInventory = (productId) => {
  console.log(`Customer wants product ${productId}. Check stock availability - resolve with {inStock: true, quantity: 10} or reject if out of stock`)
  const inventoryCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId % 2 === 0) {
        resolve({ inStock: true, quantity: 10 })
      } else {
        reject(new Error('Out of stock'))
      }
    }, 500)
  })
  console.log(inventoryCheck)
  return inventoryCheck
}

const sendEmailConfirmation = (orderId) => {
  console.log(`Order ${orderId} placed! Send confirmation email. Promise resolves after 2 seconds with 'Email sent'`)
  // TODO: Create a Promise that resolves after 2 seconds with 'Email sent'
  let emailPromise;
  console.log(emailPromise)
  return emailPromise
}

const fetchUserOrders = (userId) => {
  console.log(`Loading order history for user ${userId}. Chain: fetch user → validate → fetch orders → format data`)
  // TODO: Create helper functions that return promises for: fetchUser, validateUser, and fetchOrders
  // TODO: Chain promises using .then() to: fetch user → validate → fetch orders → format final result
  let orders;
  console.log(orders)
  return orders
}

const loadDashboardData = () => {
  console.log(`Loading dashboard: fetch user profile, recent orders, and notifications in parallel. Use Promise.all() to speed up`)
  // TODO: Create helper functions that return promises for fetching profile, orders, and notifications
  // TODO: Use Promise.all() to fetch all three in parallel
  // TODO: Format the results into a single object with keys: profile, orders, notifications
  let dashboardData;
  console.log(dashboardData)
  return dashboardData
}

const getFastestShipping = () => {
  console.log(`User needs fastest shipping. Check FedEx (300ms), UPS (500ms), DHL (200ms). Use Promise.race() to get fastest option`)
  // TODO: Create three promises for FedEx, UPS, and DHL with different delays
  // TODO: Use Promise.race() to get the fastest response
  let fastestOption;
  console.log(fastestOption)
  return fastestOption
}

const syncMultipleAPIs = () => {
  console.log(`Syncing with 3 payment gateways. Some may fail. Use Promise.allSettled() to get results from all, even if some fail`)
  // TODO: Create three promises for different payment gateways (some may reject)
  // TODO: Use Promise.allSettled() to get results from all promises regardless of success/failure
  // TODO: Map the results to format each with gateway info, status, and value/error
  let syncResults;
  console.log(syncResults)
  return syncResults
}

const processRefund = (orderId, amount) => {
  console.log(`Processing refund for order ${orderId}, amount $${amount}. Promise resolves with refund ID or rejects if order not found`)
  // TODO: Create a Promise that validates the orderId
  // TODO: If order exists: resolve with refund details including refundId
  // TODO: If order not found: reject with appropriate error
  let refundPromise;
  console.log(refundPromise)
  return refundPromise
}

const retryPayment = (paymentData) => {
  console.log(`Payment failed. Retry up to 3 times with exponential backoff (1s, 2s, 4s). Log each attempt`)
  // TODO: Create an attemptPayment helper function that takes attempt number and delay
  // TODO: Log each attempt with the delay time
  // TODO: Chain attempts using .catch() with exponential backoff delays (1s, 2s, 4s)
  // TODO: Resolve on successful attempt (3rd attempt), reject on failures
  let paymentResult;
  console.log(paymentResult)
  return paymentResult
}

const timeoutAPI = (apiCall) => {
  console.log(`Calling slow API. If it takes more than 5 seconds, reject with 'Request timeout'`)
  // TODO: Create a timeout promise that rejects after 5 seconds
  // TODO: Create the API call promise (use apiCall parameter or a default slow promise)
  // TODO: Use Promise.race() to race between the API call and timeout
  let apiPromise;
  console.log(apiPromise)
  return apiPromise
}

const batchProcessOrders = (orderIds) => {
  console.log(`Processing ${orderIds.length} orders. Use Promise.all() to process all orders, but handle individual failures gracefully`)
  // TODO: Create a processOrder helper function that processes a single order
  // TODO: Use Promise.allSettled() to process all orders and handle individual failures
  // TODO: Map the results to format each with orderId, status (success/failed), and data/error
  let batchResults;
  console.log(batchResults)
  return batchResults
}


// Helper functions
const fetchUser = (userId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John', email: 'john@example.com' })
    }, 300)
  })
}

const validateUser = (user) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(user)
    }, 200)
  })
}

const fetchOrders = (user) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, total: 99.99 }, { id: 2, total: 149.99 }])
    }, 400)
  })
}

const fetchProfile = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'John', email: 'john@example.com' })
    }, 300)
  })
}

const fetchRecentOrders = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, total: 99.99 }])
    }, 400)
  })
}

const fetchNotifications = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, message: 'New order', read: false }])
    }, 350)
  })
}

const checkFedEx = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ company: 'FedEx', time: '300ms', cost: 15 })
    }, 300)
  })
}

const checkUPS = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ company: 'UPS', time: '500ms', cost: 12 })
    }, 500)
  })
}

const checkDHL = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ company: 'DHL', time: '200ms', cost: 18 })
    }, 200)
  })
}

const syncGateway1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ gateway: 'Stripe', status: 'synced', timestamp: Date.now() })
    }, 300)
  })
}

const syncGateway2 = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Gateway 2 failed'))
    }, 400)
  })
}

const syncGateway3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ gateway: 'PayPal', status: 'synced', timestamp: Date.now() })
    }, 500)
  })
}

const findOrder = (orderId) => {
  const orders = { 1: { id: 1, total: 99.99 }, 2: { id: 2, total: 149.99 } }
  return orders[orderId]
}

const processSingleOrder = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId % 2 === 0) {
        resolve({ orderId, status: 'processed', timestamp: Date.now() })
      } else {
        reject(new Error(`Order ${orderId} failed`))
      }
    }, 300)
  })
}
