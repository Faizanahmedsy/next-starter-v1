import BackgroundGrid from "../custom/background-grid";
import H1 from "../shared/H1";
import { TextCode } from "../shared/TextCode";
import Section from "../shared/section";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full nav-height">
      <BackgroundGrid color={"#1e293b"} />
      <div className="h-full w-full flex-center flex-col gap-4">
        <H1 className="text-center z-10 text-zinc-300">
          Welcome to <span className="text-blue-300">Faizan&apos;s</span> <br />{" "}
          Full Stack Next JS Template
        </H1>
        <TextCode>
          git clone https://github.com/Faizanahmedsy/next-starter-v1.git
        </TextCode>
      </div>
    </Section>
  );
}
