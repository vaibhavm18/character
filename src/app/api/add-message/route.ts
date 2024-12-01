import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const maxDuration = 59;

// Define types for the request body and chat message
type AddMessageRequest = {
  charId: string;
  name: string;
  role: 'user' | 'assistant';
  message: string;
};

type ChatMessage = {
  id: string;
  charId: string;
  name: string;
  role: 'user' | 'assistant';
  message: string;
  created_at: string;
};

export async function POST(req: NextRequest) {
  try {
    const { charId, name, role, message }: AddMessageRequest = await req.json();

    // Validate input
    if (!charId || !name || !role || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert the new message
    const { data, error } = await supabase
      .from("chats")
      .insert({ charId, name, role, message })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ 
      message: 'Message added successfully', 
      data: data as ChatMessage
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
