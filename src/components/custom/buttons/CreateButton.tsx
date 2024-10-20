// components/CreateButton.tsx
import React from "react";
import UIPrimaryButton from "@/components/custom/buttons/UIPrimaryButton";
import { BadgePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import usePermission from "@/hooks/role-based-access/usePermissions";

type CreateButtonProps = {
  moduleName: string;
  action: "add" | "edit" | "view" | "delete";
  redirectTo: string;
};

const CreateButton: React.FC<CreateButtonProps> = ({
  moduleName,
  action,
  redirectTo,
}) => {
  const navigate = useNavigate();
  const canCreate = usePermission(moduleName, action);

  // Only render the button if the user has permission
  if (!canCreate) return null;

  return (
    <UIPrimaryButton
      onClick={() => navigate(redirectTo)}
      icon={<BadgePlus size={18} />}
    >
      Create {moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}
    </UIPrimaryButton>
  );
};

export default CreateButton;
