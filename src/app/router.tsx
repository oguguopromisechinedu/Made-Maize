import HomePage from "../features/home/HomePage";
import OnboardingPage from "../features/onboarding/OnboardingPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import FarmsPage from "../features/farms/FarmsPage";
import FieldsPage from "../features/fields/FieldsPage";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

const Page = ({ title }: { title: string }) => (
  <div style={{ padding: "2rem" }}>
    <h1>{title}</h1>
    <p>Mademaize platform — coming soon.</p>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Page title="Login" /> },
      { path: "register", element: <Page title="Create Account" /> },
      { path: "onboarding", element: <OnboardingPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "farms", element: <FarmsPage /> },
      { path: "fields", element: <FieldsPage /> },
      { path: "crops", element: <Page title="Crops" /> },
      { path: "livestock", element: <Page title="Livestock" /> },
      { path: "tasks", element: <Page title="Tasks" /> },
      { path: "analytics", element: <Page title="Analytics" /> },
      { path: "ai", element: <Page title="AI Farm Assistant" /> },
      { path: "marketplace", element: <Page title="Marketplace" /> },
    ],
  },
]);
