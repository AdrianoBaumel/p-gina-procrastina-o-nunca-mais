import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-hero text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
        hope:
          "bg-gradient-hope text-accent-foreground shadow-soft hover:shadow-hover hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        ghost:
          "text-primary hover:bg-primary-soft",
      },
      size: {
        default: "h-12 px-8 text-base rounded-xl",
        sm: "h-10 px-6 text-sm rounded-lg",
        lg: "h-14 px-10 text-lg rounded-xl",
        xl: "h-16 px-12 text-xl rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(ctaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton, ctaButtonVariants };
