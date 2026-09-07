import { Link } from "react-router-dom";

const features = [
  {
    title: "Smart Farm Management",
    description:
      "Manage farms, fields, crops, livestock, tasks, and daily operations from one connected platform.",
  },
  {
    title: "AI Farm Assistant",
    description:
      "Get intelligent guidance on crops, pests, planting, farm operations, and agricultural decisions.",
  },
  {
    title: "Farm Analytics",
    description:
      "Turn your farm records into useful insights about productivity, costs, yields, and performance.",
  },
  {
    title: "Crop Management",
    description:
      "Track planting, growth stages, crop health, treatments, harvests, and expected yields.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
              AI-Powered Agriculture & Farming
            </div>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Smarter Farming.
              <span className="block text-green-400">
                Better Decisions.
              </span>
              <span className="block">Bigger Harvests.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Mademaize brings modern farm management, artificial intelligence,
              analytics, and agricultural tools together to help farmers build
              more productive and profitable farms.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="rounded-lg bg-green-600 px-6 py-3.5 text-center font-semibold text-white hover:bg-green-500"
              >
                Get Started Free
              </Link>

              <Link
                to="/ai"
                className="rounded-lg border border-slate-600 px-6 py-3.5 text-center font-semibold text-white hover:bg-slate-900"
              >
                Explore AI Farming
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <div className="rounded-2xl bg-green-900/30 p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Farm Health</p>
                    <p className="mt-2 text-3xl font-bold text-green-400">
                      92%
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Active Crops</p>
                    <p className="mt-2 text-3xl font-bold">12</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">AI Insights</p>
                    <p className="mt-2 text-3xl font-bold">8</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Upcoming Tasks</p>
                    <p className="mt-2 text-3xl font-bold">6</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-white/10 p-5">
                  <p className="text-sm font-medium text-green-300">
                    AI Farm Insight
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Your crop records and farm conditions can be used to
                    generate smarter recommendations for upcoming activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-semibold text-green-700">ONE FARM PLATFORM</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to manage a modern farm
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Mademaize connects the information farmers need to understand,
            manage, and improve their agricultural operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                ✓
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-green-700">INTELLIGENT AGRICULTURE</p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Your farm data can become your farming advantage.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mademaize is designed to combine farm records, agricultural
              knowledge, and AI-powered tools so farmers can make more informed
              decisions throughout the farming cycle.
            </p>

            <Link
              to="/dashboard"
              className="mt-8 inline-flex rounded-lg bg-slate-900 px-6 py-3.5 font-semibold text-white hover:bg-slate-800"
            >
              Explore the Platform
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Farm Performance
                </p>
                <div className="mt-3 h-3 rounded-full bg-slate-100">
                  <div className="h-3 w-4/5 rounded-full bg-green-600" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Crop Health</p>
                  <p className="mt-2 text-2xl font-bold">Excellent</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Tasks</p>
                  <p className="mt-2 text-2xl font-bold">18 Active</p>
                </div>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <p className="font-semibold text-green-800">
                  Smart recommendation
                </p>
                <p className="mt-2 text-sm leading-6 text-green-900/70">
                  Keep your farm records updated to unlock more personalized
                  insights and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Build a smarter farm with Mademaize.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Start building your digital farm and unlock the tools designed for
            the next generation of agriculture.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 font-semibold text-green-800 hover:bg-green-50"
          >
            Create Your Farm
          </Link>
        </div>
      </section>
    </div>
  );
}
