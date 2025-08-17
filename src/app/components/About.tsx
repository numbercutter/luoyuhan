"use client";

export default function About() {
  return (
    <section className="max-w-md mx-auto px-6 py-8 md:max-w-lg md:py-12 lg:max-w-2xl lg:py-16">
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 md:p-10 lg:p-12">
        <h2 className="text-base font-mono font-semibold text-black mb-6 tracking-tight md:text-lg md:mb-8 lg:text-xl lg:mb-10">
          About
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base md:space-y-6 lg:text-lg lg:space-y-8">
          <p>
            Digital content creator and social media influencer focused on 
            lifestyle, culture, and authentic storytelling. Building meaningful 
            connections across multiple platforms.
          </p>
          <p>
            Creating content that inspires and engages audiences through 
            visual storytelling, trend insights, and cultural commentary 
            across various social media channels.
          </p>
          <div className="pt-6 border-t border-gray-200 md:pt-8 lg:pt-10">
            <h3 className="font-mono font-medium text-black mb-3 text-xs uppercase tracking-wider md:text-sm md:mb-4 lg:text-base lg:mb-6">
              Platforms
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
              {["Content Creation", "Video Production", "Social Strategy", "Brand Partnerships", "Community Building"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono bg-white border border-gray-200 rounded-md text-gray-600 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}