const { readFile } = require('fs').promises;
const path = require('path');

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = {
  add,
  multiply,
  divide
};

const math = require('./modules');
console.log('Testing CommonJS exports:');
console.log('2 + 3 =', math.add(2, 3));
console.log('4 * 5 =', math.multiply(4, 5));

export const PI = 3.14159;
export const E = 2.71828;

export function circleArea(radius) {
  return PI * radius * radius;
}

export function circleCircumference(radius) {
  return 2 * PI * radius;
}

export default class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(value) {
    this.result += value;
    return this;
  }
  
  subtract(value) {
    this.result -= value;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

import Calculator, { PI, circleArea } from './modules.js';

const calc = new Calculator();
calc.add(10).subtract(3);
console.log('ES6 Calculator result:', calc.getResult());
console.log('Circle area (r=5):', circleArea(5));

import * as MathUtils from './modules.js';
console.log('Using namespace import:');
console.log('PI:', MathUtils.PI);
console.log('E:', MathUtils.E);

const dynamicImport = async () => {
  const module = await import('./modules.js');
  console.log('Dynamic import loaded');
  console.log('Circle area:', module.circleArea(3));
};

dynamicImport();

export { add as sum, multiply as product } from './math.js';

const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  debug: process.env.NODE_ENV !== 'production'
};

Object.freeze(config);
export default config;
