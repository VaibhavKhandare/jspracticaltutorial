const path = require('path')

describe('Promises Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../02-advanced/02a_promises_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  describe('checkInventory', () => {
    test('should resolve for even productId', async () => {
      const result = await quizModule.checkInventory(2)
      expect(result.inStock).toBe(true)
      expect(result.quantity).toBe(10)
    })

    test('should reject for odd productId', async () => {
      await expect(quizModule.checkInventory(1)).rejects.toThrow('Out of stock')
    })
  })

  describe('sendEmailConfirmation', () => {
    test('should resolve after 2 seconds with email sent', async () => {
      const start = Date.now()
      const result = await quizModule.sendEmailConfirmation('ORD123')
      const duration = Date.now() - start
      expect(result).toBe('Email sent')
      expect(duration).toBeGreaterThanOrEqual(1900)
      expect(duration).toBeLessThan(2500)
    })
  })

  describe('fetchUserOrders', () => {
    test('should chain promises and return formatted orders', async () => {
      const result = await quizModule.fetchUserOrders(1)
      expect(result).toBeDefined()
      expect(Array.isArray(result)).toBe(true)
    })
  })

  describe('loadDashboardData', () => {
    test('should fetch all data in parallel', async () => {
      const start = Date.now()
      const result = await quizModule.loadDashboardData()
      const duration = Date.now() - start
      expect(result).toHaveProperty('profile')
      expect(result).toHaveProperty('orders')
      expect(result).toHaveProperty('notifications')
      expect(duration).toBeLessThan(500)
    })
  })

  describe('getFastestShipping', () => {
    test('should return fastest shipping option', async () => {
      const result = await quizModule.getFastestShipping()
      expect(result.company).toBe('DHL')
      expect(result.time).toBe('200ms')
    })
  })

  describe('syncMultipleAPIs', () => {
    test('should get results from all APIs even if some fail', async () => {
      const results = await quizModule.syncMultipleAPIs()
      expect(results).toHaveLength(3)
      expect(results.some(r => r.status === 'fulfilled')).toBe(true)
      expect(results.some(r => r.status === 'rejected')).toBe(true)
    })
  })

  describe('processRefund', () => {
    test('should process refund for valid order', async () => {
      const result = await quizModule.processRefund(1, 50)
      expect(result.refundId).toBeDefined()
      expect(result.amount).toBe(50)
    })

    test('should reject for non-existent order', async () => {
      await expect(quizModule.processRefund(999, 50)).rejects.toThrow()
    })
  })

  describe('retryPayment', () => {
    test('should retry payment with exponential backoff', async () => {
      const result = await quizModule.retryPayment({ amount: 100 })
      expect(result).toBeDefined()
    }, 10000)
  })

  describe('timeoutAPI', () => {
    test('should timeout slow API calls', async () => {
      const slowAPI = () => new Promise(resolve => setTimeout(resolve, 6000))
      await expect(quizModule.timeoutAPI(slowAPI)).rejects.toThrow('Request timeout')
    })

    test('should allow fast API calls', async () => {
      const fastAPI = () => Promise.resolve('Success')
      const result = await quizModule.timeoutAPI(fastAPI)
      expect(result).toBe('Success')
    })
  })

  describe('batchProcessOrders', () => {
    test('should process all orders and handle individual failures', async () => {
      const orderIds = [2, 4, 6]
      const results = await quizModule.batchProcessOrders(orderIds)
      expect(results).toHaveLength(3)
      results.forEach(result => {
        expect(result).toHaveProperty('orderId')
        expect(result).toHaveProperty('status')
      })
    })
  })
})
