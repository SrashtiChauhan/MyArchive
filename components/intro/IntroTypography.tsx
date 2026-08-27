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


// "use client";

// const letters = [
//   {
//     char: "P",
//     left: "6%",
//     top: "80px",
//     rotate: "-8deg",
//     size: "13rem",
//   },
//   {
//     char: "o",
//     left: "17%",
//     top: "185px",
//     rotate: "-6deg",
//     size: "10rem",
//   },
//   {
//     char: "R",
//     left: "24%",
//     top: "65px",
//     rotate: "32deg",
//     size: "10rem",
//   },
//   {
//     char: "t",
//     left: "36%",
//     top: "-20px",
//     rotate: "2deg",
//     size: "10rem",
//   },
//   {
//     char: "f",
//     left: "47%",
//     top: "15px",
//     rotate: "32deg",
//     size: "9rem",
//   },
//   {
//     char: "o",
//     left: "56%",
//     top: "135px",
//     rotate: "5deg",
//     size: "10rem",
//   },
//   {
//     char: "L",
//     left: "67%",
//     top: "70px",
//     rotate: "-8deg",
//     size: "10rem",
//   },
//   {
//     char: "i",
//     left: "77%",
//     top: "35px",
//     rotate: "8deg",
//     size: "9rem",
//   },
//   {
//     char: "o",
//     left: "83%",
//     top: "95px",
//     rotate: "-6deg",
//     size: "10rem",
//   },
// ];

// export default function IntroTypography() {
//   return (
//     <div className="absolute inset-0 pointer-events-none">

//       {letters.map((letter, i) => (
//         <span
//           key={i}
//           style={{
//             left: letter.left,
//             top: letter.top,
//             rotate: letter.rotate,
//             fontSize: letter.size,
//           }}
//           className="
//             absolute
//             font-['Titan_One']
//             leading-none
//             text-black
//             select-none
//           "
//         >
//           {letter.char}
//         </span>
//       ))}

//       <span
//         className="
//           absolute
//           right-[12%]
//           top-[35px]
//           text-6xl
//           font-bold
//           text-[#ccbda8]
//         "
//       >
//         &apos;26
//       </span>

//     </div>
//   );
// }