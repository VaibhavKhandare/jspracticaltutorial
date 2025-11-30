const productDatabase = [
  { id: 1, name: 'iphoni 15 pro max', price: 1199.99, available: 5, tags: 'iphone,camera,apple' },
  { id: 2, name: 'IPHONEe SE', price: 429.99, available: 5, tags: 'iphone,budget' },
  { id: 3, name: 'iphoone 13 mini', price: 599.99, available: 5, tags: 'iphone,compact' },
  { id: 4, name: 'Samsung Galaxy S24', price: 799.99, available: 5, tags: 'android,flagship' },
  { id: 5, name: 'Samsing Z Fold 5', price: 199.99, available: 5, tags: 'android,foldable,compact' }
]

// Fix the product name of iphone typo 
const iphoneTypo = ["iphoni", "iphonee", "iphoone"];

const smallCase = name => name.toLowerCase();
const updateTypoNameToiPhone = (fullName,typoName)  => fullName.replace(typoName, "iPhone");

productDatabase.forEach(product => {
  product.name = smallCase(product.name);
  for (const typo of iphoneTypo) {
    if (product.name.includes(typo)) {
      product.name = updateTypoNameToiPhone(product.name, typo);
    }
  }
})

productDatabase.forEach(product => {
  product.name = smallCase(product.name);
  typosInCurrentName = iphoneTypo.filter(typo => product.name.includes(typo));
  typosInCurrentName.forEach(typo => product.name = updateTypoNameToiPhone(product.name, typo))
})



// make first letter capital of begin of each word
productDatabase.forEach(product => {
  product.name = product.name.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
})


// buy 1 iphone 15 pro max
productDatabase.forEach(product => {
  if (product.name.includes("iPhone 15 pro max")) {
    product.available--;
  }
})


// search is there iPhone 16 pro max
productDatabase.forEach(product => {
  if (product.name.includes("iPhone 16 pro max")) {
    console.log("iPhone 16 pro max is available");
  } else {
    console.log("iPhone 16 pro max is not available");
  }
})

// sort based on the price
productDatabase.sort((a, b) => a.price - b.price);

// add new product to the database 
productDatabase.push({ id: 7, name: 'iPhone 16 pro max', price: 1599.99, available: 5, tags: 'iphone,camera,apple' });

// tags are string make it array
productDatabase.forEach(product => product.tags = product.tags.split(','));

// get all the product where tag is iphone
const iphoneProducts = productDatabase.filter(product => product.tags.includes('iphone'));
console.log(iphoneProducts);

// #sale discount if product is iphone reduce price by 5% and if its samsung reduce price by 10%
productDatabase.forEach(product => {
  if (product.tags.includes('iphone')) {
    product.price = product.price * 0.95;
  } else if (product.tags.includes('samsung')) {
    product.price = product.price * 0.9;
  }
})

// Mrbeast want to buy all the products what will be the total price
let totalPrice = 0
productDatabase.forEach(product => totalPrice += product.price);
console.log(totalPrice);

// Add random ratings to 5 if the rating is 1 add bad in comment array 
// if rating is 5 add good in comment array and if rating is 3 add average in comment array
const randomRating =()=> Math.floor(Math.random() * 5) + 1;
productDatabase.forEach(product => product.rating = randomRating());
productDatabase.forEach(product => {
  product.comments = product.comments || [];
  if (product.rating === 1) {
    product.comments.push('bad');
  } else if (product.rating === 5) {
    product.comments.push('good');
  } else if (product.rating === 3) {
    product.comments.push('average');
  }
})


// print final product congrats we can start with advance now i know you are a genius
console.log(JSON.stringify(productDatabase));