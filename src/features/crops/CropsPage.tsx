import PageScaffold from "../../components/shared/PageScaffold";

export default function CropsPage() {
  return (
    <PageScaffold
      eyebrow="Farm Management"
      title="Crops"
      description="Track planted crops, growth stages, crop health, treatments, harvests, and yields."
      primaryAction="Manage Fields"
      primaryHref="/fields"
    />
  );
}
