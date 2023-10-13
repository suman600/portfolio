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
