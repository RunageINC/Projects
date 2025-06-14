import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type React from "react";
import { YgoSidebar } from "./YgoSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <YgoSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
