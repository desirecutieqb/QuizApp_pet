import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Otrzymane body:", body);
    const { userId, quizScore, correctAnswers, wrongAnswers } = body;
    
    const existingUser = await prisma.user.findUnique({
      where: { clerkUserId: userId },
      include: { quizResults: true },
    });
    console.log("Znaleziony użytkownik:", existingUser);
    
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (existingUser.quizResults && existingUser.quizResults.length > 0) {
      const updatedUserStats = await prisma.quizResult.update({
        where: { id: existingUser.quizResults[0].id },
        data: {
          quizScore: existingUser.quizResults[0].quizScore + quizScore,
          correctAnswers: existingUser.quizResults[0].correctAnswers + correctAnswers,
          wrongAnswers: existingUser.quizResults[0].wrongAnswers + wrongAnswers,
        },
      });
      console.log("Zaktualizowane statystyki użytkownika:", updatedUserStats);
      return NextResponse.json({ updatedUserStats }, { status: 200 });
    } else {
      const updatedUser = await prisma.user.update({
        where: { clerkUserId: userId },
        data: {
          quizResults: {
            create: {
              quizScore,
              correctAnswers,
              wrongAnswers,
            },
          },
        },
      });
      console.log("Utworzono nowy rekord quizu dla użytkownika:", updatedUser);
      return NextResponse.json({ updatedUser }, { status: 201 });
    }
  } catch (error: any) {
    console.error("Błąd w endpoint API:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message || error.toString() },
      { status: 500 }
    );
  }
}