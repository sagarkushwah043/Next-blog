"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-3 mt-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        {/* Brand / About */}
        <div>
          <h2 className="text-lg font-bold text-white">
            Next<span className="text-indigo-400">Blog</span>
          </h2>
          <p className="text-xs mt-1 text-gray-400">
            A modern blogging platform to share ideas and connect with the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-1">Quick Links</h3>
          <ul className="space-y-0.5 text-sm">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/blog" className="hover:text-indigo-400 transition">Blogs</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-base font-semibold text-white mb-1">Contact</h3>
          <p className="text-xs">sagarkushwah043@gmail.com</p>
          <div className="flex justify-center md:justify-start space-x-2 mt-1">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sagar-kushwah-0a716624b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-3 text-center text-[10px] text-gray-500 border-t border-gray-700 pt-2">
        &copy; {new Date().getFullYear()} Sagar. All rights reserved.
      </div>
    </footer>
  );
}
