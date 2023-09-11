import { Metadata } from "next";
import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects created by Kerem Aydemir.",
};

function ProjectsPage() {
  return <Projects />;
}

export default ProjectsPage;
