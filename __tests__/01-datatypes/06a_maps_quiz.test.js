const path = require('path')

describe('Maps (Objects) Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../01-datatypes/06a_maps_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  test('should add item to cart', () => {
    expect(quizModule.cartItem).toEqual({ laptop: 999 })
  })

  test('should check if email property exists', () => {
    expect(quizModule.hasEmail).toBe(false)
  })

  test('should get all setting keys', () => {
    expect(quizModule.settingKeys).toEqual(['theme', 'notifications'])
  })

  test('should get all quantities', () => {
    expect(quizModule.quantities).toEqual([50, 30, 20])
  })

  test('should remove price property', () => {
    expect(quizModule.productAfterDelete).not.toHaveProperty('price')
    expect(quizModule.productAfterDelete).toHaveProperty('id')
    expect(quizModule.productAfterDelete).toHaveProperty('name')
  })

  test('should count properties', () => {
    expect(quizModule.propertyCount).toBe(3)
  })

  test('should get apiUrl value', () => {
    expect(quizModule.apiUrl).toBe('https://api.example.com')
  })

  test('should add player3 to game scores', () => {
    expect(quizModule.updatedScores.player3).toBe(200)
  })

  test('should check if isbn exists', () => {
    expect(quizModule.hasIsbn).toBe(false)
  })

  test('should get all prices as array', () => {
    expect(quizModule.prices).toEqual([5.99, 2.99, 1.99])
  })

  test('should get user entries', () => {
    expect(quizModule.userEntries).toBeDefined()
    expect(Array.isArray(quizModule.userEntries)).toBe(true)
  })

  test('should remove property y', () => {
    expect(quizModule.dataAfterDelete).not.toHaveProperty('y')
  })

  test('should add type property to account', () => {
    expect(quizModule.updatedAccount.type).toBe('savings')
  })

  test('should check if rating exists', () => {
    expect(quizModule.hasRating).toBe(false)
  })

  test('should get all item names', () => {
    expect(quizModule.itemNames).toEqual(['milk', 'bread', 'eggs'])
  })

  test('should update age in profile', () => {
    expect(quizModule.updatedProfile.age).toBe(29)
  })

  test('should calculate total games', () => {
    expect(quizModule.totalGames).toBe(17)
  })

  test('should remove notifications property', () => {
    expect(quizModule.updatedPreferences).not.toHaveProperty('notifications')
  })
})
