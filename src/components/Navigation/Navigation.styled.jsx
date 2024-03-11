import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  background: #f8f9fa; 
`;

export const Navigation = styled.nav`
  margin-bottom: 20px; 
  display: flex;
  justify-content: center; 
`;

export const NavList = styled.ul`
  font-family: 'Poppins', sans-serif; 
  font-weight: 600; 
  font-size: 24px; 
  display: flex;
  gap: 20px; 
  padding: 10px 20px; 
  background: rgba(255, 255, 255, 0.8); 
  border-radius: 15px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

export const NavItem = styled.li`
  transition: transform 0.2s; 
  
  a {
    color: #333; 
    text-decoration: none; 
    
    &:hover,
    &:focus {
      color: #007bff; 
      transform: translateY(-2px); 
    }
  }
`;