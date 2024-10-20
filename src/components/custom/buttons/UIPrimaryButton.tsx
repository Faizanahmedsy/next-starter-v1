import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface UIPrimaryButtonProps extends ButtonProps {
  icon?: ReactNode;
  children: ReactNode;
}

export default function UIPrimaryButton({
  icon,
  children,
  ...props
}: UIPrimaryButtonProps) {
  return (
    <div>
      <Button {...props} variant="default">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Button>
    </div>
  );
}
