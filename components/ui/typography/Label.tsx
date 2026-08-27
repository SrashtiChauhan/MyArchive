import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Label({ children, className }: Props) {
  return (
    <span
      className={cn(
        "uppercase tracking-[0.22em] text-xs font-semibold text-[var(--sage)]",
        className
      )}
    >
      {children}
    </span>
  );
}