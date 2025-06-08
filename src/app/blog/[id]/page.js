import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function getBlogPost(id) {
  try {
    const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { id } = params;
  const post = await getBlogPost(id);

  if (!post) {
    return notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Image with overlay text */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-80 object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {post.title}
          </h1>
          <p className="text-gray-300 mt-2">{post.description}</p>
          <div className="flex items-center gap-4 mt-4 text-white text-sm">
            <span>
              {post.date} • {post.readTime || "2 min read"}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-6 text-lg leading-8 text-gray-700">{post.content}</div>

      {/* Author Info */}
      <div className="mt-12 p-6 border-t">
        <p className="text-gray-500 text-sm">
          Passionate about web development and teaching.
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
}
