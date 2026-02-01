import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-brandBlue text-white hover:bg-brandBlue/90 border border-brandBlue shadow-sm",
  secondary:
    "bg-white text-brandBlue border border-brandBlue/30 hover:bg-mist shadow-sm",
  ghost: "text-brandBlue hover:text-brandBlue/80"
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
