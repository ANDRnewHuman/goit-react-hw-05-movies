import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 5px solid black;

  > nav {
    display: flex;
  }
`;

export const Main = styled.main`
  padding: 30px 0;
`;

export const Logo = styled.img`
  width: 220px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 40px;
  color: black;
  font-size: 24px;
  font-weight: 600;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: rgb(92, 125, 218);
  }
  &:hover:not(.active) {
    transform: scale(1.2);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;
