import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://codevanta.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Codevanta — Code Security Scanning for Every Pull Request",
    template: "%s · Codevanta",
  },
  description:
    "Codevanta is an early-stage code security startup based in Kathmandu, Nepal, running static analysis, dependency, and secrets scanning on every pull request.",
  keywords: [
    "Codevanta",
    "code security startup",
    "static analysis",
    "SAST",
    "dependency scanning",
    "secrets detection",
    "application security",
    "developer security tools",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codevanta — Code Security Scanning for Every Pull Request",
    description:
      "Static analysis, dependency, and secrets scanning that runs on every pull request — with fixes suggested directly on the diff.",
    siteName: "Codevanta",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codevanta — Code Security Scanning for Every Pull Request",
    description:
      "Static analysis, dependency, and secrets scanning that runs on every pull request — with fixes suggested directly on the diff.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Codevanta",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Codevanta is an early-stage code security startup based in Kathmandu, Nepal, running static analysis, dependency, and secrets scanning on every pull request.",
  email: "hello@codevanta.cloud",
  telephone: "+977-981-7733221",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baneshwor",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
