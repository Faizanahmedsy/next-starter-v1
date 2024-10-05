import { SITE_CONFIG } from "@/lib/constants/site-config";
import { Section, BackgroundGrid, H1, TextCode, CopyBtn } from "@/components";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full h-[calc(100dvh-90px)] m-0 ">
      <div className="h-full w-full flex-center flex-col gap-4">
        <H1 className="text-center z-10 darK:text-zinc-300">
          Welcome to{" "}
          <span className="dark:text-blue-300 text-blue-500">
            Faizan&apos;s
          </span>{" "}
          <br /> Full Stack Next JS Template
        </H1>
        <div className="flex gap-4">
          <TextCode>{SITE_CONFIG.cloneLink}</TextCode>

          <CopyBtn />
        </div>
      </div>
    </Section>
  );
}
