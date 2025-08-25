import { createBrowserRouter } from "react-router";
import { AppLayout } from "./_layouts/app/AppLayout";
import { Home } from "./app/Home";
import { TeamBuilder } from "./app/TeamBuilder";
import { RegisterNewDigimon } from "./app/RegisterNewDigimon";
import { TraitsPage } from "./app/TraitsPAge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/team",
    element: <AppLayout />,
    children: [
      {
        path: "/team",
        element: <>Under construction</>,
      },
      {
        path: "/team/new",
        element: <TeamBuilder />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AppLayout />,
    children: [
      {
        path: "/admin",
        element: <>Under Construction</>,
      },
      {
        path: "/admin/digimons/new",
        element: <RegisterNewDigimon />,
      },
      {
        path: "/admin/traits",
        element: <TraitsPage />,
      },
    ],
  },
]);
