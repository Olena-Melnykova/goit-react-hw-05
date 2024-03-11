import styled from '@emotion/styled';

export const BackLink = styled.div`
  margin: 20px 0;

  a {
    display: inline-block;
    font-weight: 500;
    color: #ffc700;
    text-decoration: none;
    position: relative;
    padding-left: 20px;
  }

  a::before {
    content: '←';
    position: absolute;
    left: 0;
    color: #ffc700;
    font-size: 20px;
  }

  &:hover a, &:focus a {
    color: #ffffff;
    text-decoration: underline;
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  align-items: flex-start;
`;

export const MovieImage = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  background: #424242;
  border-radius: 15px;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  font-size: 28px;
  color: #ffffff;
  margin: 0 0 12px 0;
`;

export const MovieSubTitle = styled.h3`
  font-size: 20px;
  color: #ffc700;
  margin: 10px 0;
`;

export const MovieDescription = styled.p`
  font-size: 18px;
  color: #cccccc;
  margin-bottom: 20px;
`;

export const GenresList = styled.ul`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  color: #cccccc;
  padding: 0;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const AdditionalInfoItem = styled.li`
  a {
    font-weight: 500;
    color: black; 
    text-decoration: none;
    &:hover, &:focus {
      color: #ffc700;
      text-decoration: underline;
    }
  }
`;
