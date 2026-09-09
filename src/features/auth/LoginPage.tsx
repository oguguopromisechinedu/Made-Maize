import PageScaffold from "../../components/shared/PageScaffold";

export default function LoginPage() {
  return (
    <PageScaffold
      eyebrow="Account"
      title="Login"
      description="Sign in to your Mademaize account and manage your farming operations."
      primaryAction="Create Account"
      primaryHref="/register"
    />
  );
}
