import { notFound } from "next/navigation";

import getFormattedDate from "@/lib/getFormattedDate";
import { getBlogData, getSortedBlogsData } from "@/lib/posts";

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

  const { title, date, contentHtml, image } = await getBlogData(blogId);

  const formattedDate = getFormattedDate(date);

  return (
    <div className="prose mx-auto">
      <div className="my-4">
        <p className="text-base-content">{formattedDate}</p>
        <h1 className="text-primary font-bold">{title}</h1>
      </div>
      <div className="h-[2px] bg-base-200 my-4"></div>
      <article
        className="mx-auto prose-code:text-accent prose-strong:text-accent prose-headings:text-accent prose-a:text-secondary"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}

export default BlogContent;
