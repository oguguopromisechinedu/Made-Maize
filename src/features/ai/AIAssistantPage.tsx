import PageScaffold from "../../components/shared/PageScaffold";

export default function AIAssistantPage() {
  return (
    <PageScaffold
      eyebrow="Mademaize AI"
      title="AI Farm Assistant"
      description="Ask farming questions and receive intelligent recommendations using your farm context."
      primaryAction="View Farm Dashboard"
      primaryHref="/dashboard"
    />
  );
}
