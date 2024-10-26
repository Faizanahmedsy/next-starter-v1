import { SITE_CONFIG } from "@/lib/constants/site-config";
import { Section, BackgroundGrid, H1, TextCode, CopyBtn } from "@/components";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full h-[calc(100dvh-90px)] m-0 relative overflow-hidden">
      <div className="h-full w-full flex items-center justify-center flex-col gap-6 px-6">
        <H1 className="text-center text-4xl md:text-6xl lg:text-6xl font-[700] leading-tight text-zinc-800 dark:text-zinc-100 z-10 transition duration-300 ease-in-out font-poppins">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-slate-600 to-cyan-700 bg-clip-text text-transparent">
            Faizan&apos;s
          </span>{" "}
          <br /> Full Stack Next JS Template
        </H1>

        <div className="flex items-center gap-4">
          <TextCode className="text-lg bg-zinc-200 dark:bg-zinc-800 p-3 rounded-lg shadow-md">
            {SITE_CONFIG.cloneLink}
          </TextCode>

          <CopyBtn />
        </div>
      </div>
    </Section>
  );
}
