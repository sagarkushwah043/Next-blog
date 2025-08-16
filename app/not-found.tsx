"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center px-6">
      {/* Big 404 */}
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl font-bold text-white mt-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-400 max-w-md mt-2">
        The page you’re looking for doesn’t exist or has been moved. 
        Let’s get you back on track.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
      >
        Go Home
      </Link>

      {/* Floating animation */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 opacity-30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500 opacity-30 rounded-full blur-3xl animate-float-fast"></div>

      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-fast {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
