import PageScaffold from "../../components/shared/PageScaffold";

export default function ImageAnalysisPage() {
  return (
    <PageScaffold
      eyebrow="Mademaize AI"
      title="Crop Image Analysis"
      description="Upload crop images for AI-assisted analysis and farming recommendations."
      primaryAction="Open Crop Diagnosis"
      primaryHref="/ai/diagnosis"
    />
  );
}
