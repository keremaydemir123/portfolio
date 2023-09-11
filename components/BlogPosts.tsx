"use client";
import BLogCard from "@/components/BlogCard";
import { container, item } from "@/constants/motion";
import { motion } from "framer-motion";

function BlogPosts({ blogs }: { blogs: BlogPost[] }) {
  return (
    <div className="prose mx-auto mb-8">
      <h1 className="text-primary flex gap-1.5 items-center">Blogs</h1>
      <p>I share my thoughts and knowledge.</p>
      <motion.div
        variants={container}
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
    </div>
  );
}

export default BlogPosts;
