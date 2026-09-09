import PageScaffold from "../../components/shared/PageScaffold";

export default function TasksPage() {
  return (
    <PageScaffold
      eyebrow="Farm Operations"
      title="Tasks"
      description="Plan, assign, track, and complete farming activities across your operation."
      primaryAction="Open Calendar"
      primaryHref="/calendar"
    />
  );
}
