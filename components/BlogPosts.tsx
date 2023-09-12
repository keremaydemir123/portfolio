"use client";
import BLogCard from "@/components/BlogCard";
import { container, item } from "@/constants/motion";
import { motion } from "framer-motion";
import PageHeading from "./PageHeading";

function BlogPosts({ blogs }: { blogs: BlogPost[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="prose flex flex-col justify-center"
    >
      <PageHeading>Blog Posts</PageHeading>
      <motion.div
        initial="hidden"
        animate="visible"
        className="not-prose md:grid-cols-2 grid-cols-1 grid gap-8"
      >
        {blogs.map((blog) => (
          <motion.div key={blog.id} variants={item}>
            <BLogCard blog={blog} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default BlogPosts;
