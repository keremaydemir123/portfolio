import React from "react";
import DownloadIcon from "../icons/DownloadIcon";

function ResumeButton() {
  return (
    <a
      className="btn btn-secondary btn-sm w-max text-secondary-content h-10 rounded-none no-underline"
      href="resume.pdf"
      target="_blank"
    >
      <DownloadIcon />
      Resume
    </a>
  );
}

export default ResumeButton;
