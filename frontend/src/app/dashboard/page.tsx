import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const { data, error } = await supabase
    .from("system_settings")
    .select("*")
    .single();

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Dashboard Error
        </h1>
        <pre className="mt-4">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }

  const isActive = data?.status === "ACTIVE";

  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
        <p className="mt-1 text-gray-500">
          Outbound automation control centre
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="text-lg font-semibold">
          Automation Status
        </h2>

        <div className="mt-3 text-2xl font-bold">
          {isActive ? "🟢 ACTIVE" : "🔴 PAUSED"}
        </div>

        <div className="mt-2 text-sm text-gray-500">
          Last updated:{" "}
          {new Date(data.created_at).toLocaleString()}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">
            Prospects
          </p>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">
            Emails Sent
          </p>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">
            Replies
          </p>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">
            Meetings
          </p>
          <p className="mt-2 text-3xl font-bold">
            0
          </p>
        </div>
      </div>
    </div>
  );
}