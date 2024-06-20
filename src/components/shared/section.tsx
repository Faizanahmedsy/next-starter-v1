import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return <div className={cn("", className)}>{children}</div>;
}
