import Link from "next/link";
import React from "react";
import { ModeToggle } from "../shared/theme-toggle";

type Props = {};

export default function DesktopNav({}: Props) {
  return (
    <>
      <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
        <nav className="flex w-full justify-between screen-max-width">
          <div className="flex gap-6 max-sm:hidden justify-center items-center mx-10">
            {["Home", "Dashboard", "Contact", "Login", "Signup"].map((link) => (
              <Link
                key={link}
                href={`/${
                  link == "Home" ? "" : link.toLowerCase().replace(/\s/g, "-")
                }`}
              >
                {link}
              </Link>
            ))}
          </div>
          <nav>
            <ModeToggle />
          </nav>
        </nav>
      </header>
    </>
  );
}
