import { NextResponse } from "next/server";
import { canAutomationRun } from "@/lib/automation/guard";

export async function GET() {
    const allowed = await canAutomationRun();

    return NextResponse.json({
        automationAllowed: allowed,
    });
}