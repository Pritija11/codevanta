import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Codevanta collects, uses, and protects data for customers of its code security scanning platform.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you request a trial, we collect your name, work email, and the details you share about your scanning needs.",
      "When you connect a repository, we process your source code transiently to generate scan findings — we do not retain source code after a scan completes. See our Trust page for the full data-flow breakdown.",
      "Like most web services, our site logs IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Information is used to operate the platform, generate and deliver scan findings, and respond to support requests.",
      "We do not sell customer data, and we never use a customer's source code or findings to train models or for any purpose outside that customer's own account.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Only infrastructure sub-processors required to run the platform. We may also share information when legally required to by a regulator or court order.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Findings metadata is retained for the duration of your subscription plus a reasonable transition period after cancellation. Source code is never retained — see our Trust page for the scan lifecycle.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the data we hold, ask us to correct it, or request deletion of your account data. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active customers directly before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to hello@codevanta.cloud, or by post to Baneshwor, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <TagLabel>Legal</TagLabel>
          <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Codevanta collects, how it&apos;s used,
            and what you can do about it.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
