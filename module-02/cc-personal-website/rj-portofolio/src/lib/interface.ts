import { IconType } from "react-icons";

export interface ISkill {
  name: string;
  icon: IconType;
}

export interface IProject {
  title: string;
  technologies: string[];
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  image: string;
}

export interface IExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ITestimony {
  name: string;
  role: string;
  message: string;
  image: string;
}
