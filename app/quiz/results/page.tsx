"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function QuizResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoaded } = useUser();

  const score = parseInt(searchParams.get("score") || "0", 10);
  const total = parseInt(searchParams.get("total") || "0", 10);
  const correctAnswers = score;
  const wrongAnswers = total - score;

  useEffect(() => {
    if (isLoaded && user) {
      const sendQuizResult = async () => {
        try {
          const response = await fetch("/api/quiz-result", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.id,
              quizScore: score,
              correctAnswers: correctAnswers,
              wrongAnswers: wrongAnswers,
            }),
          });

          if (!response.ok) {
            const errorData = await response.text();
            console.error("Error saving quiz result:", errorData);
          } else {
            const data = await response.json();
            console.log("Quiz result saved:", data);
          }
        } catch (error) {
          console.error("Error saving quiz result:", error);
        }
      };

      sendQuizResult();
    }
  }, [isLoaded, user, score, correctAnswers, wrongAnswers]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Wrapper div to span the full available width and center content */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-xl max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiz Results</h1>
          <p className="text-xl text-gray-700">
            You scored{" "}
            <span className="font-bold text-blue-500">{score}</span> out of{" "}
            <span className="font-bold text-blue-500">{total}</span>.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}