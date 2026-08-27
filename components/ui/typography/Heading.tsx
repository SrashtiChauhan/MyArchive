import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "hero" | "h1" | "h2" | "h3";
};

const variants = {
  hero: "text-7xl md:text-8xl lg:text-9xl font-semibold",
  h1: "text-5xl md:text-6xl font-semibold",
  h2: "text-4xl md:text-5xl font-semibold",
  h3: "text-3xl font-semibold",
};

export default function Heading({
  children,
  className,
  variant = "h1",
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "font-[var(--font-playfair)] tracking-tight text-[var(--foreground)]",
        variants[variant],
        className
      )}
    >
      {children}
    </h1>
  );
}