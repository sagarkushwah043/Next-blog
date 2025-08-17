"use client";

import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaThumbsUp, FaShareAlt, FaCommentDots, FaPaperPlane } from "react-icons/fa";

interface Blog {
  id: string;
  title: string;
  content: string;
  image?: string;
}

const blogs: Blog[] = [
  {
    id: "1",
    title: "Next.js Basics",
    content:
      "Next.js is a powerful React framework that enables developers to build modern, scalable, and high-performing web applications. It provides features like server-side rendering (SSR), static site generation (SSG), and API routes out of the box, making it a great choice for both small and enterprise projects. With Next.js, you can optimize SEO easily, improve performance with image optimization, and manage dynamic routing seamlessly. It integrates well with tools like TailwindCSS, Redux, and NextAuth for authentication. Learning the fundamentals of Next.js lays the foundation for creating fast, secure, and production-ready web apps with minimal setup.",
    image: "/images/blog1.avif",
  },
  {
    id: "2",
    title: "TailwindCSS Tips",
    content:
      "TailwindCSS is a utility-first CSS framework that helps you build modern UIs faster with predefined classes. It eliminates the need to write custom CSS for common styling patterns, which speeds up development. By using classes like flex, grid, p-4, and text-center, you can design responsive layouts quickly. TailwindCSS also provides dark mode support, customization through configuration, and plugin integration. With tips such as reusing component classes, leveraging responsive breakpoints, and creating reusable design patterns, you can scale your projects efficiently. TailwindCSS makes styling in React and Next.js projects smooth and highly maintainable.",
    image: "/images/blog2.jpg",
  },
  {
    id: "3",
    title: "React Hooks Guide",
    content:
      "React Hooks allow developers to use state and lifecycle features in functional components without writing classes. The most common hooks are useState, which manages local state, and useEffect, which handles side effects such as API calls. You can also create custom hooks to reuse logic across multiple components. Hooks simplify code, make it cleaner, and reduce boilerplate. For example, instead of managing componentDidMount and componentWillUnmount, you can achieve the same with a single useEffect. Understanding hooks is essential to building scalable React applications and improving readability for long-term maintainability.",
    image: "/images/blog3.svg",
  },
  {
    id: "4",
    title: "Authentication with NextAuth",
    content:
      "NextAuth.js is a flexible authentication library for Next.js that supports multiple authentication methods including email-password, OAuth providers (Google, GitHub, Facebook), and JWT. Implementing secure authentication is crucial for protecting user data and controlling access to resources. NextAuth provides built-in session handling, middleware support, and token management. With just a few lines of configuration, you can add login, logout, and session persistence to your app. It also integrates seamlessly with databases like MongoDB or PostgreSQL. Learning NextAuth allows developers to quickly implement robust authentication without reinventing the wheel.",
    image: "/images/blog4.png",
  },
  {
    id: "5",
    title: "Deploying on Vercel",
    content:
      "Vercel is the official hosting platform for Next.js and offers seamless deployment with zero configuration. With Vercel, you can connect your GitHub repository, push changes, and see them live instantly with continuous deployment. It provides free SSL certificates, custom domains, automatic scaling, and edge functions. For Next.js apps, features like serverless functions, ISR (Incremental Static Regeneration), and image optimization are supported out of the box. Deploying on Vercel simplifies the entire process of moving your app from development to production. It is one of the easiest ways to ensure fast and reliable hosting for your web projects.",
    image: "/images/blog5.webp",
  },
  {
    id: "6",
    title: "JavaScript ES2025 Features",
    content:
      "JavaScript continues to evolve every year, and ES2025 introduces exciting features to make coding more efficient. Features like pattern matching, pipeline operators, and better async handling aim to simplify common coding tasks. Developers can expect improved readability, reduced boilerplate, and faster performance. Staying up-to-date with the latest features helps write modern, maintainable code. Learning ES2025 allows developers to experiment with cutting-edge syntax while building scalable applications. Using new features in projects not only makes code cleaner but also ensures you remain competitive in the ever-evolving JavaScript ecosystem.",
    image:  "/images/blog6.png",
  },
  {
    id: "7",
    title: "Performance Optimization",
    content:
      "Performance optimization is crucial for building fast and responsive web applications. Techniques like lazy loading, image optimization, and caching help reduce load times and enhance user experience. In Next.js, you can use the built-in Image component for automatic optimization, dynamic imports for code splitting, and middleware for caching strategies. Optimizing performance also involves monitoring Core Web Vitals and reducing bundle size. By applying these methods, developers can ensure that their applications run smoothly even under heavy traffic. A well-optimized app not only improves SEO but also increases user satisfaction and retention.",
    image: "/images/blog7.png",
  },
  {
    id: "8",
    title: "TypeScript with Next.js",
    content:
      "Adding TypeScript to Next.js projects improves safety, scalability, and maintainability. TypeScript introduces static typing, making it easier to catch errors during development rather than at runtime. With Next.js, you can quickly set up TypeScript by adding a tsconfig.json file, and the framework will automatically recognize it. Benefits include better code autocompletion, easier refactoring, and improved collaboration in large projects. TypeScript also integrates seamlessly with React hooks, API routes, and server components. Learning TypeScript with Next.js helps developers write clean, robust, and production-ready applications with fewer bugs.",
    image: "/images/blog8.png",
  },
  {
    id: "9",
    title: "Redux Toolkit Simplified",
    content:
      "Redux Toolkit simplifies state management in React applications by reducing boilerplate and providing useful utilities. It includes powerful APIs like createSlice, createAsyncThunk, and configureStore, which make managing global state easier and cleaner. Instead of writing multiple action types and reducers, you can define state logic in a more compact way. Redux Toolkit also supports middleware and DevTools integration. Using it with Next.js ensures scalable state management across large projects. Understanding Redux Toolkit helps developers manage complex state with minimal effort while keeping code organized and maintainable.",
    image: "/images/blog9.jpg",
  },
  {
    id: "10",
    title: "Building REST APIs",
    content:
      "Building REST APIs with Node.js and Express is a fundamental skill for full-stack developers. REST APIs allow communication between frontend and backend, enabling dynamic applications. With Express, you can create endpoints for CRUD operations and connect them to databases like MongoDB or PostgreSQL. Adding authentication, validation, and error handling ensures your API is secure and reliable. In Next.js, you can even create APIs directly inside the app using API routes. Understanding how to build and consume REST APIs is crucial for creating scalable and production-ready web applications.",
    image: "/images/blog10.png",
  },
  {
    id: "11",
    title: "GraphQL Crash Course",
    content:
      "GraphQL is an alternative to REST that allows clients to request exactly the data they need. It reduces over-fetching and under-fetching problems by letting developers define queries and mutations. A GraphQL server uses schemas to describe available data and resolvers to fetch it. Tools like Apollo Client make integrating GraphQL with React and Next.js seamless. GraphQL also supports subscriptions for real-time updates. Understanding GraphQL empowers developers to build efficient and flexible APIs. With its rising popularity, learning GraphQL is becoming an essential skill for modern full-stack developers.",
    image: "/images/blog11.png",
  },
  {
    id: "12",
    title: "Dark Mode UI",
    content:
      "Dark mode has become a popular design trend that enhances user experience by reducing eye strain and saving battery on OLED screens. Implementing dark mode in Next.js with TailwindCSS is straightforward using utility classes and configuration options. You can toggle themes dynamically by managing state and applying conditional classes. For global theming, libraries like next-themes simplify integration. A well-designed dark mode not only looks modern but also increases user satisfaction. Adding dark mode to your app gives users control over their preferred appearance, making your UI more inclusive and user-friendly.",
    image: "/images/blog12.jpg",
  },
  {
    id: "13",
    title: "Responsive Design",
    content:
      "Responsive design ensures that web applications look and function well across all devices, from desktops to mobile phones. Using CSS Grid, Flexbox, and TailwindCSS utilities, you can create adaptive layouts quickly. Next.js provides responsive image optimization, making media adjust automatically to screen size. Responsive design also involves testing across different breakpoints and using relative units like percentages and rems. By prioritizing responsiveness, developers can improve accessibility, SEO, and user engagement. A mobile-friendly website is essential in today’s digital age, where the majority of users access apps on their phones.",
    image: "/images/blog13.png",
  },
  {
    id: "14",
    title: "Testing with Jest",
    content:
      "Testing is an essential part of software development, and Jest is one of the most popular testing frameworks for React and Next.js. With Jest, you can write unit tests, integration tests, and snapshot tests to ensure your app works as expected. It provides a simple API, built-in mocking, and excellent performance. When combined with React Testing Library, Jest enables developers to test components based on user behavior rather than implementation details. Writing tests improves code reliability, prevents bugs, and increases developer confidence when deploying applications to production environments.",
    image: "/images/blog14.jpeg",
  },
  {
    id: "15",
    title: "SEO for Next.js",
    content:
      "Search engine optimization (SEO) is critical for improving the visibility of web applications. Next.js makes SEO easier by offering server-side rendering, metadata configuration, and optimized routing. Adding meta tags, sitemaps, and structured data helps search engines index your content better. Features like automatic static optimization and dynamic head tags allow developers to customize SEO per page. With Next.js, you can also integrate tools like next-seo for advanced optimization. A strong SEO strategy ensures that your application ranks higher in search results, attracting more organic traffic and potential users.",
    image: "/images/blog15.png",
  },
];

