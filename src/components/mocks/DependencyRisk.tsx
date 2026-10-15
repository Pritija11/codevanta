const packages = [
  { name: "lodash", version: "4.17.15", risk: "Critical", issue: "Prototype pollution (CVE-2020-8203)" },
  { name: "requests", version: "2.19.1", risk: "High", issue: "Credential leak on redirect" },
  { name: "jinja2", version: "2.11.2", risk: "Medium", issue: "Sandbox escape" },
];

const riskClass: Record<string, string> = {
  Critical: "pill-critical",
  High: "pill-high",
  Medium: "pill-medium",
};

export function DependencyRisk() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(28,36,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Dependency risk — package.json, requirements.txt
        </span>
        <span className="pill pill-neutral">214 scanned</span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {packages.map((p) => (
          <div key={p.name} className="flex items-center justify-between gap-4 px-6 py-4">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]">
                {p.name}
                <span className="ml-2 text-[var(--fg-faint)]">
                  {p.version}
                </span>
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {p.issue}
              </p>
            </div>
            <span className={`pill ${riskClass[p.risk]} flex-none`}>
              {p.risk}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
