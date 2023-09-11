import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Drawer from "@/components/Drawer";
import GlobeIcon from "../icons/GlobeIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import FolderIcon from "../icons/FolderIcon";

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
        } p-4 ring-1 flex flex-col ring-base-content  transition-all duration-150 ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <FolderIcon />

          <div className="flex items-center gap-1.5">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="hover:text-accent cursor-pointer"
              >
                <ExternalLinkIcon />
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="hover:text-accent cursor-pointer"
              >
                <GlobeIcon />
              </Link>
            )}
          </div>
        </div>
        <div className="flex-1 mt-4">
          <h2>{project.title}</h2>
          <p className="line-clamp-3">{project.description}</p>
        </div>

        <motion.label
          whileHover={{ textDecoration: "underline", paddingLeft: 2 }}
          whileTap={{ scale: 0.9 }}
          className="text-secondary cursor-pointer w-max"
          htmlFor={project.id}
          onClick={() => setIsHovered(false)}
        >
          Details
        </motion.label>

        <div className="flex flex-wrap gap-4 items-center mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="text-accent text-base">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
