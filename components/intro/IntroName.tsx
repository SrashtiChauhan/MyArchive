"use client";

import IntroButton from "./IntroButton";

export default function IntroName() {
  return (
    <div
className="
absolute
bottom-24
left-1/2
-translate-x-1/2
z-40
text-center
"
>
      <p className="tracking-[0.7rem] uppercase text-sm">
SRASHTI
</p>

<h2
className="
text-6xl
md:text-7xl
font-semibold
tracking-[0.6rem]
uppercase
"
>
CHAUHAN
</h2>

<p className="mt-4 text-neutral-600">
Full Stack Developer
</p>

<IntroButton />
    </div>
  );
}