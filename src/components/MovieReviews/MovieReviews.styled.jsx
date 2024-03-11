import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: 16px;
  padding: 12px; 
  background-color: #333; 
  border-radius: 10px; 
  margin-bottom: 16px; 
  color: #fff; 
  border: 1px solid #444; 

  :not(:last-child) {
    margin-bottom: 12px; 
  }

  span {
    color: #ffc700; 
    font-weight: bold; 
  }
`;

export const ReviewsDescription = styled.p`
  color: #ccc; 
  margin-top: 8px; 
  font-size: 14px; 
  line-height: 1.6; 
`;
