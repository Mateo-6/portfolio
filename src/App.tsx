import React, { useState } from "react";

// Section
import { HeaderComponent } from "./section/header";
import { AboutSection } from "./section/main/about";
import { EducationSection } from "./section/main/education";
import { ExperienceSection } from "./section/main/exprecience";

//Data
import dataJson from "./data/cv.json";

// Type
import { IAboutData, IData, IEducationData, TSection } from "../type/global";

function App() {
  const data = dataJson as unknown as IData;
  const { about }: { about: IAboutData } = data;
  const { education }: { education: IEducationData[] } = data;

  const [section, setSection] = useState<TSection>("about");

  const onToggleClick = (section: TSection) => {
    setSection(section);
  };

  const buildMainContent = () => {
    switch (section) {
      case "about":
        return (
          <AboutSection description={about.description} section={section} />
        );
      case "education":
        return <EducationSection education={education} />;
      case "experience":
        return <ExperienceSection />;
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-mono md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 h-full">
        <HeaderComponent
          github={about.github}
          linkedIn={about.linkendIn}
          description={about.description}
          section={section}
          onToggleClick={onToggleClick}
        />
        <main className="pt-24 lg:w-1/2 lg:py-24">{buildMainContent()}</main>
      </div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 text-center backdrop-blur bg-slate-100/75">
        <span className="text-sm text-slate-500 sm:text-center">
          Build with{" "}
          <a
            className="font-bold text-slate-700"
            href="https://react.com/"
            target="_blank"
          >
            React(TS)
          </a>
          {" "}&{" "}
          <a
            className="font-bold text-slate-700"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind
          </a>
          . Coded in{" "}
          <a
            className="font-bold text-slate-700"
            href="https://code.visualstudio.com/"
            target="_blank"
          >
            Visual Studio Code
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
