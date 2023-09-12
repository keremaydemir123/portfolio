"use client";

import React from "react";
import SocialIcons from "./SocialIcons";
import ResumeButton from "./ResumeButton";

function MyInfo({ mobile }: { mobile?: boolean }) {
  if (mobile)
    return (
      <>
        <div className="w-full flex-1 flex flex-col gap-2.5">
          <div className="flex flex-col gap-2.5">
            <h5 className="text-start text-2xl mb-0 font-bold text-base-content">
              Kerem Aydemir
            </h5>
            <h2 className="text-start text-lg font-medium text-base-content/90 !m-0">
              <span className="text-slate-300">Frontend Developer</span>
              <span className="font-light"> at Öğrenci Baksana</span>
            </h2>
          </div>
          <div className="flex items-end gap-2.5">
            <SocialIcons className="flex-1" mobile />
            <ResumeButton />
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="w-full">
        <h1 className="text-base-content text-4xl font-bold !mb-2">
          Kerem Aydemir
        </h1>
        <h2 className="text-start text-xl font-medium text-base-content/90 !m-0">
          <span className="text-slate-300">Frontend Developer</span>
          <span className="font-light"> at Öğrenci Baksana</span>
        </h2>
      </div>
    </>
  );
}

export default MyInfo;
