interface LinkItem {
  title: string;
  url: string;
}

const links: LinkItem[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/yuhan-luo-b5a91429a/",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@YuhanLo921",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/2catcholivia/",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@oliviaistraveling",
  },
  {
    title: "RedNote",
    url: "https://xhslink.com/m/5r0ADjyTPLY",
  },
];

export default function LinkTree() {
  return (
    <div className="max-w-sm mx-auto px-6 py-6 md:max-w-md md:py-8 lg:max-w-2xl">
      <div className="space-y-3 md:space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 px-6 text-center rounded-lg transition-all duration-150 ease-out bg-gray-50 hover:bg-black hover:text-white border border-gray-200 hover:border-black group md:py-5 lg:py-6"
          >
            <span className="font-mono text-sm font-medium tracking-wide md:text-base lg:text-lg">
              {link.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
