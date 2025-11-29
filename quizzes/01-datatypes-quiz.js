const quiz = [
  {
    question: "What will typeof null return?",
    options: ["null", "object", "undefined", "boolean"],
    answer: 1,
    explanation: "typeof null returns 'object' due to a historical bug in JavaScript"
  },
  {
    question: "Which method converts a string to uppercase?",
    options: ["toUpper()", "uppercase()", "toUpperCase()", "makeUpper()"],
    answer: 2
  },
  {
    question: "What does NaN stand for?",
    options: ["Not a Null", "Not a Number", "New and Null", "None and Null"],
    answer: 1
  },
  {
    question: "How do you check if a variable is an array?",
    options: ["typeof arr === 'array'", "arr instanceof Array", "arr.type === 'array'", "isArray(arr)"],
    answer: 1
  },
  {
    question: "What will [1, 2] + [3, 4] return?",
    options: ["[1, 2, 3, 4]", "10", "'1,23,4'", "Error"],
    answer: 2
  },
  {
    question: "Which creates a shallow copy of an array?",
    options: ["arr.copy()", "[...arr]", "arr.clone()", "new Array(arr)"],
    answer: 1
  },
  {
    question: "What's the difference between Map and Object?",
    options: [
      "No difference",
      "Map keys can be any type, Object keys are strings/symbols",
      "Map is slower than Object",
      "Object has more methods"
    ],
    answer: 1
  },
  {
    question: "What does the ?? operator do?",
    options: [
      "Logical OR",
      "Nullish coalescing - returns right side if left is null/undefined",
      "Double negation",
      "Type checking"
    ],
    answer: 1
  }
];

function runQuiz() {
  console.log('\n=== DATATYPES QUIZ ===\n');
  let score = 0;
  
  quiz.forEach((q, index) => {
    console.log(`Question ${index + 1}: ${q.question}`);
    q.options.forEach((opt, i) => {
      console.log(`  ${i}) ${opt}`);
    });
    console.log(`Answer: ${q.answer}`);
    if (q.explanation) {
      console.log(`Explanation: ${q.explanation}`);
    }
    console.log();
  });
  
  console.log('Quiz complete! Review the answers above.');
}

runQuiz();

module.exports = quiz;
