import PageScaffold from "../../components/shared/PageScaffold";

export default function SellerStorePage() {
  return (
    <PageScaffold
      eyebrow="Seller Center"
      title="Store Customization"
      description="Configure your marketplace store profile, branding, layout, policies, and store information."
      primaryAction="Seller Settings"
      primaryHref="/seller/settings"
    />
  );
}
