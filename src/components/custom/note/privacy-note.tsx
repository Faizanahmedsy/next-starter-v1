import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const PrivacyNotice = ({ message }: { message?: string }) => {
  return (
    <Alert variant="default" className="w-full">
      <div className="flex items-center">
        <InfoIcon className="h-4 w-4" />
        <AlertDescription className="ml-2 text-sm text-muted-foreground ">
          {message}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default PrivacyNotice;
