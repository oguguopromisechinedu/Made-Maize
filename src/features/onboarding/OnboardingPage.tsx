import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const steps = [
  "Welcome",
  "Farm",
  "Location",
  "Size",
  "Production",
  "Goals",
  "Fields",
  "Team",
  "Review",
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const back = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Mademaize
          </Link>

          <span className="text-sm text-slate-500">
            Step {step + 1} of {steps.length}
          </span>
        </div>

        <div className="mb-10">
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-green-600 transition-all"
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="mt-4 hidden justify-between md:flex">
            {steps.map((item) => (
              <span
                key={item}
                className="text-xs font-semibold text-green-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          {step === 0 && (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                🌱
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                Let's build your farm profile
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Tell Mademaize a little about your farm so we can create a
                workspace designed around your agricultural operation.
              </p>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="font-semibold text-green-700">YOUR FARM</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                What is your farm called?
              </h1>

              <p className="mt-3 text-slate-600">
                You can change this later.
              </p>

              <input
                type="text"
                placeholder="e.g. Green Valley Farm"
                className="mt-8 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="font-semibold text-green-700">LOCATION</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Where is your farm located?
              </h1>

              <p className="mt-3 text-slate-600">
                Your location can help Mademaize provide more relevant
                agricultural insights.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Country"
                  className="rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-green-600"
                />

                <input
                  type="text"
                  placeholder="State / Province"
                  className="rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-green-600"
                />

                <input
                  type="text"
                  placeholder="City / Region"
                  className="rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-green-600 md:col-span-2"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="font-semibold text-green-700">FARM SIZE</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                How large is your farm?
              </h1>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Less than 1 acre",
                  "1–5 acres",
                  "5–20 acres",
                  "20–100 acres",
                  "100–500 acres",
                  "500+ acres",
                ].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="rounded-xl border border-slate-200 p-5 text-left font-medium hover:border-green-500 hover:bg-green-50"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="font-semibold text-green-700">PRODUCTION</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                What do you grow or raise?
              </h1>

              <p className="mt-3 text-slate-600">
                Select everything that applies.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  "Cereals",
                  "Vegetables",
                  "Fruits",
                  "Roots & Tubers",
                  "Livestock",
                  "Poultry",
                  "Aquaculture",
                  "Cash Crops",
                  "Other",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-xl border border-slate-200 p-5 font-medium hover:border-green-500 hover:bg-green-50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <p className="font-semibold text-green-700">FARMING GOALS</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                What do you want to achieve?
              </h1>

              <div className="mt-8 space-y-4">
                {[
                  "Increase farm productivity",
                  "Reduce farming costs",
                  "Improve crop health",
                  "Better manage my farm",
                  "Track expenses and revenue",
                  "Get better agricultural insights",
                ].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    className="flex w-full items-center rounded-xl border border-slate-200 p-5 text-left font-medium hover:border-green-500 hover:bg-green-50"
                  >
                    <span className="mr-4 flex h-6 w-6 rounded-md border border-slate-300" />
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <p className="font-semibold text-green-700">FIELDS</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Add your first fields
              </h1>

              <p className="mt-3 text-slate-600">
                You can add and manage more fields from your dashboard later.
              </p>

              <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center">
                <p className="font-semibold text-slate-900">
                  No fields added yet
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
                >
                  + Add Field
                </button>
              </div>
            </div>
          )}

          {step === 7 && (
            <div>
              <p className="font-semibold text-green-700">TEAM</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Build your farm team
              </h1>

              <p className="mt-3 text-slate-600">
                Invite workers, managers, agronomists, or other people who
                help operate your farm.
              </p>

              <div className="mt-8 flex gap-3">
                <input
                  type="email"
                  placeholder="team@example.com"
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-green-600"
                />

                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-5 font-semibold hover:bg-slate-50"
                >
                  Invite
                </button>
              </div>
            </div>
          )}

          {step === 8 && (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                ✓
              </div>

              <h1 className="mt-6 text-4xl font-bold text-slate-900">
                Your farm workspace is ready
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
                Your Mademaize journey starts here. Next, you'll be able to
                manage your farm, monitor crops, track activities, and use
                intelligent agricultural tools.
              </p>
            </div>
          )}

          <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="rounded-lg px-5 py-3 font-semibold text-slate-600 hover:bg-slate-100 disabled:invisible"
            >
              Back
            </button>

            <button
              type="button"
              onClick={next}
              className="rounded-lg bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800"
            >
              {step === steps.length - 1 ? "Go to Dashboard" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
