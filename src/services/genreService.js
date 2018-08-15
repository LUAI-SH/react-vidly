import http from "./httpService";

const genresApiEndPoint = "/genres";

export function getGenres() {
  return http.get(`${genresApiEndPoint}`);
}
