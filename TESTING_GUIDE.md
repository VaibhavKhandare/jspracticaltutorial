# Testing Guide for JavaScript Quizzes

## Yes, it's possible to write Jest tests for all quizzes!

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add exports to quiz files:**
   ```bash
   npm run add-exports
   ```
   This automatically adds `module.exports` to all quiz files.

3. **Run tests:**
   ```bash
   npm test
   ```

## Manual Setup (Alternative)

If you prefer to add exports manually, add this to the end of each quiz file:

### For Simple Quizzes (Variables):
```javascript
// At the end of 01a_numbers_quiz.js
module.exports = {
  totalBill,
  ps5SalePrice,
  slicesPerPerson,
  randomRating,
  yearlySubscription,
  uberTotal,
  milesWalked,
  gasGallons,
  tipAmount,
  remainingLives,
  amazonTotal,
  leftoverMoney,
  gymTotal,
  cryptoProfit,
  runningSpeed,
  moneyNeeded
}
```

### For Function Quizzes:
```javascript
// At the end of 01a_error-handling_quiz.js
module.exports = {
  processCheckout,
  validateUserAge,
  processPayment,
  parseUserInput,
  calculateShipping,
  validateEmail,
  loadUserProfile,
  calculateDiscount,
  processOrder,
  convertCurrency
}
```

## Test Structure

Tests are organized in `__tests__/` directory:
- `__tests__/01-datatypes/` - Basic data type quizzes
- `__tests__/02-advanced/` - Advanced topic quizzes

## Writing Your Own Tests

### Example for Variable Quiz:
```javascript
const quizModule = require('../01-datatypes/01a_numbers_quiz.js')

test('should calculate total correctly', () => {
  expect(quizModule.totalBill).toBe(13.25)
})
```

### Example for Function Quiz:
```javascript
const quizModule = require('../02-advanced/01a_error-handling_quiz.js')

test('should handle valid input', async () => {
  const result = await quizModule.processCheckout(100, 'SAVE10')
  expect(result).toBe(90)
})
```

## Notes

- Quiz files must export variables/functions for tests to access them
- The `add-exports` script automatically detects and exports all quiz variables/functions
- Tests use `require.cache` clearing to ensure fresh module state
- Async functions are tested with `async/await` in Jest

## Running Specific Tests

```bash
# Run tests for specific file
npm test -- 01a_numbers_quiz

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```
