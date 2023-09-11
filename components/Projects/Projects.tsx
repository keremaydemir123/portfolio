"use client";
import { motion } from "framer-motion";
import projects, { currentProject, smallProjects } from "@/constants/projects";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectLine from "@/components/Projects/ProjectLine";
import CurrentProjectCard from "@/components/Projects/CurrentProjectCard";
import { container, item } from "@/constants/motion";

function Projects() {
  return (
    <div className="prose mx-auto mb-8">
      <h1 className="text-primary flex gap-1.5 items-center">Projects</h1>
      <ProjectHeader className="mt-0">CurrentlyWorkingOn</ProjectHeader>

      <div className="not-prose">
        <CurrentProjectCard project={currentProject} />
      </div>

      <ProjectHeader>MainProjects</ProjectHeader>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="not-prose grid md:grid-cols-2 grid-cols-1 gap-6"
      >
        {projects.map((project) => (
          <motion.div variants={item} key={project.id}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <ProjectHeader>SmallProjects</ProjectHeader>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="not-prose flex flex-col gap-3 justify-between"
      >
        {smallProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectLine project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ProjectHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <pre className="bg-transparent text-lg p-0">
      <code className={`text-accent mt-8 ${className}`}>
        <span className="text-accent/60">{"<"}</span>
        {children} <span className="text-accent/60">{"/>"}</span>
      </code>
    </pre>
  );
}

export default Projects;
