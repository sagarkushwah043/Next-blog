"use client";

import { motion } from "framer-motion";
import Header from "../lib/components/Hearder"; // ✅ Fixed typo in import
import BlogCard from "../lib/components/BlogCard";

const blogs = [
  { id: "1", title: "My First Blog", content: "This is the first blog post..." },
  { id: "2", title: "Next.js Guide", content: "Learn how to use Next.js..." },
  { id: "3", title: "React Tips", content: "Some useful tips for React..." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            📖 Latest Blogs
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest articles, guides, and insights from our writers.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="transform transition duration-300"
            >
              {/* 🔥 Match colors with other components */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-700">
                <BlogCard id={blog.id} title={blog.title} content={blog.content} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
