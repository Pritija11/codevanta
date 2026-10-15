"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMessageSquare,
} from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formRef.current?.reset();
    setSubmitted(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" icon={IconUser}>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
          <Field label="Work email" htmlFor="email" icon={IconMail}>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Phone (optional)" htmlFor="phone" icon={IconPhone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+977 98..."
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
          <label htmlFor="repo-host" className="flex flex-col gap-2">
            <span className="text-sm text-[var(--fg-muted)]">
              Where&apos;s your code hosted?
            </span>
            <select
              id="repo-host"
              name="repo-host"
              defaultValue=""
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--fg)] outline-none focus:border-[var(--primary)]"
            >
              <option value="" disabled>
                Select a host
              </option>
              <option>GitHub</option>
              <option>GitLab</option>
              <option>Bitbucket</option>
              <option>Azure DevOps</option>
              <option>Self-hosted</option>
            </select>
          </label>
        </div>

        <Field
          label="What are you trying to catch?"
          htmlFor="message"
          icon={IconMessageSquare}
        >
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A past incident, a customer security questionnaire, a new compliance requirement — whatever's driving this."
            className="w-full resize-none rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-dark)]"
        >
          Scan your repo free
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          submitted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--success)] shadow-lg shadow-black/10">
          Message sent — we&apos;ll follow up within a business day.
        </span>
      </div>
    </>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm text-[var(--fg-muted)]">{label}</span>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[var(--fg-faint)]" />
        {children}
      </div>
    </label>
  );
}
