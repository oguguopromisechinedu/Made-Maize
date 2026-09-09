import PageScaffold from "../../components/shared/PageScaffold";

export default function SellerPayoutsPage() {
  return (
    <PageScaffold
      eyebrow="Seller Center"
      title="Payouts"
      description="Manage seller earnings, payout history, payment information, and financial transactions."
      primaryAction="Seller Dashboard"
      primaryHref="/seller"
    />
  );
}
