import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Title } from "../components/@shared/Title";
import Layout from "@/components/@shared/SidebarMenu";

export const Route = createRootRoute({
  component: () => (
    <>
      <Title />

      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </>
  ),
});
