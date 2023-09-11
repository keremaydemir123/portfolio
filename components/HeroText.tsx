import React from "react";

function HeroText() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-slate-200">
        Passionate{" "}
        <span className="underline underline-offset-2 decoration-secondary">
          Web Developer
        </span>{" "}
        with a Drive for Continuous Learning
      </h1>

      <p className="my-12">
        <span className="text-accent">Hello! I&apos;m Kerem Aydemir</span>,{" "}
        <span className="text-slate-400">
          - a dedicated web developer on an exciting journey of discovery and
          growth in the world of technology.
        </span>
      </p>
    </>
  );
}

export default HeroText;
