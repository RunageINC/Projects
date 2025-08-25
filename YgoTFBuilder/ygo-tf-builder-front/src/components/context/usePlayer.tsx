/* eslint-disable react-refresh/only-export-components */
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext } from "react";
import { toast } from "sonner";

interface PlayerDecksProps {
  playerDecks: PlayerDeck[];
  saveDeck: (body: Omit<PlayerDeck, "_id">) => void;
}

const BASE_URL = "http://localhost:3333/decks";

const PlayerDecksContext = createContext({} as PlayerDecksProps);

export const PlayerDecksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const fetchDeckList = async () => {
    const response = await axios.get(`${BASE_URL}`);

    if (response.status === 200) {
      return response.data.response;
    }

    return null;
  };

  const saveDeckFn = async (body: Omit<PlayerDeck, "_id">) => {
    console.log("entering save");
    const response = await axios.post(BASE_URL, body);

    if (response.status === 201) {
      toast.success("Deck saved!");

      return;
    }

    toast.error("Something went wrong");
  };

  const { data: playerDecks = [] } = useQuery({
    queryKey: ["player-decks"],
    queryFn: fetchDeckList,
  });

  const { mutateAsync: saveDeck } = useMutation({
    mutationKey: ["player-decks"],
    mutationFn: saveDeckFn,
  });

  return (
    <PlayerDecksContext.Provider value={{ playerDecks, saveDeck }}>
      {children}
    </PlayerDecksContext.Provider>
  );
};

export const usePlayerDecks = () => useContext(PlayerDecksContext);
