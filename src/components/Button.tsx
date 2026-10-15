import Link from "next/link";

type Variant = "primary" | "outline" | "ghost" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[var(--primary-dark)]",
  outline:
    "border border-[var(--border-strong)] text-[var(--fg)] hover:border-[var(--primary-dark)] hover:text-[var(--primary-dark)]",
  ghost: "text-[var(--fg-muted)] hover:text-[var(--fg)]",
  dark: "bg-[var(--ink)] text-[var(--on-dark)] hover:bg-[var(--ink-alt)]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
