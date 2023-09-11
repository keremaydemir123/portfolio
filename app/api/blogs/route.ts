import { getSortedBlogsData } from "@/lib/posts";

export async function GET(req: Request) {
  if (req.method !== "GET")
    return new Response("Method not allowed", { status: 405 });

  try {
    const blogs = getSortedBlogsData();
    return new Response(JSON.stringify(blogs), {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    return new Response("Something went wrong", { status: 500 });
  }
}
