import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px]",
        "border border-white/40",
        "bg-white/55 backdrop-blur-2xl",
        "shadow-[0_20px_60px_rgba(20,20,20,.08)]",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(20,20,20,.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}