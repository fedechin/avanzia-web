import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient, SYSTEM_PROMPT } from "@/lib/openai";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const openai = getOpenAIClient();
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 300,
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ role: "assistant", content: reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Error al procesar tu mensaje. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
