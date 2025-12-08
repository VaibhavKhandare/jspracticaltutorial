console.log('=== E-commerce Checkout System ===')

const processCheckout = (cartTotal, discountCode) => {
  console.log(`User checking out with $${cartTotal} cart. Apply discount code "${discountCode}". Handle invalid codes gracefully`)
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
  try {
    const birth = new Date(birthDate)
    const today = new Date()
    const age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate()) ? age - 1 : age
    
    if (actualAge < 21) {
      throw new Error('User must be 21 or older to purchase alcohol')
    }
    const canPurchase = true
    console.log(canPurchase)
    return canPurchase
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

const processPayment = (cardNumber, amount) => {
  console.log(`Processing $${amount} payment with card ending in ${cardNumber.slice(-4)}. Handle invalid card numbers and insufficient funds`)
  try {
    if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) {
      throw new Error('Invalid card number')
    }
    if (amount <= 0) {
      throw new Error('Invalid amount')
    }
    if (amount > 1000) {
      throw new Error('Insufficient funds')
    }
    const paymentResult = { success: true, transactionId: `TXN${Date.now()}` }
    console.log(paymentResult)
    return paymentResult
  } catch (error) {
    const paymentResult = { success: false, error: error.message }
    console.log(paymentResult)
    return paymentResult
  }
}

const parseUserInput = (userJson) => {
  console.log(`User submitted form data: ${userJson}. Parse safely and return {success: true, user: ...} or {success: false, error: ...}`)
  try {
    const user = JSON.parse(userJson)
    if (!user.name || !user.email) {
      throw new Error('Missing required fields')
    }
    const userData = { success: true, user }
    console.log(userData)
    return userData
  } catch (error) {
    const userData = { success: false, error: error.message }
    console.log(userData)
    return userData
  }
}

const calculateShipping = (weight, country) => {
  console.log(`Calculate shipping for ${weight}kg package to ${country}. Handle invalid countries and negative weights`)
  try {
    if (weight <= 0) {
      throw new Error('Weight must be positive')
    }
    const validCountries = ['US', 'CA', 'UK', 'DE', 'FR']
    if (!validCountries.includes(country)) {
      throw new Error('Invalid country')
    }
    const rates = { US: 10, CA: 15, UK: 20, DE: 18, FR: 18 }
    const shippingCost = weight * rates[country]
    console.log(shippingCost)
    return shippingCost
  } catch (error) {
    const shippingCost = null
    console.log(shippingCost)
    return shippingCost
  }
}

const validateEmail = (email) => {
  console.log(`User registering with email: ${email}. Validate format and throw descriptive error if invalid`)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format. Please provide a valid email address')
  }
  const isValid = true
  console.log(isValid)
  return isValid
}

const loadUserProfile = (userId) => {
  console.log(`Loading profile for user ${userId}. Handle case where user doesn't exist - return null instead of crashing`)
  const users = { 1: { id: 1, name: 'John' }, 2: { id: 2, name: 'Jane' } }
  const profile = users[userId] || null
  console.log(profile)
  return profile
}

const calculateDiscount = (price, discountPercent) => {
  console.log(`Apply ${discountPercent}% discount to $${price}. Handle negative discounts and prices over 100% off`)
  try {
    if (discountPercent < 0) {
      throw new Error('Discount cannot be negative')
    }
    if (discountPercent > 100) {
      throw new Error('Discount cannot exceed 100%')
    }
    if (price < 0) {
      throw new Error('Price cannot be negative')
    }
    const discountedPrice = price * (1 - discountPercent / 100)
    console.log(discountedPrice)
    return discountedPrice
  } catch (error) {
    console.log(error.message)
    return price
  }
}

const processOrder = (orderData) => {
  console.log(`Processing order: ${JSON.stringify(orderData)}. Validate all required fields exist, handle missing data gracefully`)
  const requiredFields = ['userId', 'items', 'total']
  try {
    const missingFields = requiredFields.filter(field => !orderData || !orderData[field])
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
    }
    const orderResult = { success: true, orderId: `ORD${Date.now()}`, orderData }
    console.log(orderResult)
    return orderResult
  } catch (error) {
    const orderResult = { success: false, error: error.message }
    console.log(orderResult)
    return orderResult
  }
}

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  console.log(`Convert ${amount} ${fromCurrency} to ${toCurrency}. Handle unsupported currencies and invalid amounts`)
  const exchangeRates = { USD: 1, EUR: 0.85, GBP: 0.73, JPY: 110 }
  try {
    if (amount <= 0) {
      throw new Error('Amount must be positive')
    }
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      throw new Error('Unsupported currency')
    }
    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency]
    console.log(convertedAmount)
    return convertedAmount
  } catch (error) {
    const convertedAmount = null
    console.log(convertedAmount)
    return convertedAmount
  }
}
