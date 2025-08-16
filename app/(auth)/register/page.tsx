"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate register logic
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-[0_0_25px_rgba(147,51,234,0.6)]"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Join the Journey
        </h2>

        {error && (
          <p className="text-red-400 bg-red-900/20 p-3 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="space@explorer.com"
            className="w-full p-4 rounded-lg border border-purple-500 bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg shadow-inner"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-4 rounded-lg border border-purple-500 bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg shadow-inner"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-300 mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-4 rounded-lg border border-purple-500 bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg shadow-inner"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
        >
          Register
        </button>

        <p className="text-center text-gray-300 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-400 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
