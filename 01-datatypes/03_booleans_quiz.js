const userAge = 17;
const minAge = 18;
console.log(`User age ${userAge}. Can they watch ${minAge}+ movie?`)
let canWatchMovie;
console.log(canWatchMovie)

const cartItems = 0;
console.log(`Shopping cart has ${cartItems} items. Is cart empty?`)
let isCartEmpty;
console.log(isCartEmpty)

const enteredPassword = "Pass123";
const storedPassword = "Pass123";
console.log(`Entered "${enteredPassword}", stored "${storedPassword}". Do they match?`)
let isPasswordCorrect;
console.log(isPasswordCorrect)

const orderAmount = 65;
const freeShippingMin = 50;
console.log(`Free shipping above $${freeShippingMin}. Order $${orderAmount}. Gets free shipping?`)
let hasFreeShipping;
console.log(hasFreeShipping)

const isLoggedIn = true;
const emailVerified = false;
console.log(`Must be logged in (${isLoggedIn}) AND verified email (${emailVerified}) to post. Can post?`)
let canPost;
console.log(canPost)

const isWeekday = true;
const holidayHours = false;
console.log(`Store open if weekday (${isWeekday}) OR holiday hours (${holidayHours}). Is open?`)
let isStoreOpen;
console.log(isStoreOpen)

const playerScore = 150;
const playerLives = 0;
console.log(`Game needs score > 100 AND lives > 0. Score ${playerScore}, lives ${playerLives}. Won?`)
let hasWon;
console.log(hasWon)

const isMember = false;
const purchaseAmount = 120;
console.log(`Discount if member (${isMember}) OR purchase > $100 (purchase $${purchaseAmount}). Gets discount?`)
let getsDiscount;
console.log(getsDiscount)

const balance = 500;
const withdrawAmount = 200;
const cardExpired = false;
console.log(`ATM - Balance $${balance} > $${withdrawAmount} AND card not expired (${!cardExpired})? Can withdraw?`)
let canWithdraw;
console.log(canWithdraw)

const premiumStatus = null;
const trialDays = 0;
console.log(`App feature - Premium ${premiumStatus} OR trial days ${trialDays}. Use ?? to check access`)
let hasFeatureAccess;
console.log(hasFeatureAccess)

const nameField = "John";
const emailField = "";
console.log(`Form - Name "${nameField}" (truthy) AND email "${emailField}" (falsy). Is valid?`)
let isFormValid;
console.log(isFormValid)

const userPreference = undefined;
const systemSetting = true;
console.log(`Dark mode - User preference ${userPreference}, system ${systemSetting}. Use ?? for final mode`)
let isDarkMode;
console.log(isDarkMode)

const hasCoffee = false;
const hasSleep = false;
const hasEnergy = true;
console.log(`Programmer survival - Coffee ${hasCoffee} OR sleep ${hasSleep} OR energy ${hasEnergy}? Can code?`)
let canCode;
console.log(canCode)

const fridgeEmpty = true;
const walletEmpty = true;
const hasPizzaCoupon = true;
console.log(`Hunger crisis - Fridge empty (${fridgeEmpty}) AND wallet empty (${walletEmpty}) BUT coupon (${hasPizzaCoupon}). Can eat?`)
let canEat;
console.log(canEat)

const alarmRang = false;
const isWeekend = false;
const bossCalling = true;
console.log(`Monday morning - Alarm rang (${alarmRang}) OR (weekend ${isWeekend} AND no boss ${!bossCalling}). Must wake up?`)
let mustWakeUp;
console.log(mustWakeUp)
