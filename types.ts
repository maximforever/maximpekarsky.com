export type PageType = "about" | "work" | "writing" | "projects";

export interface ProjectType {
  title: string;
  link: string;
  description: string;
  subtitle?: string;
  imageTitle?: string;
  stack?: string[];
}

