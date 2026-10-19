import { supabase } from "@/lib/supabase";

export async function canAutomationRun() {
    const { data, error } = await supabase
        .from("system_settings")
        .select("status")
        .single();

    if (error) {
        console.error("Automation guard error:", error);
        return false;
    }

    return data.status === "ACTIVE";
}