import {  NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const maxDuration = 59;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("character")
      .select("*")

    if (error) throw error

    return NextResponse.json({ 
      message: 'Data retrieved successfully', 
      data
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
