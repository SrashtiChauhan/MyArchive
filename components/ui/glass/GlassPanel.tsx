import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassPanel({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-white/35",
        "bg-white/40",
        "backdrop-blur-xl",
        "p-8",
        className
      )}
    >
      {children}
    </div>
  );
}