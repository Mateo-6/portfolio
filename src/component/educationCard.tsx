import React from "react";

// Type
import { IEducationData } from "./../type/global";

interface IProps {
  education: IEducationData;
}

export function EducationCard(props: IProps) {
  const { education } = props;

  return (
    <div className="flex flex-col rounded-lg md:flex-row md:max-w-xl">
      <div className="flex-auto w-40 pt-4 font-bold">
        <p>
          {education.from} - {education.to}
        </p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal flex-auto w-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 ">
          {education.bachelor}
        </h5>
        <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
          {education.description}
        </p>
      </div>
    </div>
  );
}
