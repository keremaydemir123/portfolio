import React from "react";
import Image from "next/image";
import technologies, {
  technologiesIWantToLearn,
} from "@/constants/technologies";

function Tecnologies() {
  return (
    <div className="prose mx-auto mt-16 mb-8 py-4">
      <h2 className="text-accent flex items-start gap-2">
        Technologies that I am experienced with
      </h2>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="text-base-content/80 flex items-center gap-2.5 my-4"
          >
            <Image
              src={tech.img}
              alt={tech.name}
              width={50}
              height={50}
              className="md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 object-contain"
            />
            {tech.name}
          </div>
        ))}
      </div>

      <h2 className="text-accent flex items-center gap-2">
        Technologies that I want to learn
      </h2>

      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {technologiesIWantToLearn.map((tech, index) => (
          <div
            key={index}
            className="text-base-content/80 flex items-center gap-2.5 my-4"
          >
            <Image
              src={tech.img}
              alt={tech.name}
              width={500}
              height={500}
              className="md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 object-contain"
            />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tecnologies;
