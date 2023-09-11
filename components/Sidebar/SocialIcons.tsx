import React from "react";
import Image from "next/image";

import socialLinks from "@/constants/socialLinks";
import ResumeButton from "@/components/Sidebar/ResumeButton";

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
          <Image
            src="/icons/Github_white.png"
            alt="github"
            className="w-8 h-8 hover:opacity-80 object-contain cursor-pointer fill-white"
            width={100}
            height={100}
          />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <Image
            src="/icons/LinkedIN_white.png"
            alt="linkedin"
            className="w-8 h-8 hover:opacity-80 object-contain cursor-pointer text-white"
            width={100}
            height={100}
          />
        </a>
        <a href={`mailto:${socialLinks.gmail}`}>
          <Image
            src="/icons/Gmail_white.png"
            alt="gmail"
            className="w-8 h-8 hover:opacity-80 object-contain cursor-pointer"
            width={100}
            height={100}
          />
        </a>
        <ResumeButton />
      </div>
    </div>
  );
}

export default SocialIcons;
