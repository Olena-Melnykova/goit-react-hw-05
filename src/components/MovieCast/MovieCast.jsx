import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from '../../services/movieApi.js';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/utils.js';
import { ListItem, StyledList } from './MovieCast.styled.jsx';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
        setError(null); 
      } catch (e) {
        setError("Failed to fetch cast details."); 
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {error ? (
        <div>{error}</div> 
      ) : (
        <StyledList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <ListItem key={id}>
              <img
                src={`${profile_path ? BASE_POSTER_URL + profile_path : PLACEHOLDER + '?text=' + original_name}`}
                alt={original_name}
              />
              <p><span>Actor:</span> {original_name}</p>
              <p><span>Character:</span> {character}</p>
            </ListItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default MovieCast;