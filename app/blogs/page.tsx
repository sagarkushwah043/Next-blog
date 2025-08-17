"use client";

import { useState } from "react";
import BlogCard from "../../lib/components/BlogCard";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export default function BlogPage() {
  const [blogs] = useState<Blog[]>([
    {
      id: "1",
      title: "Next.js Basics",
      content:
        "Learn Next.js fundamentals and how to create fast, modern React apps with SSR, SSG, and API routes...",
      image: "/images/blog1.avif",
    },
    {
      id: "2",
      title: "TailwindCSS Tips",
      content:
        "Enhance your UI with powerful TailwindCSS tips, design patterns, and best practices for scalability...",
      image: "/images/blog2.jpg",
    },
    {
      id: "3",
      title: "React Hooks Guide",
      content:
        "A complete guide to useState, useEffect, and custom hooks for building clean React apps...",
      image: "/images/blog3.svg",
    },
    {
      id: "4",
      title: "Authentication with NextAuth",
      content:
        "Implement secure authentication in Next.js using NextAuth.js with JWT and OAuth providers...",
      image:
        "/images/blog4.png",
    },
    {
      id: "5",
      title: "Deploying on Vercel",
      content:
        "Step-by-step guide to deploying your Next.js app on Vercel with CI/CD pipelines...",
      image:
        "/images/blog5.webp",
    },
    {
      id: "6",
      title: "JavaScript ES2025 Features",
      content:
        "Discover the latest JavaScript features and how to use them in modern projects...",
      image:
        "/images/blog6.png",
    },
    {
      id: "7",
      title: "Performance Optimization",
      content:
        "Boost your app performance with lazy loading, image optimization, and caching techniques...",
      image: "/images/blog7.png",
    },
    {
      id: "8",
      title: "TypeScript with Next.js",
      content:
        "Learn how to add TypeScript to your Next.js app for better safety and scalability...",
      image: "/images/blog8.png",
    },
    {
      id: "9",
      title: "Redux Toolkit Simplified",
      content:
        "Manage state effectively in React apps using Redux Toolkit with minimal boilerplate...",
      image:
        "/images/blog9.jpg",
    },
    {
      id: "10",
      title: "Building REST APIs",
      content:
        "Learn how to build scalable REST APIs with Node.js, Express, and MongoDB...",
      image: "/images/blog10.png",
    },
    {
      id: "11",
      title: "GraphQL Crash Course",
      content:
        "A beginner-friendly guide to GraphQL queries, mutations, and schema design...",
      image:
        "/images/blog11.png",
    },
    {
      id: "12",
      title: "Dark Mode UI",
      content:
        "Learn how to implement dark mode in your Next.js app with TailwindCSS...",
      image:
        "/images/blog12.jpg",
    },
    {
      id: "13",
      title: "Responsive Design",
      content:
        "Master responsive layouts using CSS Grid, Flexbox, and TailwindCSS utilities...",
      image:
        "/images/blog13.png",
    },
    {
      id: "14",
      title: "Testing with Jest",
      content:
        "Improve your app’s reliability by writing unit and integration tests using Jest and React Testing Library...",
      image: "/images/blog14.jpeg",
    },
    {
      id: "15",
      title: "SEO for Next.js",
      content:
        "Boost your app visibility with SEO strategies, metadata, and Next.js optimizations...",
      image: "/images/blog15.png",
    },
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-6 py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center md:text-left tracking-tight leading-tight">
          Explore{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Blogs
          </span>
        </h1>

        {/* Create Blog Button */}
        <Link href="/create-blog">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105">
            + Create Blog
          </button>
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
            image={blog.image}
          />
        ))}
      </div>
    </main>
  );
}
