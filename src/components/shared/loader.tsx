import { LoaderCircle } from "lucide-react";

type Props = {};

export default function Loader({}: Props) {
  return <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />;
}
