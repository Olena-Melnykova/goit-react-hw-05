import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/movieApi';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/utils';
import {
  MovieDetailsWrapper,
  AdditionalInfoList,
  AdditionalInfoItem,
  MovieImage,
  MovieTitle,
  MovieDescription,
  BackLink,
  MovieSubTitle,
  GenresList,
} from './MovieDetails.styled'; 

const MovieDetails = () => { 
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkRef = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
        setError(null);
      } catch (e) {
        setError('Failed to load movie details.');
      }
    };
    fetchMovieById();
  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <>
      <BackLink>
        <Link to={backLinkRef}>Go back</Link>
      </BackLink>
      <MovieDetailsWrapper>
        <MovieImage
          src={`${movie.poster_path ? BASE_POSTER_URL + movie.poster_path : PLACEHOLDER + '?text=' + movie.original_title}`}
          alt={movie.original_title}
        />
        <div>
          <MovieTitle>{movie.original_title}</MovieTitle>
          <MovieSubTitle>Rating: {Math.round(movie.vote_average)}</MovieSubTitle>
          <MovieSubTitle>Overview</MovieSubTitle>
          <MovieDescription>{movie.overview}</MovieDescription>
          <MovieSubTitle>Genres</MovieSubTitle>
          <GenresList>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </div>
      </MovieDetailsWrapper>
      <div>
        <h2>Additional information</h2>
        <AdditionalInfoList>
          <AdditionalInfoItem>
            <NavLink to="cast" state={location.state}>Cast</NavLink>
          </AdditionalInfoItem>
          <AdditionalInfoItem>
            <NavLink to="reviews" state={location.state}>Reviews</NavLink>
          </AdditionalInfoItem>
        </AdditionalInfoList>
        <Suspense fallback={<div>Loading subpage...</div>}><Outlet /></Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
