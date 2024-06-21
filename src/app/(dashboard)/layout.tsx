import React from "react";
import "./../custom.css";
import "./../globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Providers } from "@/components";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: React.ReactNode;
};

export default function DashboardRootLayout({ children }: Props) {
  return (
    <div className={cn("", fontSans.variable)}>
      <Providers>{children}</Providers>
    </div>
  );
}
