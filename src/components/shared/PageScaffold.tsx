import { Link } from "react-router-dom";

type PageScaffoldProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: string;
  primaryHref?: string;
};

export default function PageScaffold({
  eyebrow,
  title,
  description,
  primaryAction,
  primaryHref,
}: PageScaffoldProps) {
  return (
    <div className="min-h-[70vh] bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            {eyebrow}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {description}
          </p>

          {primaryAction && primaryHref && (
            <Link
              to={primaryHref}
              className="mt-6 inline-flex rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
            >
              {primaryAction}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
