import PageScaffold from "../../components/shared/PageScaffold";

export default function SettingsPage() {
  return (
    <PageScaffold
      eyebrow="Account"
      title="Settings"
      description="Manage your Mademaize profile, account preferences, notifications, and platform settings."
      primaryAction="View Dashboard"
      primaryHref="/dashboard"
    />
  );
}
