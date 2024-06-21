"use client";

import { cn } from "@/lib/utils";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="block md:!hidden">
        <MobileNav />
      </div>
    </>
  );
}
