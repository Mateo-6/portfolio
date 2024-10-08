import React from "react";

// Type
import { TSection } from "./../../type/global";

interface IProps {
  description: string;
  section: TSection;
}

export function AboutSection(props: IProps) {
  const { description, section } = props;

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-lg font-bold uppercase tracking-widest text-white lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-neutral-300">{description}</p>
      </div>
    </section>
  );
}
