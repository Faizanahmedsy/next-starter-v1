import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={cn(" md:py-10 md:px-32 px-4 py-5", className)}>
      {children}
    </section>
  );
}
