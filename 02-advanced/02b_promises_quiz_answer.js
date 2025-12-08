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
  const emailPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Email sent')
    }, 2000)
  })
  console.log(emailPromise)
  return emailPromise
}

const fetchUserOrders = (userId) => {
  console.log(`Loading order history for user ${userId}. Chain: fetch user → validate → fetch orders → format data`)
  const fetchUser = () => new Promise(resolve => setTimeout(() => resolve({ id: userId, name: 'John' }), 300))
  const validateUser = (user) => new Promise(resolve => setTimeout(() => resolve(user), 200))
  const fetchOrders = (user) => new Promise(resolve => setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 400))
  
  const orders = fetchUser()
    .then(validateUser)
    .then(fetchOrders)
    .then(orders => ({ user: { id: userId }, orders }))
  console.log(orders)
  return orders
}

const loadDashboardData = () => {
  console.log(`Loading dashboard: fetch user profile, recent orders, and notifications in parallel. Use Promise.all() to speed up`)
  const fetchProfile = () => new Promise(resolve => setTimeout(() => resolve({ name: 'John' }), 300))
  const fetchOrders = () => new Promise(resolve => setTimeout(() => resolve([{ id: 1 }]), 400))
  const fetchNotifications = () => new Promise(resolve => setTimeout(() => resolve([{ id: 1, message: 'New order' }]), 350))
  
  const dashboardData = Promise.all([fetchProfile(), fetchOrders(), fetchNotifications()])
    .then(([profile, orders, notifications]) => ({ profile, orders, notifications }))
  console.log(dashboardData)
  return dashboardData
}

const getFastestShipping = () => {
  console.log(`User needs fastest shipping. Check FedEx (300ms), UPS (500ms), DHL (200ms). Use Promise.race() to get fastest option`)
  const fedEx = new Promise(resolve => setTimeout(() => resolve({ company: 'FedEx', time: '300ms' }), 300))
  const ups = new Promise(resolve => setTimeout(() => resolve({ company: 'UPS', time: '500ms' }), 500))
  const dhl = new Promise(resolve => setTimeout(() => resolve({ company: 'DHL', time: '200ms' }), 200))
  
  const fastestOption = Promise.race([fedEx, ups, dhl])
  console.log(fastestOption)
  return fastestOption
}

const syncMultipleAPIs = () => {
  console.log(`Syncing with 3 payment gateways. Some may fail. Use Promise.allSettled() to get results from all, even if some fail`)
  const gateway1 = new Promise(resolve => setTimeout(() => resolve({ gateway: 'Stripe', status: 'synced' }), 300))
  const gateway2 = new Promise((_, reject) => setTimeout(() => reject(new Error('Gateway 2 failed')), 400))
  const gateway3 = new Promise(resolve => setTimeout(() => resolve({ gateway: 'PayPal', status: 'synced' }), 500))
  
  const syncResults = Promise.allSettled([gateway1, gateway2, gateway3])
    .then(results => results.map((result, index) => ({
      gateway: index + 1,
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message
    })))
  console.log(syncResults)
  return syncResults
}

const processRefund = (orderId, amount) => {
  console.log(`Processing refund for order ${orderId}, amount $${amount}. Promise resolves with refund ID or rejects if order not found`)
  const refundPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId && orderId > 0) {
        resolve({ refundId: `REF${Date.now()}`, orderId, amount })
      } else {
        reject(new Error('Order not found'))
      }
    }, 500)
  })
  console.log(refundPromise)
  return refundPromise
}

const retryPayment = (paymentData) => {
  console.log(`Payment failed. Retry up to 3 times with exponential backoff (1s, 2s, 4s). Log each attempt`)
  const attemptPayment = (attempt, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Attempt ${attempt} after ${delay}ms`)
        if (attempt === 3) {
          resolve({ success: true, attempt })
        } else {
          reject(new Error(`Attempt ${attempt} failed`))
        }
      }, delay)
    })
  }
  
  const paymentResult = attemptPayment(1, 1000)
    .catch(() => attemptPayment(2, 2000))
    .catch(() => attemptPayment(3, 4000))
  console.log(paymentResult)
  return paymentResult
}

const timeoutAPI = (apiCall) => {
  console.log(`Calling slow API. If it takes more than 5 seconds, reject with 'Request timeout'`)
  const timeout = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Request timeout')), 5000)
  )
  const slowAPI = apiCall || new Promise(resolve => setTimeout(() => resolve({ data: 'success' }), 6000))
  
  const apiPromise = Promise.race([slowAPI, timeout])
  console.log(apiPromise)
  return apiPromise
}

const batchProcessOrders = (orderIds) => {
  console.log(`Processing ${orderIds.length} orders. Use Promise.all() to process all orders, but handle individual failures gracefully`)
  const processOrder = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orderId % 2 === 0) {
          resolve({ orderId, status: 'processed' })
        } else {
          reject(new Error(`Order ${orderId} failed`))
        }
      }, 300)
    })
  }
  
  const batchResults = Promise.allSettled(orderIds.map(processOrder))
    .then(results => results.map((result, index) => ({
      orderId: orderIds[index],
      status: result.status === 'fulfilled' ? 'success' : 'failed',
      data: result.status === 'fulfilled' ? result.value : result.reason.message
    })))
  console.log(batchResults)
  return batchResults
}
