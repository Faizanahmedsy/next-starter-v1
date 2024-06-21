import React from "react";
import Section from "../shared/section";
import BackgroundDots from "../custom/background-dots";
import BackgroundGrid from "../custom/background-grid";
import H1 from "../shared/H1";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full nav-height">
      {/* <BackgroundDots dotColor={"#94a3b8"} /> */}
      <BackgroundGrid color={"#1e293b"} />
      <div className="h-5/6 w-full flex-center flex-col gap-4">
        <H1 className="text-center z-10 text-zinc-300">
          Welcome to <span className="text-blue-300">Faizan&apos;s</span> <br />{" "}
          Full Stack Next JS Template
        </H1>
        <div className="bg-zinc-700 p-2 rounded-2xl text-sm">
          git clone https://github.com/Faizanahmedsy/next-starter-v1.git
        </div>
      </div>
    </Section>
  );
}
