import React from "react";

// Type
import { ISchool } from "./../type/global";

interface IProps {
  school: ISchool;
}

export function EducationCard(props: IProps) {
  const { school } = props;

  return (
    <div className="flex flex-col rounded-lg md:flex-row md:max-w-xl shadow shadow-slate-900 mb-5 px-4">
      <div className="flex-auto w-40 pt-4">
        <p>
          {school.from} - {school.to}
        </p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal flex-auto w-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {school.bachelor}
        </h5>
        <p className="mb-3 font-normal dark:text-neutral-300">
          {school.description}
        </p>
      </div>
    </div>
  );
}
