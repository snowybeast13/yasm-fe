export interface Response {
  persons: Employee[];
}

export interface Person {
  type: string;
  id: string;
  name: string;
  employeeId: string;
  jobTitle: string;
  company: string;
  department: string;
  education?: any;
  mail: string;
  mobilePhone?: any;
  seniority: string;
  seniorityEnum: string;
  experienceSinceYear?: any;
  onsiteRatio?: any;
  picture: string;
  inactive: boolean;
  suggestion: boolean;
  synonyms: any[];
  location?: any;
  geolocation?: any;
  description?: any;
}

export interface Timeframe {
  startdate: string;
  enddate: string;
}

export interface Geolocation {
  longitude?: any;
  latitude?: any;
}

export interface Project2 {
  type: string;
  id: string;
  name: string;
  external: boolean;
  suggestion: boolean;
  synonyms: any[];
  location?: any;
  geolocation: Geolocation;
  description: string;
}

export interface Geolocation2 {
  longitude?: any;
  latitude?: any;
}

export interface Organization {
  type: string;
  id: string;
  name: string;
  partner: boolean;
  customer: boolean;
  picture: string;
  suggestion: boolean;
  synonyms: any[];
  location: string;
  geolocation: Geolocation2;
  description?: any;
}

export interface Industry {
  type: string;
  id: string;
  name: string;
  suggestion: boolean;
  synonyms: any[];
}

export interface Person2 {
  type: string;
  id: string;
  name: string;
  employeeId: string;
  jobTitle: string;
  company: string;
  department: string;
  education?: any;
  mail: string;
  mobilePhone: string;
  seniority: string;
  seniorityEnum: string;
  experienceSinceYear?: any;
  onsiteRatio?: any;
  picture: string;
  inactive: boolean;
  suggestion: boolean;
  synonyms: any[];
  location?: any;
  geolocation?: any;
  description?: any;
}

export interface Group {
  type: string;
  id: string;
  name: string;
  invest: boolean;
  kindgiver: boolean;
  suggestion: boolean;
  linkable: boolean;
  synonyms: string[];
  description: string;
}

export interface Skill {
  type: string;
  id: string;
  name: string;
  invest: boolean;
  kindgiver: boolean;
  suggestion: boolean;
  linkable: boolean;
  synonyms: string[];
  description: string;
}

export interface SkillGroup {
  group: Group;
  skills: Skill[];
}

export interface Timeframe2 {
  startdate: string;
  enddate: string;
}

export interface ProjectDetails {
  project: Project2;
  organization: Organization;
  industries: Industry[];
  persons: Person2[];
  skillGroups: SkillGroup[];
  timeframe: Timeframe2;
}

export interface Skill3 {
  type: string;
  id: string;
  name: string;
  invest: boolean;
  kindgiver: boolean;
  suggestion: boolean;
  linkable: boolean;
  synonyms: string[];
  description: string;
}

export interface Level {
  level: number;
}

export interface Skill2 {
  skill: Skill3;
  level: Level;
}

export interface Experience {
  skill: Skill2;
  confirmedBy: any[];
}

export interface Project {
  type: string;
  id: string;
  timeframe: Timeframe;
  projectDetails: ProjectDetails;
  descriptionOverwrite?: any;
  personalDescription: string;
  experiences: Experience[];
}

export interface Geolocation3 {
  longitude?: any;
  latitude?: any;
}

export interface Office {
  type: string;
  id: string;
  name: string;
  synonyms: string[];
  location?: any;
  geolocation: Geolocation3;
}

export interface Availability2 {
  type: string;
  id: string;
  name: string;
  workHours: number;
  plannedHours: number;
  descriptions: any[];
  startdate: string;
  enddate: string;
}

export interface Availability {
  availability: Availability2;
  percent: number;
}

export interface Employee {
  score: number;
  person: Person;
  projects: Project[];
  industries?: any;
  experiences: any[];
  interests: any[];
  certifications: any[];
  languages: any[];
  office: Office;
  availabilities: Availability[];
  skillGroups?: any;
}
