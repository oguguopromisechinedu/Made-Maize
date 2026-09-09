import PageScaffold from "../../components/shared/PageScaffold";

export default function LivestockPage() {
  return (
    <PageScaffold
      eyebrow="Farm Management"
      title="Livestock"
      description="Manage livestock records, health, feeding, breeding, production, and farm activities."
      primaryAction="View Farm"
      primaryHref="/farms"
    />
  );
}
