import React from "react";
import { quizzes } from "@/data"; // Importujemy quizy z pliku data.ts
import QuizCard from "@/components/quiz/QuizCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="mb-8 text-5xl font-extrabold text-center text-gray-800">
          Choose a Quiz
        </h1>

        {quizzes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        ) : (
          <h1 className="text-2xl text-center mt-4 text-gray-600">
            No quizzes available
          </h1>
        )}
      </div>
    </div>
  );
}
