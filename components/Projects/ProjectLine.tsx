import Link from "next/link";
import React from "react";
import FolderIcon from "../icons/FolderIcon";
import GithubIcon from "../icons/GithubIcon";

function ProjectLine({ project }: { project: Project }) {
  return (
    <>
      <div className="p-4 text-base-content w-full h-max ring-1 flex flex-col ring-base-content/50 hover:bg-secondary/5 hover:translate-x-2 transition-all duration-150 ease-in-out">
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-between w-full items-start gap-4">
            <FolderIcon />
            <h2 className="flex-1 sm:text-base text-sm text-center !m-0">
              {project.title}
            </h2>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="hover:text-white text-base-content/60 cursor-pointer transition-colors ease-in-out"
              >
                <GithubIcon />
              </Link>
            )}
          </div>

          <div className="inline-flex flex-wrap items-center justify-center">
            {project.tags.map((tag) => (
              <span key={tag} className="text-accent sm:text-xs text-xs mx-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectLine;
