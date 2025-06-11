import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Drawer from "@/components/Drawer";
import GlobeIcon from "../icons/GlobeIcon";
import GithubIcon from "../icons/GithubIcon";
import ProjectIcon from "../icons/ProjectIcon";

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Drawer project={project} />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          isHovered && "hover:bg-secondary/5 hover:-translate-y-2"
        } p-4 ring-1 flex flex-col ring-base-content/50 text-base-content/60 transition-all duration-150 ease-in-out aspect-square`}
      >
        <div className="flex items-center justify-between">
          <ProjectIcon />

          <div className="flex items-center gap-1.5">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="hover:text-white cursor-pointer transition-colors ease-in-out"
              >
                <GithubIcon />
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="hover:text-white cursor-pointer transition-colors ease-in-out"
              >
                <GlobeIcon />
              </Link>
            )}
          </div>
        </div>
        <div className="flex-1 mt-4">
          <h2 className="text-base-content font-medium">{project.title}</h2>
          <p className="line-clamp-3">{project.description}</p>
        </div>

        <motion.label
          whileHover={{ paddingLeft: 2 }}
          whileTap={{ scale: 0.9 }}
          className="link w-max"
          htmlFor={project.id}
          onClick={() => setIsHovered(false)}
        >
          Details
        </motion.label>

        <div className="flex flex-wrap items-center mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="text-accent text-base mr-2.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
