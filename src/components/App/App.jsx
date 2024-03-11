import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../Navigation/Navigation';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));


export const App = () => {
  return (
    <Suspense fallback={<div>LOADING PAGE...</div>}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />  
      </Route>
      </Routes>
    </Suspense>
  );
};

