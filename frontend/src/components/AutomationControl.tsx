"use client";

import { useState } from "react";

interface Props {
    status: string;
}

export default function AutomationControl({ status }: Props) {
    const [currentStatus, setCurrentStatus] = useState(status);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function updateStatus(action: "stop" | "resume") {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`/api/system/${action}`, {
                method: "POST",
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            setCurrentStatus(
                action === "stop" ? "PAUSED" : "ACTIVE"
            );
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to update status"
            );
        } finally {
            setLoading(false);
        }
    }

    const isActive = currentStatus === "ACTIVE";

    return (
        <div className="mt-4">
            <div className="text-xl font-bold">
                {isActive ? "🟢 ACTIVE" : "🔴 PAUSED"}
            </div>

            <button
                disabled={loading}
                onClick={() =>
                    updateStatus(isActive ? "stop" : "resume")
                }
                className="mt-4 rounded border px-4 py-2"
            >
                {loading
                    ? "Processing..."
                    : isActive
                        ? "STOP AUTOMATION"
                        : "RESUME AUTOMATION"}
            </button>

            {error && (
                <p className="mt-3 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}