"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:opacity-90",
        ghost: "bg-transparent text-text hover:bg-black/5",
        outline: "border border-slate-300 bg-transparent text-text hover:bg-slate-50"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "onClick" | "disabled"
> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    disabled?: boolean;
    className?: string;
  };

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        buttonVariants({ variant }),
        "h-10 px-4 py-2 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
