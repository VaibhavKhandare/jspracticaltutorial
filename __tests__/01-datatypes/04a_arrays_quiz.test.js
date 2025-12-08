const path = require('path')

describe('Arrays Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../01-datatypes/04a_arrays_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  test('should get first item from shopping cart', () => {
    expect(quizModule.firstItem).toBe('milk')
  })

  test('should get playlist length', () => {
    expect(quizModule.playlistLength).toBe(5)
  })

  test('should add item to todo list', () => {
    expect(quizModule.updatedTodos).toContain('Pay bills')
    expect(quizModule.updatedTodos.length).toBe(4)
  })

  test('should combine favorite arrays', () => {
    expect(quizModule.allFavorites).toEqual(['pizza', 'burger', 'sushi', 'pasta'])
  })

  test('should check if product exists', () => {
    expect(quizModule.hasProduct).toBe(true)
  })

  test('should find index of student name', () => {
    expect(quizModule.studentIndex).toBe(2)
  })

  test('should slice prices array', () => {
    expect(quizModule.selectedPrices).toEqual([30, 40, 50])
  })

  test('should get middle cell from game board', () => {
    expect(quizModule.middleCell).toBe('X')
  })

  test('should destructure order items', () => {
    expect(quizModule.firstOrder).toBe('shirt')
    expect(quizModule.secondOrder).toBe('pants')
    expect(quizModule.remainingOrders).toEqual(['shoes', 'hat', 'socks'])
  })

  test('should convert tags string to array', () => {
    expect(quizModule.tagsArray).toEqual(['javascript', 'react', 'nodejs', 'express'])
  })

  test('should add item without modifying original', () => {
    expect(quizModule.newCart).toEqual(['apple', 'banana', 'orange', 'grape'])
  })

  test('should get last task', () => {
    expect(quizModule.lastTask).toBe('task5')
  })

  test('should count chocolate appearances', () => {
    expect(quizModule.chocolateCount).toBe(3)
  })

  test('should check if array is empty', () => {
    expect(quizModule.isEmpty).toBe(true)
  })

  test('should remove duplicates using Set', () => {
    expect(quizModule.uniqueNumbers).toEqual([1, 2, 3, 4])
  })

  test('should reverse array', () => {
    expect(quizModule.decodedArray).toEqual(['backwards', 'this', 'read'])
  })
})
