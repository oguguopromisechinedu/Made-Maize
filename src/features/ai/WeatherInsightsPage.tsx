import PageScaffold from "../../components/shared/PageScaffold";

export default function WeatherInsightsPage() {
  return (
    <PageScaffold
      eyebrow="Mademaize AI"
      title="Weather Insights"
      description="Connect weather information with your farm activities and receive actionable farming recommendations."
      primaryAction="View Farm Dashboard"
      primaryHref="/dashboard"
    />
  );
}
