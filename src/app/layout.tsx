import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: "Risk Radar",
  description: "Sophisticated vulnerabilities detection and alerting software",
};

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:invert-colors" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
