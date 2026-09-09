import PageScaffold from "../../components/shared/PageScaffold";

export default function RegisterPage() {
  return (
    <PageScaffold
      eyebrow="Account"
      title="Create Your Mademaize Account"
      description="Create your account and begin building your digital farm."
      primaryAction="Start Farm Setup"
      primaryHref="/onboarding"
    />
  );
}
