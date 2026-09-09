import PageScaffold from "../../components/shared/PageScaffold";

export default function SellerProductsPage() {
  return (
    <PageScaffold
      eyebrow="Seller Center"
      title="Seller Products"
      description="Create, edit, manage, and organize products listed in your agricultural marketplace store."
      primaryAction="Store Settings"
      primaryHref="/seller/store"
    />
  );
}
