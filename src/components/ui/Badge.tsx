import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-background-secondary text-foreground-secondary border-border",
    accent: "bg-accent-light text-accent border-accent/20",
    outline: "bg-transparent text-foreground-secondary border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
