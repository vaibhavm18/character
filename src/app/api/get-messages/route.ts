import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const maxDuration = 59;

// Define type for chat message
export async function POST(request: Request) {
  try {
    const { user_id, chat_id, sort_order = "asc" } = await request.json(); // Parse the JSON body

    if (!user_id || !chat_id) {
      return new Response("user_id and chat_id are required", { status: 400 });
    }

    const { data, error } = await supabase
      .from("messages")
      .select("id, user_id, chat_id, role, message, created_at, updated_at")
      .eq("user_id", user_id)
      .eq("chat_id", chat_id)
      .order("created_at", { ascending: sort_order === "asc" })
      .limit(100); // Optional: Limit the results to 100

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
