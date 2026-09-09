import PageScaffold from "../../components/shared/PageScaffold";

export default function RecordsPage() {
  return (
    <PageScaffold
      eyebrow="Farm Records"
      title="Farm Records"
      description="Keep organized records of farm activities, production, treatments, harvests, and operational history."
      primaryAction="Open Analytics"
      primaryHref="/analytics"
    />
  );
}
