"use client";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  image?: string; // 👈 added
}

export default function BlogCard({ id, title, content, image }: BlogCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 p-6 flex flex-col justify-between border border-gray-800">
      {/* Blog Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      )}

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-5">{content}</p>
      </div>

      {/* Blog Link */}
      <Link
        href={`/blogs/${id}`}
        className="inline-block text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-lg shadow hover:from-indigo-600 hover:to-purple-700 transition-all"
      >
        Read More →
      </Link>
    </div>
  );
}
