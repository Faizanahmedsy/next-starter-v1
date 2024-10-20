import { Button } from "@/components/ui/button";
import usePermission from "@/hooks/role-based-access/usePermissions";
import { cn } from "@/lib/utils";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import BtnLoader from "../custom/buttons/btn-loader";

interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  moduleName: string;
  className?: string;
  api: {
    isPending?: boolean;
  };
}

const DeleteBtnTable = ({
  onClick,
  moduleName,
  className,
  api,
  ...props
}: DeleteButtonProps) => {
  const canDelete = usePermission(moduleName, "delete");

  if (!canDelete) return null;

  return (
    <Button
      disabled={api.isPending ?? false}
      onClick={onClick}
      className={cn(
        "transition-transform duration-300 transform hover:scale-105",
        className
      )}
      variant="outline"
    >
      {api?.isPending ? (
        <div className="flex ">
          <BtnLoader />
        </div>
      ) : (
        <RiDeleteBin6Line size={18} className="text-red-600" />
      )}
    </Button>
  );
};

export default DeleteBtnTable;
