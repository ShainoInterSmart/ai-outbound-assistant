import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const { data, error } = await supabase
        .from("discovery_tasks")
        .insert({
            name: body.name,
            target_market: body.target_market,
            industry: body.industry,
            criteria: body.criteria,
            status: "ACTIVE",
        })
        .select()
        .single();

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json(data);
}