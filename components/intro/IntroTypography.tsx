// "use client";

// const letters = [
//   { char: "P", rotate: "-9deg", y: "90px" },
//   { char: "O", rotate: "-6deg", y: "150px" },
//   { char: "R", rotate: "35deg", y: "20px" },
//   { char: "t", rotate: "5deg", y: "-29px" },
//   { char: "f", rotate: "36deg", y: "-80px" },
//   { char: "O", rotate: "10deg", y: "60px" },
//   { char: "L", rotate: "-10deg", y: "-12px" },
//   { char: "I", rotate: "6deg", y: "8px" },
//   { char: "O", rotate: "-5deg", y: "-5px" },
// ];

// export default function IntroTypography() {
//   return (
//     <div
//       className="
//         absolute
//         top-6
//         left-1/2
//         -translate-x-1/2
//         w-full
//         flex
//         justify-center
//         z-10
//       "
//     >
//       {letters.map((letter, index) => (
//         <span
//           key={index}
//           style={{
//             transform: `rotate(${letter.rotate}) translateY(${letter.y})`,
//           }}
//           className="
//             inline-block
//             font-['Titan_One']
//             text-[6rem]
//             sm:text-[7rem]
//             md:text-[9rem]
//             lg:text-[11rem]
//             xl:text-[13rem]
//             leading-none
//             text-black
//             mx-[-0.10rem]
//             select-none
//           "
//         >
//           {letter.char}
//         </span>
//       ))}

//       {/* '26 */}
//       <div
//         className="
//           absolute
//           top-6
//           right-24
//           text-3xl
//           md:text-5xl
//           font-bold
//           text-[#c7b9a6]
//           tracking-tight
//         "
//       >
//         {"'26"}
//       </div>
//     </div>
//   );
// }

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const letters = [
  { char: "P", rotate: "-8deg", y: "18px" },
  { char: "O", rotate: "4deg", y: "42px" },
  { char: "R", rotate: "-5deg", y: "5px" },
  { char: "T", rotate: "8deg", y: "-18px" },
  { char: "F", rotate: "-7deg", y: "-28px" },
  { char: "O", rotate: "5deg", y: "25px" },
  { char: "L", rotate: "-6deg", y: "12px" },
  { char: "I", rotate: "7deg", y: "0px" },
  { char: "O", rotate: "-4deg", y: "20px" },
];

export default function IntroTypography() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-letter",
        {
          opacity: 0,
          y: -80,
          scale: 0.7,
          rotate: 0,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: "var(--rotation)",
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.08,
        }
      );

      gsap.fromTo(
        ".year-mark",
        {
          opacity: 0,
          y: -20,
          scale: 0.7,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.7,
          ease: "back.out(1.5)",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        absolute
        inset-x-0
        top-0
        z-10
        flex
        justify-center
        pointer-events-none
        overflow-visible
      "
    >
      {/* PORTFOLIO */}
      <div
        className="
          flex
          items-start
          justify-center
          whitespace-nowrap
          scale-[0.55]
          sm:scale-[0.7]
          md:scale-[0.82]
          lg:scale-[0.95]
          xl:scale-100
          origin-top-center
        "
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="
              portfolio-letter
              inline-block
              font-['Titan_One']
              text-[7rem]
              sm:text-[8rem]
              md:text-[10rem]
              lg:text-[12rem]
              xl:text-[14rem]
              leading-[0.75]
              text-black
              select-none
              -mx-[0.45rem]
              sm:-mx-[0.6rem]
              md:-mx-[0.8rem]
            "
            style={
              {
                "--rotation": letter.rotate,
                transform: `translateY(${letter.y}) rotate(${letter.rotate})`,
              } as React.CSSProperties
            }
          >
            {letter.char}
          </span>
        ))}
      </div>

      {/* '26 */}
      <div
        className="
          year-mark
          absolute
          right-5
          top-10
          sm:right-10
          md:right-16
          lg:right-80
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-[#c7b9a6]
          select-none
        "
      >
        {"'26"}
      </div>
    </div>
  );
}