import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TagLabel } from "@/components/TagLabel";
import { Reveal } from "@/components/Reveal";
import { TerminalCTA } from "@/components/TerminalCTA";
import {
  IconGitBranch,
  IconTerminal,
  IconLayers,
  IconMessageSquare,
  IconServer,
  IconPuzzle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Codevanta to the version control, CI/CD, IDE, and notification tools your engineering team already uses.",
  alternates: {
    canonical: "/integrations",
  },
};

const categories = [
  {
    icon: IconGitBranch,
    name: "Version control",
    items: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps"],
  },
  {
    icon: IconTerminal,
    name: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "CircleCI", "Jenkins"],
  },
  {
    icon: IconPuzzle,
    name: "IDE",
    items: ["VS Code", "JetBrains IDEs", "Neovim", "Sublime Text"],
  },
  {
    icon: IconMessageSquare,
    name: "Notifications",
    items: ["Slack", "Microsoft Teams", "Email digests", "Webhooks"],
  },
  {
    icon: IconLayers,
    name: "Issue tracking",
    items: ["Jira", "Linear", "GitHub Issues", "Asana"],
  },
  {
    icon: IconServer,
    name: "Infrastructure",
    items: ["Terraform", "CloudFormation", "Kubernetes manifests", "Docker"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <TagLabel>Integrations</TagLabel>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Fits into the workflow you already have.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Codevanta doesn&apos;t ask you to adopt a new workflow —
              findings show up in your version control, your CI pipeline,
              your IDE, and your team chat, wherever your engineers already
              look.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-tint)]">
                  <c.icon className="h-5 w-5 text-[var(--ink)]" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-[var(--ink)]">
                  {c.name}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-sm text-[var(--fg-muted)]"
                    >
                      {item}
                      <span className="pill pill-neutral">Supported</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <TerminalCTA
        title="Don't see your stack listed?"
        description="We ship new integrations most sprints — tell us what you're running and we'll let you know how soon it's supported."
        buttonLabel="Request an integration"
        buttonHref="/contact"
      />
    </>
  );
}
