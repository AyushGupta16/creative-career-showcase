import { cn } from "@/lib/utils";

export function Tag({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "primary";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
        variant === "default" && "border-border bg-surface text-muted-foreground",
        variant === "primary" &&
          "border-primary/40 bg-primary/10 text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
