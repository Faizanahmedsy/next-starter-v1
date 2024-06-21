import BackgroundGrid from "../custom/background-grid";
import H1 from "../shared/H1";
import { TextCode } from "../shared/TextCode";
import Section from "../shared/section";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full nav-height m-0">
      <BackgroundGrid color={"#1e293b"} />
      <div className="h-full w-full flex-center flex-col gap-4">
        <H1 className="text-center z-10 darK:text-zinc-300">
          Welcome to{" "}
          <span className="dark:text-blue-300 text-blue-500">
            Faizan&apos;s
          </span>{" "}
          <br /> Full Stack Next JS Template
        </H1>
        <TextCode>
          git clone https://github.com/Faizanahmedsy/next-starter-v1.git
        </TextCode>
      </div>
    </Section>
  );
}
