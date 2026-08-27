import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Caption({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-sm text-[var(--muted)] font-[var(--font-inter)]",
        className
      )}
    >
      {children}
    </p>
  );
}