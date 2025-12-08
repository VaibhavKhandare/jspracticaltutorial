const path = require('path')

describe('Async-Await Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../02-advanced/03a_async-await_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  describe('completeCheckout', () => {
    test('should complete checkout flow', async () => {
      const result = await quizModule.completeCheckout('CART123')
      expect(result.emailSent).toBe(true)
      expect(result.orderId).toBeDefined()
    })
  })

  describe('handleCheckoutError', () => {
    test('should handle successful checkout', async () => {
      const result = await quizModule.handleCheckoutError('CART123')
      expect(result.success).toBe(true)
    })

    test('should handle checkout errors gracefully', async () => {
      // Mock a failing scenario if needed
      const result = await quizModule.handleCheckoutError('INVALID')
      expect(result).toBeDefined()
    })
  })

  describe('loadProductDetails', () => {
    test('should load product, reviews, and related products', async () => {
      const result = await quizModule.loadProductDetails(1)
      expect(result).toHaveProperty('product')
      expect(result).toHaveProperty('reviews')
      expect(result).toHaveProperty('related')
    })
  })

  describe('buildUserDashboard', () => {
    test('should build dashboard with parallel data fetching', async () => {
      const start = Date.now()
      const result = await quizModule.buildUserDashboard(1)
      const duration = Date.now() - start
      
      expect(result).toHaveProperty('profile')
      expect(result).toHaveProperty('orders')
      expect(result).toHaveProperty('wishlist')
      expect(result).toHaveProperty('recommendations')
      // Should be faster than sequential (less than 1.5s for all 4)
      expect(duration).toBeLessThan(1500)
    })
  })

  describe('processBulkOrders', () => {
    test('should process orders sequentially', async () => {
      const orderIds = [1, 2, 3]
      const start = Date.now()
      const result = await quizModule.processBulkOrders(orderIds)
      const duration = Date.now() - start
      
      expect(result).toHaveLength(3)
      // Sequential should take at least 1.5s (3 * 500ms)
      expect(duration).toBeGreaterThanOrEqual(1400)
    })
  })

  describe('fetchWithTimeout', () => {
    test('should timeout slow requests', async () => {
      const slowFetch = () => new Promise(resolve => setTimeout(resolve, 4000))
      const result = await quizModule.fetchWithTimeout('http://slow-api.com')
      expect(result).toBe('Request timeout')
    })

    test('should allow fast requests', async () => {
      const fastFetch = () => Promise.resolve({ data: 'success' })
      const result = await quizModule.fetchWithTimeout('http://fast-api.com')
      expect(result).toBeDefined()
    })
  })

  describe('createOrderFlow', () => {
    test('should create order with chained operations', async () => {
      const cartItems = [{ id: 1, quantity: 2 }]
      const result = await quizModule.createOrderFlow(cartItems)
      
      expect(result).toHaveProperty('validated')
      expect(result).toHaveProperty('inventory')
      expect(result).toHaveProperty('total')
      expect(result).toHaveProperty('payment')
      expect(result).toHaveProperty('order')
      expect(result).toHaveProperty('email')
    })
  })

  describe('handleMultipleAPIs', () => {
    test('should handle multiple APIs with allSettled', async () => {
      const results = await quizModule.handleMultipleAPIs()
      
      expect(results).toHaveLength(3)
      results.forEach(result => {
        expect(result).toHaveProperty('api')
        expect(result).toHaveProperty('status')
        expect(['fulfilled', 'rejected']).toContain(result.status)
      })
    })
  })

  describe('filterAvailableProducts', () => {
    test('should filter to only available products', async () => {
      const productIds = [2, 4, 6, 1, 3]
      const result = await quizModule.filterAvailableProducts(productIds)
      
      expect(Array.isArray(result)).toBe(true)
      result.forEach(product => {
        expect(product.inStock).toBe(true)
      })
    })
  })

  describe('loadOrderDetails', () => {
    test('should load order details in parallel', async () => {
      const start = Date.now()
      const result = await quizModule.loadOrderDetails(1)
      const duration = Date.now() - start
      
      expect(result).toHaveProperty('order')
      expect(result).toHaveProperty('customer')
      expect(result).toHaveProperty('items')
      expect(result).toHaveProperty('shipping')
      // Parallel should be faster than sequential
      expect(duration).toBeLessThan(500)
    })
  })
})
