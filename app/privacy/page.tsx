import Link from "next/link";
import SiteLogo from "@/components/auth/site-logo";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
          <SiteLogo />
          <Button asChild variant="ghost" size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <div className="space-y-2 mb-12">
          <h1 className="font-[family-name:var(--font-bricolage)] text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: March 20, 2026</p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-foreground/80">
          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              1. Introduction
            </h2>
            <p>
              Welcome to Jobly. We are committed to protecting your personal
              information and your right to privacy. If you have any questions
              or concerns about our policy, or our practices with regards to
              your personal information, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <p>
              We collect personal information that you voluntarily provide to us
              when registering at Jobly, expressing an interest in obtaining
              information about us or our products and services, when
              participating in activities on the platform or otherwise
              contacting us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal Data: Name, email address, job title, and resume
                details.
              </li>
              <li>Usage Data: Information about how you use our website.</li>
              <li>
                Organization Data: If you represent a company, we collect
                company details and billing information.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              3. How We Use Your Information
            </h2>
            <p>
              We use personal information collected via our website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              4. Data Protection
            </h2>
            <p>
              We aim to protect your personal information through a system of
              organizational and technical security measures. However, please
              also remember that we cannot guarantee that the internet itself is
              100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              5. Updates to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
