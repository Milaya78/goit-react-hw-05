import { Link, useLocation } from "react-router-dom";

const MovieCard = ({ item }) => {
  const location = useLocation();
  const posterPath = item.poster_path;
  return (
    <div>
      <Link
        state={{
          from: location,
        }}
        to={`/movies/${item.id}`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={item.original_title}
          width={150}
        />
        <h3>{item.original_title}</h3>
        <p>{item.overview}</p>
        <pre>
          <code>{item.vote_average}</code>
        </pre>
      </Link>
    </div>
  );
};

export default MovieCard;
