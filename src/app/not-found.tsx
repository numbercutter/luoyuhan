"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#9fff68] via-[#ff8f6b] to-[#4cc9ff] relative">
      <div className="absolute inset-0 backdrop-blur-[100px] bg-white/30"></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white float-animation drop-shadow-lg mb-4">
          404
        </h1>
        <p className="text-foreground/70 bg-white/40 backdrop-blur-sm py-1.5 px-5 rounded-full inline-block shadow-sm border border-white/30 text-sm tracking-wide mb-8">
          Page Not Found
        </p>
        <Link
          href="/"
          className="bg-white/90 hover:bg-white/95 py-2 px-6 rounded-full transition-all duration-300 border border-white/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-foreground font-medium"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
