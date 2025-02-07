"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function QuizResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const score = searchParams.get("score");
  const total = searchParams.get("total");

  return (
    <div className="py-20 flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">Quiz Results</h1>
      <p className="text-2xl">
        You scored <span className="font-bold">{score}</span> out of {total}
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Back to Home
      </button>
    </div>
  );
}
