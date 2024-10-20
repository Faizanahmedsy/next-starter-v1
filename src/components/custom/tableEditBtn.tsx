import { Button } from "@/components/ui/button";
import usePermission from "@/hooks/role-based-access/usePermissions";
import { cn } from "@/lib/utils";
import { FaRegEdit } from "react-icons/fa";

const TableEditBtn = ({
  onClick,
  moduleName,
  className,
}: {
  onClick: () => void;
  moduleName: string;
  className?: string;
}) => {
  const canEdit = usePermission(moduleName, "edit");

  if (!canEdit) return null;

  return (
    <Button
      onClick={onClick}
      className={cn(
        "transition-transform duration-300 transform hover:scale-105",
        className
      )}
      variant="outline"
    >
      <FaRegEdit size={18} className="text-blue-600" />
    </Button>
  );
};

export default TableEditBtn;
