import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import { TerminalCTA } from "@/components/TerminalCTA";
import { CodeDiffCard } from "@/components/mocks/CodeDiffCard";
import { DependencyRisk } from "@/components/mocks/DependencyRisk";
import { FindingsList } from "@/components/mocks/FindingsList";
import { IconBug, IconPackage, IconKey, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Codevanta's static analysis, dependency, secrets, and infrastructure-as-code scanning engine works, from pull request to fix.",
  alternates: {
    canonical: "/platform",
  },
};

const capabilities = [
  {
    icon: IconBug,
    name: "Static analysis (SAST)",
    summary:
      "Semantic, AST-based pattern matching across 30+ languages — not a regex pass over your source.",
    details: [
      "Rules are written against the parsed structure of your code, so a SQL injection built across three variables and a helper function is still caught, not just a literal string concatenation.",
      "Every finding links to the exact rule that fired, with an explanation of the vulnerability class and, where possible, a one-click autofix generated from the same AST match.",
      "Custom rules use the same syntax as the 2,400+ built-in rules, so your team's internal security patterns live in the same registry as the community ones.",
    ],
    mock: <FindingsList />,
  },
  {
    icon: IconPackage,
    name: "Dependency scanning (SCA)",
    summary:
      "Every direct and transitive dependency checked against known CVEs on every build.",
    details: [
      "We build the full dependency graph for npm, pip, Maven, Go modules, Cargo, and more — not just the top-level manifest — so a vulnerable package three layers deep still surfaces.",
      "Each finding shows the exact version that introduced the risk and the minimum safe version to upgrade to, pulled from the advisory database directly.",
      "Reachability analysis (beta) flags whether the vulnerable function in a dependency is actually called anywhere in your code, so you can triage by real exposure, not just presence.",
    ],
    mock: <DependencyRisk />,
  },
  {
    icon: IconKey,
    name: "Secrets detection",
    summary:
      "Catches hardcoded API keys, tokens, and credentials before they reach a shared branch.",
    details: [
      "Pattern + entropy detection covers 180+ credential formats out of the box — cloud provider keys, database connection strings, signed JWTs, and generic high-entropy tokens.",
      "Secrets are matched against provider-specific validators where possible, so a finding tells you whether the key is still live, not just that it looks like one.",
      "Git history scanning (not just the current diff) catches secrets that were committed and later \"removed\" but still live in the repo's history.",
    ],
    mock: <CodeDiffCard />,
  },
];

const steps = [
  {
    step: "01",
    title: "Install the app on your VCS",
    body: "Connect GitHub, GitLab, Bitbucket, or Azure DevOps with a scoped, read-only token. No agent, no proxy, no changes to your CI config required to get the first scan.",
  },
  {
    step: "02",
    title: "Baseline scan runs automatically",
    body: "Codevanta scans the default branch once on install so you start from a real picture of existing risk, not a blank slate that only catches what's new.",
  },
  {
    step: "03",
    title: "Every pull request is scanned incrementally",
    body: "Only the diff is analyzed for speed, with full dependency-graph context still available — most PRs get a result back in under ten seconds.",
  },
  {
    step: "04",
    title: "Findings post where the work happens",
    body: "Comments land directly on the diff line, with severity, rule explanation, and an autofix suggestion where one exists — no separate dashboard to remember to check.",
  },
];

const severityLevels = [
  {
    name: "Critical",
    tone: "pill-critical",
    body: "Actively exploitable issues like SQL injection, remote code execution, or a live credential — blocks merge by default.",
  },
  {
    name: "High",
    tone: "pill-high",
    body: "Serious weaknesses that need a specific condition to exploit, like insecure deserialization or a weak auth check.",
  },
  {
    name: "Medium",
    tone: "pill-medium",
    body: "Defense-in-depth gaps — weak randomness, missing security headers, outdated but not yet exploited protocol versions.",
  },
  {
    name: "Low",
    tone: "pill-low",
    body: "Best-practice deviations worth cleaning up but with minimal direct exploit risk on their own.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Platform</TagLabel>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              One scanning engine, three ways code goes wrong.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a code security startup, we built Codevanta around a single
              shared engine for static analysis, dependency risk, and
              secrets — so adding a second capability doesn&apos;t mean a
              second tool to configure.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-24">
          {capabilities.map((c, i) => (
            <Reveal key={c.name} delay={i * 50}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-tint)]">
                    <c.icon className="h-5 w-5 text-[var(--ink)]" />
                  </span>
                  <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-[var(--fg-muted)]">
                    {c.summary}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {c.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-dark)]" />
                        <span className="text-sm leading-6 text-[var(--fg-muted)]">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {c.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <TagLabel>How a scan runs</TagLabel>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              From install to first finding
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 50}>
                <div className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--primary-dark)]">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <TagLabel>Severity model</TagLabel>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Findings are scored, not just listed
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
              Every finding gets one of four severity levels, so your team
              can decide what blocks a merge and what just needs a ticket.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {severityLevels.map((s, i) => (
              <Reveal key={s.name} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className={`pill ${s.tone}`}>{s.name}</span>
                  <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TerminalCTA
        title="See your real findings, not a demo."
        description="Connect a repo and get a baseline scan back before your coffee's done — no credit card, no sales call."
        buttonLabel="Scan your repo free"
        buttonHref="/contact"
      />
    </>
  );
}
