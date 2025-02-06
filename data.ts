export const quizzes = [
  {
    id: "1",
    title: "JavaScript Basics",
    totalQuestions: 20,
    questions: [
      {
        id: 1,
        question: 'What is the result of `typeof typeof 1`?',
        answers: ['number', 'string', 'object', 'undefined'],
        correctAnswer: 'string',
      },
      {
        id: 2,
        question: 'What will `console.log(1 === true)` output?',
        answers: ['true', 'false', 'undefined', 'TypeError'],
        correctAnswer: 'false',
      },
      {
        id: 3,
        question: 'What is the result of `"hello" instanceof Object`?',
        answers: ['true', 'false', 'undefined', 'TypeError'],
        correctAnswer: 'false',
      },
      {
        id: 4,
        question: 'What does `console.log([10] === [10])` return?',
        answers: ['true', 'false', 'undefined', 'TypeError'],
        correctAnswer: 'false',
      },
      {
        id: 5,
        question: 'What will the following code output: `console.log(1 + "2" + "2")`?',
        answers: ['122', '5', '14', 'undefined'],
        correctAnswer: '122',
      },
    ],
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: 'What does the term "hoisting" refer to in JavaScript?',
        answers: [
          'Moving variable declarations to the top of their scope',
          'Lifting functions above variables',
          'Changing the scope of a variable at runtime',
          'None of the above',
        ],
        correctAnswer: 'Moving variable declarations to the top of their scope',
      },
      {
        id: 2,
        question: 'Which of the following is NOT a primitive type in JavaScript?',
        answers: ['string', 'boolean', 'object', 'number'],
        correctAnswer: 'object',
      },
      {
        id: 3,
        question: 'Which of the following statements best describes a closure in JavaScript?',
        answers: [
          'A function that retains access to its lexical scope even when executed outside of its original context',
          'A function that closes over a variable that is undefined',
          'A method that binds a function to an object',
          'None of the above',
        ],
        correctAnswer: 'A function that retains access to its lexical scope even when executed outside of its original context',
      },
      {
        id: 4,
        question: 'What is the primary role of the JavaScript event loop?',
        answers: [
          'To execute synchronous code',
          'To handle asynchronous callbacks',
          'To manage memory allocation',
          'To compile code',
        ],
        correctAnswer: 'To handle asynchronous callbacks',
      },
      {
        id: 5,
        question: 'Which keyword is used to wait for a promise to resolve in an async function?',
        answers: ['await', 'async', 'yield', 'return'],
        correctAnswer: 'await',
      },
    ],
  },
];

export const getQuizById = async (id: string) => {
  return quizzes.find((quiz) => quiz.id === id);
};