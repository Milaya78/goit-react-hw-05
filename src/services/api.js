import axios from "axios";

const url = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_API_KEY;

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
