import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// Define type for chat and message
export async function POST(request: Request) {
  try {
    const { user_id, chat_name, initial_message } = await request.json(); // Parse the JSON body

    if (!user_id || !chat_name || !initial_message) {
      return new Response("user_id, chat_name, and initial_message are required", { status: 400 });
    }

    // Create a new chat entry
    const { data: chatData, error: chatError } = await supabase
      .from("chats")
      .insert([
        {
          user_id,
          chat_name,
          created_at: new Date(),
        },
      ])
      .select("id")
      .single();

    if (chatError) {
      throw new Error(chatError.message);
    }

    const chat_id = chatData.id;

    // Insert an initial message in the newly created chat
    const { data: messageData, error: messageError } = await supabase
      .from("messages")
      .insert([
        {
          user_id,
          chat_id,
          role: "user",  
          message: initial_message,
        },
      ])
      .select("id, user_id, chat_id, role, message, created_at")
      .single();

    if (messageError) {
      throw new Error(messageError.message);
    }

    return NextResponse.json({ chat: chatData, message: messageData });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong: "},
      { status: 500 }
    );
  }
}
