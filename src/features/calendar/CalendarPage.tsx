import PageScaffold from "../../components/shared/PageScaffold";

export default function CalendarPage() {
  return (
    <PageScaffold
      eyebrow="Farm Operations"
      title="Farm Calendar"
      description="Organize planting, treatment, irrigation, feeding, harvesting, and other farm activities."
      primaryAction="View Tasks"
      primaryHref="/tasks"
    />
  );
}
