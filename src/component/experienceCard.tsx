import React from "react";

// Component
import { TecnologiesCard } from "./technologiesLabel";

// Type
import { IExperienceData } from "../../type/global";

interface IProps {
  experience: IExperienceData;
}

export function ExperienceCard(props: IProps) {
  const { experience } = props;
  const { projects } = experience;
  return (
    <div className="flex flex-col rounded-lg md:flex-row md:max-w-xl shadow my-6 px-2">
      <div className="flex-auto w-full pt-4 font-bold">
        <p>
          {experience.from} - {experience.to}
        </p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal flex-auto w-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
          {experience.company}
        </h5>
        {projects.map((e, i) => (
          <div key={i} className="my-6">
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
                <TecnologiesCard technologie={technologie} key={i}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
