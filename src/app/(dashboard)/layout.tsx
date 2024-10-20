import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardRootLayout({ children }: Props) {
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    <main>
      {/* <SidebarTrigger /> */}
      {children}
    </main>
    // </SidebarProvider>
  );
}
