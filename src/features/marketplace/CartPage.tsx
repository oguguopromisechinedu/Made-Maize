import PageScaffold from "../../components/shared/PageScaffold";

export default function CartPage() {
  return (
    <PageScaffold
      eyebrow="Marketplace"
      title="Shopping Cart"
      description="Review products selected for purchase before proceeding to checkout."
      primaryAction="Continue Shopping"
      primaryHref="/marketplace"
    />
  );
}
