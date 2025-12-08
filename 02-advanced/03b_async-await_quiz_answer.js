console.log('=== E-commerce Async Operations ===')

// Quiz implementations
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
  try {
    const validated = await validateCart(cartId)
    const payment = await processPayment(cartId)
    if (cartId === 'error') throw new Error('Payment failed')
    const result = { success: true, validated, payment }
    console.log(result)
    return result
  } catch (error) {
    const result = { success: false, error: error.message }
    console.log(result)
    return result
  }
}

const loadProductDetails = async (productId) => {
  console.log(`Loading product ${productId} page. Sequentially: fetch product → fetch reviews → fetch related products → combine data`)
  const product = await fetchProduct(productId)
  const reviews = await fetchReviews(productId)
  const related = await fetchRelatedProducts(productId)
  const productPage = { product, reviews, related }
  console.log(productPage)
  return productPage
}

const buildUserDashboard = async (userId) => {
  console.log(`Building dashboard for user ${userId}. Fetch profile, orders, wishlist, and recommendations in parallel using Promise.all()`)
  const [profile, orders, wishlist, recommendations] = await Promise.all([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchWishlist(userId),
    fetchRecommendations(userId)
  ])
  const dashboard = { profile, orders, wishlist, recommendations }
  console.log(dashboard)
  return dashboard
}

const processBulkOrders = async (orderIds) => {
  console.log(`Processing ${orderIds.length} orders. Use async/await in loop to process each order sequentially (one after another)`)
  const processedOrders = []
  for (const orderId of orderIds) {
    const result = await processOrder(orderId)
    processedOrders.push(result)
  }
  console.log(processedOrders)
  return processedOrders
}

const fetchWithTimeout = async (url) => {
  console.log(`Fetching data from ${url}. If response takes more than 3 seconds, cancel and return 'Request timeout'`)
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Request timeout')), 3000)
  )
  const fetchPromise = fetch(url).catch(() => new Promise(resolve => 
    setTimeout(() => resolve({ data: 'fetched' }), 4000)
  ))
  try {
    const data = await Promise.race([fetchPromise, timeoutPromise])
    console.log(data)
    return data
  } catch (error) {
    const data = 'Request timeout'
    console.log(data)
    return data
  }
}

const createOrderFlow = async (cartItems) => {
  console.log(`Creating order: validate items → check inventory → calculate total → process payment → create order → send email. Chain with await`)
  const validated = await validateItems(cartItems)
  const inventory = await checkInventory(cartItems)
  const total = await calculateTotal(cartItems)
  const payment = await processPayment('cart123')
  const order = await createOrder('cart123', payment)
  const email = await sendConfirmationEmail(order.orderId)
  const orderResult = { validated, inventory, total, payment, order, email }
  console.log(orderResult)
  return orderResult
}

const handleMultipleAPIs = async () => {
  console.log(`Calling payment API, shipping API, and inventory API. Handle errors from each separately - if one fails, others should still work`)
  const results = await Promise.allSettled([
    callPaymentAPI(),
    callShippingAPI(),
    callInventoryAPI()
  ])
  const formatted = results.map((result, index) => ({
    api: ['payment', 'shipping', 'inventory'][index],
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason.message
  }))
  console.log(formatted)
  return formatted
}

const filterAvailableProducts = async (productIds) => {
  console.log(`Filter products ${productIds.join(', ')} to show only in-stock items. Use async/await to check each product's availability`)
  const availableProducts = []
  for (const productId of productIds) {
    const availability = await checkProductAvailability(productId)
    if (availability.inStock) {
      availableProducts.push(availability)
    }
  }
  console.log(availableProducts)
  return availableProducts
}

const loadOrderDetails = async (orderId) => {
  console.log(`Loading order ${orderId} details. Fetch order, customer, items, and shipping info in parallel, then combine into one object`)
  const [order, customer, items, shipping] = await Promise.all([
    fetchOrder(orderId),
    fetchCustomer(orderId),
    fetchItems(orderId),
    fetchShippingInfo(orderId)
  ])
  const orderDetails = { order, customer, items, shipping }
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