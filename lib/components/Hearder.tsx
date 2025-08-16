"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <section className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white py-24 px-6 text-center overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.2),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
          Welcome to NextBlog
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100/90 mb-10 leading-relaxed">
          ✨ Explore stories, share your ideas, and connect with people who care
          about creativity and knowledge.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blogs"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            🌸 Explore Blogs
          </Link>
          <Link
            href="/create-blog"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/30 backdrop-blur-md font-semibold text-white shadow-md hover:bg-white/20 transition-all"
          >
            ✍️ Create Blog
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
