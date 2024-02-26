import React from "react";

// Component
import { EducationCard } from "../../component/educationCard";

// Education
import { IEducationData } from "../../../type/global";

interface IProps {
  education: IEducationData[];
}

export function EducationSection(props: IProps) {
  const { education } = props;

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-100/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 lg:sr-only">
          Education
        </h2>
      </div>
      {education.map((e, i) => (
        <div key={i}>
          <EducationCard education={e} />
        </div>
      ))}
    </section>
  );
}
