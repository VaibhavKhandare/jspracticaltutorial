const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

const validateEmail = (email) => {
  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }
  return true;
}

try {
  validateEmail('invalid-email');
} catch (error) {
  console.log('Validation failed:', error.message);
}

const safeJSONParse = (jsonString) => {
  try {
    return { success: true, data: JSON.parse(jsonString) };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

console.log(safeJSONParse('{"name": "John"}'));
console.log(safeJSONParse('invalid json'));

