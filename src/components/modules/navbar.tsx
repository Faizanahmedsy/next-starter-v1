"use client";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function NavbarSection() {
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
