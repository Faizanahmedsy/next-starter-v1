"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TooltipProvider } from "./ui/tooltip";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="dark"
    //   enableSystem
    //   disableTransitionOnChange
    // >
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors />
        {children}
      </QueryClientProvider>
    </TooltipProvider>
    // </ThemeProvider>
  );
}
