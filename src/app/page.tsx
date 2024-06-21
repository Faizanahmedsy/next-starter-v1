import CrudSection from "@/components/modules/crud";
import HeroSection from "@/components/modules/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CrudSection />
    </>
  );
}
