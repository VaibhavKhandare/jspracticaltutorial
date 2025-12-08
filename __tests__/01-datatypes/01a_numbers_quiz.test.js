const path = require('path')

// Mock console.log to capture output
let consoleOutput = []
const originalLog = console.log
beforeAll(() => {
  console.log = (...args) => {
    consoleOutput.push(args.join(' '))
    originalLog(...args)
  }
})

afterAll(() => {
  console.log = originalLog
})

beforeEach(() => {
  consoleOutput = []
})

describe('Numbers Quiz', () => {
  let quizModule

  beforeAll(() => {
    // Clear require cache to reload module
    const modulePath = path.join(__dirname, '../../01-datatypes/01a_numbers_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  test('should calculate total bill correctly', () => {
    expect(quizModule.totalBill).toBe(13.25)
  })

  test('should calculate PS5 sale price with 20% discount', () => {
    expect(quizModule.ps5SalePrice).toBe(399.2)
  })

  test('should calculate slices per person (rounded down)', () => {
    expect(quizModule.slicesPerPerson).toBe(2)
  })

  test('should generate random rating between 1 and 5', () => {
    expect(quizModule.randomRating).toBeGreaterThanOrEqual(1)
    expect(quizModule.randomRating).toBeLessThan(5)
  })

  test('should calculate yearly Netflix subscription', () => {
    expect(quizModule.yearlySubscription).toBe(191.88)
  })

  test('should calculate Uber total fare', () => {
    expect(quizModule.uberTotal).toBe(19.5)
  })

  test('should round miles to nearest whole number', () => {
    expect(quizModule.milesWalked).toBe(6)
  })

  test('should round down gas gallons', () => {
    expect(quizModule.gasGallons).toBe(9)
  })

  test('should calculate tip rounded up', () => {
    expect(quizModule.tipAmount).toBe(10)
  })

  test('should calculate remaining cat lives (non-negative)', () => {
    expect(quizModule.remainingLives).toBe(6)
    expect(quizModule.remainingLives).toBeGreaterThanOrEqual(0)
  })

  test('should calculate Amazon total with tax (2 decimals)', () => {
    const expected = (67.43 + 5.99) * 1.085
    expect(quizModule.amazonTotal).toBeCloseTo(expected, 2)
  })

  test('should calculate leftover money', () => {
    expect(quizModule.leftoverMoney).toBe(1164.5)
  })

  test('should calculate gym total rounded down', () => {
    expect(quizModule.gymTotal).toBe(239)
  })

  test('should calculate crypto profit', () => {
    expect(quizModule.cryptoProfit).toBe(7500)
  })

  test('should calculate running speed', () => {
    expect(quizModule.runningSpeed).toBeCloseTo(7.49, 2)
  })

  test('should calculate money needed (absolute value)', () => {
    expect(quizModule.moneyNeeded).toBe(999949.99)
  })
})
