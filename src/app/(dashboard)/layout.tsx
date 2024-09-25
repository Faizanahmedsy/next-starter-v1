import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardRootLayout({ children }: Props) {
  const { cookies } = await import("next/headers");

  return (
    <TooltipProvider>
      <SidebarLayout
        defaultOpen={cookies().get("sidebar:state")?.value === "true"}
      >
        <AppSidebar />
        <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
          <div className="h-full rounded-md border-2 border-dashed p-2">
            <SidebarTrigger />
            {children}
          </div>
        </main>
      </SidebarLayout>
    </TooltipProvider>
  );
}
