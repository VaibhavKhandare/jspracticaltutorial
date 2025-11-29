function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  } finally {
    console.log('Division operation completed');
  }
}

console.log(divide(10, 2));
console.log(divide(10, 0));

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format');
  }
  return true;
}

function authenticateUser(token) {
  if (!token) {
    throw new AuthenticationError('No token provided');
  }
  if (token !== 'valid-token') {
    throw new AuthenticationError('Invalid token');
  }
  return { id: 1, name: 'User' };
}

try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation failed:', error.message);
  } else {
    console.log('Unknown error:', error);
  }
}

async function fetchDataWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed:`, error.message);
      if (i === maxRetries - 1) {
        throw new Error(`Failed after ${maxRetries} attempts`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

function processUser(user) {
  try {
    if (!user) throw new Error('User is required');
    if (!user.email) throw new ValidationError('Email is required');
    if (!user.age || user.age < 18) throw new ValidationError('Must be 18 or older');
    
    console.log('User processed successfully');
    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('Validation error:', error.message);
    } else {
      console.error('Processing error:', error.message);
    }
    return false;
  }
}

processUser(null);
processUser({ email: 'test@example.com', age: 17 });
processUser({ email: 'test@example.com', age: 25 });

const safeJSONParse = (jsonString) => {
  try {
    return { success: true, data: JSON.parse(jsonString) };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

console.log(safeJSONParse('{"name": "John"}'));
console.log(safeJSONParse('invalid json'));

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
