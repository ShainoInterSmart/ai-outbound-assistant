import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <PageHeader
        title="Settings"
        description="Manage automation controls and system preferences."
      />
      <EmptyState
        title="No settings available yet"
        message="Automation controls such as global pause and resume will be configured here."
      />
    </div>
  );
}
