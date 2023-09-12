"use client";
import { container, item } from "@/constants/motion";
import { motion } from "framer-motion";

function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="visible"
      className="not-prose text-3xl font-bold mb-6 text-base-content"
    >
      <motion.span variants={item}>{children}</motion.span>
    </motion.h2>
  );
}

export default PageHeading;
