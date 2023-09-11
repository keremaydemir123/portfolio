import Link from "next/link";
import React from "react";
import FolderIcon from "../icons/FolderIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

function ProjectLine({ project }: { project: Project }) {
  return (
    <>
      <div className="p-2 w-full h-max ring-1 flex flex-col ring-base-content hover:bg-secondary/5 hover:translate-x-2 transition-all duration-150 ease-in-out">
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
                className="hover:text-accent cursor-pointer"
              >
                <ExternalLinkIcon />
              </Link>
            )}
          </div>

          <div className="inline-flex flex-wrap items-center justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-accent sm:text-sm text-xs mx-2 my-1"
              >
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
