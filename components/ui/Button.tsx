// components/ui/Button.tsx
import React from "react";

// Define the allowed values for our BEM modifiers
export type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  // Construct the BEM class list
  const baseClass = "btn";

  const combinedClasses = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    fullWidth ? `${baseClass}--full-width` : "",
    className,
  ]
    // Filter out empty strings/falsy values before joining
    .filter(Boolean)
    .join(" ");

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
