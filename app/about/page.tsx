import Link from "next/link";
import { Target, Eye, HeartHandshake, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 py-20 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        About{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          NextBlog
        </span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl text-center text-gray-400 mb-14 text-lg leading-relaxed">
        NextBlog is a modern blogging platform built with{" "}
        <span className="text-indigo-400 font-medium">Next.js</span>,{" "}
        <span className="text-purple-400 font-medium">TailwindCSS</span>, and{" "}
        <span className="text-pink-400 font-medium">NextAuth</span>.  
        Share your stories, explore inspiring articles, and connect with creators worldwide.
      </p>

      {/* Info Cards */}
      <div className="max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Mission */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-transform duration-300">
          <Target className="w-10 h-10 text-indigo-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Mission</h2>
          <p className="text-gray-400">
            To provide a seamless and modern blogging experience where writers can freely express themselves.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300">
          <Eye className="w-10 h-10 text-purple-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Vision</h2>
          <p className="text-gray-400">
            Become the go-to platform for sharing knowledge, stories, and ideas with the world.
          </p>
        </div>

        {/* Values */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-transform duration-300">
          <HeartHandshake className="w-10 h-10 text-pink-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Values</h2>
          <p className="text-gray-400">
            Simplicity, security, modern design, and a community-focused approach.
          </p>
        </div>

        {/* Team */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-transform duration-300">
          <Users className="w-10 h-10 text-green-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Team</h2>
          <p className="text-gray-400">
            A dedicated group of developers, designers, and writers passionate about technology and content creation.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16">
        <Link
          href="/blogs"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
        >
          Explore Blogs →
        </Link>
      </div>
    </main>
  );
}
