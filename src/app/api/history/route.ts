import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const maxDuration = 59;

const chatIds = [1, 2, 3, 4, 5];

const checkMessagesInChat = async (chatId: number, user_id: string) => {
  // Query for messages in the specific chat_id for the given user_id
  const { data, error } = await supabase
    .from("messages")
    .select("chat_id")
    .eq("user_id", user_id)
    .eq("chat_id", chatId)
    .limit(1); // Limit to 1 to check for existence of any message

  if (error) {
    console.error(`Error checking chat_id ${chatId}:`, error);
    return false; // Return false if there's an error
  }

  return data && data.length > 0; // Return true if messages exist, otherwise false
};

// Define type for chat message
export async function POST(request: Request) {
  try {
    const { user_id } = await request.json(); // Parse the JSON body

    if (!user_id) {
      return new Response("user_id and chat_id are required", { status: 400 });
    }

    const results = await Promise.all(
      chatIds.map(async (chatId) => {
        const hasMessages = await checkMessagesInChat(chatId, user_id);
        return hasMessages ? chatId : null; // Return chatId if user has messages, null otherwise
      })
    );

    // Filter out the null values (chat_ids with no messages)
    const chatsWithMessages = results.filter((chatId) => chatId !== null);


    return NextResponse.json(chatsWithMessages);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
