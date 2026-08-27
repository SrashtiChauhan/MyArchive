"use client";

import Image from "next/image";

export default function IntroCharacter() {
  return (
    <Image
      src="/assets/profile/anime.png"
      alt="Srashti"
      width={520}
      height={720}
      priority
      className="
        w-[280px]
        md:w-[360px]
        lg:w-[430px]
        h-auto
        drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]
      "
    />
  );
}