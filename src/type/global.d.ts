type TSection = "about" | "education" | "experience";

export interface IData {
  about: IAboutData;
  education: IEducationData;
  experience: IExperienceData[];
}

interface IAboutData {
  description: string;
  email: string;
  github: string;
  linkendIn: string;
  available: true;
}

interface IEducationData {
  school: ISchool[];
  certificates: ICertificate[];
}

interface ICertificate {
  name: string;
  company: string;
  url: string;
  img: string;
}

interface ISchool {
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
  tasks: string[];
  technologies: string[];
}
