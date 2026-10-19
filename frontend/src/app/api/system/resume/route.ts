import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST() {
  const { error } = await supabase
    .from("system_settings")
    .update({
      status: "ACTIVE",
      resumed_at: new Date().toISOString(),
      stop_reason: null,
    })
    .eq("status", "PAUSED");

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    status: "ACTIVE",
  });
}
