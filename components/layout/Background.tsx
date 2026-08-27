import Image from "next/image";
export default function Background() {
  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

        {/* Orchid Base */}
        <div className="absolute inset-0 bg-[#F7F1FA]" />

        {/* Mesh */}
        <Image
  src="/assets/backgrounds/mesh1.webp"
  alt=""
  fill
  priority
  className="object-cover opacity-70"
/>
       

        {/* Orchid Blob */}
       <Image
  src="/assets/glass/blob-orchid.webp"
  alt=""
  width={700}
  height={700}
  priority
  className="
    absolute
    -left-56
    top-16
    w-[42rem]
    h-auto
    opacity-70
    blur-[1px]
  "
/>
      </div>
    </>
  );
}