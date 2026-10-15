import Link from "next/link";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { TerminalCTA } from "@/components/TerminalCTA";
import { CodeDiffCard } from "@/components/mocks/CodeDiffCard";
import { FindingsList } from "@/components/mocks/FindingsList";
import { DependencyRisk } from "@/components/mocks/DependencyRisk";
import { PRCheckCard } from "@/components/mocks/PRCheckCard";
import {
  IconArrowRight,
  IconBug,
  IconPackage,
  IconCheck,
  IconGitBranch,
} from "@/components/icons";

const stats = [
  { value: "30+", label: "Languages supported" },
  { value: "2,400+", label: "Rules in the registry" },
  { value: "<10s", label: "Avg. scan time per PR" },
];

const scanTypes = [
  {
    icon: IconBug,
    title: "Static analysis that understands your code, not just text",
    description:
      "Codevanta parses your code into an abstract syntax tree and matches patterns against real language semantics — so it catches a SQL injection built across three variables, not just a regex for \"SELECT\".",
    mock: <FindingsList />,
  },
  {
    icon: IconPackage,
    title: "Dependency scanning that tracks the whole tree",
    description:
      "Every direct and transitive dependency is checked against known CVEs on every build, with the exact file and version that introduced the risk — not just a package name buried in a report.",
    mock: <DependencyRisk />,
  },
  {
    icon: IconGitBranch,
    title: "Feedback where engineers already are",
    description:
      "Findings show up as PR comments with inline diffs, not a dashboard nobody checks. Block merges on critical findings, or just warn — your call, per repo.",
    mock: <PRCheckCard />,
  },
];

const principles = [
  "Scans run read-only against your repo — we never push commits on your behalf",
  "Every rule is open to inspect, fork, or disable — nothing is a black box",
  "Free forever for public and open-source repositories",
  "No code is retained after a scan completes — findings are, your source isn't",
];

const languages = [
  "Python", "JavaScript", "TypeScript", "Go", "Java", "Ruby",
  "C#", "PHP", "Kotlin", "Rust", "Terraform", "YAML",
];

const testimonialQuote =
  "We caught a hardcoded AWS key in a PR before it ever reached main. That one finding paid for the tool for the next three years.";

const faqs = [
  {
    q: "Is Codevanta a new company?",
    a: "Yes — we're an early-stage code security startup based in Kathmandu, Nepal, built by a small team shipping fast with our first group of design-partner teams.",
  },
  {
    q: "How is this different from a linter?",
    a: "A linter checks style and common bugs. Codevanta's engine is purpose-built for security patterns — injection, hardcoded secrets, insecure deserialization, auth bypasses — using semantic rules, not just syntax matching.",
  },
  {
    q: "Does Codevanta see our source code?",
    a: "Scans run inside an ephemeral environment scoped to a single job. Code is checked out, scanned, and discarded — nothing is stored after the scan completes. See our Trust page for the full breakdown.",
  },
  {
    q: "What languages are supported?",
    a: "30+ languages and counting, including Python, JavaScript, TypeScript, Go, Java, Ruby, C#, and infrastructure-as-code formats like Terraform and CloudFormation.",
  },
  {
    q: "Can we write our own rules?",
    a: "Yes. Custom rules use the same pattern-matching syntax as the built-in registry, and can be scoped to a single repo or shared across your whole org.",
  },
  {
    q: "Is there a free tier?",
    a: "Scanning is free forever for public and open-source repositories. Private repositories are covered under the Team and Enterprise plans on our Pricing page.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="grid-field" aria-hidden />
        <div className="scan-glow" aria-hidden />
        <Container className="relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <TagLabel>Startup · Free for open source</TagLabel>
              <h1 className="mt-7 max-w-lg font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] md:text-6xl">
                Find the bug before it ships, not after.
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--fg-muted)]">
                Codevanta runs static analysis, dependency, and secrets
                scanning on every pull request — with fixes suggested
                directly on the diff, in the tools your engineers already
                use.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="/contact">Scan your repo free</Button>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--ink)]"
                >
                  See how scanning works
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[var(--border)] pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="flex justify-center lg:justify-end">
              <CodeDiffCard />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Scan types */}
      <section className="py-24 md:py-28">
        <Container className="flex flex-col gap-24">
          {scanTypes.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <s.icon className="h-5 w-5 text-[var(--primary-dark)]" />
                  </span>
                  <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
                    {s.description}
                  </p>
                </div>
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {s.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <TagLabel>How we build</TagLabel>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              A security tool engineers don&apos;t route around
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Most scanners get disabled within a month because they&apos;re
              noisy, opaque, or slow. We designed Codevanta around the
              opposite of all three.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="flex flex-col gap-4">
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

      {/* Language support */}
      <section className="py-24">
        <Container>
          <Reveal>
            <TagLabel>Language support</TagLabel>
            <h2 className="mt-5 max-w-lg font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Works across your whole polyglot stack
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              One scanner, one rule registry, every language your team
              actually ships in.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-[family-name:var(--font-mono)] text-sm text-[var(--ink)]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl font-medium leading-[1.5] tracking-tight text-[var(--ink)] md:text-3xl">
              &ldquo;{testimonialQuote}&rdquo;
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--primary-soft)]" />
              <div className="text-left">
                <p className="text-sm text-[var(--ink)]">
                  Staff Engineer, design-partner team
                </p>
                <p className="text-xs text-[var(--fg-faint)]">
                  Early Codevanta customer
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <TagLabel>Pricing</TagLabel>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Free for open source. Simple for everyone else.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              Public repositories scan for free, forever. Private repos are
              priced per contributor, with no findings-count upsell.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-dark)] hover:underline"
            >
              See pricing
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container>
          <Reveal>
            <TagLabel>Questions</TagLabel>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Before you install the app
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-[var(--ink)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TerminalCTA
        title="See what's in your repo in under ten seconds."
        description="Install the GitHub or GitLab app, pick a repo, and get your first scan report before you've finished reading this sentence."
        buttonLabel="Scan your repo free"
        buttonHref="/contact"
      />
    </>
  );
}
