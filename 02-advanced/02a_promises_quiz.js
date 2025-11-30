console.log('=== Real-World Promise Scenarios ===')

const checkInventory = (productId) => {
  console.log(`Customer wants product ${productId}. Check stock availability - resolve with {inStock: true, quantity: 10} or reject if out of stock`)
  let inventoryCheck;
  console.log(inventoryCheck)
}

const sendEmailConfirmation = (orderId) => {
  console.log(`Order ${orderId} placed! Send confirmation email. Promise resolves after 2 seconds with 'Email sent'`)
  let emailPromise;
  console.log(emailPromise)
}

const fetchUserOrders = (userId) => {
  console.log(`Loading order history for user ${userId}. Chain: fetch user → validate → fetch orders → format data`)
  let orders;
  console.log(orders)
}

const loadDashboardData = () => {
  console.log(`Loading dashboard: fetch user profile, recent orders, and notifications in parallel. Use Promise.all() to speed up`)
  let dashboardData;
  console.log(dashboardData)
}

const getFastestShipping = () => {
  console.log(`User needs fastest shipping. Check FedEx (300ms), UPS (500ms), DHL (200ms). Use Promise.race() to get fastest option`)
  let fastestOption;
  console.log(fastestOption)
}

const syncMultipleAPIs = () => {
  console.log(`Syncing with 3 payment gateways. Some may fail. Use Promise.allSettled() to get results from all, even if some fail`)
  let syncResults;
  console.log(syncResults)
}

const processRefund = (orderId, amount) => {
  console.log(`Processing refund for order ${orderId}, amount $${amount}. Promise resolves with refund ID or rejects if order not found`)
  let refundPromise;
  console.log(refundPromise)
}

const retryPayment = (paymentData) => {
  console.log(`Payment failed. Retry up to 3 times with exponential backoff (1s, 2s, 4s). Log each attempt`)
  let paymentResult;
  console.log(paymentResult)
}

const timeoutAPI = (apiCall) => {
  console.log(`Calling slow API. If it takes more than 5 seconds, reject with 'Request timeout'`)
  let apiPromise;
  console.log(apiPromise)
}

const batchProcessOrders = (orderIds) => {
  console.log(`Processing ${orderIds.length} orders. Use Promise.all() to process all orders, but handle individual failures gracefully`)
  let batchResults;
  console.log(batchResults)
}
