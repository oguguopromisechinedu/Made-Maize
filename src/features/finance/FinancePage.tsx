import PageScaffold from "../../components/shared/PageScaffold";

export default function FinancePage() {
  return (
    <PageScaffold
      eyebrow="Farm Finance"
      title="Expenses & Revenue"
      description="Track farm expenses, income, production costs, revenue, and financial performance."
      primaryAction="View Analytics"
      primaryHref="/analytics"
    />
  );
}
