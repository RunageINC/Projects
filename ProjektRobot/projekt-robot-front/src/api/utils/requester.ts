"use server";

const URL = "http://localhost:8080";

interface FetchProps {
  uri: string;
  data?: object;
}

function get({ uri }: FetchProps) {
  return fetch(`${URL}/${uri}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((res) => {
    const { status, body } = res;

    return { status, body };
  });
}

function post({ uri, data }: FetchProps) {
  return fetch(`${URL}/${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    const { status, body } = res;

    return { status, body };
  });
}

export { get, post };
