"use client";

import React from "react";
import SocialIcons from "./SocialIcons";

function MyInfo({ mobile }: { mobile?: boolean }) {
  if (mobile)
    return (
      <>
        <div className="w-full flex-1 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-end gap-2.5 flex-wrap">
            <h5 className="text-start mb-0 font-bold text-base-content">
              Kerem Aydemir
            </h5>
            <span className="text-accent text-base uppercase text-start !font-bold !m-0">
              Frontend Developer
            </span>
          </div>
          <SocialIcons className="flex-1" mobile />
        </div>
      </>
    );

  return (
    <>
      <div className="w-full prose">
        <h2 className="text-white text-3xl !mb-2">Kerem Aydemir</h2>
        <h5 className="text-start text-accent text-lg font-bold uppercase !m-0">
          Frontend Developer
        </h5>
      </div>
    </>
  );
}

export default MyInfo;
