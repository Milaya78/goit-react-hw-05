import axios from "axios";

const url = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODUzMWQ2YTIyYjMwYmU5NTVmNTE2NDU3ODc2ZWU3MiIsIm5iZiI6MTczMDAxNzI3NC4yMjMxMjUsInN1YiI6IjY3MWRlZTJlOWZmNjgxZDllMGE0NWI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZXN2msLyzeFamabwFjvcW5CAv-jklT7ej4Zu_9ipNU";

const apiInstance = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
  params: {
    language: "en-US",
  },
});

export async function getTrendings() {
  const { data } = await apiInstance.get("/trending/movie/day");
  return data;
}
export async function getSearchedMovies(query) {
  const { data } = await apiInstance.get(`/search/movie?query=${query}`);
  return data;
}
export async function getMovieDetails(movieId) {
  const { data } = await apiInstance.get(`/movie/${movieId}`);
  return data;
}
export async function getMovieCast(movieId) {
  const { data } = await apiInstance.get(`/movie/${movieId}/credits`);
  return data;
}
export async function getMovieReviews(movieId) {
  const { data } = await apiInstance.get(`/movie/${movieId}/reviews`);
  return data;
}
