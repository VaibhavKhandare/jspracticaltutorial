const quiz = [
  {
    question: "What's the main difference between arrow functions and regular functions?",
    options: [
      "Arrow functions are faster",
      "Arrow functions don't have their own 'this' binding",
      "Regular functions can't be async",
      "No difference"
    ],
    answer: 1
  },
  {
    question: "What does array.map() return?",
    options: [
      "Modified original array",
      "New array with transformed elements",
      "Single value",
      "undefined"
    ],
    answer: 1
  },
  {
    question: "Which method would you use to get the sum of all array elements?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    answer: 2
  },
  {
    question: "What does the spread operator (...) do with arrays?",
    options: [
      "Spreads elements into individual items",
      "Creates array reference",
      "Sorts array",
      "Filters array"
    ],
    answer: 0
  },
  {
    question: "How do you create a pure function?",
    options: [
      "Use const keyword",
      "No side effects, same input always gives same output",
      "Use arrow functions only",
      "Add 'pure' keyword"
    ],
    answer: 1
  },
  {
    question: "What's the difference between forEach and map?",
    options: [
      "No difference",
      "forEach is faster",
      "map returns new array, forEach returns undefined",
      "forEach can only work with numbers"
    ],
    answer: 2
  },
  {
    question: "How do you set default parameters in a function?",
    options: [
      "function fn(a || 10)",
      "function fn(a = 10)",
      "function fn(a: 10)",
      "function fn(default a = 10)"
    ],
    answer: 1
  },
  {
    question: "What does array.filter() return?",
    options: [
      "Boolean value",
      "First matching element",
      "New array with elements that pass the test",
      "Count of matching elements"
    ],
    answer: 2
  },
  {
    question: "Which is correct syntax for rest parameters?",
    options: [
      "function fn(...args)",
      "function fn(args...)",
      "function fn([args])",
      "function fn(arguments)"
    ],
    answer: 0
  },
  {
    question: "What's a closure in JavaScript?",
    options: [
      "A way to close functions",
      "Function that has access to outer function's variables",
      "A type of loop",
      "Error handling mechanism"
    ],
    answer: 1
  }
];

function runQuiz() {
  console.log('\n=== FUNCTIONS QUIZ ===\n');
  
  quiz.forEach((q, index) => {
    console.log(`Question ${index + 1}: ${q.question}`);
    q.options.forEach((opt, i) => {
      console.log(`  ${i}) ${opt}`);
    });
    console.log(`Answer: ${q.answer}`);
    console.log();
  });
  
  console.log('Quiz complete! Review the answers above.');
}

runQuiz();

module.exports = quiz;
