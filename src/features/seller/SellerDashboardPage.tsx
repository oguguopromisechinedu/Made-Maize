import PageScaffold from "../../components/shared/PageScaffold";

export default function SellerDashboardPage() {
  return (
    <PageScaffold
      eyebrow="Seller Center"
      title="Seller Dashboard"
      description="Manage your agricultural store, products, orders, customers, revenue, and seller performance."
      primaryAction="Manage Products"
      primaryHref="/seller/products"
    />
  );
}
