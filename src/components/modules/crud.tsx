import React from "react";
import { Section, H2 } from "@/components";
import Todos from "./todos";

type Props = {};

export default function CrudSection({}: Props) {
  return (
    <Section>
      <div className="border border-zinc-700 p-10 rounded-2xl">
        <H2>TODOS</H2>
        <Todos />
      </div>
    </Section>
  );
}
