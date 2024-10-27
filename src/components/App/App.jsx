import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
// import HomePage from "../../pages/HomePage";
const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MovieCastPage = lazy(() =>
  import("../../components/MovieCast/MovieCast")
);
const MovieReviewsPage = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            {/* /movies/123 */}
            {/* /movies/111 */}
            {/* /movies/939 */}
            {/* /movies/3 */}
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCastPage />} />
              <Route path="reviews" element={<MovieReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
