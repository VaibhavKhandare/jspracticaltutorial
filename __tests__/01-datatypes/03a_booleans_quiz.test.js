const path = require('path')

describe('Booleans Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../01-datatypes/03a_booleans_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  test('should check tweet length within limit', () => {
    expect(quizModule.tweetLength).toBe(true)
  })

  test('should check if user can watch 18+ movie', () => {
    expect(quizModule.canWatchMovie).toBe(false)
  })

  test('should check if cart is empty', () => {
    expect(quizModule.isCartEmpty).toBe(true)
  })

  test('should verify password match', () => {
    expect(quizModule.isPasswordCorrect).toBe(true)
  })

  test('should check free shipping eligibility', () => {
    expect(quizModule.hasFreeShipping).toBe(true)
  })

  test('should check if user can post (AND logic)', () => {
    expect(quizModule.canPost).toBe(false)
  })

  test('should check if store is open (OR logic)', () => {
    expect(quizModule.isStoreOpen).toBe(true)
  })

  test('should check if player won game', () => {
    expect(quizModule.hasWon).toBe(false)
  })

  test('should check discount eligibility (OR logic)', () => {
    expect(quizModule.getsDiscount).toBe(true)
  })

  test('should check ATM withdrawal eligibility', () => {
    expect(quizModule.canWithdraw).toBe(true)
  })

  test('should check feature access with nullish coalescing', () => {
    expect(quizModule.hasFeatureAccess).toBeDefined()
  })

  test('should validate form (AND logic)', () => {
    expect(quizModule.isFormValid).toBe(false)
  })

  test('should determine dark mode with nullish coalescing', () => {
    expect(quizModule.isDarkMode).toBe(true)
  })

  test('should check if programmer can code', () => {
    expect(quizModule.canCode).toBe(true)
  })

  test('should check if can eat with complex logic', () => {
    expect(quizModule.canEat).toBe(true)
  })

  test('should check if must wake up', () => {
    expect(quizModule.mustWakeUp).toBe(true)
  })
})
