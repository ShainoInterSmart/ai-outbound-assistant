"use client";

import { useState } from "react";

export default function CreateDiscoveryTask() {
    const [loading, setLoading] = useState(false);

    async function createTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        const form = new FormData(e.currentTarget);

        await fetch("/api/discovery", {
            method: "POST",
            body: JSON.stringify({
                name: form.get("name"),
                target_market: form.get("target_market"),
                industry: form.get("industry"),
                criteria: form.get("criteria"),
            }),
        });

        window.location.reload();
    }

    return (
        <form
            onSubmit={createTask}
            className="space-y-4 rounded-lg border p-6"
        >
            <h2 className="text-xl font-semibold">
                Create Discovery Task
            </h2>

            <input
                name="name"
                placeholder="Task name"
                className="w-full rounded border p-2"
                required
            />

            <input
                name="target_market"
                placeholder="Target market"
                className="w-full rounded border p-2"
                required
            />

            <input
                name="industry"
                placeholder="Industry"
                className="w-full rounded border p-2"
                required
            />

            <textarea
                name="criteria"
                placeholder="What should the system look for?"
                className="w-full rounded border p-2"
                required
            />

            <button
                disabled={loading}
                className="rounded border px-4 py-2"
            >
                {loading ? "Creating..." : "Create Task"}
            </button>
        </form>
    );
}