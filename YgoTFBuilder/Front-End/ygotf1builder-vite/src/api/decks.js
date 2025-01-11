const BASE_URL = "http://localhost:3000/player";

const saveNewDeck = (deck) => {
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Deck saved successfully:", data);
    })
    .catch((err) => {
      console.error("Error saving deck:", err);
    });
};

const updateDeck = (deck) => {
  return fetch(`${BASE_URL}/${deck.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Deck updated successfully:", data);
    })
    .catch((err) => {
      console.error("Error updating deck:", err);
    });
};

const getDecks = () => {
  return fetch(`${BASE_URL}`).then((res) => res.json());
};

const getDeckById = (id) => {
  return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
};

export { saveNewDeck, getDecks, getDeckById, updateDeck };
