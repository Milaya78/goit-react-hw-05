import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        console.log("data: ", data);
        setCast(data.cast);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>Oops, some error occured. {error}</p>}
      {cast !== null && (
        <ul>
          {cast.map((item) => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
              <h3>Name: {item.name}</h3>
              <p>Charachter: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// adult: false;
// cast_id: 1;
// character: "Arthur Fleck";
// credit_id: "6176f81b71f0950061a3cde6";
// gender: 2;
// id: 73421;
// known_for_department: "Acting";
// name: "Joaquin Phoenix";
// order: 0;
// original_name: "Joaquin Phoenix";
// popularity: 83.294;
// profile_path: "/u38k3hQBDwNX0VA22aQceDp9Iyv.jpg";

export default MovieCast;
