import PageScaffold from "../../components/shared/PageScaffold";

export default function InventoryPage() {
  return (
    <PageScaffold
      eyebrow="Farm Management"
      title="Inventory"
      description="Track seeds, fertilizer, chemicals, equipment, feed, supplies, and other farm resources."
      primaryAction="View Farm"
      primaryHref="/farms"
    />
  );
}
