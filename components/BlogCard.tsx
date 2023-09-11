import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import DocumentIcon from "./icons/DocumentIcon";
import CalendarIcon from "./icons/CalendarIcon";

interface BLogCardProps {
  blog: BlogPost;
}
function BLogCard({ blog }: BLogCardProps) {
  const { id, title, date, tags, description } = blog;

  const formattedDate = getFormattedDate(date);

  return (
    <Link
      href={`/blogs/${id}`}
      className="blog-card flex flex-col shadow-md shadow-black/5 p-4 w-full border border-solid border-base-content bg-base-100 hover:bg-secondary/5 hover:-translate-y-2 transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <DocumentIcon />
        <div className="text-sm flex gap-1.5 items-center text-base-content/60">
          <span>{formattedDate}</span>
          <CalendarIcon />
        </div>
      </div>
      <div className="flex-1 mt-4 flex flex-col justify-between">
        <div className="text-2xl font-bold text-base-content">{title}</div>
        <p className="mt-4 text-base line-clamp-3">{description}</p>
      </div>

      <div className="flex gap-4 items-center mt-4">
        {tags && tags.length > 0 && (
          <div className="flex gap-4 items-center mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="text-accent text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
export default BLogCard;
