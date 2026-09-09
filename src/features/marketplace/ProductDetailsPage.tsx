import PageScaffold from "../../components/shared/PageScaffold";

export default function ProductDetailsPage() {
  return (
    <PageScaffold
      eyebrow="Marketplace"
      title="Product Details"
      description="View detailed agricultural product information, seller information, pricing, availability, and purchasing options."
      primaryAction="Back to Marketplace"
      primaryHref="/marketplace"
    />
  );
}
