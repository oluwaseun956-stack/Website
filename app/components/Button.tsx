import { Link } from "react-router";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-950 text-white hover:opacity-90 shadow-sm",
  secondary:
    "bg-white text-teal-950 hover:bg-white/95 shadow-md",
  ghost:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  white: "bg-white text-teal-950 hover:bg-white/95",
  outline:
    "border border-teal-950 bg-transparent text-teal-950 hover:bg-teal-950/5",
};

type ButtonProps = {
  variant?: Variant;
  to?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "className">;

export function Button({
  variant = "primary",
  to,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-lg transition",
    variants[variant],
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
