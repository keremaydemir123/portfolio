import { notFound } from "next/navigation";

import getFormattedDate from "@/lib/getFormattedDate";
import { getBlogData, getSortedBlogsData } from "@/lib/posts";
import CalendarIcon from "@/components/icons/CalendarIcon";

interface BlogContentProps {
  params: {
    blogId: string;
  };
}

export function generateStaticParams() {
  const blogs = getSortedBlogsData();

  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}

export function generateMetadata({ params }: BlogContentProps) {
  const blogs = getSortedBlogsData();
  const blogId = params.blogId;

  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
  };
}

async function BlogContent({ params }: BlogContentProps) {
  const blogs = getSortedBlogsData();
  const blogId = params.blogId;

  if (!blogs.find((blog) => blog.id === blogId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getBlogData(blogId);

  const formattedDate = getFormattedDate(date);

  return (
    <div className="">
      <p className="text-base-content/60 !m-0 flex items-center gap-1.5">
        <CalendarIcon /> {formattedDate}
      </p>
      <h1 className="text-primary font-bold">{title}</h1>
      <div className="h-[2px] bg-base-200 my-4"></div>
      <article
        className="text-base-content/60 prose-code:text-base-content prose-strong:text-base-content prose-headings:text-accent prose-a:text-secondary"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}

export default BlogContent;
