import { IconGitBranch } from "../icons";

export function PRCheckCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(28,36,32,0.18)]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--accent-purple-soft)]">
          <IconGitBranch className="h-5 w-5 text-[var(--accent-purple)]" />
        </span>
        <div>
          <p className="text-sm font-medium text-[var(--ink)]">
            PR #482 — refactor/session-handling
          </p>
          <p className="text-xs text-[var(--fg-faint)]">
            Codevanta check · 11s ago
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-[var(--surface-tint)] px-4 py-3">
        <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]">
          2 new findings introduced
        </span>
        <span className="pill pill-high">Blocking</span>
      </div>

      <p className="mt-4 text-xs leading-5 text-[var(--fg-muted)]">
        Comments are posted directly on the diff, with a one-click fix
        suggestion where a safe autofix exists.
      </p>
    </div>
  );
}
