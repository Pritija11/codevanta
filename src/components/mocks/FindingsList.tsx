const findings = [
  { rule: "hardcoded-secret", file: "config/settings.py:42", severity: "Critical" },
  { rule: "insecure-deserialization", file: "api/handlers.py:118", severity: "High" },
  { rule: "weak-random-token", file: "auth/tokens.py:9", severity: "Medium" },
  { rule: "outdated-tls-version", file: "infra/nginx.conf:31", severity: "Low" },
];

const severityClass: Record<string, string> = {
  Critical: "pill-critical",
  High: "pill-high",
  Medium: "pill-medium",
  Low: "pill-low",
};

export function FindingsList() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(28,36,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Findings — main branch
        </span>
        <span className="pill pill-neutral">4 open</span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {findings.map((f) => (
          <div
            key={f.rule}
            className="flex items-center justify-between gap-4 px-6 py-4"
          >
            <div>
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]">
                {f.rule}
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {f.file}
              </p>
            </div>
            <span className={`pill ${severityClass[f.severity]} flex-none`}>
              {f.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
