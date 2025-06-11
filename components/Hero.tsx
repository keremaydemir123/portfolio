"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { fastContainer, item } from "@/constants/motion";
import { heroLinks } from "@/constants/heroLinks";

function Hero() {
  return (
    <div className="flex flex-col w-full prose">
      <div className="z-1 text-base-content/60 flex flex-col">
        <motion.section
          className="text-lg"
          variants={fastContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="not-prose mb-4 text-base-content md:text-4xl sm:text-3xl text-2xl"
          >
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
          <motion.p variants={item} className="mt-8 whitespace-pre-line">
            I use powerful tools like {""}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.react.path}
              className="link"
            >
              {heroLinks.react.name}
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.typescript.path}
              className="link"
            >
              {heroLinks.typescript.name}
            </a>
            , and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.tailwind.path}
              className="link"
            >
              {heroLinks.tailwind.name}
            </a>{" "}
            to create awesome websites. I&apos;m also interested in tools like{" "}
            {""}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.svelte.path}
              className="link"
            >
              {heroLinks.svelte.name}
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.solid.path}
              className="link"
            >
              {heroLinks.solid.name}
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.astro.path}
              className="link"
            >
              {heroLinks.astro.name}
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroLinks.htmx.path}
              className="link"
            >
              {heroLinks.htmx.name}
            </a>
            , to expand my skills.
          </motion.p>
          {/* <motion.p variants={item} className="mb-4">
            Right now, I&apos;m actively working for{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://milapasa.com/"
              className="link"
            >
              Milapasa
            </a>{" "}
          </motion.p> */}
          <motion.p variants={item} className="">
            I&apos;m currently learning{" "}
            <a
              href={heroLinks.odin.path}
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              {heroLinks.odin.name}
            </a>
            ,{" "}
            <a
              href={heroLinks.lua.path}
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              {heroLinks.lua.name}
            </a>{" "}
            and{" "}
            <a
              href={heroLinks.sdl3.path}
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              {heroLinks.sdl3.name}
            </a>{" "}
            and working on a game project in my free time.
          </motion.p>
          <motion.p variants={item}>
            Feel free to explore my projects and don&apos;t hesitate to{" "}
            <Link href="/contact" className=" link">
              get in touch
            </Link>
          </motion.p>
          <motion.p variants={item}>
            If you want to learn more about my journey, you can check out my{" "}
            <Link href="/blogs/my_web_journey" className=" link">
              blog
            </Link>
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
}

export default Hero;
