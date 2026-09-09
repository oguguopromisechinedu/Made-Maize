import PageScaffold from "../../components/shared/PageScaffold";

export default function MarketplacePage() {
  return (
    <PageScaffold
      eyebrow="Agricultural Marketplace"
      title="Marketplace"
      description="Discover agricultural products, farm inputs, equipment, produce, and opportunities."
      primaryAction="Browse Categories"
      primaryHref="/marketplace/categories"
    />
  );
}
