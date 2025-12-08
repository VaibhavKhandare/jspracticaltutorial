const creditCard = "4532015112830366";
const position = 10;
console.log(`Credit card "${creditCard}" - Get digit at position ${position} (0-indexed)`)
let securityDigit = creditCard.charAt(position);
console.log(securityDigit)

const username = "javascript_dev_2024";
const maxDisplay = 10;
console.log(`Username "${username}" too long. Show first ${maxDisplay} characters`)
let shortUsername;
console.log(shortUsername)

const signupName = "john";
console.log(`User signed up as "${signupName}". Format as "John" for profile`)
let properName;
console.log(properName)

const emailInput = "   support@company.com   ";
console.log(`Email "${emailInput}" has spaces. Clean it up`)
let cleanEmail;
console.log(cleanEmail)

const menu = "burger,fries,salad,pizza,soda";
console.log(`Menu "${menu}". Check if "pizza" and "pasta" available`)
let hasPizza;
console.log(hasPizza)
let hasPasta;
console.log(hasPasta)

const review = "This product is damn good!";
const badWord = "damn";
const replacement = "really";
console.log(`Review "${review}" has profanity. Replace "${badWord}" with "${replacement}"`)
let cleanReview;
console.log(cleanReview)

const urlTemplate = "mysite.com/user/USER_ID/profile";
const userId = "12345";
console.log(`URL "${urlTemplate}" - Replace USER_ID with "${userId}"`)
let userUrl;
console.log(userUrl)

const password = "MyP@ss123";
console.log(`Password "${password}" - Extract only alphabetic characters`)
let lettersOnly;
console.log(lettersOnly)

const phoneNumber = "415-555-0123";
console.log(`Phone "${phoneNumber}" - Remove dashes to get digits only`)
let digitsOnly;
console.log(digitsOnly)

const couponInput = "save20";
console.log(`Coupon entered as "${couponInput}". Make uppercase to validate`)
let validCoupon;
console.log(validCoupon)

const fullName = "John Michael Doe";
console.log(`Full name "${fullName}" - Extract first name`)
let firstName;
console.log(firstName)

const fileName = "vacation.JPEG";
console.log(`File "${fileName}" - Check if extension is .jpg, .jpeg, or .png (case insensitive)`)
let isValidImage;
console.log(isValidImage)

const secretMessage = "I love JavaScript";
console.log(`Secret message "${secretMessage}" - Reverse it to decode!`)
let decodedMessage;
console.log(decodedMessage)

const memeText = "I AM GROOT";
console.log(`Groot said "${memeText}". Convert to lowercase to understand`)
let grootSays;
console.log(grootSays)

const typoEmail = "john.doe@@gmail..com";
console.log(`Typo email "${typoEmail}" has double @@ and dots. Fix to "john.doe@gmail.com"`)
let fixedEmail;
console.log(fixedEmail)

const text = "This is PRICE of ipad"
const price = 100;
console.log(`Text "${text}" - Replace "PRICE" with $${price}`)
let priceText;
console.log(priceText)
