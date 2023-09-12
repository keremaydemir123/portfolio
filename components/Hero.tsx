"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { fastContainer, item } from "@/constants/motion";

function Hero() {
  return (
    <motion.div
      variants={fastContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col w-full prose"
    >
      <div className="z-1 text-base-content/60 flex flex-col">
        <section className="text-lg">
          <motion.h1 variants={item} className="mb-4 text-base-content">
            I&apos;m a Web Developer based in Tekirdağ, Türkiye, specializing in{" "}
            {""}
            <strong className="text-accent">React</strong> and {""}
            <strong className="text-accent">TypeScript</strong>.
          </motion.h1>
          <motion.p variants={item} id="about">
            My journey in web development started in August 2022, and I&apos;ve
            been loving it ever since. I used to study petroleum engineering at
            METU, but I decided to switch to web development, and it&apos;s been
            a great decision. I&apos;ve been learning and making progress
            consistently, and I&apos;m really dedicated to it.
          </motion.p>
          <motion.p variants={item} className="mt-8">
            I use powerful tools like {""}
            <span className="tech">React</span>,{" "}
            <span className="tech">TypeScript</span>, and{" "}
            <span className="tech">Tailwind</span> to create awesome websites.
            I&apos;m also interested in tools like {""}
            <span className="tech">NextJS</span>,{" "}
            <span className="tech">Swelte</span>,{" "}
            <span className="tech">SolidJS</span>,{" "}
            <span className="tech">Astro</span> and{" "}
            <span className="tech">htmx</span>, to expand my skills.
          </motion.p>
          <motion.p variants={item} className="mb-4">
            Right now, I&apos;m actively involved in the{" "}
            <a
              href="https://www.ogrencibaksana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech"
            >
              Öğrenci Baksana
            </a>{" "}
            community on a voluntary basis.
          </motion.p>
          <motion.p variants={item} className="">
            I&apos;m currently learning <strong className="tech">Go</strong>,{" "}
            <strong className="tech">htmx</strong> and{" "}
            <strong className="tech">SQL</strong>.
          </motion.p>
          <motion.p variants={item}>
            Feel free to explore my projects and don&apos;t hesitate to{" "}
            <Link href="/contact" className="tech">
              get in touch
            </Link>
          </motion.p>
          <motion.p variants={item}>
            If you want to learn more about my journey, you can check out my{" "}
            <Link href="/blogs/my_web_journey__en" className="tech">
              blog
            </Link>
          </motion.p>
        </section>
      </div>
    </motion.div>
  );
}

export default Hero;
