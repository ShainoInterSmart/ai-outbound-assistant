import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export default function CampaignsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="Campaigns"
        description="Group prospects into focused outreach campaigns."
      />
      <EmptyState
        title="No campaigns yet"
        message="Campaigns you create will be listed here, along with their status and progress."
      />
    </div>
  );
}
