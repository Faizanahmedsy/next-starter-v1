import React from "react";
import Section from "../shared/section";
import H2 from "../shared/H2";
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
