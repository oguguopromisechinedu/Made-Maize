import PageScaffold from "../../components/shared/PageScaffold";

export default function SellerSettingsPage() {
  return (
    <PageScaffold
      eyebrow="Seller Center"
      title="Seller Settings"
      description="Configure payment, shipping, taxes, policies, store hours, integrations, and advanced seller settings."
      primaryAction="Seller Dashboard"
      primaryHref="/seller"
    />
  );
}
