import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  font-size: 16px;
  padding: 10px;
  background-color: #2a2a2a;
  border-radius: 14px;
  color: #ffffff;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  span {
    color: #ffc700;
    font-weight: bold;
  }

  p {
    margin: 4px 0;
    text-align: center;
    line-height: 1.4;
  }
`;