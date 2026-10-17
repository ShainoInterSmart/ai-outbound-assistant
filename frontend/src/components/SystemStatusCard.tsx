type SystemStatus = "ACTIVE" | "PAUSED";

type SystemStatusCardProps = {
  status: SystemStatus;
};

export default function SystemStatusCard({ status }: SystemStatusCardProps) {
  const isActive = status === "ACTIVE";

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="text-sm font-medium text-zinc-500">System Status</h2>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-sm text-zinc-700">Automation Status:</span>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            isActive ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${isActive ? "bg-green-600" : "bg-amber-600"}`}
          />
          {status}
        </span>
      </div>
    </section>
  );
}
