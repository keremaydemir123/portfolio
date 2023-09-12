import React from "react";

import socialLinks from "@/constants/socialLinks";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

function SocialIcons({
  className,
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  return (
    <div className="not-prose flex items-center gap-2.5">
      <div className=" flex-1 flex gap-2.5 items-center">
        <a href={socialLinks.github} target="_blank">
          <GithubIcon className="w-7 h-7 text-slate-300 hover:text-slate-100 transition-colors ease-in-out duration-150" />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <LinkedinIcon className="w-7 h-7 text-slate-300 hover:text-slate-100 transition-colors ease-in-out duration-150" />
        </a>
      </div>
    </div>
  );
}

export default SocialIcons;
