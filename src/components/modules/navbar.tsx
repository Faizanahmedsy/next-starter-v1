"use client";
import { SITE_CONFIG } from "@/lib/constants/site-config";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import { Earth } from "lucide-react";

export default function NavbarSection() {
  return (
    <>
      <nav className="flex items-center justify-between  md:px-32 px-8  fixed top-0 right-0 left-0 text-black dark:bg-black bg-transparent backdrop-blur-3xl z-50">
        <div className="flex justify-between items-center gap-2 font-bold text-brand uppercase">
          <Earth size={45} />
          <div className="flex flex-col text-s">
            <div>{SITE_CONFIG.brandName.split(" ")[0]}</div>
            <div>{SITE_CONFIG.brandName.split(" ")[1]}</div>{" "}
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <DesktopNav />
          </div>
        </div>

        <div className="block md:!hidden">
          <MobileNav />
        </div>
      </nav>
    </>
  );
}
