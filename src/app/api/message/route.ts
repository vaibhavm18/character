import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  messages: Message[];
  name:string;
}
const createSystemPrompt = (personality: string): string => {
  return `
    Respond in the style of ${personality}. Keep your replies:
    1. Accurate and up-to-date
    2. Concise and clear
    3. Tailored to the user's understanding
    If you're unsure, admit it and suggest finding more info.
    Keep responses to 25-30 words, and never mention you're AI or an assistant.
  `;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const { messages, name } = body;

    if (!messages || !name || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 403 }
      );
    }
    console.log("Name", name)

    const completion = await client.chat.completions.create({
      model: "chatgpt-4o-latest",
      messages: [
        {
          role: "assistant",
          content: createSystemPrompt(name),
        },
        ...messages,
      ],
      temperature: 0.7,
      top_p: 0.9,
      max_tokens: 1024,
    });

    const assistantResponse = completion.choices[0].message.content;

    return NextResponse.json({ message: assistantResponse });
  } catch (error) {
    console.error("Error generating response", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
