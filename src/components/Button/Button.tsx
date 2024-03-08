import * as React from "react";
import { Loader } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import Tooltip from "../Tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent shadow-none",
      },
      size: {
        default: "min-w-[7rem] h-10 px-4 py-2",
        sm: "min-w-[7rem] h-9 rounded-md px-3",
        lg: "min-w-[7rem] h-11 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  asChild?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  tooltipTitle?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, disabled, loading, size, asChild = false, tooltipTitle, startIcon, endIcon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return tooltipTitle ? (
      <Tooltip asChild={true} title={tooltipTitle}>
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} disabled={loading || disabled}>
          {loading ? (
            <Loader className="animate-spin h-5 w-5" />
          ) : (
            <>
              {startIcon && startIcon}
              {children}
              {endIcon && endIcon}
            </>
          )}
        </Comp>
      </Tooltip>
    ) : (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} disabled={loading || disabled}>
        {loading ? (
          <Loader className="animate-spin h-5 w-5" />
        ) : (
          <>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
export default Button;
