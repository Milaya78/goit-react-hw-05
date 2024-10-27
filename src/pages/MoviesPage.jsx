import { useEffect, useState } from "react";
import { getSearchedMovies } from "../services/api";
import MovieCard from "../components/MovieCard/MovieCard";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    async function fetchTrendings() {
      try {
        setIsLoading(true);
        const data = await getSearchedMovies(query);
        // CTRL + SHIFT + L
        console.log("data: ", data);
        setMovies(data.results);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendings();
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchInput.value;
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <div>
      <h1>Search movies</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter search key"
          name="searchInput"
          defaultValue={query}
          required
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>Oops, some error occured. {error}</p>}
      {movies !== null &&
        movies.map((item) => {
          return <MovieCard key={item.id} item={item} />;
        })}
    </div>
  );
};

// adult: false;
// backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg";
// genre_ids: (3)[(28, 878, 12)];
// id: 912649;
// media_type: "movie";
// original_language: "en";
// original_title: "Venom: The Last Dance";
// overview: "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.";
// popularity: 5868.656;
// poster_path: "/k42Owka8v91trK1qMYwCQCNwJKr.jpg";
// release_date: "2024-10-22";
// title: "Venom: The Last Dance";
// video: false;
// vote_average: 6.4;
// vote_count: 170;

export default MoviesPage;
