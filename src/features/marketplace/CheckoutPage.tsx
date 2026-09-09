import PageScaffold from "../../components/shared/PageScaffold";

export default function CheckoutPage() {
  return (
    <PageScaffold
      eyebrow="Marketplace"
      title="Checkout"
      description="Complete your agricultural marketplace purchase securely."
      primaryAction="View Orders"
      primaryHref="/orders"
    />
  );
}
