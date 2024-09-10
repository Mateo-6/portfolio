import React, { useEffect, useState } from "react";

// Type
import { TSection } from "./../type/global";

interface IProps {
  email: string;
  available: true;
  linkedIn: string;
  github: string;
  description: string;
  section: TSection;
  onToggleClick: (section: TSection) => void;
}

export function HeaderComponent(props: IProps) {
  const { linkedIn, github, section, onToggleClick } = props;
  const [clickedClipBoard, setClickedClipBoard] = useState<boolean>(false);

  useEffect(() => {
    let timer: any;
    if (clickedClipBoard) {
      timer = setTimeout(() => {
        setClickedClipBoard(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [clickedClipBoard]);

  const handleCopyClipboard = () => {
    setClickedClipBoard(true);
    navigator.clipboard.writeText("mateoarango05@gmail.com");
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl neonText">
          {"<Mateo Arango />"}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
          Full Stack software Engineer
        </h2>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <span
                data-testid="about"
                className={`group flex items-center py-3 cursor-pointer ${
                  section === "about" ? "active" : ""
                }`}
                onClick={() => onToggleClick("about")}
              >
                <span className="nav-line mr-4 h-px w-0 transition-all group-hover:w-10 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white group-focus-visible:text-white">
                  About
                </span>
              </span>
            </li>
            <li>
              <span
                data-testid="education"
                className={`group flex items-center py-3 cursor-pointer ${
                  section === "education" ? "active" : ""
                }`}
                onClick={() => onToggleClick("education")}
              >
                <span className="nav-line nav-indicator mr-4 h-px w-0 transition-all group-hover:w-10 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white group-focus-visible:text-white">
                  Education
                </span>
              </span>
            </li>
            <li>
              <span
                data-testid="experience"
                className={`group flex items-center py-3 cursor-pointer ${
                  section === "experience" ? "active" : ""
                }`}
                onClick={() => onToggleClick("experience")}
              >
                <span className="nav-line nav-indicator mr-4 h-px w-0 transition-all group-hover:w-10 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white group-focus-visible:text-white">
                  Experience
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <ul
        className="ml-1 mt-8 flex items-center bottom-0"
        aria-label="Social media"
      >
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-white"
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-white"
            href={linkedIn}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>
        <li
          className="mr-5 text-xs shrink-0 cursor-pointer"
          onClick={handleCopyClipboard}
        >
          <span className="sr-only">Email</span>
          {!clickedClipBoard ? (
            <svg
              fill="#ffff"
              height="30px"
              width="30px"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              stroke="#ffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z"></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          ) : (
            <svg
              fill="#fff"
              height="30px"
              width="30px"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M24,16c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S28.4,16,24,16z M27.7,22.7l-4,4C23.5,26.9,23.3,27,23,27s-0.5-0.1-0.7-0.3 l-2-2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.3,1.3l3.3-3.3c0.4-0.4,1-0.4,1.4,0S28.1,22.3,27.7,22.7z"></path>{" "}
                <g>
                  {" "}
                  <path d="M25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4z"></path>{" "}
                  <path d="M23.8,14c0.1,0,0.1,0,0.2,0c2.3,0,4.3,0.8,6,2V9.9L23.8,14z"></path>{" "}
                  <path d="M15.4,18.8L2,9.9V23c0,2.8,2.2,5,5,5h7.8c-0.5-1.2-0.8-2.6-0.8-4C14,22.1,14.5,20.3,15.4,18.8 C15.5,18.8,15.4,18.8,15.4,18.8z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          )}
        </li>
      </ul>
    </header>
  );
}
