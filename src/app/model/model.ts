export interface Links {
  name:string;
  url:string;
  href:string;
}

export interface Tabs {
  name:string;
  url:string;
}

export interface Filter {
  name:string;
  text:string;
  value:string;
  checked: boolean,
  obj: {};
}
export interface Skill {
  text: string;
  image: string
}

export interface WorkExp {
  position: string;
  company: string;
  time: string;
  skills: string[];
  work: string[];
}

export interface Card {
  image: string;
  title: string;
  text: string;
  link: string;
  view: string;
}
export interface ProList {
  image: string;
  text: string;
  type: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface EduData {
  title: string;
  date: string;
  school: string;
  marks: string;
  subjects: string;
}

