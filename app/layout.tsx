import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/theme-provider/main";

import NavBarLg from "@/components/navbar/large/main";
import NavBarSm from "@/components/navbar/small/main";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pomodoro",
  description:
    "A simple and effective task manager, to organize your pomodoros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-row max-w-[1440px] h-full mx-auto">
            <NavBarLg />
            <NavBarSm />
            <main className="px-12 py-8 w-full h-full">
              <section className="h-full px-7 py-4 shadow dark:shadow-primary/50 rounded-lg">
                {children}
              </section>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
