import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IQuiz } from "@/data";

interface QuizCardProps {
  quiz: IQuiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
      {quiz.image && (
        <Image
          src={quiz.image}
          alt={quiz.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
        <p className="text-gray-500 mt-2">
          Total Questions: <span className="font-semibold">{quiz.totalQuestions}</span>
        </p>
        <Link href={`/quiz/${quiz.id}`}>
          <button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
