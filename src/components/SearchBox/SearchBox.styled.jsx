import styled from '@emotion/styled';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  padding: 10px 20px;
  color: #333; 
  background: #fff; 
  border: 2px solid #ccc; 
  border-radius: 30px; 
  outline: none; 

  ::placeholder {
    color: #aaa; 
  }

  :focus {
    box-shadow: 0 0 0 2px #646cff; 
    border-color: #646cff; 
  }
`;

export const ButtonSearch = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  margin-left: 10px;
  padding: 10px 20px;
  color: #333; 
  background: #fff; 
  border: 2px solid #ddd; 
  border-radius: 30px; 
  cursor: pointer; 
  transition: background-color 0.3s, transform 0.2s, color 0.3s, border-color 0.3s; 

  :hover,
  :focus {
    background-color: #f0f0f0; 
    color: #333; 
    border-color: #ccc; 
    transform: translateY(-2px); 
  }

  :disabled {
    background: #fff; 
    color: #aaa; 
    border-color: #eee; 
    cursor: not-allowed; 
  }
`;


