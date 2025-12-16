import React from "react";

export default function NavBar() {
  return (
    <nav className="
      sticky top-0 z-50
      backdrop-blur-md bg-neutral-900/80
      text-white
      border-b border-white/10
      px-6 py-4
    ">
      <div className="
        max-w-7xl mx-auto
        flex flex-col md:flex-row
        items-center justify-between
        gap-4
      ">
        {/* Name */}
        <p className="
          text-3xl md:text-4xl
          font-bold tracking-wide
          text-gray-100
          hover:text-blue-400 transition-colors
        ">
          MOHAMED WALEED
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {[
            ["About", "#about"],
            ["Experience", "#Timeline"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Badges", "#badges"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="
                relative px-4 py-2
                text-sm md:text-base
                text-gray-300
                transition-all duration-300
                hover:text-white
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-blue-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
