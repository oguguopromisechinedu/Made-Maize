import PageScaffold from "../../components/shared/PageScaffold";

export default function TeamPage() {
  return (
    <PageScaffold
      eyebrow="Farm Management"
      title="Farm Team"
      description="Manage farm workers, roles, responsibilities, invitations, and team activity."
      primaryAction="View Farms"
      primaryHref="/farms"
    />
  );
}
