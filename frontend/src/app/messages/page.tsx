import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="Messages"
        description="Outreach drafts, sent emails and prospect replies."
      />
      <EmptyState
        title="No messages yet"
        message="Drafts awaiting review, sent emails and replies will show up here."
      />
    </div>
  );
}
