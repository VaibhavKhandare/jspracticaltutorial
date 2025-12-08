# Practical JavaScript Topics 

A structured JavaScript learning repository covering fundamentals to advanced concepts with practical examples.

## Project Structure

```
javascriptyoutubevideo/
├── 01-datatypes/          # Basic JavaScript data types
│   ├── 01_numbers.js
│   ├── 01a_numbers_quiz.js
│   ├── 02_strings.js
│   ├── 02a_strings_quiz.js
│   ├── 03_booleans.js
│   ├── 03a_booleans_quiz.js
│   ├── 04_arrays.js
│   ├── 04a_arrays_quiz.js
│   ├── 05_Functions.js
│   ├── 06_maps.js
│   ├── 06a_maps_quiz.js
│   ├── 07_Class.js
│   ├── 08a_super_quiz.js
│   └── 08b_super_quiz_answer.js
│
├── 02-advanced/            # Advanced JavaScript concepts
│   ├── 01_error-handling.js
│   ├── 01a_error-handling_quiz.js
│   ├── 01b_error-handling_quiz_answer.js
│   ├── 02_promises.js
│   ├── 02a_promises_quiz.js
│   ├── 02b_promises_quiz_answer.js
│   ├── 03_async-await.js
│   ├── 03a_async-await_quiz.js
│   ├── 03b_async-await_quiz_answer.js
│   ├── 04_advanced_super_quiz.js
│   └── 04a_advanced_super_quiz_answer.js
│
├── 03-ecommerce-backend/  # Practical Express.js backend example
│   ├── package.json
│   └── src/
│       ├── index.js           # Express app entry point
│       ├── data/
│       │   └── store.js        # Data store
│       ├── routes/
│       │   └── products.js     # Product routes
│       └── services/
│           └── productsService.js
│
└── scripts/                # Utility scripts
    └── add-exports.js
```

## Directory Overview

### `01-datatypes/`
Covers fundamental JavaScript data types with examples and quizzes:
- Numbers, Strings, Booleans
- Arrays, Functions
- Maps, Classes
- Practice quizzes with solutions

### `02-advanced/`
Advanced JavaScript topics:
- Error handling (try-catch, custom errors)
- Promises (creation, chaining, error handling)
- Async/Await patterns
- Comprehensive quizzes with answers

### `03-ecommerce-backend/`
Express.js backend application demonstrating:
- RESTful API structure
- Route organization
- Service layer pattern
- Error handling middleware

## Getting Started

### Running Tutorial Examples
```bash
node 01-datatypes/01_numbers.js
```

### Running Ecommerce Backend
```bash
cd 03-ecommerce-backend
npm install
npm start
```

## File Naming Convention

- `0X_topic.js` - Main tutorial file
- `0Xa_topic_quiz.js` - Practice quiz
- `0Xb_topic_quiz_answer.js` - Quiz solutions
