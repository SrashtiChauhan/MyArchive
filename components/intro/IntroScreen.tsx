// "use client";

// import IntroTypography from "./IntroTypography";
// import IntroCharacter from "./IntroCharacter";
// import IntroName from "./IntroName";

// export default function IntroScreen() {
//   return (
//     <section className="relative h-screen overflow-hidden bg-[#F7F1FA]">
//       <div className="relative w-full h-full flex items-center justify-center">
//         <IntroTypography />

//         <div className="relative z-20 flex flex-col items-center pt-60">
//           <IntroCharacter />
//           <IntroName />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import IntroTypography from "./IntroTypography";
import IntroCharacter from "./IntroCharacter";
import IntroName from "./IntroName";

export default function IntroScreen() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#F7F1FA]">

      <IntroTypography />

      <div className="absolute inset-0 z-20">

        <IntroCharacter />

        <IntroName />

      </div>

    </section>
  );
}