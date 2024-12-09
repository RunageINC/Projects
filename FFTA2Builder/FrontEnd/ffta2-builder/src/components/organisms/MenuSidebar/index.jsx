import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BoxesIcon,
  CatIcon,
  HomeIcon,
  LockKeyhole,
  SwordsIcon,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Races",
    url: "/races",
    icon: CatIcon,
  },
  {
    title: "Equipments",
    url: "/equipments",
    icon: SwordsIcon,
  },
  {
    title: "Building",
    url: "/builds",
    icon: BoxesIcon,
  },
  {
    title: "Admin Panel",
    url: "/admin",
    icon: LockKeyhole,
  },
];

export const MenuSidebar = () => {
  const handleSomething = () => {};

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="justify-center">
            FFTA2 - Grimoire of the Rift
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
