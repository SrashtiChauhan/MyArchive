// "use client";

// import IntroButton from "./IntroButton";

// export default function IntroName() {
//   return (
//     <>
//       {/* Srashti Chauhan */}
//       <div
//         className="
//           absolute
//           left-[12%]
//           top-[57%]
//           -rotate-[13deg]
//           z-30
//           font-serif
//           italic
//           text-4xl
//           md:text-5xl
//           lg:text-6xl
//           text-black
//           whitespace-nowrap
//         "
//       >
//         Srashti Chauhan
//       </div>

//       {/* Button */}
//       <div
//         className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           top-[87%]
//           z-40
//         "
//       >
//         <IntroButton />
//       </div>
//     </>
//   );
// }

"use client";

import IntroButton from "./IntroButton";

export default function IntroName() {
  return (
    <>
      {/* Signature */}
      <div className="absolute left-[10%] top-[58%] z-30">
        <div className="signature-container">
          <span className="signature-text">
            Srashti Chauhan
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="absolute left-[51%] top-[80%] z-10 -translate-x-1/2">
        <IntroButton />
      </div>
    </>
  );
}