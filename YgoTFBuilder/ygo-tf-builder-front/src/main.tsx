import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { CardList } from "./pages/CardList";
import { SidebarLayout } from "./pages/SidebarLayout";
import { ThemeProvider } from "./lib/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CardsProvider } from "./components/context/useCards";
import { CharacterListPage } from "./pages/CharacterList";
import { CharactersProvider } from "./components/context/useCharacters";
import "./index.css";
import { CharacterDetailPage } from "./pages/CharacterDetail";
import { DecksPage } from "./pages/Decks";
import { PlayerDecksProvider } from "./components/context/usePlayer";
import { CreateDeckPage } from "./pages/CreateDeck";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <CardsProvider>
            <CharactersProvider>
              <PlayerDecksProvider>
                <Routes>
                  <Route element={<SidebarLayout />}>
                    <Route path="/" index element={<CardList />} />
                    <Route path="/decks">
                      <Route index element={<DecksPage />} />
                      <Route path=":id" element={<DecksPage />} />
                      <Route path="new" element={<CreateDeckPage />} />
                    </Route>
                    <Route path="/characters">
                      <Route index element={<CharacterListPage />} />
                      <Route path=":id" element={<CharacterDetailPage />} />
                    </Route>
                  </Route>
                </Routes>
              </PlayerDecksProvider>
            </CharactersProvider>
          </CardsProvider>
        </BrowserRouter>
        <Toaster richColors />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
