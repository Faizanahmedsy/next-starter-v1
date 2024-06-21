"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavItems } from "./navbar-dropdown";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

export default function MobileNav({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left" className="!px-0">
            <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <div className="space-y-1">
                  <DashboardNav items={NavItems} setOpen={setOpen} />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}

export function DashboardNav({
  items,
  setOpen,
}: {
  items: { title: string; icon?: any; href: string; disabled?: boolean }[];
  setOpen?: (open: boolean) => void;
}) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[(item.icon as keyof typeof Icons) || "arrowRight"];

        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-200 hover:text-black dark:hover:text-black",
                  path === item.href
                    ? `bg-brand-primary dark:text-white text-white hover:bg-company dark:hover:bg-company hover:text-white dark:hover:text-white`
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
