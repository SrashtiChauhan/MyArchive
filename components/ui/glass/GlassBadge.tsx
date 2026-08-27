import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassBadge({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "rounded-full",
        "border border-white/40",
        "bg-white/55",
        "backdrop-blur-xl",
        "px-4 py-2",
        "text-sm",
        "font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}