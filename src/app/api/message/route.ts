import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

const client = new OpenAI({
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.API_KEY,
});

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  messages: Message[];
}

const systemPrompt = `
You are an AI assistant specialized in chatting with users. Your responses should be:
1. Accurate and up-to-date
2. Concise yet informative
3. Tailored to the user's level of understanding
4. Ethical and unbiased
If you're unsure about something, admit it and offer to find more information.
Limit your responses to 25-30 words or less.
`;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const { messages } = body;

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 403 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "google/gemma-2-27b-it",
      messages: [
        {
          role: "assistant",
          content: systemPrompt,
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
