export interface IOption {
  text: string;
  isCorrect: boolean;
}

export interface IQuestion {
  id: number;
  question: string;
  answers: IOption[];
}

export interface IQuiz {
  id: string;
  title: string;
  totalQuestions: number;
  image: string;
  questions: IQuestion[];
}

export const quizzes: IQuiz[] = [
  {
    id: "1",
    title: "JavaScript Basics",
    totalQuestions: 10,
    image: "/images/quiz1.jpg",
    questions: [
      {
        id: 1,
        question: 'What is the result of `typeof typeof 1`?',
        answers: [
          { text: "number", isCorrect: false },
          { text: "string", isCorrect: true },
          { text: "object", isCorrect: false },
          { text: "undefined", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: 'What will `console.log(1 === true)` output?',
        answers: [
          { text: "true", isCorrect: false },
          { text: "false", isCorrect: true },
          { text: "undefined", isCorrect: false },
          { text: "TypeError", isCorrect: false },
        ],
      },
      {
        id: 3,
        question: "What is the output of `console.log(typeof null)`?",
        answers: [
          { text: "null", isCorrect: false },
          { text: "object", isCorrect: true },
          { text: "undefined", isCorrect: false },
          { text: "function", isCorrect: false },
        ],
      },
      {
        id: 4,
        question: "Which method is used to remove the last element from an array?",
        answers: [
          { text: "shift()", isCorrect: false },
          { text: "pop()", isCorrect: true },
          { text: "splice()", isCorrect: false },
          { text: "slice()", isCorrect: false },
        ],
      },
      {
        id: 5,
        question: "What does `JSON.stringify()` do in JavaScript?",
        answers: [
          { text: "Converts a JSON object to a JavaScript object", isCorrect: false },
          { text: "Converts a JavaScript object to a JSON string", isCorrect: true },
          { text: "Parses a JSON string into an object", isCorrect: false },
          { text: "None of the above", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    totalQuestions: 10,
    image: "/images/quiz2.jpg",
    questions: [
      {
        id: 1,
        question: 'What does the term "hoisting" refer to in JavaScript?',
        answers: [
          { text: "Moving variable declarations to the top of their scope", isCorrect: true },
          { text: "Lifting functions above variables", isCorrect: false },
          { text: "Changing the scope of a variable at runtime", isCorrect: false },
          { text: "None of the above", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "Which of the following is NOT a primitive type in JavaScript?",
        answers: [
          { text: "string", isCorrect: false },
          { text: "boolean", isCorrect: false },
          { text: "object", isCorrect: true },
          { text: "number", isCorrect: false },
        ],
      },
      {
        id: 3,
        question: "Which of the following statements best describes a closure in JavaScript?",
        answers: [
          { text: "A function that retains access to its lexical scope even when executed outside of its original context", isCorrect: true },
          { text: "A function that closes over a variable that is undefined", isCorrect: false },
          { text: "A method that binds a function to an object", isCorrect: false },
          { text: "None of the above", isCorrect: false },
        ],
      },
      {
        id: 4,
        question: "What is the primary role of the JavaScript event loop?",
        answers: [
          { text: "To execute synchronous code", isCorrect: false },
          { text: "To handle asynchronous callbacks", isCorrect: true },
          { text: "To manage memory allocation", isCorrect: false },
          { text: "To compile code", isCorrect: false },
        ],
      },
      {
        id: 5,
        question: "Which keyword is used to wait for a promise to resolve in an async function?",
        answers: [
          { text: "await", isCorrect: true },
          { text: "async", isCorrect: false },
          { text: "yield", isCorrect: false },
          { text: "return", isCorrect: false },
        ],
      },
    ],
  },
];

export const getQuizById = async (id: string): Promise<IQuiz | undefined> => {
  return quizzes.find((quiz) => quiz.id === id);
};
