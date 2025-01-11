const ygoApiURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const localDbApi = "http://localhost:8080/cards";
const jsonErrorsUrl = "http://localhost:3000/errors";

export const getCards = (name, rarity) => {
  const response = fetch(`${ygoApiURL}?name=${name}`)
    .then((res) => {
      if (!res.ok) {
        fetch(jsonErrorsUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, rarity, error: res.statusText }),
        });

        return;
      }

      return res;
    })
    .catch((error) => {
      fetch(jsonErrorsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, error }),
      });
    });

  return response;
};

export const getFromError = (name) => {
  return fetch(`${ygoApiURL}?name=${name}`)
    .then((res) => res.json())
    .then((data) => data.data[0]);
};

export const getFromLocalDb = (name) => {
  return fetch(`${localDbApi}?cardName=${name}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const postCards = (card) => {
  return fetch(localDbApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).catch((error) => new Error(`Error while posting card: ${error}`));
};

export const findErrors = () => {
  return fetch(jsonErrorsUrl)
    .then((res) => res.json())
    .then((errors) => errors);
};

export const deleteError = (id) => {
  fetch(`${jsonErrorsUrl}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
