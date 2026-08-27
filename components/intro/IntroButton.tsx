"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function IntroButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 1.6,
          ease: "back.out(1.5)",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    const target = document.getElementById("portfolio");

    if (!target) return;

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: target,
      },
      ease: "power3.inOut",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="
        pointer-events-auto
        mt-4
        rounded-full
        bg-black
        text-white
        px-7
        sm:px-8
        py-3
        sm:py-4
        text-sm
        sm:text-base
        md:text-lg
        font-medium
        shadow-[0_12px_30px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]
        active:scale-95
      "
    >
      Enter My Portfolio →
    </button>
  );
}