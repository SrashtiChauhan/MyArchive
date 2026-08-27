"use client";

export default function IntroDeveloper() {
  return (
    <div
      className="
        absolute
        right-[5%]
        top-[55%]
        z-30
        w-[260px]
        md:w-[300px]
        lg:w-[340px]
      "
    >
      {/* =========================
          HAND-DRAWN ANIMATED ARROW
      ========================== */}
      <div
        className="
          absolute
          -left-[245px]
          top-[65px]
          w-[300px]
          h-[210px]
          pointer-events-none
          rotate-[4deg]
        "
      >
        <svg
          viewBox="0 0 300 210"
          className="w-full h-full overflow-visible"
          fill="none"
        >
          {/* Main curved arrow */}
          <path
            d="
              M 15 35
              C 5 70, 25 105, 65 105
              C 100 105, 115 75, 145 85
              C 175 95, 145 135, 160 165
              C 180 200, 235 195, 285 135
            "
            stroke="#c7b9a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow-line"
          />

          {/* Arrow head 1 */}
          <path
            d="M 285 135 L 265 140"
            stroke="#c7b9a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="arrow-head"
          />

          {/* Arrow head 2 */}
          <path
            d="M 285 135 L 280 155"
            stroke="#c7b9a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="arrow-head"
          />
        </svg>
      </div>

      {/* =========================
          DEVELOPER TEXT
      ========================== */}
      <div
        className="
          developer-text
          rotate-[-5deg]
          font-serif
          italic
          text-4xl
          md:text-5xl
          lg:text-6xl
          leading-[0.95]
          text-black
        "
      >
        Full Stack
        <br />
        Developer
      </div>

      {/* =========================
          UNDERLINE
      ========================== */}
      <div
        className="
          developer-underline
          mt-10
          ml-2
          w-[220px]
          md:w-[250px]
          h-[3px]
          bg-[#c7b9a6]
          rotate-[-6deg]
          rounded-full
        "
      />
    </div>
  );
}