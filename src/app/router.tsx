import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import HomePage from "../features/home/HomePage";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import OnboardingPage from "../features/onboarding/OnboardingPage";
import DashboardPage from "../features/dashboard/DashboardPage";

import FarmsPage from "../features/farms/FarmsPage";
import FieldsPage from "../features/fields/FieldsPage";
import CropsPage from "../features/crops/CropsPage";
import LivestockPage from "../features/livestock/LivestockPage";
import TasksPage from "../features/tasks/TasksPage";
import CalendarPage from "../features/calendar/CalendarPage";
import TeamPage from "../features/team/TeamPage";
import InventoryPage from "../features/inventory/InventoryPage";
import RecordsPage from "../features/records/RecordsPage";
import FinancePage from "../features/finance/FinancePage";
import AnalyticsPage from "../features/analytics/AnalyticsPage";

import AIAssistantPage from "../features/ai/AIAssistantPage";
import CropDiagnosisPage from "../features/ai/CropDiagnosisPage";
import ImageAnalysisPage from "../features/ai/ImageAnalysisPage";
import FarmInsightsPage from "../features/ai/FarmInsightsPage";
import WeatherInsightsPage from "../features/ai/WeatherInsightsPage";

import MarketplacePage from "../features/marketplace/MarketplacePage";
import CategoriesPage from "../features/marketplace/CategoriesPage";
import ProductDetailsPage from "../features/marketplace/ProductDetailsPage";
import CartPage from "../features/marketplace/CartPage";
import CheckoutPage from "../features/marketplace/CheckoutPage";
import OrdersPage from "../features/marketplace/OrdersPage";

import SellerDashboardPage from "../features/seller/SellerDashboardPage";
import SellerProductsPage from "../features/seller/SellerProductsPage";
import SellerStorePage from "../features/seller/SellerStorePage";
import SellerPayoutsPage from "../features/seller/SellerPayoutsPage";
import SellerSettingsPage from "../features/seller/SellerSettingsPage";

import ResourcesPage from "../features/resources/ResourcesPage";
import SettingsPage from "../features/settings/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "onboarding", element: <OnboardingPage /> },

      { path: "dashboard", element: <DashboardPage /> },

      { path: "farms", element: <FarmsPage /> },
      { path: "fields", element: <FieldsPage /> },
      { path: "crops", element: <CropsPage /> },
      { path: "livestock", element: <LivestockPage /> },
      { path: "tasks", element: <TasksPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "inventory", element: <InventoryPage /> },
      { path: "records", element: <RecordsPage /> },
      { path: "finance", element: <FinancePage /> },
      { path: "analytics", element: <AnalyticsPage /> },

      { path: "ai", element: <AIAssistantPage /> },
      { path: "ai/diagnosis", element: <CropDiagnosisPage /> },
      { path: "ai/image-analysis", element: <ImageAnalysisPage /> },
      { path: "ai/insights", element: <FarmInsightsPage /> },
      { path: "ai/weather", element: <WeatherInsightsPage /> },

      { path: "marketplace", element: <MarketplacePage /> },
      { path: "marketplace/categories", element: <CategoriesPage /> },
      { path: "marketplace/product/:productId", element: <ProductDetailsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "orders", element: <OrdersPage /> },

      { path: "seller", element: <SellerDashboardPage /> },
      { path: "seller/products", element: <SellerProductsPage /> },
      { path: "seller/store", element: <SellerStorePage /> },
      { path: "seller/payouts", element: <SellerPayoutsPage /> },
      { path: "seller/settings", element: <SellerSettingsPage /> },

      { path: "resources", element: <ResourcesPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
