"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { quizzes } from "@/data";

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const quizId = params?.id as string;
  const quiz = quizzes.find((q) => q.id === quizId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!quiz) {
      router.replace("/404");
    }
  }, [quiz, router]);

  if (!quiz) {
    return null; 
  }

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      router.push(
        `/quiz/results?score=${score + (isCorrect ? 1 : 0)}&total=${quiz.questions.length}`
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-3xl mx-4 sm:mx-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          {quiz.title}
        </h1>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-center font-semibold mb-4">
          Question {currentQuestionIndex + 1} / {quiz.questions.length}
        </div>
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-gray-700">
            {quiz.questions[currentQuestionIndex].question}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quiz.questions[currentQuestionIndex].answers.map((answer, idx) => (
            <button
              key={idx}
              className="py-3 px-6 border-2 w-full rounded-lg text-lg font-semibold text-gray-700 bg-gray-100 hover:bg-green-200 hover:border-green-500 hover:text-green-700 transition-all"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}