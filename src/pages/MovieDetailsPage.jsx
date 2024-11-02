import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../services/api";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const backLinkHref = useRef(location.state?.from ?? "/");
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>Oops, some error occured. {error}</p>}
      {movieDetails !== null && (
        <div>
          <Link to={backLinkHref.current}>Go back</Link>
          {movieDetails.adult && (
            <p>
              <strong>This film is for 18+ only</strong>
            </p>
          )}
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>Rating: {movieDetails.vote_average}</p>
        </div>
      )}

      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

// adult
// :
// false
// backdrop_path
// :
// "/uGmYqxh8flqkudioyFtD7IJSHxK.jpg"
// belongs_to_collection
// :
// {id: 987044, name: 'Joker Collection', poster_path: '/cI4Ng3oX0CEJiY3wMxcfszQZbcI.jpg', backdrop_path: '/k1YC7mFLvxX4bbD7P8lkcML0Jek.jpg'}
// budget
// :
// 195000000
// genres
// :
// (3) [{…}, {…}, {…}]
// homepage
// :
// "https://www.joker.movie"
// id
// :
// 889737
// imdb_id
// :
// "tt11315808"
// origin_country
// :
// ['US']
// original_language
// :
// "en"
// original_title
// :
// "Joker: Folie à Deux"
// overview
// :
// "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him."
// popularity
// :
// 771.741
// poster_path
// :
// "/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg"
// production_companies
// :
// (3) [{…}, {…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2024-10-01"
// revenue
// :
// 200714058
// runtime
// :
// 138
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "The world is a stage."
// title
// :
// "Joker: Folie à Deux"
// video
// :
// false
// vote_average
// :
// 5.744
// vote_count
// :
// 976

export default MovieDetailsPage;
