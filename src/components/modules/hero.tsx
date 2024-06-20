import React from "react";
import Section from "../shared/section";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full nav-height">
      <div className="h-5/6 w-full flex-center"></div>
    </Section>
  );
}
