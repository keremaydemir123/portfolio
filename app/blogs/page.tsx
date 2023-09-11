import type { Metadata } from "next";
import BlogPosts from "@/components/BlogPosts";
import { getSortedBlogsData } from "@/lib/posts";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs written by Kerem Aydemir.",
};

function BlogsPage() {
  const blogs = getSortedBlogsData();

  return (
    <>
      <BlogPosts blogs={blogs} />
    </>
  );
}
export default BlogsPage;
