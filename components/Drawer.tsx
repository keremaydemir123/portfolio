import React from "react";
import Image from "next/image";

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
            Close
          </label>
          <Image src={project.image} width={800} height={400} alt="image" />

          <h1 className="font-bold text-secondary mt-4">{project.title}</h1>
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
