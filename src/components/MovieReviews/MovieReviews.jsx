import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../../services/movieApi';
import { ListItem, StyledList, ReviewsDescription } from './MovieReviews.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
        setError(null); 
      } catch (e) {
        setError("Failed to fetch reviews."); 
      }
    };
    fetchReviews();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return reviews.length === 0 ? (
    <h3>No Reviews</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p><span>Author:</span> {author}</p>
          <ReviewsDescription>{content}</ReviewsDescription>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default MovieReviews;
