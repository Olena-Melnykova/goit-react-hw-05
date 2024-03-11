import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../services/movieApi';

import Form from '../../components/SearchBox/SearchBox';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [error, setError] = useState('');

 
  const currentQuery = searchParams.get('query');

  useEffect(() => {
    if (!currentQuery) {
      setMovies([]);
      return; 
    }

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
        setError('');
      } catch (e) {
        setError('Failed to load movies. Please try again later.');
        setMovies([]); 
      }
    };
    fetchMovieByQuery();
  }, [currentQuery]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {error && <div>{error}</div>}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        currentQuery && <p>No movies found.</p> 
      )}
    </>
  );
};

export default MoviesPage;
