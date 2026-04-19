import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function CornerFrame({ children, className }: { children: ReactNode; className?: string }) {
  const corner =
    "absolute h-5 w-5 border-primary";
  return (
    <div className={cn("relative p-3", className)}>
      <span className={cn(corner, "left-0 top-0 border-l-2 border-t-2")} />
      <span className={cn(corner, "right-0 top-0 border-r-2 border-t-2")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")} />
      {children}
    </div>
  );
}
