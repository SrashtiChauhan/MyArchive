import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: Props) {
  return (
    <p
      className={cn(
        "font-[var(--font-manrope)] leading-8 text-[var(--muted)] text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}