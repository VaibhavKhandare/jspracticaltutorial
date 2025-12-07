console.log('=== E-commerce Async Operations ===')

const completeCheckout = async (cartId) => {
  console.log(`User checking out cart ${cartId}. Async flow: validate cart → process payment → create order → send confirmation email`)
  const validated = await validateCart(cartId)
  const payment = await processPayment(cartId)
  const order = await createOrder(cartId, payment)
  const checkoutResult = await sendConfirmationEmail(order.orderId)
  console.log(checkoutResult)
  return checkoutResult
}

const handleCheckoutError = async (cartId) => {
  console.log(`Processing checkout for cart ${cartId}. Use try-catch to handle payment failures, inventory issues, or network errors gracefully`)
  // TODO: Wrap async operations in try-catch block
  // TODO: In try block: validate cart and process payment using await
  // TODO: Return success object with validated and payment data
  // TODO: In catch block: return error object with success: false and error message
  let result;
  console.log(result)
  return result
}

const loadProductDetails = async (productId) => {
  console.log(`Loading product ${productId} page. Sequentially: fetch product → fetch reviews → fetch related products → combine data`)
  // TODO: Fetch product, reviews, and related products sequentially using await
  // TODO: Combine all three results into a single object with keys: product, reviews, related
  let productPage;
  console.log(productPage)
  return productPage
}

const buildUserDashboard = async (userId) => {
  console.log(`Building dashboard for user ${userId}. Fetch profile, orders, wishlist, and recommendations in parallel using Promise.all()`)
  // TODO: Use Promise.all() with await to fetch profile, orders, wishlist, and recommendations in parallel
  // TODO: Destructure the results from Promise.all()
  // TODO: Combine all results into a single object with keys: profile, orders, wishlist, recommendations
  let dashboard;
  console.log(dashboard)
  return dashboard
}

const processBulkOrders = async (orderIds) => {
  console.log(`Processing ${orderIds.length} orders. Use async/await in loop to process each order sequentially (one after another)`)
  // TODO: Create an empty array to store processed orders
  // TODO: Use a for...of loop to iterate through orderIds
  // TODO: Inside the loop, await processOrder for each orderId and push the result to the array
  let processedOrders;
  console.log(processedOrders)
  return processedOrders
}

const fetchWithTimeout = async (url) => {
  console.log(`Fetching data from ${url}. If response takes more than 3 seconds, cancel and return 'Request timeout'`)
  // TODO: Create a timeout promise that rejects after 3000ms with 'Request timeout' error
  // TODO: Create a fetch promise (use fetch(url) or a mock promise)
  // TODO: Use Promise.race() with await to race between fetch and timeout
  // TODO: Wrap in try-catch block, if error occurs return 'Request timeout'
  let data;
  console.log(data)
  return data
}

const createOrderFlow = async (cartItems) => {
  console.log(`Creating order: validate items → check inventory → calculate total → process payment → create order → send email. Chain with await`)
  // TODO: Chain operations sequentially using await: validateItems → checkInventory → calculateTotal → processPayment → createOrder → sendConfirmationEmail
  // TODO: Use the result from each step in the next step (e.g., order.orderId for sendConfirmationEmail)
  // TODO: Combine all results into a single object with keys: validated, inventory, total, payment, order, email
  let order;
  console.log(order)
  return order
}

const handleMultipleAPIs = async () => {
  console.log(`Calling payment API, shipping API, and inventory API. Handle errors from each separately - if one fails, others should still work`)
  // TODO: Use Promise.allSettled() with await to call all three APIs (callPaymentAPI, callShippingAPI, callInventoryAPI)
  // TODO: Map the results to format each as: { api: 'payment'/'shipping'/'inventory', status: 'fulfilled'/'rejected', value: result or error message }
  let results;
  console.log(results)
  return results
}

const filterAvailableProducts = async (productIds) => {
  console.log(`Filter products ${productIds.join(', ')} to show only in-stock items. Use async/await to check each product's availability`)
  // TODO: Create an empty array to store available products
  // TODO: Loop through productIds using for...of
  // TODO: For each productId, await checkProductAvailability and check if inStock is true
  // TODO: If in stock, add the availability object to the array
  let availableProducts;
  console.log(availableProducts)
  return availableProducts
}

const loadOrderDetails = async (orderId) => {
  console.log(`Loading order ${orderId} details. Fetch order, customer, items, and shipping info in parallel, then combine into one object`)
  // TODO: Use Promise.all() with await to fetch order, customer, items, and shipping info in parallel
  // TODO: Destructure the results from Promise.all()
  // TODO: Combine all results into a single object with keys: order, customer, items, shipping
  let orderDetails;
  console.log(orderDetails)
  return orderDetails
}


// Helper functions
const validateCart = async (cartId) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { valid: true, cartId }
}

const processPayment = async (cartId) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { success: true, transactionId: `TXN${Date.now()}` }
}

const createOrder = async (cartId, payment) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { orderId: `ORD${Date.now()}`, cartId, payment }
}

const sendConfirmationEmail = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  return { emailSent: true, orderId }
}

const fetchProduct = async (productId) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { id: productId, name: `Product ${productId}`, price: 99.99 }
}

const fetchReviews = async (productId) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { productId, reviews: [{ rating: 5, comment: 'Great!' }] }
}

const fetchRelatedProducts = async (productId) => {
  await new Promise(resolve => setTimeout(resolve, 350))
  return { productId, related: [1, 2, 3] }
}

const fetchProfile = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { userId, name: `User ${userId}` }
}

const fetchOrders = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { userId, orders: [{ id: 1 }, { id: 2 }] }
}

const fetchWishlist = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 350))
  return { userId, wishlist: [1, 2, 3] }
}

const fetchRecommendations = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 450))
  return { userId, recommendations: [4, 5, 6] }
}

const processOrder = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { orderId, processed: true }
}

const checkProductAvailability = async (productId) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  const inStock = productId % 2 === 0
  return { productId, inStock }
}

const fetchOrder = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { id: orderId, total: 99.99 }
}

const fetchCustomer = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 350))
  return { orderId, customer: { name: 'John Doe' } }
}

const fetchItems = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { orderId, items: [{ id: 1, name: 'Item 1' }] }
}

const fetchShippingInfo = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 380))
  return { orderId, shipping: { status: 'shipped' } }
}

const callPaymentAPI = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { payment: 'success' }
}

const callShippingAPI = async () => {
  await new Promise(resolve => setTimeout(resolve, 600))
  return { shipping: 'available' }
}

const callInventoryAPI = async () => {
  await new Promise(resolve => setTimeout(resolve, 400))
  throw new Error('Inventory API failed')
}

const validateItems = async (items) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  return { valid: true }
}

const checkInventory = async (items) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { inStock: true }
}

const calculateTotal = async (items) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  return { total: 199.99 }
}