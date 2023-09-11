"use client";
import React from "react";
import { motion } from "framer-motion";

import { container, item } from "@/constants/motion";
import Link from "next/link";

function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center w-full prose mx-auto h-full"
    >
      <div className="z-1text-base-content/80 my-auto flex flex-col items-center">
        <p className="text-primary uppercase text-start w-full font-bold text-xl">
          Welcome to my digital world!
        </p>
        <section className="max-w-3xl text-lg my-auto">
          <motion.h1 variants={item} className="mb-4 text-base-content">
            Hi👋,I&apos;m a Web Developer based in Tekirdağ, Türkiye,
            specializing in {""}
            <strong className="text-accent">React</strong> and {""}
            <strong className="text-accent">TypeScript</strong>.
          </motion.h1>
          <motion.p variants={item} className="mb-4">
            Right now, I&apos;m actively involved in the{" "}
            <a
              href="https://www.ogrencibaksana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline cursor-pointer hover:underline hover:text-accent-focus"
            >
              Öğrenci Baksana
            </a>{" "}
            community on a voluntary basis.
          </motion.p>

          <motion.p variants={item} className="">
            I&apos;m currently learning{" "}
            <strong className="text-accent-focus">Go</strong>,{" "}
            <strong className="text-accent-focus">htmx</strong> and{" "}
            <strong className="text-accent-focus">SQL</strong>.
          </motion.p>
          <motion.p variants={item}>
            Feel free to explore my projects and don&apos;t hesitate to{" "}
            <Link
              href="/contact"
              className="block w-max no-underline text-secondary underline-offset-4 hover:text-secondary-focus cursor-pointer"
            >
              get in touch 👈🏻
            </Link>
          </motion.p>
        </section>
      </div>
    </motion.div>
  );
}

export default Hero;
