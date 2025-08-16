"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-gray-900/70 backdrop-blur-xl border-b border-gray-800 text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide hover:text-indigo-400 transition-colors"
        >
          Next<span className="text-indigo-400">Blog</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors ${
                pathname === link.href ? "text-indigo-400" : "hover:text-indigo-400"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-400 rounded"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Search Bar (Desktop only) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 w-60 focus-within:ring-2 focus-within:ring-indigo-500"
        >
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
          />
          <button type="submit">
            <Search size={18} className="text-gray-400 hover:text-white transition" />
          </button>
        </form>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {session ? (
            <div className="relative group">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-9 h-9 rounded-full border border-indigo-500 cursor-pointer"
              />
              {/* Dropdown */}
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden hidden group-hover:block"
                >
                  <p className="px-4 py-2 text-gray-300 border-b border-gray-700 text-sm">
                    Hi, {session.user?.name?.split(" ")[0]}
                  </p>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left px-4 py-2 hover:bg-red-600 text-sm transition-all"
                  >
                    Logout
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition-all"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 bg-gray-800 rounded-lg p-4 space-y-3 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors ${
                  pathname === link.href ? "text-indigo-400" : "hover:text-indigo-400"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Search in Mobile */}
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-gray-700 rounded-full px-3 py-2"
            >
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
              />
              <button type="submit">
                <Search size={18} className="text-gray-400 hover:text-white transition" />
              </button>
            </form>

            {!session && (
              <button
                onClick={() => {
                  router.push("/login");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition-all"
              >
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
