import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import { MovieListWrapper, MovieListItem } from './MovieList.styled'; 

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListWrapper>
      {movies && movies.map(({ id, original_title }) => (
        <MovieListItem key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </MovieListItem>
      ))}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;