import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { AdminSection } from "../templates/AdminSection";
import { Packs } from "../pages/Packs";
import { Cards } from "../pages/Cards";
import { DeckBuild } from "../pages/Decks";
import { DeckEditBody } from "../pages/Decks/templates/DeckEditBody";
import { DeckEdit, loader as deckLoader } from "../pages/Decks/DeckEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminSection />,
  },
  {
    path: "/packs",
    element: <Packs />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/decks",
    element: <DeckBuild />,
  },
  {
    path: "/decks/new",
    element: <DeckEditBody />,
  },
  {
    path: "/decks/:deckId",
    element: <DeckEdit />,
    loader: deckLoader,
  },
]);
