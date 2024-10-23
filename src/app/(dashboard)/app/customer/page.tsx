import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="grid place-items-center min-h-screen">
      <Link className={cn(buttonVariants())} href={"/app/customer/create"}>
        Create Customer
      </Link>
    </div>
  );
}
