import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, className, align = "left" }: Props) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        // {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
