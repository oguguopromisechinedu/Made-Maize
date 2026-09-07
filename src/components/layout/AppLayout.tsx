import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Mademaize
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-green-700">
              Home
            </Link>

            <Link to="/farms" className="text-sm font-medium hover:text-green-700">
              Farming
            </Link>

            <Link to="/ai" className="text-sm font-medium hover:text-green-700">
              AI Tools
            </Link>

            <Link to="/marketplace" className="text-sm font-medium hover:text-green-700">
              Marketplace
            </Link>

            <Link to="/analytics" className="text-sm font-medium hover:text-green-700">
              Resources
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden text-sm font-medium md:block"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold">Mademaize</p>
              <p className="mt-1 text-sm text-slate-600">
                Smarter Farming. Better Decisions. Bigger Harvests.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              © 2026 Mademaize. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
