"use client";

import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col justify-center py-8 px-6">
      <Hero />
      <Divider orientation="horizontal" className="mt-4"/>
      <TechStack title="Languages" data={["JavaScript"]} />
      <TechStack
        title="Frontend"
        data={["React", "Bootstrap", "TailwindCSS"]}
      />
      <TechStack title="Backend" data={["Node", "Express", "Next.js"]} />
      <Divider orientation="horizontal" className="mt-4"/>
    </section>
  );
}
