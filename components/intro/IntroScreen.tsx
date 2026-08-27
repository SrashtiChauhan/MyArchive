"use client";

import IntroTypography from "./IntroTypography";
import IntroCharacter from "./IntroCharacter";
import IntroName from "./IntroName";
import IntroDeveloper from "./IntroDeveloper";

export default function IntroScreen() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f3fa]">

      {/* PORTFOLIO */}
      <IntroTypography />

      {/* CHARACTER */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[12%]
          z-20
        "
      >
        <IntroCharacter />
      </div>

      {/* NAME + BUTTON */}
      <IntroName />

      {/* FULL STACK DEVELOPER + ARROW */}
      <IntroDeveloper />

    </section>
  );
}