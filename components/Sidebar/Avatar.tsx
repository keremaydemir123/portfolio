import Image from "next/image";
import React from "react";

function Avatar() {
  return (
    <div className="relative text-base z-30">
      <div className="avatar">
        <div className="md:w-32 lg:w-28 w-32 rounded-full">
          <Image
            src="/computer-engineer.png"
            alt="avatar"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
