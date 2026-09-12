import Link from "next/link";
import { cn } from "@/lib/utils";
import { HiOutlineArrowRight } from "react-icons/hi";
import { type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared types                                                       */
/* ------------------------------------------------------------------ */

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "accent" | "ghost";

interface ButtonLinkBaseProps {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Show trailing arrow icon */
  arrow?: boolean;
  /** Leading icon element */
  icon?: ReactNode;
  /** Full width on mobile */
  fullWidthMobile?: boolean;
  /** Full width always */
  fullWidth?: boolean;
  /** Extra classes */
  className?: string;
  children: ReactNode;
}

/** For internal navigation (Next.js Link) */
interface InternalLinkProps extends ButtonLinkBaseProps {
  href: string;
  /** Forces <a> tag instead of <Link> (useful for tel:, mailto:) */
  external?: false;
}

/** For external / tel / mailto links */
interface ExternalLinkProps extends ButtonLinkBaseProps {
  href: string;
  external: true;
}

/** For form actions / buttons (no href) */
interface ButtonActionProps
  extends ButtonLinkBaseProps,
    Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof ButtonLinkBaseProps
    > {
  href?: never;
  external?: never;
}

export type ButtonLinkProps =
  | InternalLinkProps
  | ExternalLinkProps
  | ButtonActionProps;

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white font-semibold hover:bg-primary-light btn-hover-lift",
  accent:
    "bg-accent text-primary-dark font-semibold hover:bg-accent-light btn-hover-lift shadow-gold",
  ghost:
    "bg-white/[0.07] backdrop-blur-sm text-white font-semibold border border-white/[0.12] hover:bg-white/[0.14] hover:border-white/[0.2]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm gap-2 rounded-xl",
  md: "px-6 py-3 text-base gap-2 rounded-xl",
  lg: "px-8 py-4 text-base gap-2 rounded-xl",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * Unified button / link used across the site.
 *
 * ```tsx
 * // As a link
 * <ButtonLink href="/services" variant="accent" size="lg" arrow>
 *   Our Services
 * </ButtonLink>
 *
 * // As a button (no href)
 * <ButtonLink type="submit" variant="accent" fullWidth>
 *   Send Message
 * </ButtonLink>
 * ```
 */
export function ButtonLink({
  variant = "primary",
  size = "lg",
  arrow = true,
  icon,
  fullWidthMobile = false,
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    fullWidthMobile && "w-full sm:w-auto",
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {arrow && (
        <HiOutlineArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  /* Button mode — no href */
  if (!("href" in rest) || !rest.href) {
    const { external, ...buttonProps } = rest as ButtonActionProps;
    void external;
    return (
      <button className={classes} {...buttonProps}>
        {content}
      </button>
    );
  }

  /* External link */
  if ("external" in rest && rest.external) {
    return (
      <a href={rest.href} className={classes}>
        {content}
      </a>
    );
  }

  /* Internal link */
  return (
    <Link href={rest.href} className={classes}>
      {content}
    </Link>
  );
}
