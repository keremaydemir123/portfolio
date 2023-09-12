"use client";
import { motion } from "framer-motion";
import { fastContainer, item } from "@/constants/motion";

function About() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fastContainer}
      className="prose  "
    >
      <motion.h1 variants={item}>About</motion.h1>
      <motion.h2 variants={item} className="text-accent">
        Hello! I&apos;m Kerem Aydemir 👋🏻
      </motion.h2>{" "}
      <motion.p variants={item} id="about">
        My journey in web development started in August 2022, and I&apos;ve been
        loving it ever since. I used to study petroleum engineering at METU, but
        I decided to switch to web development, and it&apos;s been a great
        decision. I&apos;ve been learning and making progress consistently, and
        I&apos;m really dedicated to it.
      </motion.p>
      <motion.p variants={item} className="mt-8">
        I use powerful tools like {""}
        <span className="tech">React</span>,{" "}
        <span className="tech">TypeScript</span>, and{" "}
        <span className="tech">Tailwind</span> to create awesome websites.
        I&apos;ve also tried other tools like {""}
        <span className="tech">NextJS</span>,{" "}
        <span className="tech">Swelte</span>,{" "}
        <span className="tech">SolidJS</span>,{" "}
        <span className="tech">Astro</span> and{" "}
        <span className="tech">htmx</span>, to expand my skills.
      </motion.p>
      <motion.p variants={item} initial={{ opacity: 0 }}>
        Looking ahead, I have big goals. I want to keep growing as a developer
        and maybe start my own tech business someday. The future has so many
        possibilities, and I&apos;m excited to see where it takes me.
      </motion.p>
    </motion.div>
  );
}

export default About;
