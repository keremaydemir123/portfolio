import React from "react";
import ArrowRight from "../icons/ArrowRight";

function ResumeButton() {
  return (
    <a
      className="w-max text-base font-medium mail-direct text-slate-300 hover:text-slate-100 rounded-none no-underline !m-0"
      href="resume.pdf"
      target="_blank"
    >
      Resume
      <ArrowRight />
    </a>
  );
}

export default ResumeButton;
