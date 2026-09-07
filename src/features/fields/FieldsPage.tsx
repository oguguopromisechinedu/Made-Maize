import { Link } from "react-router-dom";
import {
  ArrowRight,
  Map,
  MapPin,
  Plus,
  Sprout,
} from "lucide-react";

const fields = [
  {
    id: 1,
    name: "North Field",
    farm: "Green Valley Farm",
    location: "Lagos, Nigeria",
    size: "25 hectares",
    crop: "Maize",
    status: "Growing",
  },
  {
    id: 2,
    name: "East Field",
    farm: "Green Valley Farm",
    location: "Lagos, Nigeria",
    size: "18 hectares",
    crop: "Cassava",
    status: "Growing",
  },
  {
    id: 3,
    name: "Main Field",
    farm: "Sunrise Fields",
    location: "Ogun, Nigeria",
    size: "30 hectares",
    crop: "Rice",
    status: "Growing",
  },
];

export default function FieldsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Farm Management
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Fields
            </h1>

            <p className="mt-2 max-w-2xl text-slate-600">
              Organize the land within your farms and keep track of what is
              growing in each field.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
          >
            <Plus className="h-4 w-4" />
            Add Field
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Fields</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">12</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Area</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">195 ha</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active Crops</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">8</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Growing</p>
            <p className="mt-2 text-2xl font-bold text-green-700">10</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Your Fields
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                View and manage the fields across your farms.
              </p>
            </div>

            <Link
              to="/farms"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-700"
            >
              View Farms
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {fields.map((field) => (
              <div
                key={field.id}
                className="rounded-xl border border-slate-200 p-5 transition hover:border-green-200 hover:bg-green-50/30"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-green-50 p-3">
                      <Map className="h-6 w-6 text-green-700" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {field.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-green-700">
                        {field.farm}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {field.location}
                        </span>

                        <span>{field.size}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-50 px-4 py-3">
                      <p className="text-xs text-slate-500">Crop</p>
                      <p className="mt-1 flex items-center gap-1 font-semibold text-slate-900">
                        <Sprout className="h-4 w-4 text-green-700" />
                        {field.crop}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-50 px-4 py-3">
                      <p className="text-xs text-slate-500">Status</p>
                      <p className="mt-1 font-semibold text-green-700">
                        {field.status}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-green-300 hover:text-green-700 sm:col-span-1"
                    >
                      View Field
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
            <Map className="h-6 w-6 text-green-700" />
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-900">
            Map your farm fields
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-500">
            Later, Mademaize will allow farmers to map field boundaries,
            capture field locations, and use field-specific data for smarter
            farming recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
