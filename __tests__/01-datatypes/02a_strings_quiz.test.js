const path = require('path')

describe('Strings Quiz', () => {
  let quizModule

  beforeAll(() => {
    const modulePath = path.join(__dirname, '../../01-datatypes/02a_strings_quiz.js')
    delete require.cache[require.resolve(modulePath)]
    quizModule = require(modulePath)
  })

  test('should get security digit at position 10', () => {
    expect(quizModule.securityDigit).toBe('8')
  })

  test('should get first 10 characters of username', () => {
    expect(quizModule.shortUsername).toBe('javascript')
  })

  test('should format name with capital first letter', () => {
    expect(quizModule.properName).toBe('John')
  })

  test('should trim email spaces', () => {
    expect(quizModule.cleanEmail).toBe('support@company.com')
  })

  test('should check if menu has pizza', () => {
    expect(quizModule.hasPizza).toBe(true)
  })

  test('should check if menu has pasta', () => {
    expect(quizModule.hasPasta).toBe(false)
  })

  test('should replace bad word in review', () => {
    expect(quizModule.cleanReview).toBe('This product is really good!')
  })

  test('should replace USER_ID in URL template', () => {
    expect(quizModule.userUrl).toBe('mysite.com/user/12345/profile')
  })

  test('should extract only alphabetic characters', () => {
    expect(quizModule.lettersOnly).toBe('MyPss')
  })

  test('should remove dashes from phone number', () => {
    expect(quizModule.digitsOnly).toBe('4155550123')
  })

  test('should convert coupon to uppercase', () => {
    expect(quizModule.validCoupon).toBe('SAVE20')
  })

  test('should extract first name', () => {
    expect(quizModule.firstName).toBe('John')
  })

  test('should validate image extension (case insensitive)', () => {
    expect(quizModule.isValidImage).toBe(true)
  })

  test('should reverse secret message', () => {
    expect(quizModule.decodedMessage).toBe('tpircSavaJ evol I')
  })

  test('should convert to lowercase', () => {
    expect(quizModule.grootSays).toBe('i am groot')
  })

  test('should fix typo email', () => {
    expect(quizModule.fixedEmail).toBe('john.doe@gmail.com')
  })

  test('should replace PRICE with actual price', () => {
    expect(quizModule.priceText).toBe('This is 100 of ipad')
  })
})
