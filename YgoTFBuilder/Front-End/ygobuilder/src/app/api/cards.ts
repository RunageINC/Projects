import { BASE_URL } from "./utils";

function getCards() {
    return fetch(`${BASE_URL}/cards`).then(response => response.json());
}

export { getCards };