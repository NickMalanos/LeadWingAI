import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-slate border border-ink shadow-sm",
  secondary:
    "bg-white text-ink border border-ink hover:bg-mist shadow-sm",
  ghost: "text-ink hover:text-slate"
};

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
  onClick
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition";
  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
