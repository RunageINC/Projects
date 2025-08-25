/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext } from "react";

interface CharacterProps {
  characterData: Duelist[];
}

const BASE_URL = "http://localhost:3333";

const CharactersContext = createContext({} as CharacterProps);

export const CharactersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const fetchCharacterList = async () => {
    const response = await axios.get(`${BASE_URL}/characters`);

    if (response.status === 200) {
      return response.data.response;
    }

    return null;
  };

  const { data: characterData = [] } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacterList,
    refetchInterval: Infinity,
  });

  return (
    <CharactersContext.Provider value={{ characterData }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
