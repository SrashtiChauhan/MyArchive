// "use client";

// import Image from "next/image";

// export default function IntroCharacter() {
//   return (
//     <Image
//       src="/assets/profile/anime.png"
//       alt="Srashti"
//       width={520}
//       height={720}
//       priority
//       className="
//         w-[280px]
//         md:w-[360px]
//         lg:w-[430px]
//         top-28
//         -mt-28
//         drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]
//       "
//     />
//   );
// }

"use client";

import Image from "next/image";

export default function IntroCharacter() {
  return (
    <div
      className="
      absolute
      left-1/2
      top-50
      -translate-x-1/2
      z-30
    "
    >
      <Image
        src="/assets/profile/anime.png"
        alt="Srashti"
        width={1000}
        height={900}
        priority
        className="
          w-[1000px]
          h-[900px]
          md:w-[430px]
          lg:w-[520px]
          
          drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]
        "
      />
    </div>
  );
}