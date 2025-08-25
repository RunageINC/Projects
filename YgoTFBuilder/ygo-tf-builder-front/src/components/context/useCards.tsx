/* eslint-disable react-refresh/only-export-components */
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface CardContextProps {
  cardData: Pagination<Card>;
  addFilter: (name: string, value: string) => void;
  removeFilter: (name: string) => void;
  fetchCardById: (id: number) => Promise<Card>;
  clearFilters: () => void;
}

const BASE_URL = "http://localhost:3333";

const CardsContext = createContext({} as CardContextProps);

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const fetchCardsQuery = async (): Promise<Pagination<Card>> => {
    const queryParams = Object.entries(filters)
      .filter(([key, value]) => key && value) // skip empty keys or values
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    const url = queryParams
      ? `${BASE_URL}/cards?${queryParams}`
      : `${BASE_URL}/cards`;

    const response = await axios.get<Pagination<Card>>(url);

    if (response.status === 200) {
      return response.data as Pagination<Card>;
    }

    return null as unknown as Pagination<Card>;
  };

  const fetchCardById = async (id: number): Promise<Card> => {
    const response = await axios.get<Card>(`${BASE_URL}/cards/${id}`);

    if (response.status === 200) {
      return response.data as Card;
    }

    return null as unknown as Card;
  };

  const addFilter = (filterName: string, filterValue: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: filterValue }));
  };

  const removeFilter = (filterName: string) => {
    setFilters((prev) => {
      const { [filterName]: _, ...rest } = prev;
      return rest;
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const {
    data: cardData = { data: [], page: 0, perPage: 0, total: 0, totalPages: 0 },
  } = useQuery<Pagination<Card>>({
    queryKey: ["cards", filters],
    queryFn: fetchCardsQuery,
  });

  return (
    <CardsContext.Provider
      value={{ cardData, fetchCardById, addFilter, removeFilter, clearFilters }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);
