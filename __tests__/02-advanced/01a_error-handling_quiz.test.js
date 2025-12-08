const path = require('path')

describe('Error Handling Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../02-advanced/01a_error-handling_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  describe('processCheckout', () => {
    test('should apply valid discount code', () => {
      const result = quizModule.processCheckout(100, 'SAVE10')
      expect(result).toBe(90)
    })

    test('should handle invalid discount code gracefully', () => {
      const result = quizModule.processCheckout(100, 'INVALID')
      expect(result).toBe(100)
    })
  })

  describe('validateUserAge', () => {
    test('should allow purchase for 21+ users', () => {
      const birthDate = new Date()
      birthDate.setFullYear(birthDate.getFullYear() - 25)
      const result = quizModule.validateUserAge(birthDate.toISOString().split('T')[0])
      expect(result).toBe(true)
    })

    test('should throw error for underage users', () => {
      const birthDate = new Date()
      birthDate.setFullYear(birthDate.getFullYear() - 18)
      expect(() => quizModule.validateUserAge(birthDate.toISOString().split('T')[0])).toThrow()
    })
  })

  describe('processPayment', () => {
    test('should process valid payment', () => {
      const result = quizModule.processPayment('4532015112830366', 100)
      expect(result.success).toBe(true)
      expect(result.transactionId).toBeDefined()
    })

    test('should reject invalid card number', () => {
      const result = quizModule.processPayment('123', 100)
      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
    })

    test('should reject invalid amount', () => {
      const result = quizModule.processPayment('4532015112830366', -10)
      expect(result.success).toBe(false)
    })
  })

  describe('parseUserInput', () => {
    test('should parse valid JSON with required fields', () => {
      const validJson = JSON.stringify({ name: 'John', email: 'john@example.com' })
      const result = quizModule.parseUserInput(validJson)
      expect(result.success).toBe(true)
      expect(result.user).toBeDefined()
    })

    test('should handle invalid JSON', () => {
      const result = quizModule.parseUserInput('invalid json')
      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
    })

    test('should reject missing required fields', () => {
      const invalidJson = JSON.stringify({ name: 'John' })
      const result = quizModule.parseUserInput(invalidJson)
      expect(result.success).toBe(false)
    })
  })

  describe('calculateShipping', () => {
    test('should calculate shipping for valid country', () => {
      const result = quizModule.calculateShipping(5, 'US')
      expect(result).toBe(50)
    })

    test('should return null for invalid country', () => {
      const result = quizModule.calculateShipping(5, 'XX')
      expect(result).toBeNull()
    })

    test('should return null for negative weight', () => {
      const result = quizModule.calculateShipping(-5, 'US')
      expect(result).toBeNull()
    })
  })

  describe('validateEmail', () => {
    test('should validate correct email format', () => {
      expect(() => quizModule.validateEmail('test@example.com')).not.toThrow()
      expect(quizModule.validateEmail('test@example.com')).toBe(true)
    })

    test('should throw error for invalid email', () => {
      expect(() => quizModule.validateEmail('invalid-email')).toThrow()
    })
  })

  describe('loadUserProfile', () => {
    test('should return user profile for existing user', () => {
      const result = quizModule.loadUserProfile(1)
      expect(result).toBeDefined()
      expect(result.id).toBe(1)
    })

    test('should return null for non-existent user', () => {
      const result = quizModule.loadUserProfile(999)
      expect(result).toBeNull()
    })
  })

  describe('calculateDiscount', () => {
    test('should calculate valid discount', () => {
      const result = quizModule.calculateDiscount(100, 20)
      expect(result).toBe(80)
    })

    test('should return original price for negative discount', () => {
      const result = quizModule.calculateDiscount(100, -10)
      expect(result).toBe(100)
    })

    test('should return original price for discount over 100%', () => {
      const result = quizModule.calculateDiscount(100, 150)
      expect(result).toBe(100)
    })
  })

  describe('processOrder', () => {
    test('should process order with all required fields', () => {
      const orderData = {
        customerId: 1,
        items: ['item1'],
        total: 100,
        shippingAddress: '123 Main St'
      }
      const result = quizModule.processOrder(orderData)
      expect(result.success).toBe(true)
      expect(result.orderId).toBeDefined()
    })

    test('should reject order with missing fields', () => {
      const orderData = { customerId: 1 }
      const result = quizModule.processOrder(orderData)
      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
    })
  })

  describe('convertCurrency', () => {
    test('should convert valid currency', () => {
      const result = quizModule.convertCurrency(100, 'USD', 'EUR')
      expect(result).toBeCloseTo(85, 2)
    })

    test('should return null for unsupported currency', () => {
      const result = quizModule.convertCurrency(100, 'USD', 'XXX')
      expect(result).toBeNull()
    })

    test('should return null for invalid amount', () => {
      const result = quizModule.convertCurrency(-100, 'USD', 'EUR')
      expect(result).toBeNull()
    })
  })
})
