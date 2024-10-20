import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const PlayfulButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-violet-950 active:border-b-0",
        general:
          "bg-blue-600 text-primary-foreground hover:bg-blue-600/90 border-blue-800 border-b-4 active:border-b-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-yellow-200 text-yellow-800 hover:bg-yellow-200/90 border-yellow-600 border-b-4 active:border-b-0",
        secondaryNormal:
          "bg-yellow-400 text-black hover:bg-yellow-400/90 border-yellow-400 ",
        danger:
          "bg-red-200 text-red-800 hover:bg-red-200/90 border-red-400 border-b-4 active:border-b-0",
        dangerNormal:
          "bg-red-400 text-black hover:bg-red-400/90 border-red-400 ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        company:
          "bg-company text-company-foreground hover:bg-company/90 border-b-4 border-teal-700 active:border-b-0",
        super:
          "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-b-4 active:border-b-0",
        superOutline: "bg-white text-indigo-500 hover:bg-slate-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof PlayfulButtonVariants> {
  asChild?: boolean;
}

const PlayfulButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(PlayfulButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PlayfulButton.displayName = "PlayfulButton";

export { PlayfulButton, PlayfulButtonVariants };
