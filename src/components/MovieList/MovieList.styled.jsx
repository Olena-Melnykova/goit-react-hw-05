import styled from '@emotion/styled';

export const MovieListWrapper = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
`;

export const MovieListItem = styled.li`
  font-weight: 500; 
  font-size: 16px; 
  color: #fff; 
  background-color: #808080; 
  border-radius: 10px;
  margin-bottom: 8px; 
  transition: background-color 0.3s, transform 0.2s; 

  &:last-child {
    margin-bottom: 0; 
  }

  a {
    display: block; 
    padding: 12px 20px; 
    text-decoration: none; 
    color: inherit; 
    transition: color 0.3s; 
  }

  a:hover, a:focus {
    background-color: #ffc700; 
    color: #333; 
    text-decoration: none;
    transform: translateY(-2px); 
  }
  `;
