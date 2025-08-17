"use client";

export default function Header() {
  return (
    <header className="py-16 px-6 md:py-24 lg:py-32">
      <div className="max-w-sm mx-auto text-center md:max-w-md lg:max-w-lg">
        <div className="mb-8 md:mb-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-black rounded-full flex items-center justify-center shadow-sm md:w-32 md:h-32 md:mb-8 lg:w-40 lg:h-40">
            <span className="text-xl font-mono font-medium text-white tracking-wider md:text-2xl lg:text-3xl">LY</span>
          </div>
        </div>
        <h1 className="text-2xl font-mono font-semibold text-black mb-2 tracking-tight md:text-4xl md:mb-4 lg:text-5xl lg:mb-6">
          Luo Yuhan
        </h1>
        <p className="text-gray-400 text-xs font-mono tracking-widest uppercase md:text-sm lg:text-base">
          luoyuhan.com
        </p>
      </div>
    </header>
  );
}
