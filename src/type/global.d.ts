type TSection = "about" | "education" | "experience";

export interface IData {
  about: IAboutData;
  education: IEducationData[];
  experience: IExperienceData[];
}

interface IAboutData {
  description: string;
  email: string;
  github: string;
  linkendIn: string;
}

interface IEducationData {
  from: string;
  to: string;
  bachelor: string;
  description: string;
}

interface IExperienceData {
  company: string;
  rol: string;
  from: string;
  to: string;
  projects: IProjects[];
}

interface IProjects {
  projectName: string;
  from: string;
  to: string;
  description: string;
  tasks: string[],
  technologies: string[];
}
