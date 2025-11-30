const { productDatabase } = require('../01-datatypes/08_super_quiz');

const randomDelay = () => Math.floor(Math.random() * 500);

const productNames = productDatabase.map(product => product.id);

const buyProduct = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(`buyed ${name}`); console.log(`buyed ${name}`)}, randomDelay());
  });
}

const buyProducts = () =>{
  productNames.forEach(product => {
    buyProduct(product);
  });
}
buyProducts();


const buyProductsSync = async() =>{
  console.log('Buying products...', productNames);
  for (const product of productNames) {
    await buyProduct(product);
  }
}
buyProductsSync();

//call some json api and show the result
const fetchData = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}
fetchData();

//call fetch with body and show the result
const fetchDataWithBody = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ name: 'John', age: 30 }),
  });
  const data = await response.json();
  console.log(data);
}
fetchDataWithBody();