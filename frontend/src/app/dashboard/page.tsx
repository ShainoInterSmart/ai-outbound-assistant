import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import SystemStatusCard from "@/components/SystemStatusCard";

// Placeholder values until the database is connected.
const stats = [
  { label: "Prospects Found", value: 0 },
  { label: "Emails Sent", value: 0 },
  { label: "Replies", value: 0 },
  { label: "Meetings", value: 0 },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader title="Dashboard" description="Overview of outbound activity" />
      <SystemStatusCard status="ACTIVE" />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </section>
    </div>
  );
}
