import { Link } from "react-router";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "white" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:opacity-90",
  secondary:
    "border border-navy bg-white text-navy hover:bg-soft",
  white: "bg-white text-navy hover:bg-white/95",
  outline:
    "border border-navy bg-transparent text-navy hover:bg-navy/5",
};

type ButtonProps = {
  variant?: Variant;
  to?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "className">;

export function Button({
  variant = "primary",
  to,
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex h-12 items-center justify-center rounded-[6px] px-7 text-[15px] font-bold transition",
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

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
