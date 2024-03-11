import { Outlet, Link } from 'react-router-dom';
import { Container, NavItem, NavList, Navigation } from './Navigation.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">
                Movies
              </Link>
            </NavItem>
          </NavList>
        </Navigation>
      </header>
        <Outlet />
    </Container>
  );
};

export default SharedLayout;