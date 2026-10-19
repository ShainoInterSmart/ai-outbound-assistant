import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST() {
  const { error } = await supabase
    .from("system_settings")
    .update({
      status: "PAUSED",
      stop_reason: "Manual stop",
      stopped_at: new Date().toISOString(),
    })
    .eq("status", "ACTIVE");

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    status: "PAUSED",
  });
}
