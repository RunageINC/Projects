import { BASE_URL } from "./utils"

function getPacks() {
    return fetch(`${BASE_URL}/packs`).then(response => response.json());
}

export { getPacks };