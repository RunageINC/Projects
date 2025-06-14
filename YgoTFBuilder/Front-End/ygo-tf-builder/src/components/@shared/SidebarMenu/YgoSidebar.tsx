import { type ComponentType, type SVGProps } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { FileArchive, Group, SquareUser, WalletCards } from "lucide-react";

const items = [
  {
    title: "All Cards",
    url: "/list",
    icon: Group,
  },
  {
    title: "All Packages",
    url: "/packs",
    icon: FileArchive,
  },
  {
    title: "Duelists",
    url: "/duelists",
    icon: SquareUser,
  },
  {
    title: "Your Decks",
    url: "/decks",
    icon: WalletCards,
  },
];

interface MenuItemProp {
  title: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

function YgoMenuItem({ item }: { item: MenuItemProp }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link to={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export const YgoSidebar = () => (
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <YgoMenuItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
);
