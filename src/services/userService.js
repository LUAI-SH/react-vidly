import http from "./httpService";

const userApiEndPoint = "/users";

export function register(user) {
  return http.post(userApiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
