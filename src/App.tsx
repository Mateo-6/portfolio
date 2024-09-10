import React, { useState, useEffect } from "react";

// Section
import { HeaderComponent } from "./section/header";
import { AboutSection } from "./section/main/about";
import { EducationSection } from "./section/main/education";
import { ExperienceSection } from "./section/main/exprecience";

//Data
import dataJson from "./data/cv.json";

// Type
import {
  IAboutData,
  IData,
  IEducationData,
  IExperienceData,
  TSection,
} from "./type/global";

function App() {
  const data = dataJson as unknown as IData;
  const { about }: { about: IAboutData } = data;
  const { education }: { education: IEducationData[] } = data;
  const { experience }: { experience: IExperienceData[] } = data;

  const [section, setSection] = useState<TSection>("about");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const onToggleClick = (section: TSection) => {
    setSection(section);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const buildMainContent = () => {
    if (windowWidth <= 1024) {
      return (
        <>
          <AboutSection description={about.description} section={section} />
          <EducationSection education={education} />
          <ExperienceSection experience={experience} />
        </>
      );
    } else {
      switch (section) {
        case "about":
          return (
            <AboutSection description={about.description} section={section} />
          );
        case "education":
          return <EducationSection education={education} />;
        case "experience":
          return <ExperienceSection experience={experience} />;
      }
    }
  };

  return (
    <>
      <div
        id="mainContent"
        className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-mono md:px-12 md:py-20 lg:px-24 lg:py-0 dark:text-white`}
      >
        <div className="">
          <div className="lg:flex lg:justify-between lg:gap-4 h-full">
            <HeaderComponent
              email={about.email}
              available={about.available}
              github={about.github}
              linkedIn={about.linkendIn}
              description={about.description}
              section={section}
              onToggleClick={onToggleClick}
            />
            <main className="pt-24 lg:w-1/2 lg:py-24">
              {buildMainContent()}
            </main>
          </div>
          <footer className="fixed bottom-0 left-0 z-20 w-full p-4 text-center backdrop-blur">
            <span className="text-sm dark:text-white sm:text-center">
              <strong>Built with</strong>{" "}
              <a
                className="text-neutral-300"
                href="https://react.com/"
                target="_blank"
              >
                ReactJS(TS)
              </a>{" "}
              <strong>&</strong>{" "}
              <a
                className="text-neutral-300"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwind
              </a>
              <strong>. Coded in</strong>{" "}
              <a
                className="text-neutral-300"
                href="https://code.visualstudio.com/"
                target="_blank"
              >
                Visual Studio Code
              </a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
