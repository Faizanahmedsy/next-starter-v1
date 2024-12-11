import { cn } from "@/lib/utils";
import React from "react";

export const TextBox = ({
  children,
  className,
  btn = true,
}: {
  children: React.ReactNode;
  className?: string;
  btn?: boolean | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex justify-between gap-4  px-4 my-2 py-2 rounded-xl",
        className,
        !btn && "py-3"
      )}
    >
      <div className="flex justify-center items-center">
        <h6>{children}</h6>
      </div>
      {btn && <div className="flex justify-center items-center">{btn}</div>}
    </div>
  );
};
