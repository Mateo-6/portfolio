import React from "react";

// Component
import { TecnologiesCard } from "./technologiesLabel";

// Type
import { IExperienceData } from "./../type/global";

interface IProps {
  experience: IExperienceData;
}

export function ExperienceCard(props: IProps) {
  const { experience } = props;
  const { projects } = experience;
  return (
    <div className="flex flex-col rounded-lg md:flex-row md:max-w-xl shadow my-6 px-2">
      <div className="flex flex-col justify-between p-4 leading-normal flex-auto w-auto">
        <div className=" sticky top-11 lg:top-0 -mx-6 bg-slate-100/75 px-6 py-5 backdrop-blur">
          <h5 className="text-2xl font-bold tracking-tight text-slate-900">
            {experience.company}
          </h5>
          <p className="font-bold">
            {experience.from} - {experience.to}
          </p>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 mt-10">
          Responsibilities
        </h5>
        {projects.map((e, i) => (
          <div className="flex flex-row" key={i}>
            <div className="flex flex-col items-center mt-2">
              <div className="rounded-full h-2 w-2 bg-teal-800/10"></div>
              <div className="h-[90%] w-0.5 bg-teal-800/10 "></div>
              <div className="rounded-full h-2 w-2 bg-teal-800/10"></div>
            </div>
            <div className="mb-14 ml-10">
              <span className="mb-2 text-1xl font-bold tracking-tight text-slate-900 ">
                Project:{" "}
              </span>
              <span>{`${e.projectName} (${e.from}-${e.to})`}</span>
              <p className="my-4">{e.description}</p>
              <ul className="ml-6">
                {e.tasks.map((task, i) => (
                  <li className="mb-2" key={i}>
                    <span className="font-bold">{i + 1}. </span>
                    {task}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {e.technologies.map((technologie, i) => (
                  <TecnologiesCard technologie={technologie} key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
