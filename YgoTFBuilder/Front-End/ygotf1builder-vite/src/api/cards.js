import { CARDS_URL } from "../utils/constants";

const fetchWithPagination = (pageConfiguration) => {
  const { page, size, sortBy } = pageConfiguration;

  const pageParams = `?page=${page}&size=${size}&sortBy=${sortBy}`;

  return fetch(`${CARDS_URL}${pageParams}`).then((res) => res.json());
};

const fetchWithFilters = (filters) => {
  let searchParams = "";

  filters.forEach((filter) => {
    searchParams += `${filter.type}=${filter.value}&`;
  });

  return fetch(`${CARDS_URL}?${searchParams}`).then((res) => res.json());
};

const fetchWithNameOnly = (name) => {
  return fetch(`${CARDS_URL}?name=${name}`).then((res) => res.json());
};

export { fetchWithPagination, fetchWithFilters, fetchWithNameOnly };
