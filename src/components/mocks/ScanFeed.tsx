import { IconCheck } from "../icons";

const scans = [
  { repo: "payments-api", status: "clean", meta: "0 findings · 2m ago" },
  { repo: "auth-service", status: "found", meta: "3 findings · 6m ago" },
  { repo: "web-dashboard", status: "clean", meta: "0 findings · 14m ago" },
  { repo: "infra-terraform", status: "found", meta: "1 finding · 29m ago" },
  { repo: "mobile-gateway", status: "clean", meta: "0 findings · 41m ago" },
];

export function ScanFeed() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(28,36,32,0.18)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Live scan activity
        </span>
        <span className="scan-dot" />
      </div>

      <ul className="mt-5 flex flex-col gap-4">
        {scans.map((s) => (
          <li key={s.repo} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full"
              style={{
                background:
                  s.status === "clean"
                    ? "var(--primary-soft)"
                    : "color-mix(in srgb, var(--danger) 16%, transparent)",
              }}
            >
              {s.status === "clean" ? (
                <IconCheck className="h-3 w-3 text-[var(--primary-dark)]" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--danger)]" />
              )}
            </span>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]">
                {s.repo}
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {s.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
