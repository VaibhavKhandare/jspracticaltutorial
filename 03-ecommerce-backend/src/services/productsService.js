const store = require('../data/store');

const getAllProducts = (filters = {}) => {
  const { minPrice, maxPrice, tag, rating } = filters;
  let filtered = [...store];

  return filtered;
};

const getProductById = (id) => {
};

const createProduct = (productData) => {
  const { name, price, available, tags } = productData;
  
  return newProduct;
};

const updateProduct = (id, updateData) => {

};

const deleteProduct = (id) => {

};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};

