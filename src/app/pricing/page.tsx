import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { TerminalCTA } from "@/components/TerminalCTA";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Codevanta pricing — free forever for open source, priced per contributor for private repositories, with no findings-count upsell.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Open Source",
    price: "$0",
    period: "forever",
    description: "Public repositories of any size.",
    featured: false,
    features: [
      "Unlimited public repositories",
      "Full rule registry included",
      "PR comments and inline fixes",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$18",
    period: "/contributor/month",
    description: "Private repos for growing engineering teams.",
    featured: true,
    features: [
      "Unlimited private repositories",
      "Full rule registry + custom rules",
      "Dependency and secrets scanning",
      "Slack and Teams notifications",
      "Shared support channel",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Org-wide policy, SSO, and audit needs.",
    featured: false,
    features: [
      "Everything in Team",
      "SSO and SCIM provisioning",
      "Org-wide rule policy enforcement",
      "Dedicated onboarding engineer",
      "Uptime & response SLA",
    ],
  },
];

const comparisonRows = [
  { feature: "Public repository scanning", oss: true, team: true, enterprise: true },
  { feature: "Private repository scanning", oss: false, team: true, enterprise: true },
  { feature: "Custom rules", oss: false, team: true, enterprise: true },
  { feature: "Org-wide policy enforcement", oss: false, team: false, enterprise: true },
  { feature: "SSO / SCIM", oss: false, team: false, enterprise: true },
  { feature: "Dedicated onboarding engineer", oss: false, team: false, enterprise: true },
];

const billingFaqs = [
  {
    q: "What counts as a contributor?",
    a: "Anyone who has pushed a commit to a private repository connected to Codevanta in the last 90 days. Reviewers and read-only team members aren't counted.",
  },
  {
    q: "Do findings count against my plan?",
    a: "No. Pricing is based on contributor seats, not scan volume or findings count — we don't want teams tuning down rules just to stay under a limit.",
  },
  {
    q: "Can we mix public and private repos?",
    a: "Yes. Public repositories always scan for free on any plan, even if your org also has paid private repos.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Pricing</TagLabel>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Free for open source. Simple for everyone else.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup ourselves, we didn&apos;t want pricing that
              punishes you for finding more issues. Every plan below is
              priced by team size, not by how clean your code is.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  p.featured
                    ? "border-[var(--primary)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(42,207,166,0.35)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                {p.featured && (
                  <span className="pill pill-success mb-4 w-fit">
                    Most teams start here
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">
                  {p.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
                    {p.price}
                  </span>
                  <span className="text-sm text-[var(--fg-faint)]">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-dark)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={p.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.price === "Custom"
                    ? "Talk to us"
                    : p.price === "$0"
                      ? "Start scanning free"
                      : "Start free trial"}
                </Button>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Compare plans
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left">
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Feature
                    </th>
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Open Source
                    </th>
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Team
                    </th>
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-6 py-4 text-[var(--ink)]">
                        {row.feature}
                      </td>
                      {[row.oss, row.team, row.enterprise].map(
                        (included, idx) => (
                          <td key={idx} className="px-6 py-4">
                            {included ? (
                              <IconCheck className="h-4 w-4 text-[var(--primary-dark)]" />
                            ) : (
                              <span className="text-[var(--fg-faint)]">—</span>
                            )}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Billing questions
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
            {billingFaqs.map((item, i) => (
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
        title="Not sure which plan fits your team?"
        description="Tell us your repo count and team size and we'll recommend a plan directly — no need to guess from a feature grid."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
