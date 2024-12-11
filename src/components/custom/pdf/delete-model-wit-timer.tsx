import { Separator } from "@/components/ui/separator";
import { Input, Modal, Progress } from "antd";
import {
  AlertTriangle,
  CheckCircle2,
  Timer,
  Trash2,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const DeleteAssessmentModal = ({
  open,
  onCancel,
  onOk,
  deleteSubjectMutation,
  deleteId,
}: {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
  deleteSubjectMutation: any;
  deleteId: number;
}) => {
  console.log("onOk", onOk);
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(10000); // Starting with 10000ms
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const assessmentName = "Final Year Assessment 2024";
  const TOTAL_TIME = 5000; // 10 seconds in milliseconds

  // Reset states when modal opens
  useEffect(() => {
    if (open) {
      setInputValue("");
      setTimeLeft(TOTAL_TIME);
      setIsTimerComplete(false);
    }
  }, [open]);

  // Smooth countdown timer implementation
  useEffect(() => {
    if (!open || timeLeft <= 0) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(TOTAL_TIME - elapsed, 0);

      setTimeLeft(remaining);

      if (remaining <= 0) {
        setIsTimerComplete(true);
        clearInterval(interval);
      }
    }, 16); // Update roughly every frame (60fps)

    return () => clearInterval(interval);
  }, [open]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const isInputCorrect = inputValue === assessmentName;
  const isDeleteEnabled = isInputCorrect && isTimerComplete;

  // Calculate progress percentage (0-100) and remaining seconds
  const progress = 100 - (timeLeft / TOTAL_TIME) * 100;
  const remainingSeconds = Math.ceil(timeLeft / 1000);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={
        <div className="flex items-center gap-2 text-lg">
          <Trash2 className="w-6 h-6 text-red-600" />
          Delete Assessment
        </div>
      }
      centered
      okButtonProps={{
        loading: deleteSubjectMutation.isPending,
        disabled: !isDeleteEnabled,
        danger: true,
        className: !isDeleteEnabled ? "opacity-50 cursor-not-allowed" : "",
      }}
      okText="Delete"
      onOk={() => {
        if (isDeleteEnabled) {
          deleteSubjectMutation.mutate(deleteId);
        }
      }}
    >
      <div className="space-y-4 mt-6">
        {/* Timer Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">
              Please read carefully: {remainingSeconds} seconds remaining
            </span>
          </div>
          <Progress
            percent={progress}
            showInfo={false}
            strokeColor={{
              "0%": "#22d3ee",
              "100%": "#22d3ee",
            }}
            className="mb-0"
          />
        </div>

        {/* Warning Box */}
        <div className="flex gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-800">
            <p className="font-medium mb-2">
              This action will <strong>Permanently Delete</strong> the following
              data:
            </p>
            <Separator className="bg-rose-950 mb-5" />
            <div className="mb-3">
              <div>
                Assessment: <strong>Final Year Assessment 2024</strong>
              </div>
              <div>Date: 23 June 2023 - 29 June 2023</div>
            </div>

            <ul className="ml-4 space-y-3 list-disc">
              <li>Subject: Maths (477777) Data: 23 June 2023</li>
              <li>Subject: English (477778) Data: 24 June 2023</li>
              <li>Subject: Science (477779) Data: 27 June 2023</li>
              <li>Subject: Social Studies (477780) Data: 29 June 2023</li>
            </ul>
          </div>
        </div>

        {/* Confirmation Input */}
        <div className="rounded-lg p-4 border border-gray-200 bg-gray-50 space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Confirmation Required</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Type "<span className="font-bold">{assessmentName}</span>" exactly
            to confirm deletion:
          </p>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type assessment name"
            disabled={!isTimerComplete}
            status={inputValue && !isInputCorrect ? "error" : ""}
            className="border-2"
          />
          {inputValue && !isInputCorrect && (
            <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
              <XCircle className="w-4 h-4" />
              <span>Text must match exactly, including case</span>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAssessmentModal;
