import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export default function ProspectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="Prospects"
        description="Companies and contacts researched and scored for outreach."
      />
      <EmptyState
        title="No prospects yet"
        message="Prospects will appear here once companies are added and researched."
      />
    </div>
  );
}
