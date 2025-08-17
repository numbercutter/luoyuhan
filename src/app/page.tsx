"use client";

import Header from "./components/Header";
import LinkTree from "./components/LinkTree";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative max-w-7xl mx-auto">
        <Header />
        <LinkTree />
        <About />
        <div className="pb-16 md:pb-24 lg:pb-32"></div>
      </div>
    </main>
  );
}