interface BlogDetailProps {
  params: Promise<{ id: string }>; // 👈 params is a Promise now
}

export default function BlogDetail({ params }: BlogDetailProps) {
  // ✅ unwrap the Promise
  const { id } = React.use(params);

  const blog = blogs.find((b) => b.id === id);

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  if (!blog) return notFound();

  const handleLike = () => setLikes((prev) => prev + 1);

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments((prev) => [...prev, comment]);
    setComment("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-400">
          {blog.title}
        </h1>

        {/* Blog Image */}
        {blog.image && (
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <p className="text-gray-300 leading-relaxed mb-10">{blog.content}</p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full font-medium transition shadow-md"
          >
            <FaThumbsUp /> Like {likes > 0 && `(${likes})`}
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition shadow-md">
            <FaShareAlt /> Share
          </button>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
            <FaCommentDots className="text-indigo-400 text-xl" />
            Comments
          </h2>

          {/* Comment Input */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              className="flex-1 p-4 rounded-xl bg-gray-900 text-white border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              rows={3}
            />
            <button
              onClick={handleComment}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition shadow-md"
            >
              <FaPaperPlane className="text-lg" />
              Post
            </button>
          </div>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-400">No comments yet. Be the first!</p>
            ) : (
              comments.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-4 rounded-lg border border-gray-700"
                >
                  <p className="text-gray-200 text-sm">
                    <span className="font-semibold text-indigo-400">
                      User {idx + 1}:
                    </span>{" "}
                    {c}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
