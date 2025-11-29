const quiz = [
  {
    question: "What does async/await use under the hood?",
    options: ["Callbacks", "Promises", "Generators", "Observables"],
    answer: 1
  },
  {
    question: "What's the purpose of Promise.all()?",
    options: [
      "Run promises sequentially",
      "Wait for all promises to resolve or any to reject",
      "Cancel all promises",
      "Create new promise"
    ],
    answer: 1
  },
  {
    question: "What does destructuring allow you to do?",
    options: [
      "Delete object properties",
      "Extract values from arrays/objects into variables",
      "Combine multiple objects",
      "Convert objects to arrays"
    ],
    answer: 1
  },
  {
    question: "What's the benefit of template literals?",
    options: [
      "Faster string concatenation",
      "String interpolation and multiline strings",
      "Automatic HTML escaping",
      "Type checking"
    ],
    answer: 1
  },
  {
    question: "What's the difference between CommonJS and ES6 modules?",
    options: [
      "No difference",
      "CommonJS uses require/exports, ES6 uses import/export",
      "ES6 modules are slower",
      "CommonJS only works in browsers"
    ],
    answer: 1
  },
  {
    question: "When should you use try/catch?",
    options: [
      "Only with async code",
      "To handle potential errors/exceptions",
      "Only in production",
      "Never, use if/else instead"
    ],
    answer: 1
  },
  {
    question: "What does Promise.race() do?",
    options: [
      "Runs promises in parallel",
      "Returns promise that settles first (resolve or reject)",
      "Cancels slow promises",
      "Combines promise results"
    ],
    answer: 1
  },
  {
    question: "How do you handle errors in async/await?",
    options: [
      ".catch() only",
      ".then().catch()",
      "try/catch blocks",
      "if/else statements"
    ],
    answer: 2
  },
  {
    question: "What's array destructuring with rest operator?",
    options: [
      "const [...arr] = array",
      "const [first, ...rest] = array",
      "const {first, rest} = array",
      "const array = [first, rest]"
    ],
    answer: 1
  },
  {
    question: "What's the purpose of Promise.allSettled()?",
    options: [
      "Wait for all promises regardless of outcome",
      "Cancel all pending promises",
      "Retry failed promises",
      "Sort promises by speed"
    ],
    answer: 0
  }
];

function runQuiz() {
  console.log('\n=== ADVANCED JAVASCRIPT QUIZ ===\n');
  
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
