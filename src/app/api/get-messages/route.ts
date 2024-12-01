import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const maxDuration = 59;

// Define type for chat message
type ChatMessage = {
  id: string;
  charId: string;
  name: string;
  role: 'user' | 'assistant';
  message: string;
  created_at: string;
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const charId = searchParams.get('charId');

    if (!charId) {
      return NextResponse.json(
        { error: "charId is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("chats")
      .select("*")
      .eq('charId', charId)
      .order('created_at', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ 
      message: 'Messages retrieved successfully', 
      data: data as ChatMessage[]
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
