import Link from "next/link";
import SiteLogo from "@/components/auth/site-logo";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: March 20, 2026</p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-foreground/80">
          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using Jobly, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use
              our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              2. Use of Service
            </h2>
            <p>
              You must be at least 18 years old to use this service. You are
              responsible for maintaining the confidentiality of your account
              and password.
            </p>
            <p>
              Candidates can search and apply for jobs. Companies can post job
              listings and manage applications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              3. User Conduct
            </h2>
            <p>
              You agree not to use Jobly for any unlawful purpose or in any way
              that interrupts, damages, or impairs the service. You are
              responsible for all content you upload to the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              4. Fees and Payments
            </h2>
            <p>
              Certain features for companies are subject to fees. By selecting a
              paid plan, you agree to pay the fees associated with that plan.
              All fees are non-refundable except as required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              5. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your account and
              access to the services at our sole discretion, without notice, for
              conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              Jobly shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use the service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
