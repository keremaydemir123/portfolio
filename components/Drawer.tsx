import React from "react";
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import GlobeIcon from "./icons/GlobeIcon";
import Xmark from "./icons/Xmark";

function Drawer({ project }: { project: Project }) {
  return (
    <div className="drawer drawer-end max-h-screen overflow-y-auto z-40">
      <input id={project.id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor={project.id} className="drawer-overlay "></label>
        <div className="prose menu p-4 w-full min-h-full bg-base-200 text-base-content">
          <label
            className="absolute right-4 top-4 cursor-pointer"
            htmlFor={project.id}
          >
            <Xmark className="bg-base-content/80 rounded-full p-1 text-base-300 hover:opacity-80" />
          </label>
          <Image
            src={project.image}
            width={800}
            height={400}
            alt="image"
            className="w-full"
          />
          <h1 className="font-bold text-secondary mt-4">{project.title}</h1>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 w-max px-2 py-1 rounded-sm hover:bg-slate-700"
            >
              <GithubIcon />
              Github
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 w-max px-2 py-1 rounded-sm hover:bg-slate-700"
            >
              <GlobeIcon />
              Live
            </a>
          </div>
          <p className="!mb-4">{project.description}</p>
          <div className="flex flex-wrap items-center mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-accent text-base mr-2.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
