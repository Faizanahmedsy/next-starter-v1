import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        logo
        <div className="flex flex-1 justify-center max-sm:hidden">
          {["home", "about", "contact"].map((link) => (
            <div key={link}>{link}</div>
          ))}
        </div>
      </nav>
      <nav>search</nav>
    </header>
  );
}
{
  /* <a key={link} href={`/${link.toLowerCase().replace(/\s/g, "-")}`}>
            {link}
          </a> */
}
