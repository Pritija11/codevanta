import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const outputLines = [
  { text: "$ codevanta scan", type: "cmd" },
  { text: "Scanning 214 files across 6 languages...", type: "ctx" },
  { text: "✓ No critical findings in auth/", type: "ok" },
  { text: "✗ 2 findings in api/handlers.py", type: "err" },
  { text: "Done in 8.2s — report posted to PR #482", type: "ctx" },
];

const lineColor: Record<string, string> = {
  cmd: "text-[var(--primary)]",
  ctx: "text-[#7e9089]",
  ok: "text-[#b9f3dd]",
  err: "text-[#ffb4bd]",
};

export function TerminalCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            {description}
          </p>
          <Button href={buttonHref} className="mt-8">
            {buttonLabel}
          </Button>
        </Reveal>

        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-[#7e9089]">
              zsh
            </span>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 font-[family-name:var(--font-mono)] text-[13px] leading-7">
            {outputLines.map((l) => (
              <span key={l.text} className={lineColor[l.type]}>
                {l.text}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
