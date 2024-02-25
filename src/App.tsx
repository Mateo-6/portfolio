import React from "react";

// Components
import { HeaderComponent } from "./components/header";

//Data
import dataJson from "./data/cv.json";

// Type
import { AboutData, Data } from "../type/global";

function App() {
  const data = dataJson as unknown as Data;
  const { about }: { about: AboutData } = data;

  return (
    <div className="mx-auto h-screen max-w-screen-xl px-6 py-12 font-mono md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 h-full">
        <HeaderComponent github={about.github} linkedIn={about.linkendIn} />
      </div>
    </div>
  );
}

export default App;
