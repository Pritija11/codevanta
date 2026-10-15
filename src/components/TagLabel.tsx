export function TagLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 font-[family-name:var(--font-mono)]">
      <span className="text-[var(--primary-dark)]">&gt;</span>
      <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        {children}
      </span>
    </div>
  );
}
