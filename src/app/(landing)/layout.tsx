import { Inter as FontSans } from "next/font/google";
import "./../custom.css";
import "./../globals.css";

import { FooterSection, NavbarSection } from "@/components";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarSection />
      <main className="mt-[80px] overflow-hidden bg-gradient-to-tl from-slate-300 via-slate-50 to-slate-300">
        {children}
      </main>
      <FooterSection />
    </>
  );
}
