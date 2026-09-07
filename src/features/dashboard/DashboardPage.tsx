import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CloudSun,
  DollarSign,
  Leaf,
  Plus,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Farm Health",
    value: "92%",
    note: "Looking healthy",
    icon: Leaf,
  },
  {
    label: "Active Crops",
    value: "12",
    note: "Across 4 fields",
    icon: Sprout,
  },
  {
    label: "Upcoming Tasks",
    value: "6",
    note: "2 due today",
    icon: CalendarDays,
  },
  {
    label: "Farm Revenue",
    value: "$24,850",
    note: "+12.4% this season",
    icon: DollarSign,
  },
];

const activities = [
  {
    title: "Maize Field A inspection completed",
    time: "Today, 9:42 AM",
  },
  {
    title: "Fertilizer inventory updated",
    time: "Yesterday, 4:15 PM",
  },
  {
    title: "New crop record added",
    time: "Yesterday, 11:20 AM",
  },
  {
    title: "Field B irrigation task completed",
    time: "Sep 5, 8:30 AM",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-green-700">
              FARM OVERVIEW
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Good morning, Farmer
            </h1>

            <p className="mt-2 text-slate-600">
              Here's what's happening across your farm today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/farms"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Manage Farm
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              <Plus size={18} />
              Add Activity
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <Icon size={20} />
                  </div>
                </div>

                <p className="mt-5 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-slate-500">{stat.note}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-green-700">
                  AI FARM INSIGHT
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Your farm is performing well
                </h2>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 sm:flex">
                ✦
              </div>
            </div>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Based on your current farm records, crop activities, and
              performance indicators, your operation is trending positively.
              Keep your field and crop records updated to receive more useful
              recommendations.
            </p>

            <Link
              to="/ai"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
            >
              Open AI Farm Assistant
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <CloudSun size={23} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Weather</p>
                <h2 className="text-xl font-bold text-slate-900">24°C</h2>
              </div>
            </div>

            <p className="mt-6 font-semibold text-slate-900">
              Partly cloudy
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Good conditions for today's scheduled activities.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Humidity</p>
                <p className="mt-1 font-bold text-slate-900">68%</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Rain chance</p>
                <p className="mt-1 font-bold text-slate-900">20%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-green-700">
                  UPCOMING
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Farm tasks
                </h2>
              </div>

              <Link
                to="/tasks"
                className="text-sm font-semibold text-green-700 hover:text-green-800"
              >
                View all
              </Link>
            </div>

            <div className="mt-6 divide-y divide-slate-100">
              {[
                ["Inspect maize field", "Today", "High"],
                ["Apply fertilizer", "Tomorrow", "Medium"],
                ["Irrigate vegetable field", "Sep 9", "High"],
                ["Update livestock records", "Sep 10", "Low"],
              ].map(([task, date, priority]) => (
                <div
                  key={task}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-600" />

                    <div>
                      <p className="font-medium text-slate-900">{task}</p>
                      <p className="text-sm text-slate-500">{date}</p>
                    </div>
                  </div>

                  <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-green-700">
                  ACTIVITY
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Recent activity
                </h2>
              </div>

              <TrendingUp size={20} className="text-green-700" />
            </div>

            <div className="mt-6 space-y-5">
              {activities.map((activity) => (
                <div key={activity.title} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-green-600" />

                  <div>
                    <p className="text-sm font-medium leading-5 text-slate-900">
                      {activity.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Link
            to="/crops"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300"
          >
            <Sprout className="text-green-700" size={24} />
            <h3 className="mt-4 font-bold text-slate-900">Manage Crops</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Track planting, crop health, growth stages, and harvests.
            </p>
          </Link>

          <Link
            to="/analytics"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300"
          >
            <TrendingUp className="text-green-700" size={24} />
            <h3 className="mt-4 font-bold text-slate-900">Farm Analytics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Understand productivity, costs, revenue, and farm performance.
            </p>
          </Link>

          <Link
            to="/farms"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300"
          >
            <Users className="text-green-700" size={24} />
            <h3 className="mt-4 font-bold text-slate-900">Farm Operations</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Manage fields, workers, inventory, records, and farm activities.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
