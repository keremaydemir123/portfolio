import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image,
      tags: matterResult.data.tags,
      description: matterResult.data.description,
      language: matterResult.data.language,
    };

    // Combine the data with the id
    return blogPost;
  });

  // Sort Blogs by date
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
}

export async function getBlogData(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date,
    image: matterResult.data.image,
    tags: matterResult.data.tags,
    language: matterResult.data.language,
    contentHtml,
  };

  // Combine the data with the id
  return blogPostWithHTML;
}
