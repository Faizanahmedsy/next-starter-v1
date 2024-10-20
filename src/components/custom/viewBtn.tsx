import { cn } from "@/lib/utils";
import { Tooltip } from "antd";
import { IoEyeOutline } from "react-icons/io5";

const ViewBtn = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
  props?: unknown;
}) => {
  return (
    <>
      <Tooltip title="View Details" color={"black"}>
        <button
          onClick={onClick}
          className={cn(
            "px-3 py-1  text-rose-500 rounded bg-orange-600 group",
            className
          )}
        >
          <IoEyeOutline size={18} className="text-white" />
        </button>
      </Tooltip>
    </>
  );
};

export default ViewBtn;
