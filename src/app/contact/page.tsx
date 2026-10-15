import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconActivity,
  IconUsers,
  IconClipboard,
} from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Codevanta team about scanning your repos for security issues across SAST, dependencies, and secrets.",
  alternates: {
    canonical: "/contact",
  },
};

const nextSteps = [
  {
    icon: IconMail,
    title: "We reply within a business day",
    body: "A founder or engineer reads every message personally — no ticket queue yet.",
  },
  {
    icon: IconActivity,
    title: "We run a baseline scan together",
    body: "A short call to connect a repo and walk through the first findings live.",
  },
  {
    icon: IconUsers,
    title: "You're onboarded hands-on",
    body: "Early customers get direct access to the team building the product, not a generic playbook.",
  },
];

const faqs = [
  {
    q: "What happens after I submit this form?",
    a: "Someone on the team reviews it personally and replies directly, usually within a business day — there's no automated sales sequence.",
  },
  {
    q: "Can I connect a repo before talking to anyone?",
    a: "Yes. The GitHub and GitLab apps are self-serve — if you'd rather just see your findings first, mention that and we'll send the install link directly.",
  },
  {
    q: "Is there a free trial for private repos?",
    a: "Yes, the Team plan includes a free trial so you can see real findings against your private repos before paying anything.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Contact</TagLabel>
            <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Let&apos;s get your repo scanned.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Tell us where your code lives and what you&apos;re trying to
              catch
              — a past incident, a security questionnaire, a new compliance
              requirement — and we&apos;ll take it from there.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                    Reach us directly
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <IconMail className="h-4 w-4 flex-none text-[var(--primary-dark)]" />
                      <a
                        href="mailto:hello@codevanta.cloud"
                        className="text-sm text-[var(--ink)] hover:text-[var(--primary-dark)]"
                      >
                        hello@codevanta.cloud
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconPhone className="h-4 w-4 flex-none text-[var(--primary-dark)]" />
                      <a
                        href="tel:+9779817733221"
                        className="text-sm text-[var(--ink)] hover:text-[var(--primary-dark)]"
                      >
                        +977 981-7733221
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconMapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-dark)]" />
                      <span className="text-sm text-[var(--ink)]">
                        Baneshwor, Kathmandu 44600
                        <br />
                        Nepal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <div className="flex items-center gap-2.5">
                    <IconClipboard className="h-4 w-4 text-[var(--primary-dark)]" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      What happens next
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-5">
                    {nextSteps.map((s) => (
                      <div key={s.title} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                          <s.icon className="h-4 w-4 text-[var(--primary-dark)]" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[var(--ink)]">
                            {s.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-5 text-[var(--fg-muted)]">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Before you write in</TagLabel>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Quick answers
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
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
    </>
  );
}
