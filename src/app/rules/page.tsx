import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import { TerminalCTA } from "@/components/TerminalCTA";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rule Registry",
  description:
    "Codevanta's open rule registry — 2,400+ security rules across 30+ languages, with support for custom, org-specific rules.",
  alternates: {
    canonical: "/rules",
  },
};

const categories = [
  { name: "Injection", count: 340, tone: "chip-teal" },
  { name: "Secrets & credentials", count: 180, tone: "chip-purple" },
  { name: "Authentication & sessions", count: 210, tone: "chip-teal" },
  { name: "Cryptography", count: 165, tone: "chip-purple" },
  { name: "IaC misconfiguration", count: 290, tone: "chip-teal" },
  { name: "Deserialization", count: 95, tone: "chip-purple" },
  { name: "Access control", count: 175, tone: "chip-teal" },
  { name: "Supply chain", count: 140, tone: "chip-purple" },
];

const ruleSnippet = [
  { text: "rules:", type: "ctx" },
  { text: "  - id: hardcoded-flask-secret-key", type: "ctx" },
  { text: "    pattern: app.config['SECRET_KEY'] = \"...\"", type: "add" },
  { text: "    message: Flask SECRET_KEY should come from env, not source", type: "ctx" },
  { text: "    severity: CRITICAL", type: "err" },
  { text: "    languages: [python]", type: "ctx" },
];

const lineColor: Record<string, string> = {
  ctx: "text-[#a9bdb6]",
  add: "diff-add text-[#b9f3dd]",
  err: "text-[#ffb4bd]",
};

const principles = [
  "Every built-in rule is open to read — nothing fires without an explanation you can inspect",
  "Custom rules use the same pattern syntax as the built-in registry, no separate DSL to learn",
  "Rules can be scoped to one repo, a team, or your whole org",
  "Disable or tune any rule per-repo without opening a support ticket",
];

export default function RulesPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Rule registry</TagLabel>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Every rule is readable. Every rule is yours to change.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Codevanta ships with 2,400+ rules across eight vulnerability
              categories — and because they&apos;re written in a readable
              pattern syntax, your team can inspect exactly why a finding
              fired, or write one of your own in the same format.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Rule categories
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <span className={`pill border ${c.tone}`}>
                    {c.count} rules
                  </span>
                  <p className="mt-3 text-sm font-medium text-[var(--ink)]">
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <TagLabel>Writing your own</TagLabel>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Your internal security patterns, in the same registry
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
              A custom rule is a YAML file with a pattern, a message, and a
              severity — no new language to learn, and no separate system
              to maintain alongside the built-in rules.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="terminal-window w-full">
              <div className="terminal-titlebar">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-[#7e9089]">
                  .codevanta/rules/flask-secret.yml
                </span>
              </div>
              <div className="flex flex-col gap-1.5 px-5 py-6 font-[family-name:var(--font-mono)] text-[13px] leading-6">
                {ruleSnippet.map((l, i) => (
                  <span key={i} className={lineColor[l.type]}>
                    {l.text}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              What makes a rule trustworthy
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-dark)]" />
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <TerminalCTA
        title="Bring your own rules, or start with ours."
        description="Every team starts with the full built-in registry, then layers on custom rules as they find patterns specific to their codebase."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
