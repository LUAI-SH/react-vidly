import http from "./httpService";

const moviesApiEndPoint = "/movies";

export function getMovies() {
  return http.get(moviesApiEndPoint);
}

export function getMovie(movieId) {
  return http.get(`${moviesApiEndPoint}/${movieId}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${moviesApiEndPoint}/${movie._id}`, body);
  }

  return http.post(`${moviesApiEndPoint}`, movie);
}

export function deleteMovie(movieId) {
  return http.delete(`${moviesApiEndPoint}/${movieId}`);
}
