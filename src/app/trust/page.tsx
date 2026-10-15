import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import { TerminalCTA } from "@/components/TerminalCTA";
import { EphemeralEnvCard } from "@/components/mocks/EphemeralEnvCard";
import {
  IconLock,
  IconKey,
  IconServer,
  IconActivity,
  IconUsers,
  IconShieldCheck,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Trust",
  description:
    "How Codevanta handles your source code — ephemeral scanning, no code retention, read-only access, and the rest of our security practices.",
  alternates: {
    canonical: "/trust",
  },
};

const safeguards = [
  {
    icon: IconServer,
    title: "Ephemeral scan environments",
    body: "Every scan runs in a fresh, isolated container that's destroyed the moment the job finishes — your code is never kept around between scans.",
  },
  {
    icon: IconLock,
    title: "Nothing persisted after a scan",
    body: "We store findings — the rule that fired, the file, the line — never the surrounding source. Your code leaves our infrastructure the moment the scan completes.",
  },
  {
    icon: IconKey,
    title: "Read-only VCS access",
    body: "The GitHub, GitLab, and Bitbucket apps request read-only scopes. Codevanta cannot push commits, merge PRs, or modify branch protection on your behalf.",
  },
  {
    icon: IconUsers,
    title: "Role-based internal access",
    body: "Employee access to any customer metadata is role-gated and logged. Nobody on our team can browse a customer's findings without an audit trail.",
  },
  {
    icon: IconActivity,
    title: "Continuous internal scanning",
    body: "We run Codevanta against our own codebase on every commit — the same engine, the same rules, no special treatment for our own code.",
  },
  {
    icon: IconShieldCheck,
    title: "Working toward SOC 2 Type II",
    body: "As an early-stage company we're building our compliance program now, with policies in place from day one rather than retrofitted later.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Trust</TagLabel>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Your source code is never the product.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup asking engineering teams to connect their
              repositories to us, we know the first question is always
              &ldquo;what happens to our code?&rdquo; — here&apos;s the
              honest answer.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safeguards.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                  <s.icon className="h-5 w-5 text-[var(--primary-dark)]" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-[var(--ink)]">
                  {s.title}
                </h2>
                <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <TagLabel>What a scan actually does</TagLabel>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Checked out, scanned, discarded — every time
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
              This is the full lifecycle of a single scan job, start to
              finish. No step where your code sits around waiting for
              anything.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex justify-center">
            <EphemeralEnvCard />
          </Reveal>
        </Container>
      </section>

      <TerminalCTA
        title="Want the full architecture writeup?"
        description="We share a detailed data-flow diagram and sub-processor list under NDA during onboarding — just ask."
        buttonLabel="Request documentation"
        buttonHref="/contact"
      />
    </>
  );
}
