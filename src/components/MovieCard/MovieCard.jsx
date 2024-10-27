import { Link } from "react-router-dom";

const MovieCard = ({ item }) => {
  const posterPath = item.poster_path;
  return (
    <div>
      <Link to={`/movies/${item.id}`}>
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
