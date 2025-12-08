console.log('=== E-commerce Checkout System ===')

const processCheckout = (cartTotal, discountCode) => {
  console.log(`User checking out with $${cartTotal} cart. 
    Apply discount code "${discountCode}". 
    Handle invalid codes gracefully`)
  const validCodes = { SAVE10: 0.1, SAVE20: 0.2, WELCOME: 0.15 }
  try {
    if (!validCodes[discountCode]) {
      throw new Error('Invalid discount code')
    }
    const discount = cartTotal * validCodes[discountCode]
    const finalPrice = cartTotal - discount
    console.log(finalPrice)
    return finalPrice
  } catch (error) {
    const finalPrice = cartTotal
    console.log(finalPrice)
    return finalPrice
  }
}

const validateUserAge = (birthDate) => {
  console.log(`User trying to buy alcohol. Birth date: ${birthDate}. Must be 21+. Throw error if underage`)
  // TODO: Calculate age from birthDate
  // TODO: Check if age is less than 21, if yes throw an error with descriptive message
  // TODO: If 21 or older, return true
  // TODO: Use try-catch to handle and re-throw the error
  let canPurchase;
  console.log(canPurchase)
  return canPurchase
}

const processPayment = (cardNumber, amount) => {
  console.log(`Processing $${amount} payment with card ending in ${cardNumber.slice(-4)}. Handle invalid card numbers and insufficient funds`)
  // TODO: Use try-catch to validate card number length and amount
  // TODO: Throw errors for invalid card numbers, invalid amounts, or insufficient funds
  // TODO: If valid: return success object with transactionId
  // TODO: If invalid: catch error and return failure object with error message
  let paymentResult;
  console.log(paymentResult)
  return paymentResult
}

const parseUserInput = (userJson) => {
  console.log(`User submitted form data: ${userJson}. Parse safely and return {success: true, user: ...} or {success: false, error: ...}`)
  // TODO: Use try-catch to safely parse JSON
  // TODO: Validate that required fields (name and email) exist
  // TODO: If valid: return success object with user data
  // TODO: If error: catch and return failure object with error message
  let userData;
  console.log(userData)
  return userData
}

const calculateShipping = (weight, country) => {
  console.log(`Calculate shipping for ${weight}kg package to ${country}. Handle invalid countries and negative weights`)
  // TODO: Define valid countries array and shipping rates object
  // TODO: Use try-catch to validate weight is positive and country is valid
  // TODO: Calculate shipping cost based on weight and country rate
  // TODO: If error: catch and return null
  let shippingCost;
  console.log(shippingCost)
  return shippingCost
}

const validateEmail = (email) => {
  console.log(`User registering with email: ${email}. Validate format and throw descriptive error if invalid`)
  // TODO: Create email regex pattern to validate email format
  // TODO: Test the email against the regex
  // TODO: If invalid: throw a descriptive error message
  // TODO: If valid: return true
  let isValid;
  console.log(isValid)
  return isValid
}

const loadUserProfile = (userId) => {
  console.log(`Loading profile for user ${userId}. Handle case where user doesn't exist - return null instead of crashing`)
  // TODO: Create a users object with sample user data
  // TODO: Safely retrieve user profile using userId, return null if user doesn't exist
  let profile;
  console.log(profile)
  return profile
}

const calculateDiscount = (price, discountPercent) => {
  console.log(`Apply ${discountPercent}% discount to $${price}. Handle negative discounts and prices over 100% off`)
  // TODO: Use try-catch to validate discount percent and price
  // TODO: Throw errors for negative discounts, discounts over 100%, or negative prices
  // TODO: If valid: calculate and return discounted price
  // TODO: If error: catch, log error message, and return original price
  let discountedPrice;
  console.log(discountedPrice)
  return discountedPrice
}

const processOrder = (orderData) => {
  console.log(`Processing order: ${JSON.stringify(orderData)}. Validate all required fields exist, handle missing data gracefully`)
  // TODO: Define an array of required fields
  // TODO: Use try-catch to validate all required fields exist in orderData
  // TODO: Find and report any missing fields
  // TODO: If valid: return success object with orderId
  // TODO: If error: catch and return failure object with error message
  let orderResult;
  console.log(orderResult)
  return orderResult
}

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  console.log(`Convert ${amount} ${fromCurrency} to ${toCurrency}. Handle unsupported currencies and invalid amounts`)
  // TODO: Create an exchangeRates object with currency conversion rates
  // TODO: Use try-catch to validate amount is positive and both currencies are supported
  // TODO: Calculate converted amount using the exchange rates
  // TODO: If error: catch and return null
  let convertedAmount;
  console.log(convertedAmount)
  return convertedAmount
}


// Helper functions
const getDiscountCode = (code) => {
  const codes = { SAVE10: 0.1, SAVE20: 0.2, WELCOME: 0.15 }
  return codes[code]
}

const calculateAge = (birthDate) => {
  const birth = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

const generateTransactionId = () => {
  return `TXN${Date.now()}`
}

const generateOrderId = () => {
  return `ORD${Date.now()}`
}

const getShippingRate = (country) => {
  const rates = { US: 10, CA: 15, UK: 20, DE: 18, FR: 18 }
  return rates[country]
}

const isValidCountry = (country) => {
  const validCountries = ['US', 'CA', 'UK', 'DE', 'FR']
  return validCountries.includes(country)
}

const getUserById = (userId) => {
  const users = { 1: { id: 1, name: 'John', email: 'john@example.com' }, 2: { id: 2, name: 'Jane', email: 'jane@example.com' } }
  return users[userId]
}

const getExchangeRate = (currency) => {
  const rates = { USD: 1, EUR: 0.85, GBP: 0.73, JPY: 110 }
  return rates[currency]
}
