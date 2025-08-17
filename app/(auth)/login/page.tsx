"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ✅ No API call, just dummy check (optional)
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    // Example: Redirect to homepage after "login"
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Welcome Back
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
            placeholder="you@example.com"
            className="w-full p-4 rounded-lg border border-gray-500 bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-lg shadow-inner"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-300 mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-4 rounded-lg border border-gray-500 bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-lg shadow-inner"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
        >
          Login
        </button>

        <p className="text-center text-gray-300 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-400 hover:underline font-semibold"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
