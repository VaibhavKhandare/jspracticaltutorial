# Jest Test Cases for JavaScript Quizzes

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run all tests:
```bash
npm test
```

3. Run tests in watch mode:
```bash
npm run test:watch
```

4. Run tests with coverage:
```bash
npm run test:coverage
```

## Test Structure

Tests are organized by quiz category:
- `01-datatypes/` - Tests for basic data type quizzes (numbers, strings, arrays, booleans, maps)
- `02-advanced/` - Tests for advanced topics (error handling, promises, async-await)

## Writing Tests

### For Simple Quizzes (Variables)
These quizzes export variables that need to be calculated. Tests verify the expected values:

```javascript
test('should calculate total correctly', () => {
  expect(quizModule.totalBill).toBe(13.25)
})
```

### For Complex Quizzes (Functions)
These quizzes export functions that need to be implemented. Tests verify behavior:

```javascript
test('should handle valid input', async () => {
  const result = await quizModule.someFunction(validInput)
  expect(result).toBeDefined()
})
```

## Notes

- Quiz files need to export variables/functions for testing
- Use `module.exports` or `exports` in quiz files
- Tests reload modules to ensure fresh state
