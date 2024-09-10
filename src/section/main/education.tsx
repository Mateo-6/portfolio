import React from "react";

// Component
import { EducationCard } from "../../component/educationCard";
import { CertificateCard } from "../../component/certificationCard";

// Education
import { IEducationData } from "./../../type/global";

interface IProps {
  education: IEducationData;
}

export function EducationSection(props: IProps) {
  const { education } = props;

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-lg font-bold uppercase tracking-widest text-white lg:sr-only">
          Education
        </h2>
      </div>
      {education.school.map((e, i) => (
        <div key={i}>
          <EducationCard school={e} />
        </div>
      ))}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Certificates
        </h2>
      </div>
      {education.certificates.map((e, i) => (
        <div key={i}>
          <CertificateCard certificate={e} />
        </div>
      ))}
    </section>
  );
}
