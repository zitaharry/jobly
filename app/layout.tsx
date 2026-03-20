import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Geist } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/auth/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { dark } from "@clerk/themes";
import { cookies } from "next/headers";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jobly — Find jobs you actually want",
  description:
    "A friendly job marketplace for candidates and companies. Search, apply, and hire with confidence.",
  icons: {
    icon: "/convex.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "system";

  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, theme === "dark" && "dark")}
      style={
        theme === "light" || theme === "dark" ? { colorScheme: theme } : {}
      }
      suppressHydrationWarning
    >
      <body className={`${bricolage.variable} ${figtree.variable} antialiased`}>
        <ClerkProvider
          dynamic
          appearance={{
            baseTheme: theme === "dark" ? dark : undefined,
            cssLayerName: "clerk",
            elements: {
              userButtonPopoverCard: "dark:bg-background dark:border-border",
              userButtonPopoverActionButton: "dark:hover:bg-muted",
              userButtonPopoverActionButtonText: "dark:text-foreground",
              userButtonPopoverFooter: "hidden",
              avatarBox: "size-9",
            },
            variables: {
              colorPrimary: "var(--terracotta)",
              colorBackground: "var(--background)",
              colorForeground: "var(--foreground)",
              colorPrimaryForeground: "var(--primary-foreground)",
              colorMuted: "var(--muted)",
              colorMutedForeground: "var(--muted-foreground)",
              colorBorder: "var(--border)",
              colorInput: "var(--input)",
              colorInputForeground: "var(--foreground)",
              colorRing: "var(--ring)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-figtree), var(--font-sans), sans-serif",
            },
          }}
        >
          <ConvexClientProvider>
            {" "}
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
          <Toaster richColors closeButton position="bottom-right" />
        </ClerkProvider>
      </body>
    </html>
  );
}
