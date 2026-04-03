export type ResumeSkillGroup = {
  group: string;
  items: string[];
};

export type ResumeExperience = {
  title: string;
  bullets: string[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  location: string;
  note: string;
};

export type ResumeProject = {
  title: string;
  summary: string;
  stack: string[];
};

export type ResumeLanguage = {
  name: string;
  level: string;
};

export type ResumeData = {
  name: string;
  headline: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  summary: string[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  certificates: string[];
  achievements: string[];
  languages: ResumeLanguage[];
  interests: string[];
  references: string;
};
