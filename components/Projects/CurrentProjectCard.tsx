import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Drawer from "@/components/Drawer";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import FolderIcon from "../icons/FolderIcon";

function CurrentProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Drawer project={project} />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          isHovered && "hover:bg-base-200/80 hover:-translate-y-2"
        } p-4 ring-1 flex flex-col ring-primary bg-base-200/40 text-base-content transition-all duration-150 ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <FolderIcon />
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="hover:text-accent cursor-pointer"
            >
              <ExternalLinkIcon />
            </Link>
          )}
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

export default CurrentProjectCard;
