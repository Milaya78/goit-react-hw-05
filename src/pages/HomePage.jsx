import { useEffect, useState } from "react";
import { getTrendings } from "../services/api";
import MovieCard from "../components/MovieCard/MovieCard";

const HomePage = () => {
  const [trendings, setTrendings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendings() {
      try {
        setIsLoading(true);
        const data = await getTrendings();
        // CTRL + SHIFT + L
        console.log("data: ", data);
        setTrendings(data.results);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendings();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>Oops, some error occured. {error}</p>}
      {trendings !== null &&
        trendings.map((item) => {
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

export default HomePage;
