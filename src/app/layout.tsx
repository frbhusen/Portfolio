import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hussein Rajab's Portfolio",
  description: "Professional portfolio showcasing projects, skills, and experience in web development",
  keywords: ["portfolio", "web developer", "full stack", "react", "next.js", "javascript", "typescript", "node.js", "css", "html", "projects", "skills", "experience"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-[var(--bg-base)] text-[var(--fg-base)] transition-colors duration-300">
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
