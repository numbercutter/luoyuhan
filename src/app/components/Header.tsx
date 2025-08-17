"use client";

export default function Header() {
  return (
    <header className="py-16 px-6 md:py-24 lg:py-32">
      <div className="max-w-sm mx-auto text-center md:max-w-md lg:max-w-lg">
        <div className="mb-8 md:mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg md:w-40 md:h-40 md:mb-8 lg:w-48 lg:h-48">
            <img 
              src="/Screenshot_2025-08-17_at_12.40.42_PM.png" 
              alt="Luo Yuhan profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="fallback w-full h-full bg-black rounded-full flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-xl font-mono font-medium text-white tracking-wider md:text-2xl lg:text-3xl">LY</span>
            </div>
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
