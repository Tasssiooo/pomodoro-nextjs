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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBarLg />
          <NavBarSm />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
