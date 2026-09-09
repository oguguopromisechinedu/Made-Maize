import PageScaffold from "../../components/shared/PageScaffold";

export default function OrdersPage() {
  return (
    <PageScaffold
      eyebrow="Marketplace"
      title="Orders"
      description="Track marketplace purchases, deliveries, order status, and transaction history."
      primaryAction="Marketplace"
      primaryHref="/marketplace"
    />
  );
}
