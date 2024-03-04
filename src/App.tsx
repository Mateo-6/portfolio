import React, { useState } from "react";

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
  const joke = Boolean(localStorage.getItem("joke")) || false;

  const [section, setSection] = useState<TSection>("about");

  const onToggleClick = (section: TSection) => {
    setSection(section);
  };

  function showSpanJoke() {
    localStorage.setItem("joke", "true");

    const delayedElement = document.getElementById(
      "delayedElement"
    ) as HTMLElement;
    delayedElement.classList.remove("hidden");
  }

  function displayMainContent() {
    const mainContent = document.getElementById("mainContent") as HTMLElement;
    mainContent.classList.remove("hidden");

    const joke = document.getElementById("joke") as HTMLElement;
    joke.classList.add("hidden");
  }

  if (!joke) {
    setTimeout(showSpanJoke, 2000);
    setTimeout(displayMainContent, 4000);
  }

  const buildMainContent = () => {
    if (window.innerWidth <= 1024) {
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
          return <AboutSection description={about.description} section={section} />;
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
        className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-mono md:px-12 md:py-20 lg:px-24 lg:py-0 ${(!joke) ? "hidden animate-fadeIn" : ""}`}
      >
        <div className="">
          <div className="lg:flex lg:justify-between lg:gap-4 h-full">
            <HeaderComponent
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
          <footer className="fixed bottom-0 left-0 z-20 w-full p-4 text-center backdrop-blur bg-slate-100/75">
            <span className="text-sm text-slate-500 sm:text-center">
              Built with{" "}
              <a
                className="font-bold text-slate-700"
                href="https://react.com/"
                target="_blank"
              >
                React(TS)
              </a>{" "}
              &{" "}
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
      </div>
      {!joke && (
        <div
          id="joke"
          className="flex flex-col justify-center items-center min-h-screen"
        >
          <span className="font-bold sm:text-5xl lg:text-6xl">
            404 PAGE NOT FOUND
          </span>
          <span
            id="delayedElement"
            className="hidden animate-fadeIn lg:text-2xl"
          >
            Wait I'am Joking :D
          </span>
        </div>
      )}
    </>
  );
}

export default App;
