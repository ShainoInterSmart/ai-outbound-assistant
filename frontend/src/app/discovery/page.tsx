import { supabase } from "@/lib/supabase";
import CreateDiscoveryTask from "@/components/CreateDiscoveryTask";

export default async function DiscoveryPage() {
    const { data: tasks } = await supabase
        .from("discovery_tasks")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div className="space-y-6 p-8">
            <div>
                <h1 className="text-3xl font-bold">
                    Discovery
                </h1>
                <p className="mt-1 text-gray-500">
                    Define what opportunities the system should identify.
                </p>
            </div>
            <CreateDiscoveryTask />

            <div className="rounded-lg border p-6">
                <h2 className="text-xl font-semibold">
                    Discovery Tasks
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    New discovery workflow will be connected here.
                </p>
            </div>

            <div className="rounded-lg border p-6">
                <h2 className="text-xl font-semibold">
                    Existing Tasks
                </h2>

                {tasks && tasks.length > 0 ? (
                    <div className="mt-4 space-y-3">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="rounded border p-4"
                            >
                                <p className="font-semibold">
                                    {task.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {task.target_market} • {task.industry}
                                </p>

                                <p className="mt-2 text-sm">
                                    {task.criteria}
                                </p>

                                <p className="mt-2 text-sm">
                                    Status: {task.status}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="mt-4 text-gray-500">
                        No discovery tasks created yet.
                    </p>
                )}
            </div>
        </div>
    );
}