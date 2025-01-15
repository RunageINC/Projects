import { get, post } from "../utils/requester";

function registerNewAccount(data: UserRegisterOrLogin) {
  const request = {
    uri: "api/player",
    data,
  };

  return post(request);
}

function verifyAccountExists(username: string) {
  const request = {
    uri: `api/player/${username}`,
  };

  return get(request);
}

function login(data: UserRegisterOrLogin) {
  const request = {
    uri: "api/player/login",
    data,
  };

  return post(request);
}

export { registerNewAccount, verifyAccountExists, login };
