import { Link } from "react-router-dom";
import { MapPin, Plus, Sprout, Users, ArrowRight } from "lucide-react";

const farms = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: "Lagos, Nigeria",
    size: "120 hectares",
    crops: 6,
    team: 8,
    health: 92,
  },
  {
    id: 2,
    name: "Sunrise Fields",
    location: "Ogun, Nigeria",
    size: "75 hectares",
    crops: 4,
    team: 5,
    health: 87,
  },
];

export default function FarmsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Farm Management
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Your Farms
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              Manage your farms, fields, crops, livestock, and farming
              operations from one place.
            </p>
          </div>

          <Link
            to="/onboarding"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
          >
            <Plus className="h-4 w-4" />
            Add New Farm
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {farms.map((farm) => (
            <div
              key={farm.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-green-50 p-3">
                      <Sprout className="h-6 w-6 text-green-700" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {farm.name}
                      </h2>

                      <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-4 w-4" />
                        {farm.location}
                      </div>
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Active
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Farm Size</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {farm.size}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Crops</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {farm.crops}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Team</p>
                  <p className="mt-1 flex items-center gap-1 font-semibold text-slate-900">
                    <Users className="h-4 w-4" />
                    {farm.team}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Farm Health</p>
                  <p className="mt-1 font-semibold text-green-700">
                    {farm.health}%
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <Link
                  to="/fields"
                  className="text-sm font-semibold text-green-700 hover:text-green-800"
                >
                  Manage Fields
                </Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-green-700"
                >
                  View Farm
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
            <Plus className="h-5 w-5 text-green-700" />
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-900">
            Add another farm
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Create another farm to manage its fields, crops, livestock,
            activities, and team separately.
          </p>

          <Link
            to="/onboarding"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
          >
            Create Farm
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
