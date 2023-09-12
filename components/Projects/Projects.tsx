"use client";
import { motion } from "framer-motion";
import projects, { currentProject, smallProjects } from "@/constants/projects";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectLine from "@/components/Projects/ProjectLine";
import CurrentProjectCard from "@/components/Projects/CurrentProjectCard";
import { container, item } from "@/constants/motion";
import PageHeading from "../PageHeading";

function Projects() {
  return (
    <div className="prose mb-12">
      <PageHeading>Currently Working On</PageHeading>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate="visible"
        className="not-prose"
      >
        <CurrentProjectCard key="current-project" project={currentProject} />
      </motion.div>

      <PageHeading>Main Projects</PageHeading>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate="visible"
        className="not-prose grid md:grid-cols-2 grid-cols-1 gap-6"
      >
        {projects.map((project) => (
          <motion.div variants={item} key={project.id}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <PageHeading>Small Projects</PageHeading>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="not-prose flex flex-col gap-3 justify-between h-max"
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

export default Projects;
