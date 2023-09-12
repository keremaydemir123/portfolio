import { getSortedBlogsData } from "@/lib/posts";
import BLogCard from "./BlogCard";

function BlogBox() {
  const blogs = getSortedBlogsData();

  const firstTwoBlogs = blogs.slice(0, 2);
  return (
    <div className="  prose prose-a:no-underline py-4">
      <blockquote className="text-base-content">
        If you want to know more about me you can read my blog about my journey
      </blockquote>
      <div className="flex md:flex-row flex-col items-start gap-4 w-full">
        {firstTwoBlogs?.map((blog) => (
          <BLogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}

export default BlogBox;
