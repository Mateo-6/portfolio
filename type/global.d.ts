type TSection = "about" | "education" | "experience";

export interface IData {
  about: IAboutData;
  education: IEducationData[];
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
