import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import { TerminalCTA } from "@/components/TerminalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Codevanta is an early-stage code security startup based in Kathmandu, Nepal, building scanning that engineers don't route around.",
  alternates: {
    canonical: "/about",
  },
};

const snapshot = [
  { value: "Pre-seed", label: "Current stage" },
  { value: "5", label: "People on the team" },
  { value: "Kathmandu", label: "Where we're based" },
];

const values = [
  {
    title: "Signal over noise",
    body: "A scanner that flags everything gets disabled within a month. We'd rather miss an edge case than bury a real finding in false positives.",
  },
  {
    title: "Open by default",
    body: "Every built-in rule is readable, forkable, and explainable — security tooling shouldn't ask for blind trust in a black box.",
  },
  {
    title: "Fix, not just flag",
    body: "A finding without a path to resolution is just guilt. We ship an autofix wherever the pattern allows one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>About</TagLabel>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              We got tired of security tools nobody actually used.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Codevanta is a code security startup building out of
              Kathmandu, Nepal — small team, early days, still shaped
              directly by the engineers scanning real repos with it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Why we started Codevanta
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-7 text-[var(--fg-muted)]">
              <p>
                We&apos;d all worked somewhere with a security scanner
                installed in CI that everyone quietly learned to ignore —
                too many false positives, findings with no clear fix, a
                dashboard nobody opened outside of audit season.
              </p>
              <p>
                The tool wasn&apos;t wrong to exist. It was built for the
                security team&apos;s reporting needs, not for the engineer
                who just wants to know if their PR is safe to merge. So we
                started over, designing from the pull request backward
                instead of from a compliance checklist forward.
              </p>
              <p>
                We&apos;re a few months in, pre-seed, and still tuning the
                rule registry against real codebases from our first design
                partners. The product you&apos;d see today is rougher than
                we&apos;d like — that&apos;s what building it in the open
                with real users looks like.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-tint)] p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                Where we stand today
              </p>
              <div className="mt-6 flex flex-col gap-6">
                {snapshot.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm text-[var(--fg-muted)]">
                      {s.label}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              What we optimize for right now
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TerminalCTA
        title="Want to be a design partner?"
        description="We're onboarding a small number of early-stage teams directly with the founders — tell us about your stack and what you're trying to catch."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
